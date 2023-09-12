/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import style from './style.module.css'
import { Number } from '../Numbers/Number'
import { openOneZone } from '../../constrains/openOneZone'
import { openSquareZone } from '../../constrains/openSquareZone'
import { isAllFlags } from '../../constrains/isAllFlags'

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
      setField([...openOneZone({ field, column, row })])
    }
    if ((e.buttons === 2) && (currentField[column][row].hide)) {
      currentField[column][row].flag = !currentField[column][row].flag
      setField([...currentField])
    }
    if (
      (e.buttons === 4)
      && (!currentField[column][row].flag)
      && (isAllFlags({ field, column, row }))
      && (!currentField[column][row].hide)
    ) {
      // setField([...openSquareZone({ field, column, row })])
      const { notFreeZoneArray } = openSquareZone({ field, column, row })
      notFreeZoneArray.forEach((el) => {
        setField([...openOneZone({ field, column: el.column, row: el.row })])
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
