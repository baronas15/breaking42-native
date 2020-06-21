import {
  CLEAR_SINGLE_DAY,
  FETCH_CALENDAR,
  FETCH_CALENDAR_SINGLE_DAY,
} from './Calendar.constants'
import { ICalendarAction, ICalendarReducer } from './Calendar.interface'

export const defaultCalendarState: ICalendarReducer = {
  allActivities: [],
  singleDay: [],
}

export default function (
  state: ICalendarReducer = defaultCalendarState,
  action: ICalendarAction,
) {
  switch (action.type) {
    case FETCH_CALENDAR:
      return {
        ...state,
        allActivities: action.data,
      }
    case FETCH_CALENDAR_SINGLE_DAY:
      return {
        ...state,
        singleDay: action.data,
      }
    case CLEAR_SINGLE_DAY:
      return {
        ...state,
        singleDay: [],
      }
    default:
      return state
  }
}
