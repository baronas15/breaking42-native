import { chain, identity } from 'ramda' // DO LATER: why is it still here?
import Config from 'react-native-config'

import {
  Goal,
  GoalDistance,
  GoalType,
} from '../../shared/domain/Domain.interface'
import {
  GoalDependency,
  GoalDependencyAction,
  RotationAction,
  WeeklyWorkout,
  WorkoutType,
} from '../../shared/domain/Goal.interface'
import { workoutTypes } from '../../shared/referenceData/WorkoutTypes.ref'
import {
  addDays,
  subDays,
  toDateString,
  weekStart,
} from '../../universal/Formatting.utils'
import { percentOf, shuffle, wrap } from '../../universal/Helper.utils'

// DO LATER: review this file, it has a lot of logic, many bugs and uncovered edge cases
const isValidGoal = (goal: Goal) => {
  if (
    goal.weeklyWorkouts === 3 &&
    goal.target.distance === GoalDistance.marathon &&
    goal.target.goalType === GoalType.first
  ) {
    throw new Error('We recommend having more workouts for marathon distance')
  }

  if (
    goal.weeklyWorkouts < 5 &&
    goal.target.distance === GoalDistance.marathon &&
    goal.target.goalType === GoalType.performance
  ) {
    throw new Error('We recommend having more workouts for marathon distance')
  }

  if (
    goal.target.distance === GoalDistance.marathon &&
    goal.startingMileage > 50
  ) {
    throw new Error(
      'DO LATER: At the moment this mileage is not configured for a marathon plan',
    )
  }

  if (
    goal.target.distance === GoalDistance.marathon &&
    goal.startingMileage < 15
  ) {
    throw new Error('Mileage is too low for marathon plan')
  }
  // DO LATER: Check if target day is in available week range
}

// DO LATER: use functional utils
const generateWeek = (
  goal: Goal,
  weekNumber: number,
  lastWeek?: WeeklyWorkout[],
): WeeklyWorkout[] => {
  const availableWorkouts = workoutTypes
    .map(x => ({
      ...x,
      goalDependency: x.goalDependencies.find(
        y =>
          y.condition.distances.some(z => z === goal.target.distance) &&
          y.condition.goalTypes.some(z => z === goal.target.goalType),
      ),
      goalDependencies: undefined,
    }))
    .filter(x => !!x.goalDependency)
    .map(x => ({
      type: x.type,
      action: (x.goalDependency as GoalDependency).action,
    }))

  const weeklyWorkouts = availableWorkouts.filter(
    x => x.action.type === 'weekly',
  )

  const rotationCategories = availableWorkouts
    .filter(x => x.action.type === 'rotation')
    .reduce((categories: { [key: string]: any }, workout) => {
      const category = (workout.action as RotationAction).rotation.category
      return {
        ...categories,
        [category]: [...categories[category], workout].filter(x => x),
      }
    }, {})

  const rotationWorkouts: {
    type: string
    action: GoalDependencyAction
  }[] = Object.keys(rotationCategories).map(key => {
    return rotationCategories[key][
      wrap(rotationCategories[key].length, weekNumber - 1)
    ]
  })

  const fillerWorkouts = availableWorkouts.filter(
    x => x.action.type === 'filler',
  )

  const week = [
    ...weeklyWorkouts,
    ...rotationWorkouts,
    ...fillerWorkouts,
    ...fillerWorkouts,
    ...fillerWorkouts,
    ...fillerWorkouts,
    ...fillerWorkouts,
  ].slice(0, goal.weeklyWorkouts)

  const lastWeekCoverage = lastWeek
    ? lastWeek.reduce((a, b) => a + b.distance, 0)
    : goal.startingMileage

  return week
    .map(x => {
      const firstLongRun = percentOf(
        lastWeekCoverage > 40 ? 25 : 40,
        lastWeekCoverage,
      )
      const lastWeekLongRuns = lastWeek
        ? lastWeek.sort((a, b) => b.distance - a.distance)[0]
        : undefined
      const lastLongRun =
        lastWeek && lastWeekLongRuns
          ? (lastWeekLongRuns as any).distance
          : firstLongRun

      const variableWorkoutLength = week.filter(
        y =>
          y.type !== WorkoutType.crossTraining &&
          y.type !== WorkoutType.longRun,
      ).length

      switch (x.type) {
        case WorkoutType.crossTraining:
          return { type: x.type, distance: 0 }
        case WorkoutType.longRun:
          return {
            type: x.type,
            distance: lastLongRun,
          }
        case WorkoutType.hillsRun:
        case WorkoutType.intervalRun:
        case WorkoutType.tempoRun:
        case WorkoutType.recoveryRun:
        case WorkoutType.jog:
        default:
          return {
            type: x.type,
            distance:
              week.filter(day => day.type === WorkoutType.longRun).length > 0
                ? (lastWeekCoverage - lastLongRun) / variableWorkoutLength
                : lastWeekCoverage / variableWorkoutLength,
          }
      }
    })
    .map(x => ({ ...x, distance: percentOf(108, x.distance) }))
}

const getWeekCount = (goal: Goal) => {
  switch (goal.target.distance) {
    case GoalDistance.marathon:
      return goal.target.goalType === GoalType.first ? 24 : 16
    case GoalDistance.halfMarathon:
      return goal.target.goalType === GoalType.first ? 16 : 12
    case GoalDistance._10k:
      return goal.target.goalType === GoalType.first ? 12 : 12
    case GoalDistance._5k:
      return goal.target.goalType === GoalType.first ? 8 : 8
    default:
      return 0
  }
}

export function generateSchedule(data: Goal) {
  isValidGoal(data)

  const startingDay = weekStart(
    Config.ENV === 'dev' ? subDays(new Date(), 7) : new Date(),
  )

  const generated = generateWeeks(data, 1, getWeekCount(data) + 1, [])

  const result = setDatesAndAddRest(startingDay, generated)

  return chain(identity, result)
}

function setDatesAndAddRest(startingDay: Date, generated: WeeklyWorkout[][]) {
  let _day = subDays(startingDay, 1)

  const result = generated.map(week => {
    const weekRemaining = 7 - week.length

    const restDays = Array.from(Array(weekRemaining).keys()).map(_ => ({
      type: 'rest',
      distance: 0,
    }))

    return shuffle(week.concat(restDays)).map(day => {
      _day = addDays(_day, 1)
      return { ...day, date: toDateString(_day.toISOString()) }
    })
  })

  return result
}

function generateWeeks(
  data: Goal,
  week: number,
  maxWeeks: number,
  weeks: WeeklyWorkout[][],
): WeeklyWorkout[][] {
  if (maxWeeks <= week) {
    return weeks
  }

  const newWeek = generateWeek(data, week, weeks[wrap(weeks.length, -1)])

  return generateWeeks(data, week + 1, maxWeeks, [...weeks, newWeek])
}
