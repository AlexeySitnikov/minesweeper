import { COLUMN_NUMBER } from './columnNumber'
import { openFreeZoneAtCenter } from './openFreeZoneAtCenter'
import { openFreeZoneAtFirstColumn } from './openFreeZoneAtFirstColumn'
import { openFreeZoneAtFirstRow } from './openFreeZoneAtFirstRow'
import { openFreeZoneAtLastColumn } from './openFreeZoneAtLastColumn'
import { openFreeZoneAtLastRow } from './openFreeZoneAtLastRow'
import { openFreeZoneAtLowerLeftCorner } from './openFreeZoneAtLowerLeftCorner'
import { openFreeZoneAtLowerRightCorner } from './openFreeZoneAtLowerRightCorner'
import { openFreeZoneAtUpperLeftCorner } from './openFreeZoneAtUpperLeftCorner'
import { openFreeZoneAtUpperRightCorner } from './openFreeZoneAtUpperRightCorner'
import { ROW_NUMBER } from './rowNumber'

export function openFreeZone({ field, column, row }) {
  const currentField = field
  // currentField[column][row].hide = false
  if ((column > 0) && (column < COLUMN_NUMBER - 1) && (row > 0) && (row < ROW_NUMBER - 1)) {
    return (openFreeZoneAtCenter({ field, column, row }))
  }
  if ((column === 0) && (row !== 0) && (row !== ROW_NUMBER - 1)) {
    return (openFreeZoneAtFirstColumn({ field, column, row }))
  }
  if ((column === COLUMN_NUMBER - 1) && (row !== 0) && (row !== ROW_NUMBER - 1)) {
    return (openFreeZoneAtLastColumn({ field, column, row }))
  }
  if ((row === 0) && (column !== 0) && (column !== COLUMN_NUMBER - 1)) {
    return (openFreeZoneAtFirstRow({ field, column, row }))
  }
  if ((row === ROW_NUMBER - 1) && (column !== 0) && (column !== COLUMN_NUMBER - 1)) {
    return (openFreeZoneAtLastRow({ field, column, row }))
  }
  if ((column === 0) && (row === 0)) {
    return (openFreeZoneAtUpperLeftCorner({ field, column, row }))
  }
  if ((column === (COLUMN_NUMBER - 1)) && (row === 0)) {
    return (openFreeZoneAtUpperRightCorner({ field, column, row }))
  }
  if ((column === 0) && (row === (ROW_NUMBER - 1))) {
    return (openFreeZoneAtLowerLeftCorner({ field, column, row }))
  }
  if ((column === (COLUMN_NUMBER - 1)) && (row === (ROW_NUMBER - 1))) {
    return (openFreeZoneAtLowerRightCorner({ field, column, row }))
  }
  return (currentField)
}
