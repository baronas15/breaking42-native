import { FETCH_ACTIVITY } from '../Activity.constants'
import { IFetchActivity } from '../Activity.interface'
import ActivityReducer from '../Activity.reducer'

describe('Activity', () => {
  describe('reducer', () => {
    it('should cover default state', () => {
      expect(ActivityReducer(undefined, {} as any)).toMatchInlineSnapshot(`
        Object {
          "_id": "",
          "achievements": undefined,
          "altitude": undefined,
          "external": undefined,
          "general": Object {
            "cadence": 0,
            "calories": 0,
            "distance": 0,
            "duration": 0,
            "hydration": 0,
            "local_start_time": "",
            "speed_avg": 0,
            "speed_max": 0,
            "sport": 0,
            "start_time": "",
          },
          "gps": Array [],
          "heart": undefined,
          "laps": Array [],
          "privacy": undefined,
          "userId": "",
          "weather": undefined,
        }
      `)
    })

    it('should cover FETCH_ACTIVITY', () => {
      const action: IFetchActivity = {
        type: FETCH_ACTIVITY,
        data: {
          _id: 'id',
          general: {
            duration: 10,
            calories: 20,
            distance: 50,
            workoutType: 'interval',
          },
          gps: [],
          laps: [],
          userId: 'user1',
        },
      }

      const result = ActivityReducer(undefined, action)

      expect(result).toMatchInlineSnapshot(`
        Object {
          "_id": "id",
          "achievements": undefined,
          "altitude": undefined,
          "external": undefined,
          "general": Object {
            "calories": 20,
            "distance": 50,
            "duration": 10,
            "workoutType": "interval",
          },
          "gps": Array [],
          "heart": undefined,
          "laps": Array [],
          "privacy": undefined,
          "userId": "user1",
          "weather": undefined,
        }
      `)
    })
  })
})
