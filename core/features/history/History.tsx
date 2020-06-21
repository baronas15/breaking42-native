import { Button } from 'native-base'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements' // DO LATER: remove this library
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { colorTheme } from '../../shared/design/Palette.context'
import { IReducer } from '../../shared/store/Reducers.interface'
import { ApiContext, ApiInterface } from '../../shared/utils/Api.utils'
import { IDispatch } from '../../universal/Action.interface'
import { Map } from '../../universal/components/Map'
import { Property } from '../../universal/components/Property'
import { ScrollContainer } from '../../universal/components/ScrollContainer'
import { SpinnerView } from '../../universal/components/SpinnerView'
import {
  kilometersToString,
  secondsToDuration,
  toDateString,
} from '../../universal/Formatting.utils'
import { isArrayEmpty } from '../../universal/Helper.utils'
import * as activityActions from '../activity/Activity.actions'
import * as actions from './History.actions'
import { IHistoryReducer } from './History.interface'

interface Props {
  history: IHistoryReducer
  openActivity: (activityId: string) => IDispatch
  fetchHistory: (api: ApiInterface) => IDispatch
}

const History = ({ history, fetchHistory, openActivity }: Props) => {
  const api = useContext(ApiContext)

  useEffect(() => {
    fetchHistory(api)
  }, [api, fetchHistory])

  if (isArrayEmpty(history.activities)) {
    return <SpinnerView />
  }

  return (
    <ScrollContainer footerOffset>
      <View style={{ flex: 1 }}>
        {history.activities.map(x => (
          <Card key={x._id} title={toDateString(x.general.start_time || '')}>
            <Map gps={x.gps} disableGestures />
            <View style={{ flex: 2, flexDirection: 'row' }}>
              <Property
                title={'Time:'}
                item={secondsToDuration(x.general.duration)}
              />
              <Property
                title={'Distance:'}
                item={kilometersToString(x.general.distance)}
              />
            </View>
            {/* DO LATER: Update typography and button design */}
            <Button
              block
              info
              style={{ backgroundColor: colorTheme.button }}
              onPress={() => openActivity(x._id)}>
              <Text style={{ color: '#fff' }}>VIEW NOW</Text>
            </Button>
          </Card>
        ))}
      </View>
    </ScrollContainer>
  )
}

export default connect(
  (state: IReducer) => ({
    history: state.history,
  }),
  dispatch => bindActionCreators({ ...actions, ...activityActions }, dispatch),
)(History)
