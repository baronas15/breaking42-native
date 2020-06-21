import { getPreciseDistance } from 'geolib'
import { useEffect, useState } from 'react'
import Geolocation from 'react-native-geolocation-service'

import { Geo } from '../../../shared/domain/Domain.interface'

const calculateDistance = (pos1: Geo, pos2: Geo) => {
  // return 200 // TODO:

  if (pos1.latitude && pos1.longitude) {
    return getPreciseDistance(
      {
        latitude: pos1.latitude,
        longitude: pos1.longitude,
      },
      {
        latitude: pos2.latitude,
        longitude: pos2.longitude,
      } as any,
    )
  }

  return 0
}

export const useGeolocation = (
  pause: boolean,
  startingPosition: Geo | undefined,
  onDataChange: Function,
): [Geo[], number] => {
  const [allCoords, setAllCoords] = useState<Geo[]>(
    startingPosition ? [startingPosition] : [],
  )
  const [totalDistance, setTotalDistance] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!pause) {
        getSinglePosition(totalDistance, data => {
          if (allCoords.length) {
            const dist = calculateDistance(
              data,
              allCoords[allCoords.length - 1],
            )
            setTotalDistance(dist + totalDistance)
          }

          onDataChange(allCoords, data)

          setAllCoords([...allCoords, data])
        })
      }
    }, 3000)

    return () => clearInterval(intervalId)
  }, [pause, allCoords, totalDistance, onDataChange])

  return [allCoords, totalDistance]
}

export function getSinglePosition(
  totalDistance: number,
  onPosition: (data: Geo) => void,
) {
  Geolocation.getCurrentPosition(
    pos => {
      const data: Geo = {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        altitude: pos.coords.altitude || undefined,
        time: pos.timestamp.toString(),
        distance: totalDistance,
        sensor_data: {},
      }

      onPosition(data)
    },
    err => {
      // DO LATER: Send errors like that to backend
      console.error(err.message)
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 1000 },
  )
}
