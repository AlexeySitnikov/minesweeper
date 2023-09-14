/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import style from './style.module.css'
import { Number } from '../Numbers/Number'
import { openOneZone } from '../../constrains/openOneZone'
import { getSquareZone } from '../../constrains/getSquareZone'
import { isAllFlags } from '../../constrains/isAllFlags'
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

    if (
      (e.buttons === 1) && (currentField[column][row].hide) && (!currentField[column][row].flag)
    ) {
      if (currentField[column][row].value === 0) {
        openFreeZone({
          field: currentField, column, row, setField,
        })
      }
      setField([...openOneZone({ field: currentField, column, row })])
    }

    if ((e.buttons === 2) && (currentField[column][row].hide)) {
      currentField[column][row].flag = !currentField[column][row].flag
      setField([...currentField])
    }

    if (
      ((e.buttons === 3) || ((e.buttons === 4)))
      && (!currentField[column][row].flag)
      && (isAllFlags({ field, column, row }))
      && (!currentField[column][row].hide)
    ) {
      getSquareZone({ field: currentField, column, row })
        .notFreeZoneArray.forEach((el) => {
          setField([...openOneZone({ field: currentField, column: el.column, row: el.row })])
        })

      getSquareZone({ field: currentField, column, row })
        .freeZoneArray.forEach((el) => {
          setField([...openOneZone({ field: currentField, column: el.column, row: el.row })])
          openFreeZone({
            field: currentField, column: el.column, row: el.row, setField,
          })
        })
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
