import AsyncStorage from '@react-native-community/async-storage'
import { useEffect, useState } from 'react'

interface KeyValue {
  [key: string]: any
}

const key = 'settings'

export function useSettings(override: boolean) {
  const [data, setData] = useState<KeyValue>({ loaded: false })

  useEffect(() => {
    AsyncStorage.getItem(key)
      .then(value => {
        const obj = JSON.parse(value || '')
        setData({ loaded: true, ...obj })
      })
      .catch(_ => {
        setData({ loaded: true })
      })
  }, [])

  return override ? { loaded: true } : data
}

export function persist(data: object) {
  AsyncStorage.setItem(
    key,
    JSON.stringify({
      data,
    }),
  )
}
