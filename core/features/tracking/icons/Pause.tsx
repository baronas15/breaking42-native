import React from 'react'
import Svg, { G, LinearGradient, Path, Rect, Stop } from 'react-native-svg'

import { iconStyleProps } from './Icon.styles'

function Pause(props: any) {
  return (
    <Svg {...iconStyleProps} viewBox="0 0 480 480" {...props}>
      <LinearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={240}
        x2={240}
        y1={488.472}
        y2={-39.112}>
        <Stop offset={0} stopColor="#006df0" />
        <Stop offset={1} stopColor="#00e7f0" />
      </LinearGradient>
      <G fill="url(#prefix__a)">
        <Path d="M240 0C107.453 0 0 107.453 0 240s107.453 240 240 240 240-107.453 240-240C479.852 107.516 372.484.148 240 0zm0 464C116.29 464 16 363.71 16 240S116.29 16 240 16s224 100.29 224 224c-.14 123.652-100.348 223.86-224 224zm0 0" />
        <Rect height={144} rx={8} width={40} x={166} y={168} />
        <Rect height={144} rx={8} width={40} x={264} y={168} />
      </G>
    </Svg>
  )
}

export default Pause
