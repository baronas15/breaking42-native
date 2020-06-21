import { WorkoutDescriptor } from '../domain/Goal.interface'
import { crossTraining } from './workoutTypes/CrossTraining.ref'
import { hillsRun } from './workoutTypes/HillsRun.ref'
import { intervalRun } from './workoutTypes/IntervalRun.ref'
import { jog } from './workoutTypes/Jog.ref'
import { longRun } from './workoutTypes/LongRun.ref'
import { recoveryRun } from './workoutTypes/RecoveryRun.ref'
import { tempoRun } from './workoutTypes/TempoRun.ref'

export const workoutTypes: WorkoutDescriptor[] = [
  crossTraining,
  recoveryRun,
  jog,
  longRun,
  tempoRun,
  hillsRun,
  intervalRun,
]
