import { Button, Text } from 'native-base'
import React, { useContext, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Goal } from '../../shared/domain/Domain.interface'
import { WeeklyWorkout } from '../../shared/domain/Goal.interface'
import { ChangeRoute } from '../../shared/layout/routes/Router.actions'
import { ROUTE_SETUP_TRAINING_PLAN } from '../../shared/layout/routes/Router.constants'
import { IReducer } from '../../shared/store/Reducers.interface'
import { ApiContext } from '../../shared/utils/Api.utils'
import { ScrollContainer } from '../../universal/components/ScrollContainer'
import { SpinnerView } from '../../universal/components/SpinnerView'
import * as trainingPlanActions from '../setupTrainingPlan/SetupTrainingPlan.actions'
import { PlannedWorkoutItem } from '../workoutCards/PlannedWorkoutItem'

function TrainingPlan({ dispatch, goal, fetchGoal, cancelGoal }: any) {
  const api = useContext(ApiContext)

  useEffect(() => {
    fetchGoal(api)
  }, [api, fetchGoal])

  if (!goal || !goal.success) {
    return <SpinnerView />
  }

  if (!goal.goal || !goal.goal.schedule) {
    dispatch(ChangeRoute(ROUTE_SETUP_TRAINING_PLAN))
    return <SpinnerView />
  }

  return (
    <ScrollContainer footerOffset>
      {goal.goal.schedule.map((workout: WeeklyWorkout) => {
        return <PlannedWorkoutItem item={workout} />
      })}
      <Button
        block
        onPress={() => cancelGoal(api, (goal.goal as Goal)._id || '')}>
        <Text>Cancel training plan</Text>
      </Button>
    </ScrollContainer>
  )
}

export default connect(
  (state: IReducer) => ({
    goal: state.goal,
  }),
  dispatch =>
    bindActionCreators({ dispatch, ...trainingPlanActions }, dispatch),
)(TrainingPlan)
