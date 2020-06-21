import React from 'react'

import { WorkoutType } from '../../shared/domain/Goal.interface'
import CrossTrainingIcon from './icons/CrossTrainingIcon'
import HillsRunIcon from './icons/HillsRunIcon'
import IntervalRunIcon from './icons/IntervalRunIcon'
import JogIcon from './icons/JogIcon'
import LongRunIcon from './icons/LongRunIcon'
import RestIcon from './icons/RestIcon'
import TempoRunIcon from './icons/TempoRunIcon'

export const WorkoutIcon = ({
  workoutType,
  ...rest
}: { workoutType: string } & any) => {
  switch (workoutType) {
    case WorkoutType.hillsRun:
      return <HillsRunIcon {...rest} />
    case WorkoutType.longRun:
      return <LongRunIcon {...rest} />
    case WorkoutType.intervalRun:
      return <IntervalRunIcon {...rest} />
    case WorkoutType.tempoRun:
      return <TempoRunIcon {...rest} />
    case WorkoutType.crossTraining:
      return <CrossTrainingIcon {...rest} />
    case WorkoutType.rest:
      return <RestIcon {...rest} />
    case WorkoutType.jog:
    case WorkoutType.recoveryRun:
    default:
      return <JogIcon {...rest} />
  }
}
