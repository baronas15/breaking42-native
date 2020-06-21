import { FETCH_PAST_WEEK_WORKOUTS } from '../Insights.constants'
import { IFetchPastWeekAction } from '../Insights.interface'
import InsightsReducer from '../Insights.reducer'

describe('Insights', () => {
  describe('reducer', () => {
    it('should cover default state', () => {
      expect(InsightsReducer(undefined, {} as any)).toMatchInlineSnapshot(`
        Object {
          "pastWeekData": Array [],
        }
      `)
    })

    it('should cover FETCH_PAST_WEEK_WORKOUTS', () => {
      const action: IFetchPastWeekAction = {
        type: FETCH_PAST_WEEK_WORKOUTS,
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

      const result = InsightsReducer(undefined, action)

      expect(result).toMatchInlineSnapshot(`
        Object {
          "pastWeekData": Array [
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
