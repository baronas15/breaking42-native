import { Card, CardItem } from 'native-base'
import React from 'react'

export function RoundedCardButton({ children, uniqueKey, onPress }: any) {
  return (
    <Card
      key={uniqueKey}
      style={{
        borderRadius: 12,
        padding: 0,
      }}>
      <CardItem
        button
        onPress={onPress}
        style={{
          borderRadius: 12,
          margin: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
        }}>
        {children}
      </CardItem>
    </Card>
  )
}
