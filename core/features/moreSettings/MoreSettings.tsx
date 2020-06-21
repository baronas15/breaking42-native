import {
  Body,
  Content,
  Header,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Title,
} from 'native-base'
import React, { useContext } from 'react'
import { AccessToken } from 'react-native-fbsdk'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { colorTheme } from '../../shared/design/Palette.context'
import { ChangeRoute } from '../../shared/layout/routes/Router.actions'
import {
  ROUTE_HISTORY,
  ROUTE_TRAINING_PLAN,
} from '../../shared/layout/routes/Router.constants'
import { IReducer } from '../../shared/store/Reducers.interface'
import { ApiContext } from '../../shared/utils/Api.utils'
import {
  FacebookLogoutButton,
  useFacebookLogin,
} from '../../universal/components/FacebookButton'
import { SpinnerView } from '../../universal/components/SpinnerView'
import { useBackButton } from '../../universal/useBackButton'
import * as actions from '../auth/Auth.actions'

function MoreSettings({ dispatch, facebookLogin, logout }: any) {
  const api = useContext(ApiContext)

  useBackButton(() => {
    dispatch(ChangeRoute(ROUTE_HISTORY))
  })

  // DO LATER: can this be abstracted to be framework agnostic?
  const [data, init, setLogIn] = useFacebookLogin((token: AccessToken) => {
    facebookLogin(api, token)
  })

  if (!init) {
    return <SpinnerView />
  }

  if (!data) {
    logout()
  }

  return (
    <>
      <Header
        style={{ backgroundColor: colorTheme.accent }}
        androidStatusBarColor={colorTheme.accent}>
        <Left />
        <Body>
          <Title>More options</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          <ListItem
            button
            onPress={() => {
              dispatch(ChangeRoute(ROUTE_TRAINING_PLAN))
            }}>
            <Text>Training Plan</Text>
          </ListItem>
          <ListItem>
            <FacebookLogoutButton
              setLogIn={(state: boolean) => {
                setLogIn(state)
                logout()
              }}
            />
          </ListItem>
        </List>
      </Content>
    </>
  )
}

export default connect(
  (_: IReducer) => ({}),
  dispatch => bindActionCreators({ dispatch, ...actions }, dispatch),
)(MoreSettings)
