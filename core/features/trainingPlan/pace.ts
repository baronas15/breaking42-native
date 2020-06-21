// https://assets.hearstapps.com/rwtools/rws-training-pace-calculator.html

// DO LATER: use pace calculator

export function main() {
  calculatePace({
    metric: true,
    hours: 4,
    minutes: 45,
    seconds: 0,
    distance: 42.2,
  })
}

export function calculatePace({
  metric,
  hours,
  minutes,
  seconds,
  distance,
}: {
  metric: boolean
  hours: number
  minutes: number
  seconds: number
  distance: number
}) {
  const time = hours * 60 + minutes * 1 + seconds / 60

  if (time <= 0 || isNaN(time)) {
    console.log('Please input a valid time')
    return {}
  }

  if (distance <= 0 || isNaN(distance)) {
    console.log('Please input a valid race length.')
    return {}
  }

  const distanceInMeters = metric ? distance * 1000 : distance * 1609

  const speed = distanceInMeters / time

  let VO2Max = velToVO2(speed) / timeToPercentVO2Max(time)

  if (VO2Max <= 0) {
    return {}
  }

  var velEasy = VO2ToVel(VO2Max * 0.7)
  var velTempo = VO2ToVel(VO2Max * 0.88)
  var velMaximum = VO2ToVel(VO2Max)
  var velSpeed = VO2ToVel(VO2Max * 1.1)
  var velxlong = VO2ToVel(VO2Max * 0.6)
  var velYasso = velMaximum * 1.95

  var toAppend
  if (metric) {
    toAppend = ' min/km'
  } else {
    toAppend = ' min/mile'
  }

  return {
    easy: '' + timeConvert(velEasy, metric) + toAppend,
    tempo: '' + timeConvert(velTempo, metric) + toAppend,
    maximum: '' + timeConvert(velMaximum, metric) + toAppend,
    speed: '' + timeConvert(velSpeed, metric) + toAppend,
    xlong:
      '' +
      timeConvert(velEasy, metric) +
      ' - ' +
      timeConvert(velxlong, metric) +
      toAppend,
    yasso: '' + timeConvert(velYasso, false) + ' min/800',
  }
}

// Takes a velocity and converts it to a VO2 level.
function velToVO2(vel: number) {
  return -4.6 + 0.182258 * vel + 0.000104 * vel * vel
}

// Takes a VO2 measurement and converts it to a velocity.
function VO2ToVel(VO2: number) {
  return 29.54 + 5.000663 * VO2 - 0.007546 * VO2 * VO2
}

// Takes a time in minutes and uses EQ 2 to convert it to a percent of VO2 maximum.
function timeToPercentVO2Max(minutes: number) {
  return (
    0.8 +
    0.1894393 * Math.exp(-0.012778 * minutes) +
    0.2989558 * Math.exp(-0.1932695 * minutes)
  )
}

// Speed - meeters/minute
// @return - string representing a pace in minutes per mile or km.
function timeConvert(speed: number, isMetric: boolean) {
  const ans = !isMetric ? (1 / speed) * 1609 : (1 / speed) * 1000

  const paceMinutes = Math.floor(ans)
  const paceSeconds = Math.floor((ans - paceMinutes) * 60)

  if (paceSeconds > 9) {
    return `${paceMinutes}:${paceSeconds}`
  } else {
    return `${paceMinutes}:0${paceSeconds}`
  }
}
