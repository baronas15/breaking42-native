import React from 'react'
import { Text, View } from 'react-native'
import { human, systemWeights } from 'react-native-typography'

export function Property({ title, item }: { title: string; item: string }) {
  return (
    <View style={{ flexDirection: 'column', padding: 5 }}>
      <Text
        style={{
          ...human.caption1Object,
          ...systemWeights.semibold,
          color: '#555',
        }}>
        {title}
      </Text>
      <Text
        style={{
          color: '#555',
        }}>
        {item}
      </Text>
    </View>
  )
}
