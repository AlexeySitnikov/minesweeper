import { useEffect } from 'react'
import style from './style.module.css'

export function Clock({
  exploded,
  seconds,
  setSeconds,
  running,
}) {
  useEffect(() => {
    const timer = setInterval(() => {
      if (!exploded && running) {
        setSeconds(seconds + 1)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [seconds])

  return (
    <div className={`${style.clock}`}>
      {seconds}
    </div>
  )
}
