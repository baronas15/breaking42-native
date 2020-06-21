import { Text, View } from 'native-base'
import React from 'react'
import { human } from 'react-native-typography'

import { WeeklyWorkout } from '../../../shared/domain/Goal.interface'
import { Property } from '../../../universal/components/Property'
import {
  getTodayScheduledWorkout,
  WorkoutDescriptorWithRecommendation,
} from '../SelectWorkout.behavior'
import RecommendedIcon from './RecommendedIcon'

export function RecommendLabel(
  schedule: WeeklyWorkout[],
  workout: WorkoutDescriptorWithRecommendation,
) {
  const recommendedWorkout = getTodayScheduledWorkout()(schedule)
  return (
    workout.recommend && (
      <View>
        <Property
          title={'Distance:'}
          item={recommendedWorkout.distance.toFixed(2)}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <RecommendedIcon />
          <Text style={{ ...human.caption1Object, padding: 3 }}>
            Recommended for today
          </Text>
        </View>
      </View>
    )
  )
}
