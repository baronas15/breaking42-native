import React from 'react'
import { PermissionsAndroid, Text } from 'react-native'

import { usePermission } from './effects/usePermission'
import TrackingView from './TrackingView'

const Tracking = () => {
  const permissionGranted = usePermission(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  )

  if (!permissionGranted) {
    return <Text>Location is not enabled.</Text>
  } else {
    return <TrackingView />
  }
}

export default Tracking
