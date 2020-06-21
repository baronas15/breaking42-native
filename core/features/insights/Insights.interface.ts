import { Activity } from '../../shared/domain/Domain.interface'
import { FETCH_PAST_WEEK_WORKOUTS } from './Insights.constants'

export interface IInsightsReducer {
  pastWeekData: Activity[]
}

export type IInsightsAction = IFetchPastWeekAction

export interface IFetchPastWeekAction {
  type: typeof FETCH_PAST_WEEK_WORKOUTS
  data: Activity[]
}
