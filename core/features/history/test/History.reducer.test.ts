import { FETCH_HISTORY } from '../History.constants'
import { IHistoryAction } from '../History.interface'
import HistoryReducer from '../History.reducer'

describe('History', () => {
  describe('reducer', () => {
    it('should cover default state', () => {
      expect(HistoryReducer(undefined, {} as any)).toMatchInlineSnapshot(`
        Object {
          "activities": Array [],
        }
      `)
    })

    it('should cover FETCH_HISTORY', () => {
      const action: IHistoryAction = {
        type: FETCH_HISTORY,
        data: [
          {
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
        ],
      }

      const result = HistoryReducer(undefined, action)

      expect(result).toMatchInlineSnapshot(`
        Object {
          "activities": Array [
            Object {
              "_id": "id",
              "general": Object {
                "calories": 20,
                "distance": 50,
                "duration": 10,
                "workoutType": "interval",
              },
              "gps": Array [],
              "laps": Array [],
              "userId": "user1",
            },
          ],
        }
      `)
    })
  })
})
