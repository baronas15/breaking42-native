import { Geo } from '../../shared/domain/Domain.interface'
import { Workout, WorkoutGeneral } from './../../shared/domain/Domain.interface'
import {
  PUSH_GPS_DATA,
  START_TRACKING,
  STOP_TRACKING,
} from './Tracking.constants'

export type ITrackingReducer = {
  data: Partial<Workout>
  startingPosition?: Geo
}

export type ITrackingAction =
  | IStartTrackingAction
  | IStopTrackingAction
  | IPushGpsDataAction

export interface IStartTrackingAction {
  type: typeof START_TRACKING
  data: {
    _id: string
    general: Partial<WorkoutGeneral>
  }
  startingPosition: Geo
}

export interface IStopTrackingAction {
  type: typeof STOP_TRACKING
  data: Partial<Workout>
}

export interface IPushGpsDataAction {
  type: typeof PUSH_GPS_DATA
  data: Geo
}
