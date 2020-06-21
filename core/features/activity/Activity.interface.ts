import { Activity } from '../../shared/domain/Domain.interface'
import { FETCH_ACTIVITY } from './Activity.constants'

export interface IActivityReducer extends Activity {}

export type IActivityAction = IFetchActivity

export interface IFetchActivity {
  type: typeof FETCH_ACTIVITY
  data: Activity
}
