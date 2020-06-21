import { Card, CardItem } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import { Button, Overlay } from 'react-native-elements' // DO LATER: remove lib

import { IDispatch } from '../../../universal/Action.interface'
import { Property } from '../../../universal/components/Property'
import {
  kilometersToString,
  secondsToDuration,
} from '../../../universal/Formatting.utils'
import { ICalendarReducer, PartialActivity } from '../Calendar.interface'
import SportIcon from './SportIcon'

interface Props {
  calendar: ICalendarReducer
  clearTheDay: () => IDispatch
  overlayVisible: boolean
  setOverlayVisible: React.Dispatch<any>
  openActivity: (activityId: string) => IDispatch
}

export function SingleDayOverlay({
  calendar,
  clearTheDay,
  overlayVisible,
  setOverlayVisible,
  openActivity,
}: Props) {
  return (
    <Overlay
      isVisible={overlayVisible}
      windowBackgroundColor="rgba(255, 255, 255, .5)"
      width="80%"
      height="auto">
      <>
        {calendar.singleDay.map(day => (
          <Card>
            <CardItem
              button
              onPress={() => {
                clearTheDay()
                setOverlayVisible(false)
                openActivity(day._id)
              }}>
              <ListItem day={day} />
            </CardItem>
          </Card>
        ))}
        <Button
          title="Close"
          type="outline"
          onPress={() => {
            clearTheDay()
            setOverlayVisible(false)
          }}
        />
      </>
    </Overlay>
  )
}

// DO LATER: reuse icons from other screens for workouts
// DO LATER: migrate old data to have workoutType or chose to have a default workout icon
function ListItem({ day }: { day: PartialActivity }): JSX.Element {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
        <SportIcon />
        <View style={{ flexDirection: 'row', padding: 5 }}>
          <Property title={'Time:'} item={secondsToDuration(day.duration)} />
          <Property
            title={'Distance:'}
            item={kilometersToString(day.distance)}
          />
        </View>
      </View>
    </View>
  )
}
