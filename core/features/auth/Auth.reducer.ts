import { LOGIN, LOGOUT } from './Auth.constants'
import { IAuthAction, IAuthReducer } from './Auth.interface'

export const defaultAuthState: IAuthReducer = {}

export default function (
  state: IAuthReducer = defaultAuthState,
  action: IAuthAction,
) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginToken: action.data.loginToken,
      }
    case LOGOUT:
      return {}
    default:
      return state
  }
}
