import { combineReducers } from 'redux'

import activity from '../../features/activity/Activity.reducer'
import auth from '../../features/auth/Auth.reducer'
import calendar from '../../features/calendar/Calendar.reducer'
import history from '../../features/history/History.reducer'
import insights from '../../features/insights/Insights.reducer'
import goal from '../../features/setupTrainingPlan/SetupTrainingPlan.reducer'
import tracking from '../../features/tracking/Tracking.reducer'
import router from '../layout/routes/Router.reducer'

const rootReducer = combineReducers({
  router,
  tracking,
  history,
  activity,
  calendar,
  insights,
  auth,
  goal,
})

export default rootReducer
