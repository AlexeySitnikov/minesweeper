import { useEffect } from 'react'
import style from './style.module.css'

export function Clock({
  exploded,
  seconds,
  setSeconds,
}) {
  useEffect(() => {
    const timer = setInterval(() => {
      if (!exploded) {
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
