import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

interface Props {
  Component: any
  onPress?: any
  title?: string
  hoverColor?: string
  normalColor?: string
}

const styles = StyleSheet.create({
  toolbarSlot: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    padding: 2,
  },
  toolbarText: {
    fontWeight: '600',
  },
})

const ToolbarButton = ({
  onPress,
  Component,
  title,
  hoverColor = '#ccc',
  normalColor = '#eee',
}: Props) => {
  const [hover, setHover] = useState(false)

  const color = hover ? hoverColor : normalColor

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={() => setHover(true)}
      onPressOut={() => setHover(false)}>
      <View
        style={{
          ...styles.toolbarSlot,
          backgroundColor: hover ? '#56804F' : undefined,
        }}>
        <Component color={color} />
        {title ? (
          <Text
            style={{
              ...styles.toolbarText,
              color,
            }}>
            {title}
          </Text>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ToolbarButton
