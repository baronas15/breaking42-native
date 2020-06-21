import {
  compareAsc,
  dayOfWeek,
  subDays,
} from '../../universal/Formatting.utils'
import {
  filter,
  map,
  pipe,
  range,
  reduce,
  reverse,
} from '../../universal/Functional.utils'

// DO LATER: fix any types
export function mapDistanceToWeekDays(data: any) {
  return pipe([
    map(
      pipe([
        (x: number) => subDays(new Date(), x),
        (x: Date) => dayOfWeek(x),
        (x: string) => ({ day: x, distance: data[x] ? data[x] : 0 }),
      ]),
    ),
    reverse,
  ])(range(1)(8))
}

// DO LATER: fix any types
export function countDistanceByDay<T>(data: T) {
  return pipe([
    filter(
      (x: any) =>
        compareAsc(new Date(x.general.start_time), subDays(new Date(), 7)) ===
        1,
    ),
    map((x: any) => ({
      distance: x.general.distance,
      time: dayOfWeek(x.general.start_time),
    })),
    reduce((xs: any) => (x: any) => ({
      ...xs,
      [x.time]: xs[x.time] ? x.distance + xs[x.time] : x.distance,
    }))({}),
  ])(data)
}
