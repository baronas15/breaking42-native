import { FETCH_ACTIVITY } from './Activity.constants'
import { IActivityAction, IActivityReducer } from './Activity.interface'

export const defaultActivityState: IActivityReducer = {
  userId: '',
  _id: '',
  general: {
    cadence: 0,
    calories: 0,
    distance: 0,
    duration: 0,
    hydration: 0,
    local_start_time: '',
    speed_avg: 0,
    speed_max: 0,
    sport: 0,
    start_time: '',
  },
  heart: undefined,
  privacy: undefined,
  altitude: undefined,
  achievements: undefined,
  weather: undefined,
  external: undefined,
  laps: [],
  gps: [],
}

export default function (
  state: IActivityReducer = defaultActivityState,
  action: IActivityAction,
) {
  switch (action.type) {
    case FETCH_ACTIVITY:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}
