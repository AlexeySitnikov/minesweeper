/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import style from './style.module.css'
import { Number } from '../Numbers/Number'
import { openZone } from '../../constrains/openZone'
import { openFreeZone } from '../../constrains/openFreeZone'

export function HiddenZone(
  {
    column, row, field, setField,
  },
) {
  const currentField = field
  const onClickFieldHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if ((e.buttons === 1) && (currentField[column][row].hide)) {
      console.log({ column })
      console.log({ row })
      currentField[column][row].hide = false
      if (currentField[column][row].value === 0) {
        openFreeZone()
      }
      setField([...currentField])
    }
    if ((e.buttons === 2) && (currentField[column][row].hide)) {
      currentField[column][row].flag = !currentField[column][row].flag
      setField([...currentField])
    }
    if ((e.buttons === 3) && (!currentField[column][row].hide)) {
      if (currentField[column][row].value > 0) {
        setField([...openZone({
          field, column, row,
        })])
      }
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
