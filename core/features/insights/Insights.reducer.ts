import { FETCH_PAST_WEEK_WORKOUTS } from './Insights.constants'
import { IInsightsAction, IInsightsReducer } from './Insights.interface'

export const defaultInsightsState: IInsightsReducer = {
  pastWeekData: [],
}

export default function (
  state: IInsightsReducer = defaultInsightsState,
  action: IInsightsAction,
) {
  switch (action.type) {
    case FETCH_PAST_WEEK_WORKOUTS:
      return {
        ...state,
        pastWeekData: action.data,
      }
    default:
      return state
  }
}
