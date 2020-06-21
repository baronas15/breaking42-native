import { IActivityReducer } from '../../features/activity/Activity.interface'
import { IAuthReducer } from '../../features/auth/Auth.interface'
import { ICalendarReducer } from '../../features/calendar/Calendar.interface'
import { IHistoryReducer } from '../../features/history/History.interface'
import { IInsightsReducer } from '../../features/insights/Insights.interface'
import { IGoalReducer } from '../../features/setupTrainingPlan/SetupTrainingPlan.interface'
import { ITrackingReducer } from '../../features/tracking/Tracking.interface'
import { IRouterReducer } from '../layout/routes/Router.interface'

export interface IReducer {
  router: IRouterReducer
  tracking: ITrackingReducer
  history: IHistoryReducer
  calendar: ICalendarReducer
  activity: IActivityReducer
  auth: IAuthReducer
  goal: IGoalReducer
  insights: IInsightsReducer
}
