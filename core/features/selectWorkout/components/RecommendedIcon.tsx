import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

function RecommendedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    // @ts-ignore
    <Svg viewBox="0 0 512 512" height="20pt" width="20pt" {...props}>
      <G fill="#507c5c">
        <Path d="M128.804 371.041c-.805 0-1.619-.067-2.439-.209-7.8-1.338-13.04-8.745-11.702-16.545l5.104-29.758L4.327 212.002a14.327 14.327 0 01-3.625-14.689 14.336 14.336 0 0111.568-9.753l159.534-23.182L243.15 19.815a14.33 14.33 0 0125.702 0l71.346 144.562 159.534 23.182a14.328 14.328 0 0111.568 9.753 14.334 14.334 0 01-3.625 14.689l-45.389 44.243c-5.669 5.524-14.741 5.407-20.265-.259-5.523-5.667-5.407-14.739.259-20.263l24.598-23.976-138.257-20.09a14.332 14.332 0 01-10.789-7.838L256 58.536l-61.829 125.282a14.33 14.33 0 01-10.789 7.838l-138.257 20.09 100.043 97.518a14.333 14.333 0 014.121 12.683l-6.377 37.184c-1.199 6.981-7.259 11.91-14.108 11.91z" />
        <Path d="M405.359 500.171a14.3 14.3 0 01-6.666-1.646L256 423.506l-142.692 75.02a14.327 14.327 0 01-15.09-1.09 14.335 14.335 0 01-5.702-14.016l10.538-61.438c1.338-7.8 8.747-13.04 16.546-11.702 7.8 1.338 13.04 8.745 11.702 16.545l-5.632 32.822 123.661-65.012a14.33 14.33 0 0113.337 0l123.661 65.012-23.617-137.699a14.332 14.332 0 014.121-12.683l30.47-29.701c5.669-5.524 14.741-5.407 20.265.259 5.523 5.667 5.407 14.739-.259 20.263l-25.075 24.443 27.252 158.891a14.329 14.329 0 01-14.127 16.751z" />
      </G>
      <Path
        fill="#cff09e"
        d="M256 342.561l-73.235 38.503 13.987-81.549-59.249-57.752 81.88-11.897L256 155.671l36.617 74.195 81.879 11.897-59.249 57.752 13.987 81.549z"
      />
      <Path
        d="M329.233 395.393a14.3 14.3 0 01-6.666-1.646L256 358.751l-66.567 34.996a14.327 14.327 0 01-15.09-1.09 14.335 14.335 0 01-5.702-14.016l12.713-74.123-53.853-52.494a14.327 14.327 0 01-3.625-14.689 14.336 14.336 0 0111.568-9.753l74.424-10.815 33.283-67.439a14.33 14.33 0 0125.702 0l33.283 67.439 74.424 10.815a14.328 14.328 0 0111.568 9.753 14.334 14.334 0 01-3.625 14.689l-53.853 52.494 12.553 73.191a14.3 14.3 0 01.394 3.353c0 7.91-6.408 14.324-14.317 14.33l-.047.001zM256 328.232c2.291 0 4.581.549 6.668 1.646l47.536 24.989-9.079-52.931a14.338 14.338 0 014.121-12.685l38.456-37.485-53.144-7.722a14.33 14.33 0 01-10.79-7.838L256 188.05l-23.767 48.157a14.33 14.33 0 01-10.79 7.838l-53.144 7.722 38.456 37.485a14.336 14.336 0 014.121 12.685l-9.079 52.931 47.535-24.989a14.31 14.31 0 016.668-1.647z"
        fill="#507c5c"
      />
    </Svg>
  )
}

export default RecommendedIcon