import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements' // DO LATER: remove this library
import { BarChart, Grid, XAxis } from 'react-native-svg-charts'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { IReducer } from '../../shared/store/Reducers.interface'
import { ApiContext } from '../../shared/utils/Api.utils'
import { ScrollContainer } from '../../universal/components/ScrollContainer'
import * as insightsActions from './Insights.actions'
import { countDistanceByDay, mapDistanceToWeekDays } from './Insights.behavior'

function Insights({ fetchPastWeekWorkouts, insights }: any) {
  const api = useContext(ApiContext)

  useEffect(() => {
    fetchPastWeekWorkouts(api)
  }, [api, fetchPastWeekWorkouts])

  // TODO: change fill
  const fill = 'rgb(10, 46, 54)'

  const contentInset = { top: 20, bottom: 20 }

  // TODO: use memo, fix any
  const data: any = mapDistanceToWeekDays(
    countDistanceByDay(insights.pastWeekData),
  )

  return (
    <ScrollContainer>
      <Card key={'weekly'} title={'Weekly training'}>
        <BarChart
          style={{ height: 200 }}
          data={data.map((x: any) => x.distance)}
          svg={{ fill }}
          contentInset={contentInset}>
          <Grid />
        </BarChart>
        <XAxis
          style={{ marginHorizontal: -10 }}
          data={data}
          formatLabel={(_: any, index: number) => data[index].day}
          contentInset={{ left: 30, right: 30 }}
          svg={{ fontSize: 10, fill: 'black' }}
        />
      </Card>

      <Card key={'Prediction'} title={'Race prediction'}>
        <View style={{ height: 150, padding: 30 }}>
          <Text>You could finish your marathon in:</Text>
          <Text>05:23:25</Text>
          <Text> </Text>
          <Text>Difference from last week:</Text>
          <Text>-04:26</Text>
        </View>
      </Card>
    </ScrollContainer>
  )
}

// DO LATER:
// Pace suggestions
// Notification to eat before run
// - 2 hour rule (wait for 2 hours after meal to start training)
// - Do your longest training runs at least three minutes per mile slower than your 5K race pace.
// - Lots of carbs on marathon week
// - New shoes after 400-500 miles (or even 300-400km)
// Graphs of performance
export default connect(
  (state: IReducer) => ({
    insights: state.insights,
  }),
  dispatch => bindActionCreators({ ...insightsActions }, dispatch),
)(Insights)
