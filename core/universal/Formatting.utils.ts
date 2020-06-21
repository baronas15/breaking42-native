import { endOfWeek, startOfWeek } from 'date-fns/esm'
import {
  format,
  isFriday,
  isMonday,
  isSaturday,
  isSunday,
  isThursday,
  isTuesday,
  isWednesday,
} from 'date-fns/fp'

export { differenceInSeconds } from 'date-fns/fp'

export { addDays, subDays, compareAsc } from 'date-fns'

export const weekStart = (x: Date) => startOfWeek(x, { weekStartsOn: 1 })
export const weekEnd = (x: Date) => endOfWeek(x, { weekStartsOn: 1 })

export const secondsToDuration = (seconds?: number): string => {
  const date = new Date(0)
  date.setSeconds(seconds || 0)
  const duration = date.toISOString().substr(11, 8)

  return duration
}

export const metersToKilometers = (meters?: number): string => {
  const value = meters ? meters : 0
  return (value / 1000).toFixed(2).toString()
}

export const metersToString = (meters?: number): string => {
  const value = meters ? meters : 0
  return `${metersToKilometers(value)} km`
}

export const kilometersToString = (km?: number): string => {
  const value = km ? km : 0
  return `${value.toFixed(2)} km`
}

export const toDateString = (date: string): string => {
  const dateObj = new Date(date)
  return format('yyyy-MM-dd', dateObj)
}

export const toDateStringFromDate = (date: Date): string => {
  return format('yyyy-MM-dd', date)
}

export const dayOfWeek = (day: string | Date): string => {
  if (isMonday(new Date(day))) {
    return 'Mon'
  }
  if (isTuesday(new Date(day))) {
    return 'Tue'
  }
  if (isWednesday(new Date(day))) {
    return 'Wed'
  }
  if (isThursday(new Date(day))) {
    return 'Thu'
  }
  if (isFriday(new Date(day))) {
    return 'Fri'
  }
  if (isSaturday(new Date(day))) {
    return 'Sat'
  }
  if (isSunday(new Date(day))) {
    return 'Sun'
  }
  return ''
}

export const roundDown = (precision: number) => (num: number) =>
  Math.floor(num / precision) * precision
export const roundDownToThousand = roundDown(1000)

export const secondsToTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600)
  const minutes = Math.floor((timeInSeconds - hours * 3600) / 60)
  const seconds = timeInSeconds - hours * 3600 - minutes * 60

  return {
    hours,
    minutes,
    seconds,
  }
}
