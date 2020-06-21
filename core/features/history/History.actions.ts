import { ApiInterface } from '../../shared/utils/Api.utils'
import { FETCH_HISTORY } from './History.constants'
import { IFetchHistory } from './History.interface'

export const fetchHistory = (api: ApiInterface) => (dispatch: Function) => {
  api
    .queryApi('find', 'POST', {
      sort: { 'general.start_time': -1 },
      take: 5,
    })
    .then(response => response.json())
    .then(data => {
      const fetchAction: IFetchHistory = {
        type: FETCH_HISTORY,
        data: data as any,
      }

      dispatch(fetchAction)
    })
}
