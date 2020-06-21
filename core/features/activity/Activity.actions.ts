import {
  CHANGE_ROUTE,
  ROUTE_ACTIVITY_RESULT,
} from '../../shared/layout/routes/Router.constants'
import { ApiInterface } from '../../shared/utils/Api.utils'
import { FETCH_ACTIVITY } from './Activity.constants'
import { IFetchActivity } from './Activity.interface'

export const openActivity = (activityId: string) => (dispatch: Function) => {
  dispatch({
    type: CHANGE_ROUTE,
    route: ROUTE_ACTIVITY_RESULT,
    params: {
      id: activityId,
    },
  })
}

export const fetchActivity = (api: ApiInterface, activityId: string) => (
  dispatch: Function,
) => {
  api
    .queryApi('find', 'POST', { query: { _id: activityId } })
    .then(response => response.json())
    .then(data => {
      const fetchAction: IFetchActivity = {
        type: FETCH_ACTIVITY,
        data: data[0] as any,
      }

      dispatch(fetchAction)
    })
}
