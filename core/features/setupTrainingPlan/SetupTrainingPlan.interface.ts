import { Goal } from '../../shared/domain/Domain.interface'
import {
  CANCEL_GOAL,
  FETCH_GOAL,
  SET_GOAL,
} from './SetupTrainingPlan.constants'

export interface IGoalReducer {
  goal?: Goal
  success: boolean
}

export type IGoalAction = ISetGoal | IFetchGoal | ICancelGoal

export interface ISetGoal {
  type: typeof SET_GOAL
  data: Goal
}

export interface IFetchGoal {
  type: typeof FETCH_GOAL
  data: Goal
}

export interface ICancelGoal {
  type: typeof CANCEL_GOAL
}
