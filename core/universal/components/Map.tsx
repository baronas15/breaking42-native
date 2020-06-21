import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps'

import { Geo } from '../../shared/domain/Domain.interface'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    minHeight: 200,
  },
})

interface Props {
  gps: Geo[]
  children?: any
  zoom?: number
  disableGestures?: boolean
}

export const Map = ({
  children,
  gps,
  zoom,
  disableGestures = false,
}: Props) => {
  if (!gps || !gps[gps.length - 1]) {
    return null
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView
          scrollEnabled={!disableGestures}
          zoomEnabled={!disableGestures}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: gps[gps.length - 1].latitude as number,
            longitude: gps[gps.length - 1].longitude as number,
            latitudeDelta: zoom ? zoom : 0.02,
            longitudeDelta: zoom ? zoom : 0.02,
          }}>
          <>
            <Polyline
              strokeWidth={2}
              strokeColor="#2cb6e0"
              coordinates={gps.map((x: Geo) => ({
                latitude: x.latitude || 0,
                longitude: x.longitude || 0,
              }))}
            />
            {children}
          </>
        </MapView>
      </View>
    </View>
  )
}
