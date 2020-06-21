import { CHANGE_ROUTE, ROUTE_NONE } from './Router.constants'
import { IRouterAction, IRouterReducer } from './Router.interface'

export const defaultRouterState = {
  route: ROUTE_NONE,
}

export default function (
  state: IRouterReducer = defaultRouterState,
  action: IRouterAction,
) {
  switch (action.type) {
    case CHANGE_ROUTE:
      return {
        route: action.route,
        params: action.params,
      }
    default:
      return state
  }
}
