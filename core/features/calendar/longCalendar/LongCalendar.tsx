import React, { useContext, useEffect, useState } from 'react'
import { CalendarList } from 'react-native-calendars'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { colorTheme } from '../../../shared/design/Palette.context'
import { IReducer } from '../../../shared/store/Reducers.interface'
import { ApiContext, ApiInterface } from '../../../shared/utils/Api.utils'
import { IDispatch } from '../../../universal/Action.interface'
import { SpinnerView } from '../../../universal/components/SpinnerView'
import { isArrayEmpty } from '../../../universal/Helper.utils'
import * as activityActions from '../../activity/Activity.actions'
import * as trainingPlanActions from '../../setupTrainingPlan/SetupTrainingPlan.actions'
import { IGoalReducer } from '../../setupTrainingPlan/SetupTrainingPlan.interface'
import * as actions from '../Calendar.actions'
import { ICalendarReducer } from '../Calendar.interface'
import { mapToCalendarDots } from './LongCalendar.behavior'
import { SingleDayOverlay } from './SingleDayOverlay'

interface Props {
  calendar: ICalendarReducer
  goal: IGoalReducer
  fetchCalendar: (api: ApiInterface) => IDispatch
  fetchSingleDay: (api: ApiInterface, day: string) => IDispatch
  fetchGoal: (api: ApiInterface) => IDispatch
  clearTheDay: () => IDispatch
  openActivity: (activityId: string) => IDispatch
}

function LongCalendar({
  calendar,
  goal,
  fetchCalendar,
  fetchSingleDay,
  clearTheDay,
  openActivity,
  fetchGoal,
}: Props) {
  const api = useContext(ApiContext)

  const [overlayVisible, setOverlayVisible] = useState(false)

  useEffect(() => {
    fetchCalendar(api)
    fetchGoal(api)
  }, [api, fetchCalendar, fetchGoal])

  if (isArrayEmpty(calendar.allActivities)) {
    return <SpinnerView />
  }

  const dots = mapToCalendarDots(calendar, goal)

  return (
    <>
      {overlayVisible && !isArrayEmpty(calendar.singleDay) && (
        <SingleDayOverlay
          calendar={calendar}
          clearTheDay={clearTheDay}
          overlayVisible={overlayVisible}
          setOverlayVisible={setOverlayVisible}
          openActivity={openActivity}
        />
      )}
      <CalendarList
        onDayPress={({ dateString }) => {
          fetchSingleDay(api, dateString)
          setOverlayVisible(true)
        }}
        onVisibleMonthsChange={(_months: any) => {
          // DO Later: Fetch new data on visible change
          // log('now these months are visible', months);
        }}
        firstDay={1}
        pastScrollRange={5}
        futureScrollRange={5}
        scrollEnabled={true}
        showScrollIndicator={true}
        markedDates={dots}
        markingType={'multi-dot'}
        theme={{
          backgroundColor: colorTheme.backgroundTint,
          calendarBackground: colorTheme.backgroundTint,
        }}
      />
    </>
  )
}

export default connect(
  (state: IReducer) => ({
    calendar: state.calendar,
    goal: state.goal,
  }),
  dispatch =>
    bindActionCreators(
      { ...actions, ...activityActions, ...trainingPlanActions },
      dispatch,
    ),
)(LongCalendar)
