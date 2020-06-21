import React from 'react'
import Config from 'react-native-config'

import { http, HttpApi } from '../../universal/Http.utils'

export const queryApi = http(Config.queryApiUrl)
export const loginApi = http(Config.loginApiUrl)
export const workoutsApi = http(Config.workoutsApiUrl)

export const ApiContext = React.createContext({
  loginApi: loginApi('', true),
  queryApi: queryApi(''),
  workoutsApi: workoutsApi(''),
})

export interface ApiInterface {
  loginApi: HttpApi
  queryApi: HttpApi
  workoutsApi: HttpApi
}
