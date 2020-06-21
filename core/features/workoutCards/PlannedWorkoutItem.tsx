import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { WeeklyWorkout } from '../../shared/domain/Goal.interface'
import { Property } from '../../universal/components/Property'
import { dayOfWeek } from '../../universal/Formatting.utils'
import { WorkoutIcon } from './WorkoutIcon'

interface Props {
  item: WeeklyWorkout
  index?: number
  drag?: any
  isActive?: boolean
}

export function PlannedWorkoutItem({ item, drag }: Props) {
  const dragEvent = drag ? drag : () => {}

  const Distance = item.distance ? (
    <Property title={'Distance:'} item={item.distance.toFixed(2)} />
  ) : undefined

  return (
    <TouchableOpacity
      style={{
        height: 90, // DO lATER: Change to dynamic
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 4,
        backgroundColor: '#fff',
        margin: 5,
      }}
      onLongPress={dragEvent}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <WorkoutIcon workoutType={item.type} />
          <View style={{ flexDirection: 'row', padding: 5 }}>
            <Property title={'Date:'} item={item.date || ''} />
            {Distance}
          </View>
        </View>
        {DayOfWeek(item)}
      </View>
    </TouchableOpacity>
  )
}

function DayOfWeek(item: WeeklyWorkout) {
  return item.date ? (
    <Text style={{ fontWeight: '500', fontSize: 23, width: 50 }}>
      {dayOfWeek(item.date)}
    </Text>
  ) : undefined
}
