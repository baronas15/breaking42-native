import { Button, Card, CardItem, Container, H1 } from 'native-base'
import React, { useContext, useState } from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import { WheelPicker } from 'react-native-wheel-picker-android'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ChangeRoute } from '../../shared/layout/routes/Router.actions'
import {
  ROUTE_CALENDAR,
  ROUTE_HISTORY,
} from '../../shared/layout/routes/Router.constants'
import { IReducer } from '../../shared/store/Reducers.interface'
import { ApiContext } from '../../shared/utils/Api.utils'
import { Form } from '../../universal/components/Form/Form'
import { FormStep } from '../../universal/components/Form/FormStep'
import { useBackButton } from '../../universal/useBackButton'
import { FirstRun } from './assets/FirstRun'
import { Performance } from './assets/Performance'
import * as actions from './SetupTrainingPlan.actions'
import { generateSchedule } from './SetupTrainingPlan.behavior'

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
  },
  header: { alignSelf: 'center', padding: 15, color: 'white' },
  subHeader: { alignSelf: 'center', padding: 15, color: 'white' },
  spacer: { padding: 15 },
})

// DO LATER: have a back button to TrainingPlan
// DO LATER: split steps
function SetupTrainingPlan({ dispatch, setGoal }: any) {
  const api = useContext(ApiContext)

  useBackButton(() => {
    dispatch(ChangeRoute(ROUTE_HISTORY))
  })

  const mileageArray = Array.from(Array(200).keys())
  const [mileage, setMileage] = useState(0)

  return (
    <ImageBackground
      imageStyle={{ resizeMode: 'stretch' }}
      source={require('./assets/bg.jpg')}
      style={{
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        opacity: 0.9,
      }}>
      <Form
        onSubmit={(data: any) => {
          dispatch(ChangeRoute(ROUTE_CALENDAR))
          const schedule = generateSchedule(data)
          const result = { ...data, schedule }
          setGoal(api, result)
        }}
        initial={{ step: 'choseGoal' }}
        render={({ updateForm, next, submit }: any) => (
          <>
            <FormStep identifier="choseGoal">
              <Container style={style.container}>
                <H1 style={style.header}>What is your goal?</H1>
                <Text style={style.subHeader}>
                  It seems that you don't have a training plan yet, but first we
                  need some information about you
                </Text>
                <Card>
                  <CardItem
                    button
                    onPress={() => {
                      updateForm({
                        key: 'target.goalType',
                        required: true,
                        value: 'first',
                        nextStep: 'targetDistance',
                      })
                    }}>
                    <FirstRun />
                    <Text style={style.spacer}>
                      First race (5K, 10K, half marathon, marathon)
                    </Text>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem
                    button
                    onPress={() => {
                      updateForm({
                        key: 'target.goalType',
                        required: true,
                        value: 'performance',
                        nextStep: 'targetDistance',
                      })
                    }}>
                    <Performance />
                    <Text style={style.spacer}>Improve performance</Text>
                  </CardItem>
                </Card>
              </Container>
            </FormStep>
            <FormStep identifier="targetDistance">
              <Container style={style.container}>
                <H1 style={style.header}>What is your target distance?</H1>
                {[
                  { key: '5k', text: '5k' },
                  { key: '10k', text: '10k' },
                  { key: 'halfMarathon', text: 'Half marathon' },
                  { key: 'marathon', text: 'Marathon' },
                ].map(x => (
                  <Card>
                    <CardItem
                      button
                      onPress={() => {
                        updateForm({
                          key: 'target.distance',
                          required: true,
                          value: x.key,
                          nextStep: 'recentBest',
                        })
                      }}>
                      <Text>{x.text}</Text>
                    </CardItem>
                  </Card>
                ))}
              </Container>
            </FormStep>
            <FormStep identifier="recentBest">
              <Container style={style.container}>
                <H1 style={style.header}>What was your mileage past week?</H1>
                <Card>
                  <CardItem style={{ justifyContent: 'center' }}>
                    <WheelPicker
                      itemTextFontFamily={''}
                      selectedItemTextFontFamily={''}
                      data={mileageArray.map(value => `${value} km`)}
                      selectedItem={mileage}
                      onItemSelected={(index: number) => {
                        updateForm({
                          key: 'startingMileage',
                          required: true,
                          value: mileageArray[index],
                        })

                        setMileage(index)
                      }}
                      style={{ width: 150, height: 130 }}
                    />
                  </CardItem>
                  <Button
                    block
                    onPress={() => {
                      next('workoutCount')
                    }}>
                    <Text style={{ color: 'white' }}>Next</Text>
                  </Button>
                </Card>
              </Container>
            </FormStep>
            <FormStep identifier="workoutCount">
              <Container
                style={{ ...style.container, justifyContent: 'center' }}>
                <H1 style={style.header}>
                  How many workouts a week can you have?
                </H1>
                <Card>
                  {[
                    { key: '3', text: '3 workouts' },
                    { key: '4', text: '4 workouts' },
                    { key: '5', text: '5 workouts' },
                    { key: '6', text: '6 workouts' },
                  ].map(x => (
                    <CardItem
                      button
                      onPress={() => {
                        updateForm({
                          key: 'weeklyWorkouts',
                          required: true,
                          numeric: true,
                          value: x.key,
                          nextStep: 'submit',
                        })
                      }}>
                      <Text>{x.text}</Text>
                    </CardItem>
                  ))}
                </Card>
              </Container>
            </FormStep>
            <FormStep identifier="submit">
              <Container
                style={{ ...style.container, justifyContent: 'center' }}>
                <Button
                  block
                  info
                  onPress={() => {
                    submit()
                  }}>
                  <Text style={{ color: 'white' }}>Set a goal</Text>
                </Button>
                <Button
                  block
                  light
                  onPress={() => dispatch(ChangeRoute(ROUTE_HISTORY))}>
                  <Text style={{ color: 'white' }}>Cancel</Text>
                </Button>
              </Container>
            </FormStep>
          </>
        )}
      />
    </ImageBackground>
  )
}

export default connect(
  (_: IReducer) => ({}),
  dispatch => bindActionCreators({ dispatch, ...actions }, dispatch),
)(SetupTrainingPlan)
