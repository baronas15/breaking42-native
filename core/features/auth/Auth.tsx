import React, { useContext } from 'react'
import { AccessToken } from 'react-native-fbsdk'
import { connect, ConnectedComponent } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ChangeRoute } from '../../shared/layout/routes/Router.actions'
import { ROUTE_HISTORY } from '../../shared/layout/routes/Router.constants'
// import GoogleLogin from './GoogleButton'
import { IReducer } from '../../shared/store/Reducers.interface'
import { ApiContext } from '../../shared/utils/Api.utils'
import {
  FacebookLoginButton,
  useFacebookLogin,
} from '../../universal/components/FacebookButton'
import { SpinnerView } from '../../universal/components/SpinnerView'
import * as actions from './Auth.actions'
import { IAuthReducer } from './Auth.interface'

interface OwnProps {}

interface StateProps {
  auth: IAuthReducer
}

interface DispatchProps {
  login: Function
  dispatch: Function
}

const Auth: React.FC<StateProps & DispatchProps & OwnProps> = ({
  dispatch,
  auth,
  login,
}) => {
  const api = useContext(ApiContext)

  const [data, init, setLogIn] = useFacebookLogin((token: AccessToken) => {
    login(api, token)
  })

  if (data && !auth.loginToken) {
    login(api, data)
  } else if (auth.loginToken || data) {
    dispatch(ChangeRoute(ROUTE_HISTORY))
  }

  if (!init || data) {
    return <SpinnerView />
  }

  return <FacebookLoginButton setLogIn={(state: boolean) => setLogIn(state)} />
}

const connectedComponent: any = connect(
  (state: IReducer) => ({
    auth: state.auth,
  }),
  dispatch => bindActionCreators({ dispatch, ...actions }, dispatch),
)(Auth)

export default connectedComponent as ConnectedComponent<any, OwnProps>
