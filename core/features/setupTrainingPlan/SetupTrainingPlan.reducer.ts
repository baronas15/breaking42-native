import {
  CANCEL_GOAL,
  FETCH_GOAL,
  SET_GOAL,
} from './SetupTrainingPlan.constants'
import { IGoalAction, IGoalReducer } from './SetupTrainingPlan.interface'

export const defaultGoalState: IGoalReducer = {
  goal: undefined,
  success: false,
}

export default function (
  state: IGoalReducer = defaultGoalState,
  action: IGoalAction,
) {
  switch (action.type) {
    case SET_GOAL:
    case FETCH_GOAL:
      return {
        ...state,
        goal: action.data,
        success: true,
      }
    case CANCEL_GOAL:
      return {
        goal: undefined,
        success: false,
      }
    default:
      return state
  }
}
