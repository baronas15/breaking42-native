import { WorkoutLap } from '../../../shared/domain/Goal.interface'
import { eventHooks, intervalHooks } from './Hooks.behavior'
import { TrackingHooks } from './Hooks.interface'

type Lap = { resourceKey: any; index: number; lapStart: number; lapEnd: any }

type LapMetaData = {
  resourceKey: string
  index: number
  elapsedTime: number
  remainingTime: number
  length: number | undefined
  start: any
  end: any
}

export function triggerIntervalHooks(
  lapDescriptors: WorkoutLap[],
  lastLap: LapMetaData,
  elapsedTime: any,
  setLastLap: React.Dispatch<React.SetStateAction<LapMetaData | undefined>>,
  workoutType: string,
) {
  const timeSpeed = 5
  const elapsed = elapsedTime * 1000 * timeSpeed

  const nextLapExists = lapDescriptors.length > lastLap.index + 1
  const nextLapStarts = elapsed - lastLap.end >= 0

  if (nextLapStarts && nextLapExists) {
    setLastLap(calculateLapMeta(lapDescriptors, lastLap, elapsed, true))
  }

  triggerHooks(
    nextLapStarts,
    nextLapExists,
    workoutType,
    lapDescriptors,
    calculateLapMeta(lapDescriptors, lastLap, elapsed, false),
  )
}

function triggerHooks(
  nextLapStarts: boolean,
  nextLapExists: boolean,
  workoutType: string,
  lapDescriptors: WorkoutLap[],
  lapMetaData: LapMetaData,
) {
  if (nextLapStarts && nextLapExists) {
    eventHooks(workoutType)(TrackingHooks.completedLap)
  }

  if (nextLapExists && lapMetaData.end) {
    intervalHooks(workoutType)(TrackingHooks.preInterval, {
      time: lapMetaData.remainingTime,
      resourceKey: lapDescriptors[lapMetaData.index + 1].resourceKey,
    })
  }

  intervalHooks(workoutType)(TrackingHooks.lapInterval, {
    time: lapMetaData.elapsedTime,
    resourceKey: lapMetaData.resourceKey,
  })
}

export function calculateLapMeta(
  lapDescriptors: WorkoutLap[],
  lastLap: LapMetaData | undefined,
  elapsed: number,
  newLap: boolean,
) {
  const newIndex = lastLap ? lastLap.index + 1 : 0
  const currentIndex = lastLap ? lastLap.index : 0
  const index = newLap ? newIndex : currentIndex

  const newStart = lastLap ? lastLap.start + lastLap.end : elapsed
  const currentStart = lastLap ? lastLap.start : 0
  const start = newLap ? newStart : currentStart

  const length =
    lapDescriptors[index].configuration &&
    lapDescriptors[index].configuration.time
      ? lapDescriptors[index].configuration.time
      : undefined

  return {
    resourceKey: lapDescriptors[index].resourceKey,
    index: index,
    elapsedTime: elapsed - (lastLap ? lastLap.start : 0),
    remainingTime: elapsed - (lastLap ? lastLap.end : 0),
    length: length,
    start: start,
    end: length ? start + length : undefined,
  }
}
