import { CHANGE_ROUTE } from './Router.constants'

export const ChangeRoute = (route: string) => ({
  type: CHANGE_ROUTE,
  route,
})
