import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import { defaultRouterState } from '../../shared/layout/routes/Router.reducer'
import { IReducer } from '../../shared/store/Reducers.interface'
import { defaultAuthState } from '../auth/Auth.reducer'
import { defaultCalendarState } from '../calendar/Calendar.reducer'
import { defaultHistoryState } from '../history/History.reducer'
import { defaultInsightsState } from '../insights/Insights.reducer'
import { defaultGoalState } from '../setupTrainingPlan/SetupTrainingPlan.reducer'
import { defaultTrackingState } from '../tracking/Tracking.reducer'
import Activity from './Activity'

const mockStore = configureStore([])

describe('Activity', () => {
  describe('component', () => {
    let store: any
    let component: any

    beforeEach(() => {
      const state: IReducer = {
        activity: {
          _id: '1',
          userId: '1',
          general: {
            calories: 500,
            distance: 12,
            duration: 3600,
            hydration: 0,
            start_time: '2020-05-05',
          },
          gps: [],
          laps: [],
        },
        auth: defaultAuthState,
        calendar: defaultCalendarState,
        goal: defaultGoalState,
        history: defaultHistoryState,
        insights: defaultInsightsState,
        router: defaultRouterState,
        tracking: defaultTrackingState,
      }
      store = mockStore(state)

      const ActivityComponent: any = Activity

      component = renderer.create(
        <Provider store={store}>
          <ActivityComponent id={'1'} />
        </Provider>,
      )
    })

    it('should generate component', () => {
      let tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
