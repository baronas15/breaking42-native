import { LOGIN, LOGOUT } from './Auth.constants'

export interface IAuthReducer {
  loginToken?: string
}

export type IAuthAction = ILoginAction | ILogoutAction

export interface ILogoutAction {
  type: typeof LOGOUT
}

export interface ILoginAction {
  type: typeof LOGIN
  data: {
    loginToken: string
  }
}
