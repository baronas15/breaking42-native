import {
  PUSH_GPS_DATA,
  START_TRACKING,
  STOP_TRACKING,
} from '../Tracking.constants'
import {
  IPushGpsDataAction,
  IStartTrackingAction,
  IStopTrackingAction,
} from '../Tracking.interface'
import TrackingReducer from '../Tracking.reducer'

describe('Tracking', () => {
  describe('reducer', () => {
    it('should cover default state', () => {
      expect(TrackingReducer(undefined, {} as any)).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "_id": "",
            "general": Object {
              "distance": 0,
              "duration": 0,
              "local_start_time": "",
              "sport": 0,
              "start_time": "",
            },
            "gps": Array [],
          },
          "startingPosition": undefined,
        }
      `)
    })

    it('should cover START_TRACKING', () => {
      const action: IStartTrackingAction = {
        type: START_TRACKING,
        data: {
          _id: 'workoutID',
          general: {
            distance: 1,
            duration: 1,
          },
        },
        startingPosition: {
          distance: 50,
          latitude: 50,
          longitude: 50,
          time: '50',
          sensor_data: {},
        },
      }

      const result = TrackingReducer(undefined, action)

      expect(result).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "_id": "workoutID",
            "general": Object {
              "distance": 1,
              "duration": 1,
            },
          },
          "startingPosition": Object {
            "distance": 50,
            "latitude": 50,
            "longitude": 50,
            "sensor_data": Object {},
            "time": "50",
          },
        }
      `)
    })

    it('should cover STOP_TRACKING', () => {
      const action: IStopTrackingAction = {
        type: STOP_TRACKING,
        data: {
          _id: 'workoutID',
          general: {
            distance: 1,
            duration: 1,
          },
        },
      }

      const result = TrackingReducer(undefined, action)

      expect(result).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "_id": "workoutID",
            "general": Object {
              "distance": 1,
              "duration": 1,
            },
          },
          "startingPosition": undefined,
        }
      `)
    })

    it('should cover PUSH_GPS_DATA', () => {
      const action: IPushGpsDataAction = {
        type: PUSH_GPS_DATA,
        data: {
          distance: 50,
          latitude: 50,
          longitude: 50,
          time: '50',
          sensor_data: {},
        },
      }

      const result = TrackingReducer(undefined, action)

      expect(result).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "_id": "",
            "general": Object {
              "distance": 0,
              "duration": 0,
              "local_start_time": "",
              "sport": 0,
              "start_time": "",
            },
            "gps": Array [
              Object {
                "distance": 50,
                "latitude": 50,
                "longitude": 50,
                "sensor_data": Object {},
                "time": "50",
              },
            ],
          },
          "startingPosition": undefined,
        }
      `)
    })
  })
})
