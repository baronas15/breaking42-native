import { Text, View } from 'native-base'
import React from 'react'
import { human } from 'react-native-typography'

export function Heading() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}>
      <Text
        style={{
          ...human.title1Object,
        }}>
        Choose your workout
      </Text>
    </View>
  )
}
