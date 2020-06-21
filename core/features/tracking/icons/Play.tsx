import React from 'react'
import Svg, { Circle, G, Path } from 'react-native-svg'

import { iconStyleProps } from './Icon.styles'

function Play(props: any) {
  return (
    <Svg {...iconStyleProps} viewBox="0 0 58 58" {...props}>
      <G fillRule="nonzero" fill="none">
        <Circle cx={29} cy={29} fill="#7ed09e" r={29} />
        <Circle cx={29} cy={29} fill="#4fba6f" r={25} />
        <G fill="#fff">
          <Path d="M29 51a1 1 0 010-2c1.605.001 3.203-.19 4.762-.572a1 1 0 11.476 1.941c-1.714.42-3.473.632-5.238.631zM39 48.463a1 1 0 01-.479-1.878A20.269 20.269 0 0041.38 44.7a1 1 0 111.241 1.569 22.325 22.325 0 01-3.143 2.075.99.99 0 01-.478.119zM46 42.315a1 1 0 01-.808-1.587A19.83 19.83 0 0049 29a1 1 0 012 0 21.813 21.813 0 01-4.191 12.9 1 1 0 01-.809.415z" />
        </G>
        <Path
          d="M29 55C14.647 54.984 3.016 43.353 3 29a25.755 25.755 0 012.171-10.4A1 1 0 117 19.4 23.783 23.783 0 005 29 24 24 0 1029 5a23.767 23.767 0 00-9.6 2 1 1 0 11-.8-1.832A25.739 25.739 0 0129 3c14.36 0 26 11.64 26 26S43.36 55 29 55z"
          fill="#24ae5f"
        />
        <Path
          d="M9.8 14a1 1 0 01-.767-1.641 26.512 26.512 0 012.118-2.253 1 1 0 011.374 1.454 24.5 24.5 0 00-1.957 2.081A1 1 0 019.8 14z"
          fill="#24ae5f"
        />
        <Path
          d="M26.011 20.329l10.064 6.853a2.249 2.249 0 010 3.636l-10.064 6.853A1.97 1.97 0 0123 35.852v-13.7a1.97 1.97 0 013.011-1.823z"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default Play
