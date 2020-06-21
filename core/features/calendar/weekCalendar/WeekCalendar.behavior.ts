import { WeeklyWorkout } from '../../../shared/domain/Goal.interface'
import { compareAsc } from '../../../universal/Formatting.utils'
import { IGoalReducer } from '../../setupTrainingPlan/SetupTrainingPlan.interface'

export function filterThisWeekWorkouts(
  goal: IGoalReducer,
  startOfWeek: Date,
  endOfWeek: Date,
) {
  if (!goal || !goal.goal) {
    return []
  }

  return goal.goal.schedule.filter(
    (x: WeeklyWorkout) =>
      compareAsc(startOfWeek, new Date(x.date || '')) === -1 &&
      compareAsc(new Date(x.date || ''), endOfWeek) === -1,
  )
}
