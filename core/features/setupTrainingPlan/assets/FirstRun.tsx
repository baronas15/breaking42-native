import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export function FirstRun(props: React.SVGProps<SVGSVGElement>) {
  return (
    // @ts-ignore
    <Svg
      height="50pt"
      width="50pt"
      fill={'#777'}
      viewBox="0 0 512 512"
      {...props}>
      <Path d="M505.294 374.601c-84.534-36.364-169.213-15.401-251.104 4.868-39.44 9.762-80.223 19.857-120.043 23.162-44.118 3.66-82.668-1.568-117.855-15.987-3.986-1.633-8.453-.853-11.659 2.036-3.216 2.898-4.459 7.276-3.244 11.426a9632.8 9632.8 0 0012.207 41.354 3343.222 3343.222 0 01-12.79 32.052c-2.257 5.573.389 12.038 5.901 14.41 33.552 14.433 67.118 19.834 100.533 19.833 50.773-.002 101.185-12.478 150.573-24.703 39.439-9.762 80.222-19.857 120.042-23.162 44.118-3.66 82.667 1.567 117.851 15.986 3.986 1.634 8.453.854 11.659-2.033 3.217-2.898 4.461-7.276 3.246-11.427a9713.95 9713.95 0 00-12.207-41.356 3358.759 3358.759 0 0112.789-32.048c2.259-5.573-.387-12.038-5.899-14.411zm-21.427 42.21a11.199 11.199 0 00-.307 7.256 9603.713 9603.713 0 0110.322 34.91c-80.721-29.917-161.498-9.921-239.694 9.434-40.043 9.912-81.45 20.161-121.874 23.309-43.914 3.425-80.918-1.714-116.068-16.15a3359.847 3359.847 0 0011.886-29.855 11.204 11.204 0 00.309-7.26 9525.861 9525.861 0 01-10.323-34.909c29.746 11.024 59.485 15.271 89.114 15.27 50.776-.003 101.201-12.48 150.582-24.704 40.043-9.911 81.449-20.16 121.873-23.308 43.917-3.422 80.917 1.715 116.067 16.15a3374.127 3374.127 0 00-11.887 29.857z" />
      <Path d="M493.878 20.481c-6.891-9.572-17.596-15.466-29.374-16.167a40.616 40.616 0 00-2.336-.069c-17.596 0-33.089 11.872-37.677 28.869l-29.007 107.458c-7.173 26.572-30.675 45.462-57.889 47.038h-.011c-.576.033-1.102.057-1.606.076-.689.022-1.378.043-2.071.043h-39.999c-.553-.581-1.04-1.31-1.43-2.099a75.654 75.654 0 008.297-6.207c11.208-9.652 18.445-23.385 20.441-38.443 8.545-1.436 15.075-8.885 15.075-17.832v-11.68c0-5.071-2.098-9.792-5.679-13.158V57.48c0-21.996-17.895-39.892-39.892-39.892h-69.435c-21.996 0-39.892 17.896-39.892 39.892v40.832a18.01 18.01 0 00-5.679 13.158v11.68c0 8.947 6.53 16.396 15.075 17.832 1.996 15.058 9.233 28.791 20.442 38.443a75.96 75.96 0 007.568 5.745c-.415.968-.987 1.869-1.647 2.562H178.61a62.62 62.62 0 01-2.17-.046 75.877 75.877 0 01-1.945-.101c-27.034-1.749-50.327-20.579-57.462-47.011L88.629 35.355C83.696 17.078 67.028 4.313 48.097 4.313c-11.711 0-22.511 5.332-29.63 14.628-7.121 9.297-9.454 21.114-6.402 32.42l47.073 174.383c5.553 20.569 17.446 38.26 34.395 51.161 28.106 21.395 47.459 52.989 54.493 88.962l1.547 7.912a7.545 7.545 0 008.85 5.955 7.541 7.541 0 005.954-8.85l-1.547-7.912c-7.744-39.605-29.11-74.434-60.161-98.07-14.274-10.865-24.291-25.765-28.968-43.09L60.71 173.685l45.54-18.41c11.154 25.739 35.367 43.785 63.345 47.01l56.174 86.329a37.253 37.253 0 00-7.233 22.092c0 20.657 16.806 37.464 37.464 37.464s37.464-16.807 37.464-37.464a37.257 37.257 0 00-7.253-22.121l56.116-86.238c28.164-3.03 52.595-21.07 63.863-46.897l45.566 18.42-14.323 53.058c-3.557 13.177-14.127 27.728-27.587 37.972-20.631 15.706-37.327 36.753-48.283 60.868a7.542 7.542 0 003.747 9.987 7.512 7.512 0 003.115.678 7.544 7.544 0 006.871-4.424c9.928-21.852 25.034-40.906 43.686-55.105 15.981-12.164 28.632-29.808 33.014-46.044l46.505-172.276c4.185-15.501 2.672-27.964-4.623-38.103zM56.75 159.016L26.629 47.429c-1.819-6.736-.429-13.776 3.814-19.316 4.242-5.538 10.676-8.715 17.654-8.715 12.129 0 22.808 8.178 25.969 19.888l27.437 101.638-44.753 18.092zM196.477 57.48h.001c0-13.679 11.128-24.807 24.807-24.807h69.435c13.679 0 24.807 11.128 24.807 24.807v38.048c-.887.22-1.815.49-2.766.821V71.237c0-12.043-9.798-21.842-21.841-21.842h-12.993a22.37 22.37 0 00-14.122 5.038l-1.275 1.042a10.337 10.337 0 01-6.528 2.33c-2.372 0-4.691-.827-6.529-2.33l-1.274-1.042a22.37 22.37 0 00-14.122-5.038h-12.993c-12.043 0-21.841 9.798-21.841 21.842v25.112a31.26 31.26 0 00-2.766-.821V57.48zm8.846 76.047a7.542 7.542 0 00-7.541-7.38h-3.986a3 3 0 01-2.997-2.997v-11.68c0-.632.189-1.169.469-1.604.568.088 1.21.213 1.889.393.216.058.435.121.654.19.04.012.079.022.12.035.301.097.604.205.904.324.024.009.048.02.071.03.27.109.538.227.802.355l.146.073a10.792 10.792 0 01.88.492c.212.131.416.274.616.421.063.047.128.089.19.138a8.1 8.1 0 01.714.621l.007.006a9.393 9.393 0 0010.257 1.993 9.422 9.422 0 005.809-8.716V71.237a6.764 6.764 0 016.756-6.757h12.993c1.662 0 3.287.579 4.575 1.632l1.274 1.042a25.464 25.464 0 0016.076 5.735 25.47 25.47 0 0016.076-5.735l1.275-1.042a7.245 7.245 0 014.574-1.632h12.993a6.764 6.764 0 016.756 6.757v34.983a9.422 9.422 0 005.809 8.716 9.385 9.385 0 009.481-1.334c.268-.202.53-.417.776-.66a7.91 7.91 0 01.88-.743c.194-.144.394-.28.599-.409.06-.038.118-.078.179-.114.249-.149.503-.288.763-.417.094-.046.189-.088.284-.132a13.03 13.03 0 01.897-.381c.114-.043.228-.082.342-.123a17.64 17.64 0 013.048-.76c.283.435.472.974.472 1.608v11.68a3 3 0 01-2.997 2.997h-3.986a7.542 7.542 0 00-7.541 7.38c-.291 13.535-6.032 26.097-15.75 34.466-3.304 2.845-6.777 5.235-10.404 7.182-.048.025-.096.048-.143.074-7.497 3.995-15.654 6.076-24.382 6.186-8.954-.112-17.312-2.29-24.969-6.492a7.162 7.162 0 00-.531-.306 58.417 58.417 0 01-9.43-6.643c-9.718-8.37-15.458-20.932-15.749-34.468zm76.245 62.908c-6.875 6.396-15.963 10.032-25.427 10.062h-.116a37.562 37.562 0 01-26.119-10.603 24.51 24.51 0 002.287-3.8c7.46 2.851 15.385 4.333 23.725 4.427h.168c8.043-.09 15.696-1.485 22.922-4.14.721 1.44 1.584 2.8 2.56 4.054zm-65.863 6.381l1.385 1.526a52.67 52.67 0 0038.935 17.24h.163a52.665 52.665 0 0038.988-17.481l1.152-1.285h2.5l-42.848 65.847-42.847-65.847h2.572zm-27.766 0h7.197l47.446 72.914c-.238.091-.472.192-.708.288-.187.076-.375.149-.56.228a37.072 37.072 0 00-3.136 1.516l-.071.04c-.338.184-.676.368-1.008.563l-49.16-75.549zM256 333.086c-12.34 0-22.379-10.039-22.379-22.379 0-6.378 2.686-12.136 6.981-16.216.411-.391.833-.767 1.269-1.123.094-.077.192-.15.287-.226.456-.36.921-.705 1.401-1.027.072-.049.147-.093.22-.141.518-.338 1.045-.66 1.587-.953l.047-.024a22.287 22.287 0 013.703-1.58l.005-.001a22.164 22.164 0 011.957-.534l.018-.004a22.409 22.409 0 012.005-.354l.013-.001a22.185 22.185 0 012.068-.172c.272-.01.544-.021.818-.021.266 0 .529.011.792.02l.015.001c.69.024 1.375.081 2.054.168l.008.001a22.262 22.262 0 017.745 2.491c.543.293 1.072.615 1.59.953.072.047.145.091.216.139.484.324.953.671 1.412 1.033.091.072.184.142.274.216.442.36.87.74 1.286 1.135 4.298 4.08 6.986 9.841 6.986 16.22.001 12.34-10.038 22.379-22.378 22.379zm18.875-54.737c-.301-.176-.607-.341-.912-.508l-.171-.095a37.165 37.165 0 00-3.095-1.495c-.222-.095-.448-.182-.673-.273-.213-.086-.423-.177-.637-.259l47.439-72.903h7.199l-49.15 75.533zM483.937 54.653l-28.222 104.549-44.752-18.091 28.092-104.065c2.816-10.43 12.32-17.715 23.113-17.715a23.87 23.87 0 0119.466 9.963c3.098 4.305 6.159 11.077 2.303 25.359z" />
    </Svg>
  )
}
