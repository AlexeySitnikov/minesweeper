import { getSquareZone } from './getSquareZone'
import { openFreeZone } from './openFreeZone'
import { openOneZone } from './openOneZone'

export function openSquareZone({
  field, column, row, setField, setExploded,
}) {
  const currentField = field
  getSquareZone({ field: currentField, column, row })
    .notFreeZoneArray.forEach((el) => {
      if (currentField[el.column][el.row].mine) {
        setExploded(true)
      }
      setField([...openOneZone({
        field: currentField, column: el.column, row: el.row,
      })])
    })

  getSquareZone({ field: currentField, column, row })
    .freeZoneArray.forEach((el) => {
      if (currentField[el.column][el.row].mine) {
        setExploded(true)
      }
      setField([...openOneZone({
        field: currentField, column: el.column, row: el.row,
      })])
      openFreeZone({
        field: currentField, column: el.column, row: el.row, setField,
      })
    })
}
