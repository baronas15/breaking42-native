import { WorkoutHook } from '../../../shared/domain/Goal.interface'
import { defaultWorkoutHooks } from '../../../shared/referenceData/WorkoutHooks.ref'
import { workoutTypes } from '../../../shared/referenceData/WorkoutTypes.ref'
import { arrayMatches } from '../../../universal/Helper.utils'
import { TrackingHooks } from './Hooks.interface'
import { playSound } from './SoundHook.behavior'

function executeHooks(hooks: WorkoutHook[], payload: any) {
  hooks.map(hook => {
    if (hook.action.sounds) {
      return playSound(hook, payload)
    }
    return undefined
  })
}

function allHooksForType(workoutType: string) {
  const workoutSpecificHooks = workoutTypes.find(x => x.type === workoutType)

  const allHooks =
    workoutSpecificHooks && workoutSpecificHooks.workoutHooks
      ? defaultWorkoutHooks
          .filter(
            x =>
              // @ts-ignore
              !workoutSpecificHooks.workoutHooks.some(y =>
                arrayMatches(x.condition.hook, y.condition.hook),
              ),
          )
          .concat(workoutSpecificHooks.workoutHooks)
      : defaultWorkoutHooks

  return allHooks
}

function byHookType(hookType: string, hookName: string) {
  return (x: WorkoutHook) =>
    x.condition.type === hookType &&
    x.condition.hook.some(hook => hook === hookName)
}

export const eventHooks = (workoutType: string) => (
  name: TrackingHooks,
  payload?: any,
) => {
  const hooks = allHooksForType(workoutType).filter(byHookType('event', name))

  executeHooks(hooks, payload)
}

export const intervalHooks = (workoutType: string) => (
  name: TrackingHooks,
  payload?: any,
) => {
  const hooks = allHooksForType(workoutType)
    .filter(byHookType('interval', name))
    .filter(x => !x.condition.resolver || x.condition.resolver(payload))

  executeHooks(hooks, payload)
}
