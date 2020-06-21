import {
  dayOfWeek,
  kilometersToString,
  metersToKilometers,
  roundDown,
  secondsToDuration,
  secondsToTime,
  toDateStringFromDate,
  weekEnd,
  weekStart,
} from '../Formatting.utils'

describe('Utils', () => {
  it('should cover secondsToDuration', () => {
    expect(secondsToDuration(5000)).toMatchInlineSnapshot(`"01:23:20"`)
  })

  it('should cover weekStart', () => {
    expect(weekStart(new Date('2020-05-01'))).toMatchInlineSnapshot(
      `2020-04-26T21:00:00.000Z`,
    )
  })

  it('should cover weekEnd', () => {
    expect(weekEnd(new Date('2020-05-01'))).toMatchInlineSnapshot(
      `2020-05-03T20:59:59.999Z`,
    )
  })

  it('should cover metersToKilometers', () => {
    expect(metersToKilometers(5489)).toMatchInlineSnapshot(`"5.49"`)
  })

  it('should cover kilometersToString', () => {
    expect(kilometersToString(5.74)).toMatchInlineSnapshot(`"5.74 km"`)
  })

  it('should cover toDateStringFromDate', () => {
    expect(toDateStringFromDate(new Date('2020-05-01'))).toMatchInlineSnapshot(
      `"2020-05-01"`,
    )
  })

  it('should cover secondsToTime', () => {
    expect(secondsToTime(7984)).toMatchInlineSnapshot(`
      Object {
        "hours": 2,
        "minutes": 13,
        "seconds": 4,
      }
    `)
  })

  it('should cover roundDown ', () => {
    expect(roundDown(1000)(4658.565896)).toMatchInlineSnapshot(`4000`)
  })

  it('should cover dayOfWeek', () => {
    expect(dayOfWeek(new Date('2020-05-01'))).toMatchInlineSnapshot(`"Fri"`)
    expect(dayOfWeek(new Date('2020-05-02'))).toMatchInlineSnapshot(`"Sat"`)
    expect(dayOfWeek(new Date('2020-05-03'))).toMatchInlineSnapshot(`"Sun"`)
    expect(dayOfWeek(new Date('2020-05-04'))).toMatchInlineSnapshot(`"Mon"`)
    expect(dayOfWeek(new Date('2020-05-05'))).toMatchInlineSnapshot(`"Tue"`)
    expect(dayOfWeek(new Date('2020-05-06'))).toMatchInlineSnapshot(`"Wed"`)
    expect(dayOfWeek(new Date('2020-05-07'))).toMatchInlineSnapshot(`"Thu"`)
    expect(dayOfWeek('')).toMatchInlineSnapshot(`""`)
  })
})
