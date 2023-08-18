/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import style from './style.module.css'
import { Number } from '../Numbers/Number'

export function HiddenZone(
  {
    column, row, field, setField,
  },
) {
  const currentField = field

  const onClickFieldHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.buttons === 0) {
      if (currentField[column][row] >= 10) {
        currentField[column][row] -= 10
      } else {
        currentField[column][row] += 10
      }
      setField(currentField)
      console.log(field)
    }
  }

  return (
    <div className={`${style.container}`}>
      <div
        className={`${style.square}`}
        onClick={onClickFieldHandler}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Number el={currentField[column][row]} />

        {/* <div className={(hidden) ? `${style.hideSquare}` : `${style.unhideSquare}`}> */}
        {/* {(flag) ? <img className={`${style.flag}`} src={`${flagLogo}`} alt="flag" /> : ''} */}

        {/* </div> */}

      </div>
    </div>
  )
}
