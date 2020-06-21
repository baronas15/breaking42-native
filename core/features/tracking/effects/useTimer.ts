import { useEffect, useState } from 'react'

import { differenceInSeconds } from '../../../universal/Formatting.utils'

export function useTimer(
  startTime: Date,
  pause: boolean,
  onTick: Function,
): [number] {
  const [lastTime, setLastTime] = useState(startTime)
  const [resumeTime, setResumeTime] = useState<Date | null>(null)
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    const second = 1000

    const id = setInterval(() => {
      if (!pause) {
        const previousTick = resumeTime ? resumeTime : lastTime

        const now = new Date()

        const newTime = elapsedTime + differenceInSeconds(previousTick, now)

        setElapsedTime(newTime)

        onTick(newTime)

        setLastTime(now)
        setResumeTime(null)
      } else {
        setResumeTime(new Date())
      }
    }, second)

    return () => clearInterval(id)
  }, [pause, lastTime, resumeTime, elapsedTime, onTick])

  return [elapsedTime]
}
