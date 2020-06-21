import { ScrollableTab, Tab, Tabs } from 'native-base'
import React from 'react'

import { colorTheme } from '../../shared/design/Palette.context'
import LongCalendar from './longCalendar/LongCalendar'
import WeekCalendar from './weekCalendar/WeekCalendar'

export function Calendar() {
  const styleProps = {
    activeTabStyle: { backgroundColor: colorTheme.accent },
    tabStyle: { backgroundColor: colorTheme.accent },
    textStyle: { color: '#fff' },
  }

  return (
    <>
      <Tabs
        tabBarBackgroundColor={colorTheme.accent}
        renderTabBar={() => <ScrollableTab />}>
        <Tab {...styleProps} heading="All workouts">
          <LongCalendar />
        </Tab>
        <Tab {...styleProps} heading="Weekly view">
          <WeekCalendar />
        </Tab>
      </Tabs>
    </>
  )
}
