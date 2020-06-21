import { CHANGE_ROUTE } from './Router.constants'

export interface IRouterReducer {
  route: string
  params?: {
    id: string
  }
}

export type IRouterAction = IChangeRouteAction

export interface IChangeRouteAction {
  type: typeof CHANGE_ROUTE
  route: string
  params?: {
    id: string
  }
}
