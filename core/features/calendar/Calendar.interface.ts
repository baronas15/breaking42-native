import {
  CLEAR_SINGLE_DAY,
  FETCH_CALENDAR,
  FETCH_CALENDAR_SINGLE_DAY,
} from './Calendar.constants'

export interface PartialActivity {
  _id: string
  distance: number
  duration: number
  start_time: string
  sport: number
}

export interface ICalendarReducer {
  allActivities: PartialActivity[]
  singleDay: PartialActivity[]
}

export type ICalendarAction =
  | IFetchCalendar
  | IFetchCalendarSingleDay
  | IClearSingleDay

export interface IFetchCalendar {
  type: typeof FETCH_CALENDAR
  data: PartialActivity[]
}

export interface IFetchCalendarSingleDay {
  type: typeof FETCH_CALENDAR_SINGLE_DAY
  data: PartialActivity[]
}

export interface IClearSingleDay {
  type: typeof CLEAR_SINGLE_DAY
}
