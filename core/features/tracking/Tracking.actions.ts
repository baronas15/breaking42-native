import { Geo } from '../../shared/domain/Domain.interface'
import {
  CHANGE_ROUTE,
  ROUTE_ACTIVITY_RESULT,
  ROUTE_TRACKING,
} from '../../shared/layout/routes/Router.constants'
import { ApiInterface } from '../../shared/utils/Api.utils'
import { eventHooks } from './hooks/Hooks.behavior'
import { TrackingHooks } from './hooks/Hooks.interface'
import {
  PUSH_GPS_DATA,
  START_TRACKING,
  STOP_TRACKING,
} from './Tracking.constants'
import {
  IPushGpsDataAction,
  IStartTrackingAction,
  IStopTrackingAction,
} from './Tracking.interface'

export const startTracking = (
  api: ApiInterface,
  startingPosition: Geo,
  workoutType: string,
) => (dispatch: Function) => {
  const createdOn = new Date().toISOString()

  const activity = {
    general: {
      start_time: createdOn, // DO LATER: make this utc in the backend
      local_start_time: createdOn,
      workoutType,
    },
  }

  api
    .workoutsApi('activity', 'POST', activity)
    .then(response => response.json())
    .then(data => {
      const startAction: IStartTrackingAction = {
        type: START_TRACKING,
        data: {
          ...activity,
          _id: data._id,
        },
        startingPosition,
      }

      eventHooks(workoutType)(TrackingHooks.start)

      dispatch(startAction)

      dispatch({
        type: CHANGE_ROUTE,
        route: ROUTE_TRACKING,
      })
    })
}

export const stopTracking = (
  api: ApiInterface,
  _id: string,
  distance: number,
  duration: number,
  allCoords: Geo[],
) => (dispatch: Function) => {
  const lastPosition = {
    latitude: allCoords[allCoords.length - 1].latitude as number,
    longitude: allCoords[allCoords.length - 1].longitude as number,
  }
  const distanceInKilometers = distance / 1000 // DO LATER: consider making this consistent everywhere

  const stopAction: IStopTrackingAction = {
    type: STOP_TRACKING,
    data: {
      general: {
        distance: distanceInKilometers,
        duration,
      },
    },
  }

  api
    .workoutsApi('activity/finish', 'PUT', {
      query: {
        _id,
      },
      data: {
        'general.distance': distanceInKilometers,
        'general.duration': duration,
      },
      lastPosition,
    })
    .then(_ => {
      dispatch(stopAction)

      dispatch({
        type: CHANGE_ROUTE,
        route: ROUTE_ACTIVITY_RESULT,
        params: {
          id: _id,
        },
      })
    })
}

export const pushGpsData = (
  api: ApiInterface,
  activityId: string,
  data: Geo,
) => (dispatch: Function) => {
  const gpsAction: IPushGpsDataAction = {
    type: PUSH_GPS_DATA,
    data: data,
  }

  api
    .workoutsApi('activity/gps', 'PUT', {
      query: {
        _id: activityId,
      },
      gps: data,
    })
    .then(_ => {
      dispatch(gpsAction)
    })
}
