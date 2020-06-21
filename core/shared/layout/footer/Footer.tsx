import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { colorTheme } from '../../design/Palette.context'
import { ChangeRoute } from '../routes/Router.actions'
import {
  ROUTE_CALENDAR,
  ROUTE_HISTORY,
  ROUTE_INSIGHTS,
  ROUTE_MORE_SETTINGS,
  ROUTE_SELECT_WORKOUT,
} from '../routes/Router.constants'
import CalendarIcon from './CalendarIcon'
import InsightIcon from './InsightIcon'
import ListIcon from './ListIcon'
import MoreIcon from './MoreIcon'
import RunIcon from './RunIcon'
import ToolbarButton from './ToolbarButton'

const Footer = ({ dispatch }: any) => {
  const icons = [
    {
      onPress: () => dispatch(ChangeRoute(ROUTE_HISTORY)),
      Component: ({ color }: any) => (
        <ListIcon width="30pt" height="30pt" color={color} />
      ),
      title: 'History',
      key: 'History',
    },
    {
      onPress: () => dispatch(ChangeRoute(ROUTE_INSIGHTS)),
      Component: ({ color }: any) => (
        <InsightIcon width="30pt" height="30pt" color={color} />
      ),
      title: 'Insights',
      key: 'Insights',
    },
    {
      onPress: () => dispatch(ChangeRoute(ROUTE_SELECT_WORKOUT)),
      Component: ({ color }: any) => (
        <RunIcon width="55pt" height="55pt" color={color} />
      ),
      key: 'Workout',
    },
    {
      onPress: () => dispatch(ChangeRoute(ROUTE_CALENDAR)),
      Component: ({ color }: any) => (
        <CalendarIcon width="30pt" height="30pt" color={color} />
      ),
      title: 'Calendar',
      key: 'Calendar',
    },
    {
      onPress: () => dispatch(ChangeRoute(ROUTE_MORE_SETTINGS)),
      Component: ({ color }: any) => (
        <MoreIcon width="27pt" height="27pt" color={color} />
      ),
      title: 'More',
      key: 'More',
    },
  ]

  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colorTheme.footer,
        height: 65,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {icons.map(icon => (
        <ToolbarButton key={icon.key} {...icon} />
      ))}
    </View>
  )
}

export default connect(null, dispatch =>
  bindActionCreators({ dispatch }, dispatch),
)(Footer)
