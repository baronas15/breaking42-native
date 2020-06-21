import { AccessToken } from 'react-native-fbsdk'

import { ChangeRoute } from '../../shared/layout/routes/Router.actions'
import { ROUTE_HISTORY } from '../../shared/layout/routes/Router.constants'
import { ROUTE_NONE } from '../../shared/layout/routes/Router.constants'
import { ApiInterface } from '../../shared/utils/Api.utils'
import { LOGIN, LOGOUT } from './Auth.constants'
import { ILoginAction } from './Auth.interface'

export const login = (api: ApiInterface, data: AccessToken) => (
  dispatch: Function,
) => {
  api
    .loginApi('login', 'POST', {
      // DO LATER: change interface to be framework agnostic
      facebook: {
        userID: data.userID,
        accessToken: data.accessToken,
      },
    })
    .then(response => response.json())
    .then(response => {
      const loginAction: ILoginAction = {
        type: LOGIN,
        data: response,
      }

      console.log(data.accessToken)
      console.log(response)

      dispatch(loginAction)
      dispatch(ChangeRoute(ROUTE_HISTORY))
    })
}

export const logout = () => (dispatch: Function) => {
  dispatch({
    type: LOGOUT,
  })

  dispatch(ChangeRoute(ROUTE_NONE))
}
