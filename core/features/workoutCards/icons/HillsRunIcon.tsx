import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function HillsRunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    // @ts-ignore
    <Svg
      viewBox="0 0 512 512"
      height="50pt"
      width="50pt"
      fill={'#777'}
      {...props}>
      <Path d="M504.5 376.829h-11.786L382.295 192.798c-6.287-10.478-19.773-14.405-30.703-8.94l-13.951 6.975-63.769-63.769a23.567 23.567 0 00-17.853-6.861 23.57 23.57 0 00-17.051 8.662L150.23 238.082l-.144-.062c-9.83-4.213-21.28-1.259-27.845 7.183L19.864 376.829H7.5a7.5 7.5 0 000 15h497a7.5 7.5 0 000-15zM250.611 138.323a8.43 8.43 0 016.182-3.14 8.44 8.44 0 016.473 2.487l64.449 64.449-3.556 12.159a7.5 7.5 0 005.093 9.304 7.49 7.49 0 002.109.304 7.503 7.503 0 007.195-5.396l3.885-13.285 15.86-7.93c3.962-1.98 8.853-.557 11.132 3.242L475.221 376.83h-48.078l-107.548-93.52 9.752-33.341a7.5 7.5 0 00-14.397-4.211l-7.815 26.718-51.949-45.173c-8.76-7.618-21.59-7.751-30.506-.32l-34.081 28.4-26.035-11.158 86.047-105.902zm2.149 238.506L201.11 266.15l33.174-27.645a8.497 8.497 0 0111.061.116l158.939 138.208H252.76zM134.081 254.411a8.536 8.536 0 0110.096-2.604l42.108 18.046 49.922 106.976h-135.8l33.89-61.003a7.5 7.5 0 00-13.112-7.284l-37.938 68.287h-44.38l95.214-122.418z" />
    </Svg>
  )
}

export default HillsRunIcon