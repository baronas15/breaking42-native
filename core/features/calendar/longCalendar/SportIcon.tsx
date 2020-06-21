import React from 'react'
import Svg, { Path } from 'react-native-svg'

// DO LATER: remove icon
function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    // @ts-ignore
    <Svg
      height="50pt"
      viewBox="0 -66 512 512"
      width="50pt"
      fill={'#777'}
      // @ts-ignore
      fillRule="nonzero"
      {...props}>
      <Path d="M461.285 226.508l-76.492-5.465-50.555-84.215-25.273-42.168V82.98c.008-12.675-10.262-22.957-22.938-22.964a22.922 22.922 0 00-8.3 1.547l-72.688 28.039 5.492-18.434c4.336-15.496-2.699-31.922-16.906-39.477L136.59 1.051a8.83 8.83 0 00-11.742 3.23L41.188 138.25l-1.766-1.023a8.821 8.821 0 00-12.047 3.257c-.055.09-.102.18-.152.274L1.03 190.066c-2.258 4.258-.683 9.536 3.531 11.868l318.536 176.55a8.835 8.835 0 004.273 1.102h131.664c29.238-.027 52.938-23.723 52.965-52.965v-45.656c-.094-28.61-22.184-52.328-50.715-54.457zm-94.941-1.89l-10.082 3.362-78.989-102.699 20.305-15.246zM135.652 20.585l49.621 26.633a16.633 16.633 0 018.282 19.058l-7.293 24.578L135.59 60.47l-17.547-10.532zm-52.265 84.25l4.52-7.063 29.042 21.602a50.563 50.563 0 0119.684 47.672l-1.102 25.512-78.894-45.473zm375.648 257.098H329.641L20.676 190.676l17.84-33.543 292.52 168.312a8.797 8.797 0 004.413 1.176h158.895c0 19.5-15.809 35.313-35.309 35.313zm35.309-52.97h-156.54l-60.546-34.859 20.355-20.753a8.826 8.826 0 00-.3-12.48 8.827 8.827 0 00-12.305.12l-23.551 24.012-33.547-19.332 33.645-26.914c3.804-3.047 4.422-8.606 1.375-12.414-3.047-3.805-8.606-4.422-12.41-1.375l-39.047 31.242-28.743-16.527 43.61-36.344a8.833 8.833 0 001.14-12.438c-3.12-3.75-8.69-4.257-12.44-1.14l-48.622 40.527-13.648-7.855 1.43-33.887a67.792 67.792 0 00-26.72-63.383L97.402 82.801l11.364-17.84 78.14 46.883c1.051.605 2.215.98 3.418 1.105.211 0 .395.07.61.086.21.02.343.063.511.063a8.774 8.774 0 003.196-.59l89.422-34.488a5.347 5.347 0 014.917.574 5.305 5.305 0 012.305 4.414v9.71l-31.781 23.833c-3.899 2.93-4.684 8.465-1.754 12.36.02.026.04.054.059.077l88.277 114.762a8.783 8.783 0 009.781 2.992l24.813-8.273 79.328 5.668c19.305 1.43 34.262 17.468 34.336 36.828zm0 0M52.965 256H8.828a8.829 8.829 0 000 17.656h44.137a8.829 8.829 0 000-17.656zm0 0M0 317.793a8.829 8.829 0 008.828 8.828h114.758a8.829 8.829 0 000-17.656H8.828A8.829 8.829 0 000 317.793zm0 0M220.691 361.934H8.828c-4.875 0-8.828 3.949-8.828 8.824s3.953 8.828 8.828 8.828h211.863c4.875 0 8.825-3.953 8.825-8.828s-3.95-8.824-8.825-8.824zm0 0" />
    </Svg>
  )
}

export default SvgComponent
