export interface WeeklyWorkout {
  distance: number
  type: string
  date?: string
}

export enum WorkoutType {
  jog = 'jog',
  crossTraining = 'crossTraining',
  longRun = 'longRun',
  tempoRun = 'tempoRun',
  intervalRun = 'intervalRun',
  hillsRun = 'hillsRun',
  recoveryRun = 'recoveryRun',
  rest = 'rest',
}

export interface WorkoutDescriptor {
  type: string
  name: string
  description: string
  iconColor: string
  gradient: string[]
  workoutHooks?: WorkoutHook[]
  laps?: WorkoutLap[]
  disableStart?: boolean
  goalDependencies: GoalDependency[]
}

export interface WorkoutLap {
  resourceKey: string
  configuration: {
    time: number
  }
}

export interface WorkoutHook {
  condition: {
    type: string
    hook: string[]
    resolver?: (data: any) => boolean
    time?: number
  }
  action: {
    sounds?: {
      file?: string
      resolver?: (data: any) => string
    }[]
  }
}

export interface GoalDependency {
  condition: GoalDependencyCondition
  action: GoalDependencyAction
}

export interface GoalDependencyCondition {
  goalTypes: string[]
  distances: string[]
}

export interface WeeklyAction {
  type: 'weekly'
  maxLength?: number
}

export interface FillerAction {
  type: 'filler'
  maxLength?: number
}

export interface RotationAction {
  type: 'rotation'
  maxLength?: number
  rotation: {
    category: string
  }
}

export type GoalDependencyAction = WeeklyAction | FillerAction | RotationAction
