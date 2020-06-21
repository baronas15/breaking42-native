import { ApiInterface } from '../../shared/utils/Api.utils'
import {
  CLEAR_SINGLE_DAY,
  FETCH_CALENDAR,
  FETCH_CALENDAR_SINGLE_DAY,
} from './Calendar.constants'
import {
  IClearSingleDay,
  IFetchCalendar,
  IFetchCalendarSingleDay,
} from './Calendar.interface'

export const fetchCalendar = (api: ApiInterface) => (dispatch: Function) => {
  api
    .queryApi('find', 'POST', {
      sort: { 'general.start_time': -1 },
      project: {
        start_time: '$general.start_time',
        distance: '$general.distance',
        sport: '$general.sport',
        duration: '$general.duration',
      },
      take: 15,
    })
    .then(response => response.json())
    .then(data => {
      const fetchAction: IFetchCalendar = {
        type: FETCH_CALENDAR,
        data: data as any,
      }

      dispatch(fetchAction)
    })
}

export const fetchSingleDay = (api: ApiInterface, day: string) => (
  dispatch: Function,
) => {
  api
    .queryApi('find', 'POST', {
      sort: { 'general.start_time': -1 },
      project: {
        start_time: '$general.start_time',
        distance: '$general.distance',
        sport: '$general.sport',
        duration: '$general.duration',
      },
      query: {
        'general.start_time': { $regex: day },
      },
    })
    .then(response => response.json())
    .then(data => {
      const fetchAction: IFetchCalendarSingleDay = {
        type: FETCH_CALENDAR_SINGLE_DAY,
        data: data as any,
      }

      dispatch(fetchAction)
    })
}

export const clearTheDay = () => (dispatch: Function) => {
  const action: IClearSingleDay = {
    type: CLEAR_SINGLE_DAY,
  }

  dispatch(action)
}
