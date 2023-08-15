/* eslint-disable no-nested-ternary */
// import mineRed from '../../constrains/mineRed.jpg'
import { useState } from 'react'
import style from './style.module.css'

export function HiddenZone({ el }) {
  const [hidden, setHidden] = useState(true)

  const onClickFieldHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (hidden && (e.buttons === 1)) {
      setHidden(false)
      console.log(el)
    }
  }

  return (
    <div className={`${style.hiddenZone}`}>
      <input
        className={(hidden)
          ? `${style.hidden}`
          : `${style.unhidden}`}
        type="button"
        onMouseDown={onClickFieldHandler}
        onContextMenu={(e) => (e.preventDefault())}
        value={(el === 'mine') ? 'm' : el}
      />
    </div>
  )
}
