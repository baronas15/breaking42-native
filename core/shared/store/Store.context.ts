import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import { defaultActivityState } from '../../features/activity/Activity.reducer'
import { defaultAuthState } from '../../features/auth/Auth.reducer'
import { defaultCalendarState } from '../../features/calendar/Calendar.reducer'
import { defaultHistoryState } from '../../features/history/History.reducer'
import { defaultInsightsState } from '../../features/insights/Insights.reducer'
import { defaultGoalState } from '../../features/setupTrainingPlan/SetupTrainingPlan.reducer'
import { defaultTrackingState } from '../../features/tracking/Tracking.reducer'
import { defaultRouterState } from '../layout/routes/Router.reducer'
import rootReducer from './Reducers.context'

const store = createStore(
  rootReducer,
  {
    router: defaultRouterState,
    tracking: defaultTrackingState,
    history: defaultHistoryState,
    activity: defaultActivityState,
    calendar: defaultCalendarState,
    goal: defaultGoalState,
    auth: defaultAuthState,
    insights: defaultInsightsState,
  },
  applyMiddleware(thunk),
)

// DO LATER:
// https://github.com/rt2zz/redux-persist

// store.subscribe(() => console.log(store.getState()))

export default store
