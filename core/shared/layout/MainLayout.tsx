import React from 'react'
import { View } from 'react-native'

import { colorTheme } from '../design/Palette.context'
import Footer from './footer/Footer'

interface Props {
  children: any
}

const MainLayout = ({ children }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: colorTheme.backgroundTint }}>
      {children}
      <Footer />
    </View>
  )
}

export default MainLayout
