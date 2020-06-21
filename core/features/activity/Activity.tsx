import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ChangeRoute } from '../../shared/layout/routes/Router.actions'
import { ROUTE_HISTORY } from '../../shared/layout/routes/Router.constants'
import { IReducer } from '../../shared/store/Reducers.interface'
import { ApiContext } from '../../shared/utils/Api.utils'
import { Map } from '../../universal/components/Map'
import { Property } from '../../universal/components/Property'
import { SpinnerView } from '../../universal/components/SpinnerView'
import { secondsToDuration } from '../../universal/Formatting.utils'
import { useBackButton } from '../../universal/useBackButton'
import * as actions from './Activity.actions'

const Activity = ({ id, activity, fetchActivity, dispatch }: any) => {
  const api = useContext(ApiContext)

  useBackButton(() => {
    dispatch(ChangeRoute(ROUTE_HISTORY))
  })

  useEffect(() => {
    fetchActivity(api, id)
  }, [fetchActivity, api, id])

  if (!activity.gps || !activity.gps.length || !activity.general) {
    return <SpinnerView />
  }

  const TotalDistance = (
    <Property
      title={'Distance:'}
      item={`${(activity.general.distance || 0).toFixed(2).toString()} km`}
    />
  )

  return (
    <>
      <Map gps={activity.gps} />
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Property
          title={'Time:'}
          item={secondsToDuration(activity.general.duration)}
        />
        {TotalDistance}
      </View>
    </>
  )
}

export default connect(
  (state: IReducer) => ({ activity: state.activity }),
  dispatch => bindActionCreators({ dispatch, ...actions }, dispatch),
)(Activity)
