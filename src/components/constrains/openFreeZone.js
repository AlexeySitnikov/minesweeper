import { COLUMN_NUMBER } from './columnNumber'
import { openFreeZoneAtCenter } from './openFreeZoneAtCenter'
import { ROW_NUMBER } from './rowNumber'

export function openFreeZone({ field, column, row }) {
  const currentField = field
  currentField[column][row].hide = false
  if ((column > 0) && (column < COLUMN_NUMBER - 1) && (row > 0) && (row < ROW_NUMBER - 1)) {
    openFreeZoneAtCenter({ field, column, row })
  }
  return (currentField)
}
