import { FETCH_HISTORY } from './History.constants'
import { IHistoryAction, IHistoryReducer } from './History.interface'

export const defaultHistoryState: IHistoryReducer = {
  activities: [],
}

export default function (
  state: IHistoryReducer = defaultHistoryState,
  action: IHistoryAction,
) {
  switch (action.type) {
    case FETCH_HISTORY:
      return {
        ...state,
        activities: action.data,
      }
    default:
      return state
  }
}
