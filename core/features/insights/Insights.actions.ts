import { ApiInterface } from '../../shared/utils/Api.utils'
import { FETCH_PAST_WEEK_WORKOUTS } from './Insights.constants'
import { IFetchPastWeekAction } from './Insights.interface'

export const fetchPastWeekWorkouts = (api: ApiInterface) => (
  dispatch: Function,
) => {
  api
    .queryApi('find', 'POST', {
      collection: 'workouts',
      sort: { 'general.start_time': -1 },
      take: 50,
    })
    .then((response: any) => response.json())
    .then((data: any) => {
      const action: IFetchPastWeekAction = {
        type: FETCH_PAST_WEEK_WORKOUTS,
        data: data as any,
      }

      dispatch(action)
    })
}
