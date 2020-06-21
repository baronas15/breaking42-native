import { Text, View } from 'native-base'
import React, { useContext, useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { human, systemWeights } from 'react-native-typography'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Geo } from '../../shared/domain/Domain.interface'
import { ChangeRoute } from '../../shared/layout/routes/Router.actions'
import { ROUTE_HISTORY } from '../../shared/layout/routes/Router.constants'
import { workoutTypes } from '../../shared/referenceData/WorkoutTypes.ref'
import { IReducer } from '../../shared/store/Reducers.interface'
import { ApiContext } from '../../shared/utils/Api.utils'
import { RoundedCardButton } from '../../universal/components/RoundedCardButton'
import { ScrollContainer } from '../../universal/components/ScrollContainer'
import { SpinnerView } from '../../universal/components/SpinnerView'
import { useBackButton } from '../../universal/useBackButton'
import * as trainingPlanActions from '../setupTrainingPlan/SetupTrainingPlan.actions'
import { getSinglePosition } from '../tracking/effects/useGeolocation'
import * as trackingActions from '../tracking/Tracking.actions'
import { WorkoutIcon } from '../workoutCards/WorkoutIcon'
import { Heading } from './components/Heading'
import { RecommendLabel } from './components/RecommendLabel'
import { recommendWorkout } from './SelectWorkout.behavior'

function SelectWorkout({ goal, fetchGoal, startTracking, dispatch }: any) {
  const api = useContext(ApiContext)

  const [startingPosition, setStartingPosition] = useState<Geo | null>(null)

  useBackButton(() => {
    dispatch(ChangeRoute(ROUTE_HISTORY))
  })

  useEffect(() => {
    if (!goal || !goal.success) {
      fetchGoal(api)
    }
  }, [api, fetchGoal, goal])

  useEffect(() => {
    getSinglePosition(0, data => {
      setStartingPosition(data)
    })
  }, [])

  if (!goal.success) {
    return <SpinnerView />
  }

  const cards = recommendWorkout(goal.goal.schedule, workoutTypes).filter(
    x => !x.disableStart,
  )

  // DO LATER: move styles out
  return (
    <ScrollContainer>
      <Heading />
      <View style={{ flex: 1, padding: 10 }}>
        {cards
          .filter(x => x)
          .map(x => (
            <>
              <RoundedCardButton
                uniqueKey={x.type}
                onPress={() => {
                  startTracking(api, startingPosition, x.type)
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <LinearGradient
                    colors={x.gradient}
                    useAngle={true}
                    angle={120}
                    angleCenter={{ x: 0.5, y: 0.5 }}
                    style={{
                      height: 110,
                      borderTopLeftRadius: 12,
                      borderBottomLeftRadius: 12,
                      width: 12,
                    }}
                  />
                  <View
                    style={{
                      flex: 7,
                      padding: 10,
                      justifyContent: x.recommend
                        ? 'space-between'
                        : 'space-around',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          ...human.calloutObject,
                          ...systemWeights.semibold,
                        }}>
                        {x.name}
                      </Text>
                    </View>
                    {RecommendLabel(goal.goal.schedule, x)}
                    {!x.recommend && (
                      <Text style={{ ...human.caption1Object, padding: 3 }}>
                        {x.description}
                      </Text>
                    )}
                  </View>
                  <View
                    style={{
                      flex: 3,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <WorkoutIcon workoutType={x.type} fill={x.iconColor} />
                  </View>
                </View>
              </RoundedCardButton>
            </>
          ))}
      </View>
    </ScrollContainer>
  )
}

export default connect(
  (state: IReducer) => ({
    goal: state.goal,
  }),
  dispatch =>
    bindActionCreators(
      { dispatch, ...trainingPlanActions, ...trackingActions },
      dispatch,
    ),
)(SelectWorkout)
