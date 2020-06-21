import { Goal } from '../../shared/domain/Domain.interface'
import { WeeklyWorkout } from '../../shared/domain/Goal.interface'
import { ChangeRoute } from '../../shared/layout/routes/Router.actions'
import { ROUTE_CALENDAR } from '../../shared/layout/routes/Router.constants'
import { ApiInterface } from '../../shared/utils/Api.utils'
import {
  CANCEL_GOAL,
  FETCH_GOAL,
  SET_GOAL,
} from './SetupTrainingPlan.constants'
import { IFetchGoal, ISetGoal } from './SetupTrainingPlan.interface'

export const setGoal = (api: ApiInterface, goal: Goal) => (
  dispatch: Function,
) => {
  api
    .queryApi('insert', 'POST', {
      payload: goal,
      collection: 'goals',
    })
    .then(response => response.json())
    .then(data => {
      const action: ISetGoal = {
        type: SET_GOAL,
        data: data as any,
      }

      dispatch(action)
    })
}

export const fetchGoal = (api: ApiInterface) => (dispatch: Function) => {
  api
    .queryApi('find', 'POST', {
      collection: 'goals',
    })
    .then(response => response.json())
    .then(data => {
      const action: IFetchGoal = {
        type: FETCH_GOAL,
        data: data[0] as any,
      }

      dispatch(action)
    })
}

export const updateWeek = (
  api: ApiInterface,
  _id: string,
  days: WeeklyWorkout[],
) => (dispatch: Function) => {
  api
    .workoutsApi('goal/update-week', 'PUT', {
      query: { _id },
      days,
    })
    .then(response => response.json())
    .then(_ => {
      dispatch(fetchGoal(api))
    })
}

export const cancelGoal = (api: ApiInterface, _id: string) => (
  dispatch: Function,
) => {
  api.workoutsApi(`goal/${_id}`, 'DELETE').then(_ => {
    dispatch({
      type: CANCEL_GOAL,
    })

    dispatch(ChangeRoute(ROUTE_CALENDAR))
  })
}
