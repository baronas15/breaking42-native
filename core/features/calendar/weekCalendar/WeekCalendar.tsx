import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { colorTheme } from '../../../shared/design/Palette.context'
import { Goal } from '../../../shared/domain/Domain.interface'
import { WeeklyWorkout } from '../../../shared/domain/Goal.interface'
import { IReducer } from '../../../shared/store/Reducers.interface'
import { ApiContext, ApiInterface } from '../../../shared/utils/Api.utils'
import { IDispatch } from '../../../universal/Action.interface'
import { SpinnerView } from '../../../universal/components/SpinnerView'
import {
  addDays,
  subDays,
  toDateStringFromDate,
  weekEnd,
  weekStart,
} from '../../../universal/Formatting.utils'
import * as trainingPlanActions from '../../setupTrainingPlan/SetupTrainingPlan.actions'
import { IGoalReducer } from '../../setupTrainingPlan/SetupTrainingPlan.interface'
import { PlannedWorkoutItem } from '../../workoutCards/PlannedWorkoutItem'
import { filterThisWeekWorkouts } from './WeekCalendar.behavior'

// DO LATER: research prop types
interface Props {
  goal: IGoalReducer
  fetchGoal: (api: ApiInterface) => IDispatch
  updateWeek: (
    api: ApiInterface,
    _id: string,
    days: WeeklyWorkout[],
  ) => IDispatch
}

function WeekCalendar({ goal, fetchGoal, updateWeek }: Props) {
  const api = useContext(ApiContext)

  useEffect(() => {
    fetchGoal(api)
  }, [api, fetchGoal])

  if (!goal || !goal.success) {
    return <SpinnerView />
  }

  if (!goal.goal) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>You haven't set a goal yet</Text>
      </View>
    )
  }

  // DO LATER: extract logic
  const startOfWeek = weekStart(new Date())
  const endOfWeek = weekEnd(new Date())

  // DO LATER: use sanctuary, extract to .behavior.ts
  const weekWorkouts = filterThisWeekWorkouts(goal, startOfWeek, endOfWeek)

  const exampleData: WeeklyWorkout[] = weekWorkouts.map(workout => ({
    key: `item-${workout.date}`,
    ...workout,
  }))

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [workoutData, setWorkoutData] = useState(exampleData)

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorTheme.backgroundTint,
        padding: 10,
      }}>
      <DraggableFlatList
        data={workoutData}
        renderItem={PlannedWorkoutItem}
        keyExtractor={(item: any) => `draggable-item-${item.key}`}
        onDragEnd={({ data }: { data: WeeklyWorkout[] }) => {
          // DO LATER: extract logic
          let date = subDays(startOfWeek, 1)

          const days = data.map(x => {
            date = addDays(date, 1)
            return { ...x, date: toDateStringFromDate(date) }
          })

          setWorkoutData(days)
          updateWeek(api, (goal.goal as Goal)._id || '', days)
        }}
      />
    </View>
  )
}

export default connect(
  (state: IReducer) => ({
    goal: state.goal,
  }),
  dispatch => bindActionCreators({ ...trainingPlanActions }, dispatch),
)(WeekCalendar)
