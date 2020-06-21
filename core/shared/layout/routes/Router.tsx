import React from 'react'
import { StatusBar } from 'react-native'
import { connect } from 'react-redux'

import Activity from '../../../features/activity/Activity'
import Auth from '../../../features/auth/Auth'
import { IAuthReducer } from '../../../features/auth/Auth.interface'
import { Calendar } from '../../../features/calendar/Calendar'
import History from '../../../features/history/History'
import Insights from '../../../features/insights/Insights'
import MoreSettings from '../../../features/moreSettings/MoreSettings'
import SelectWorkout from '../../../features/selectWorkout/SelectWorkout'
import SetupTrainingPlan from '../../../features/setupTrainingPlan/SetupTrainingPlan'
import Tracking from '../../../features/tracking/Tracking'
import TrainingPlan from '../../../features/trainingPlan/TrainingPlan'
import { colorTheme } from '../../design/Palette.context'
import { IReducer } from '../../store/Reducers.interface'
import {
  ApiContext,
  loginApi,
  queryApi,
  workoutsApi,
} from '../../utils/Api.utils'
import MainLayout from '../MainLayout'
import * as actions from './Router.actions'
import {
  ROUTE_ACTIVITY_RESULT,
  ROUTE_CALENDAR,
  ROUTE_HISTORY,
  ROUTE_INSIGHTS,
  ROUTE_MORE_SETTINGS,
  ROUTE_NONE,
  ROUTE_SELECT_WORKOUT,
  ROUTE_SETUP_TRAINING_PLAN,
  ROUTE_TRACKING,
  ROUTE_TRAINING_PLAN,
} from './Router.constants'
import { IRouterReducer } from './Router.interface'

interface Props {
  router: IRouterReducer
  auth: IAuthReducer
}

const withLayout = (Component: any, props?: any) => {
  return (
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  )
}

function Router(props: Props) {
  if (props.router.route === ROUTE_NONE || !props.auth.loginToken) {
    return <Auth />
  }

  return (
    <ApiContext.Provider
      value={{
        loginApi: loginApi(''),
        queryApi: queryApi(props.auth.loginToken || ''),
        workoutsApi: workoutsApi(props.auth.loginToken || ''),
      }}>
      <StatusBar backgroundColor={colorTheme.accent} />

      <PickRoute {...props} />
    </ApiContext.Provider>
  )
}

function PickRoute(props: Props) {
  switch (props.router.route) {
    case ROUTE_TRACKING:
      return withLayout(Tracking)
    case ROUTE_INSIGHTS:
      return withLayout(Insights)
    case ROUTE_ACTIVITY_RESULT:
      return withLayout(Activity, {
        id: props.router.params ? props.router.params.id : '',
      })
    case ROUTE_CALENDAR:
      return withLayout(Calendar)
    case ROUTE_MORE_SETTINGS:
      return withLayout(MoreSettings)
    case ROUTE_TRAINING_PLAN:
      return withLayout(TrainingPlan)
    case ROUTE_SELECT_WORKOUT:
      return <SelectWorkout />
    case ROUTE_SETUP_TRAINING_PLAN:
      return <SetupTrainingPlan />
    case ROUTE_HISTORY:
    default:
      return withLayout(History)
  }
}

export default connect(
  (state: IReducer) => ({
    router: state.router,
    auth: state.auth,
  }),
  actions,
)(Router)
