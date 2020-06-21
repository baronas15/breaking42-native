import { useEffect } from 'react'
import { BackHandler } from 'react-native'

export function useBackButton(handler: () => void) {
  useEffect(() => {
    const callback = () => {
      handler()
      return true
    }
    BackHandler.addEventListener('hardwareBackPress', callback)

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', callback)
    }
  }, [handler])
}
