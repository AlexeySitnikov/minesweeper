// import { useEffect } from 'react'
import style from './style.module.css'

export function Clock({
  // firstButtonPressed,
  seconds,
  // setSeconds
}) {
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setSeconds(seconds + 1)
  //   }, 1000)
  //   return () => clearInterval(timer)
  // }, [firstButtonPressed])

  // // console.log({ seconds })

  return (
    <div className={`${style.clock}`}>
      {seconds}
    </div>
  )
}
