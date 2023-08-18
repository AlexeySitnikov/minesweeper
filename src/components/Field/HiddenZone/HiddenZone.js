/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
    // console.log(e.buttons)
    if ((e.buttons === 1) && (currentField[column][row].hide)) {
      currentField[column][row].hide = false
      setField([...currentField])
    }
    if ((e.buttons === 2) && (currentField[column][row].hide)) {
      currentField[column][row].flag = !currentField[column][row].flag
      setField([...currentField])
    }
  }

  return (
    <div className={`${style.container}`}>
      <div
        className={`${style.square}`}
        onMouseDown={onClickFieldHandler}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Number el={currentField[column][row]} />

      </div>
    </div>
  )
}
