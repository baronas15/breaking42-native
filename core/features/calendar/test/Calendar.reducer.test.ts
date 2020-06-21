import {
  CLEAR_SINGLE_DAY,
  FETCH_CALENDAR,
  FETCH_CALENDAR_SINGLE_DAY,
} from '../Calendar.constants'
import { ICalendarAction } from '../Calendar.interface'
import CalendarReducer, { defaultCalendarState } from '../Calendar.reducer'

describe('Calendar', () => {
  describe('reducer', () => {
    it('should cover default state', () => {
      expect(CalendarReducer(undefined, {} as any)).toMatchInlineSnapshot(`
        Object {
          "allActivities": Array [],
          "singleDay": Array [],
        }
      `)
    })

    it('should cover FETCH_CALENDAR', () => {
      const action: ICalendarAction = {
        type: FETCH_CALENDAR,
        data: [
          {
            _id: '',
            distance: 50,
            duration: 40,
            sport: 3,
            start_time: '1',
          },
        ],
      }

      const result = CalendarReducer(undefined, action)

      expect(result).toMatchInlineSnapshot(`
        Object {
          "allActivities": Array [
            Object {
              "_id": "",
              "distance": 50,
              "duration": 40,
              "sport": 3,
              "start_time": "1",
            },
          ],
          "singleDay": Array [],
        }
      `)
    })

    it('should cover FETCH_CALENDAR_SINGLE_DAY', () => {
      const action: ICalendarAction = {
        type: FETCH_CALENDAR_SINGLE_DAY,
        data: [
          {
            _id: '',
            distance: 50,
            duration: 40,
            sport: 3,
            start_time: '1',
          },
        ],
      }

      const result = CalendarReducer(defaultCalendarState, action)

      expect(result).toMatchInlineSnapshot(`
        Object {
          "allActivities": Array [],
          "singleDay": Array [
            Object {
              "_id": "",
              "distance": 50,
              "duration": 40,
              "sport": 3,
              "start_time": "1",
            },
          ],
        }
      `)
    })

    it('should cover CLEAR_SINGLE_DAY', () => {
      const action: ICalendarAction = {
        type: CLEAR_SINGLE_DAY,
      }

      const result = CalendarReducer(
        {
          allActivities: [
            {
              _id: '',
              distance: 50,
              duration: 40,
              sport: 3,
              start_time: '1',
            },
          ],
          singleDay: [
            {
              _id: '',
              distance: 50,
              duration: 40,
              sport: 3,
              start_time: '1',
            },
          ],
        },
        action,
      )

      expect(result).toMatchInlineSnapshot(`
        Object {
          "allActivities": Array [
            Object {
              "_id": "",
              "distance": 50,
              "duration": 40,
              "sport": 3,
              "start_time": "1",
            },
          ],
          "singleDay": Array [],
        }
      `)
    })
  })
})
