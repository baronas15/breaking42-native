import {
  PUSH_GPS_DATA,
  START_TRACKING,
  STOP_TRACKING,
} from './Tracking.constants'
import { ITrackingAction, ITrackingReducer } from './Tracking.interface'

export const defaultTrackingState: ITrackingReducer = {
  data: {
    _id: '',
    general: {
      start_time: '',
      local_start_time: '',
      distance: 0,
      duration: 0,
      sport: 0,
    },
    gps: [],
  },
  startingPosition: undefined,
}

export default function (
  state: ITrackingReducer = defaultTrackingState,
  action: ITrackingAction,
) {
  switch (action.type) {
    case START_TRACKING:
      return {
        ...state,
        data: action.data,
        startingPosition: action.startingPosition,
      }
    case STOP_TRACKING:
      return {
        ...state,
        data: {
          ...action.data,
        },
      }
    case PUSH_GPS_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          gps: [
            ...(state && state.data && state.data.gps ? state.data.gps : []),
            action.data,
          ],
        },
      }
    default:
      return state
  }
}
