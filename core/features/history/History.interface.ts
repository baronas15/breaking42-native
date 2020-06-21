import { Activity } from '../../shared/domain/Domain.interface'
import { FETCH_HISTORY } from './History.constants'

export interface IHistoryReducer {
  activities: Activity[]
}

export type IHistoryAction = IFetchHistory

export interface IFetchHistory {
  type: typeof FETCH_HISTORY
  data: Activity[]
}
