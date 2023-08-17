/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react'
import style from './style.module.css'
import mine from '../../constrains/mineRed.jpg'

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
    <div className={`${style.container}`}>

      <div
        className={`${style.square}`}
        onMouseDown={onClickFieldHandler}
        onContextMenu={(e) => e.preventDefault()}
      >
        {(el === 'mine')
          ? <img className={`${style.mine}`} src={`${mine}`} alt="mine" />
          : (
            <p className={(el === 1)
              ? `${style.digit_1}`
              : (el === 2)
                ? `${style.digit_2}`
                : (el === 3)
                  ? `${style.digit_3}`
                  : (el === 4)
                    ? `${style.digit_4}`
                    : (el === 5)
                      ? `${style.digit_5}`
                      : (el === 6)
                        ? `${style.digit_6}`
                        : (el === 7)
                          ? `${style.digit_7}`
                          : (el === 8) ? `${style.digit_8}` : `${style.digit}`}
            >
              {(el === 0) ? '' : el }
            </p>
          )}

        <div className={(hidden) ? `${style.hideSquare}` : `${style.unhideSquare}`} />

      </div>
    </div>
  )
}
