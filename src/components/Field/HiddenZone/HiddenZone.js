/* eslint-disable no-nested-ternary */
// import mineRed from '../../constrains/mineRed.jpg'
import style from './style.module.css'

export function HiddenZone({ el }) {
  const onClickFieldHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e.buttons)
  }

  return (
    <div className={`${style.hiddenZone}`}>
      <input
        className={(el === 1)
          ? `${style.digit_1}`
          : (el === 2)
            ? `${style.digit_2}`
            : (el === 3)
              ? `${style.digit_3}`
              : (el === 4)
                ? `${style.digit_4}`
                : `${style.digits}`}
        type="button"
        onMouseDown={onClickFieldHandler}
        onContextMenu={(e) => (e.preventDefault())}
        value={(el === 'mine') ? 'm' : el}
      />
    </div>
  )
}
