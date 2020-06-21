import { useEffect, useState } from 'react'
import { Permission, PermissionsAndroid } from 'react-native'

export function usePermission(permission: Permission) {
  const [isPermissionGranted, setPermissionGranted] = useState(false)

  useEffect(() => {
    async function requestPermission() {
      const granted = await PermissionsAndroid.check(permission)
      if (granted) {
        setPermissionGranted(true)
      } else {
        await PermissionsAndroid.request(permission)
        setPermissionGranted(true)
      }
    }
    requestPermission()
  }, [permission])

  return isPermissionGranted
}
