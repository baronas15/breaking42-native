import Sound from 'react-native-sound'

import { WorkoutHook } from '../../../shared/domain/Goal.interface'
import { promiseSequentially } from '../../../universal/Helper.utils'

Sound.setCategory('Playback')

export function playSound(hook: WorkoutHook, payload: any) {
  if (!hook.action.sounds) {
    return
  }

  const sounds = hook.action.sounds.map(x => {
    const file = x.file ? x.file : x.resolver ? x.resolver({ ...payload }) : ''

    console.log('sound', file)

    return file ? () => singleSound(file) : () => Promise.resolve(null)
  })

  promiseSequentially(sounds)
}

export function singleSound(fileName: string): Promise<Sound | null> {
  return new Promise((resolve, reject) => {
    const sound = new Sound(`${fileName}.mp3`, Sound.MAIN_BUNDLE, error => {
      if (error) {
        sound.release()
        reject(
          new Error(
            `Failed to load the sound ${fileName}: ${JSON.stringify(error)}`,
          ),
        )
        return
      }

      // console.info('Duration in seconds: ' + sound.getDuration())

      // Play the sound with an onEnd callback
      sound.play(success => {
        sound.release()
        if (success) {
          resolve(sound)
        } else {
          reject(new Error('Playback failed due to audio decoding errors'))
        }
      })
    })
  })
}
