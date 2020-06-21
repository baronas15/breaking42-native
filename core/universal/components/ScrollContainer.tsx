import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import { colorTheme } from '../../shared/design/Palette.context'

export function ScrollContainer({
  children,
  footerOffset,
  style,
  ...rest
}: any) {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{
        backgroundColor: colorTheme.backgroundTint,
        flex: 1,
        marginBottom: footerOffset ? 70 : 0, // DO LATER. Space for footer. Later fix layout so make this obsolete
        ...style,
      }}
      {...rest}>
      {children}
    </ScrollView>
  )
}
