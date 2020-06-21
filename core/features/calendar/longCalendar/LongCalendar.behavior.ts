import { compareAsc, toDateString } from '../../../universal/Formatting.utils'
import { IGoalReducer } from '../../setupTrainingPlan/SetupTrainingPlan.interface'
import { ICalendarReducer } from '../Calendar.interface'

// DO LATER: redo with sanctuary, extract to multiple functions
// DO LATER: implement custom styling for dots in the future
export function mapToCalendarDots(
  calendar: ICalendarReducer,
  goal: IGoalReducer,
) {
  const workout = (key: string) => ({
    key: `workout${key}`,
    color: 'green',
    selectedDotColor: 'blue',
  })

  // DO LATER:
  const plannedWorkout = (key: string) => ({
    key: `workout${key}`,
    // dots: [workout],
    color: 'red',
    selected: true,
    marked: true,
  })
  const calendarItems = calendar.allActivities.map(x => ({
    time: x.start_time,
    key: x._id,
  }))

  const plannedItems =
    goal.goal && goal.goal.schedule
      ? goal.goal.schedule
          .filter(
            x =>
              x.type !== 'rest' &&
              compareAsc(new Date(x.date || ''), new Date()) === 1,
          )
          .map((x, i) => ({
            time: x.date,
            key: i,
          }))
      : []

  const dots = (
    items: {
      time: string
      key: string
    }[],
    callback: Function,
  ) =>
    items
      .filter(x => x.time)
      .reduce((data: any, item) => {
        const key = toDateString(item.time)
        const workoutsWithSameKey =
          data[key] && data[key].dots ? data[key].dots : []
        return {
          ...data,
          [key]: {
            dots: [...workoutsWithSameKey, callback(item.key)],
          },
        }
      }, {})

  return {
    ...dots(calendarItems, workout),
    ...dots(plannedItems as any, plannedWorkout),
  }
}
