import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'

const Icon = ({ render, onPress }: any) => {
  const [hover, setHover] = useState(false)

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={() => setHover(true)}
      onPressOut={() => setHover(false)}>
      {render(hover)}
    </TouchableWithoutFeedback>
  )
}

export default Icon
