import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import Router from './core/shared/layout/routes/Router'
import store from './core/shared/store/Store.context'

export default () => {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <Provider store={store}>
        <Router />
      </Provider>
    </>
  )
}
