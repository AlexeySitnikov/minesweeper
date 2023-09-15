import { useEffect } from 'react'

export function Clock({ firstButtonPressed, seconds, setSeconds }) {
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [firstButtonPressed])

  // console.log({ seconds })

  return (
    <div>{seconds}</div>
  )
}
