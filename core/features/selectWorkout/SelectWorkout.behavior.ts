import {
  WeeklyWorkout,
  WorkoutDescriptor,
} from '../../shared/domain/Goal.interface'
import { toDateString } from '../../universal/Formatting.utils'
import {
  equals,
  filter,
  find,
  fromMaybe,
  getString,
  isJust,
  Just,
  map,
  Maybe,
  pipe,
  prepend,
} from '../../universal/Functional.utils'

export type WorkoutDescriptorWithRecommendation = WorkoutDescriptor & {
  recommend?: boolean
}

export function recommendWorkout(
  schedule: WeeklyWorkout[],
  workoutDescriptors: WorkoutDescriptor[],
): WorkoutDescriptorWithRecommendation[] {
  const recommendedWorkoutForToday: Maybe<WorkoutDescriptor> = pipe([
    getTodayScheduledWorkoutType(),
    findWorkoutDescriptorByType(workoutDescriptors),
  ])(schedule)

  const restOfWorkouts = filterDescriptorsByType(recommendedWorkoutForToday)(
    workoutDescriptors,
  ) as WorkoutDescriptorWithRecommendation[]

  return isJust(recommendedWorkoutForToday)
    ? prepend(mapToRecommendation(recommendedWorkoutForToday))(restOfWorkouts)
    : restOfWorkouts
}

export function getTodayScheduledWorkout() {
  return pipe([
    find(
      (x: WeeklyWorkout) => toDateString(new Date().toISOString()) === x.date,
    ),
    fromMaybe({} as WeeklyWorkout),
  ])
}

function getTodayScheduledWorkoutType() {
  const scheduleTypeProp: keyof WeeklyWorkout = 'type'

  return pipe([getTodayScheduledWorkout(), getString(scheduleTypeProp)])
}

function findWorkoutDescriptorByType(workoutDescriptors: WorkoutDescriptor[]) {
  return (workoutType: string) =>
    find((x: WorkoutDescriptor) => equals(Just(x.type))(workoutType))(
      workoutDescriptors,
    )
}

function filterDescriptorsByType(descriptor: Maybe<WorkoutDescriptor>) {
  return filter(
    (x: WorkoutDescriptor) =>
      !equals(x.type)(fromMaybe({ type: '' })(descriptor).type),
  )
}

function mapToRecommendation(
  descriptor: Maybe<WorkoutDescriptor>,
): WorkoutDescriptorWithRecommendation {
  return pipe([
    map(
      (x: WorkoutDescriptor) =>
        ({
          ...x,
          recommend: true,
        } as WorkoutDescriptorWithRecommendation),
    ),
    fromMaybe({} as WorkoutDescriptorWithRecommendation),
  ])(descriptor)
}
