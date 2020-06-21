import React, { useCallback, useContext, useState } from 'react'
import { View } from 'react-native'
import { Circle } from 'react-native-maps'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  Geo,
  Workout,
  WorkoutGeneral,
} from '../../shared/domain/Domain.interface'
import { workoutTypes } from '../../shared/referenceData/WorkoutTypes.ref'
import { IReducer } from '../../shared/store/Reducers.interface'
import { ApiContext } from '../../shared/utils/Api.utils'
import Icon from '../../universal/components/Icon'
import { Map } from '../../universal/components/Map'
import { Property } from '../../universal/components/Property'
import {
  metersToKilometers,
  roundDownToThousand,
  secondsToDuration,
  secondsToTime,
} from '../../universal/Formatting.utils'
import { useGeolocation } from './effects/useGeolocation'
import { useTimer } from './effects/useTimer'
import { eventHooks } from './hooks/Hooks.behavior'
import { TrackingHooks } from './hooks/Hooks.interface'
import {
  calculateLapMeta,
  triggerIntervalHooks,
} from './hooks/Interval.trigger'
import Pause from './icons/Pause'
import Stop from './icons/Stop'
import * as actions from './Tracking.actions'

interface Props {
  tracking: Partial<Workout>
  stopTracking: Function
  pushGpsData: Function
  startingPosition?: Geo
}

const TrackingView = ({
  tracking,
  stopTracking,
  pushGpsData,
  startingPosition,
}: Props) => {
  const api = useContext(ApiContext)

  const workoutType =
    tracking.general && tracking.general.workoutType
      ? tracking.general.workoutType
      : ''

  const workoutDescriptor = workoutTypes.find(x => x.type === workoutType)

  const [pause, setPause] = useState(false)

  const [lastLap, setLastLap] = useState(
    workoutDescriptor && workoutDescriptor.laps && workoutDescriptor.laps[0]
      ? calculateLapMeta(workoutDescriptor.laps, undefined, 0, true)
      : undefined,
  )

  const [time] = useTimer(
    new Date((tracking.general as WorkoutGeneral).start_time),
    pause,
    useCallback(
      elapsedTime => {
        if (workoutDescriptor && workoutDescriptor.laps && lastLap) {
          triggerIntervalHooks(
            workoutDescriptor.laps,
            lastLap,
            elapsedTime,
            setLastLap,
            workoutType,
          )
        }
      },
      [workoutType, lastLap, workoutDescriptor],
    ),
  )

  const triggerHook = eventHooks(workoutType)

  const [allCoords, distance] = useGeolocation(
    pause,
    startingPosition,
    useCallback(
      (all: Geo[], data: Geo) => {
        const prev = all[all.length - 1].distance
        const curr = data.distance

        if (roundDownToThousand(prev) < roundDownToThousand(curr)) {
          const { hours, minutes, seconds } = secondsToTime(time || 0)
          const distanceInKilometers = data.distance / 1000
          const avgPace = Math.trunc(time / distanceInKilometers)
          const { minutes: avgMinutes, seconds: avgSeconds } = secondsToTime(
            avgPace || 0,
          )

          // @ts-ignore
          eventHooks(tracking.general.workoutType)(
            TrackingHooks.completedKilometer,
            {
              distanceInKilometers,
              durationHours: hours,
              durationMinutes: minutes,
              durationSeconds: seconds,
              averageMinutes: avgMinutes,
              averageSeconds: avgSeconds,
            },
          )
        }

        pushGpsData(api, (tracking as Workout)._id, data)
      },
      // Time dependency makes geolocation stop
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [api, pushGpsData, tracking],
    ),
  )

  if (!allCoords || !allCoords.length) {
    return null
  }

  // TODO: make view pretty
  // DO LATER: move view to another component
  return (
    <>
      <View style={{ flex: 1 }}>
        <Map disableGestures gps={allCoords} zoom={0.003}>
          <Circle
            center={{
              latitude: allCoords[allCoords.length - 1].latitude as number,
              longitude: allCoords[allCoords.length - 1].longitude as number,
            }}
            radius={8}
            fillColor={'#1ea0c8'}
          />
        </Map>

        <View style={{ flex: 2 }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Property title={'Time:'} item={secondsToDuration(time)} />
            <Property
              title={'Distance:'}
              item={metersToKilometers(distance) + ' km'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <Icon
              render={() => <Stop width="50pt" height="50pt" />}
              onPress={() => {
                triggerHook(TrackingHooks.complete)

                stopTracking(api, tracking._id, distance, time, allCoords)
              }}
            />
            <Icon
              render={() => <Pause width="50pt" height="50pt" />}
              onPress={() => {
                triggerHook(pause ? TrackingHooks.resume : TrackingHooks.pause)
                setPause(!pause)
              }}
            />
          </View>
        </View>
      </View>
    </>
  )
}

export default connect(
  (state: IReducer) => ({
    tracking: state.tracking.data,
    startingPosition: state.tracking.startingPosition,
  }),
  dispatch => bindActionCreators(actions, dispatch),
)(TrackingView)
