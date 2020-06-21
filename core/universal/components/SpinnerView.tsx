import { Spinner } from 'native-base'
import React from 'react'
import { View } from 'react-native'

export function SpinnerView() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
      }}>
      <Spinner />
    </View>
  )
}
