import { COLUMN_NUMBER } from './columnNumber'
import { openZoneAtCenter } from './openZoneAtCenter'
import { openZoneAtFirstColumn } from './openZoneAtFirstColumn'
import { openZoneAtFirstRow } from './openZoneAtFirstRow'
import { openZoneAtLastColumn } from './openZoneAtLastColumn'
import { openZoneAtLastRow } from './openZoneAtLastRow'
import { openZoneAtLowerLeftCorner } from './openZoneAtLowerLeftCorner'
import { openZoneAtLowerRightCorner } from './openZoneAtLowerRightCorner'
import { openZoneAtUpperLeftCorner } from './openZoneAtUpperLeftCorner'
import { openZoneAtUpperRightCorner } from './openZoneAtUpperRightCorner'
import { ROW_NUMBER } from './rowNumber'

export function openZone({
  column, row, field,
}) {
  if ((column > 0) && (column < COLUMN_NUMBER - 1) && (row > 0) && (row < ROW_NUMBER - 1)) {
    return (openZoneAtCenter({ field, column, row }))
  }
  if ((column === 0) && (row !== 0) && (row !== ROW_NUMBER - 1)) {
    return (openZoneAtFirstColumn({ field, column, row }))
  }
  if ((column === COLUMN_NUMBER - 1) && (row !== 0) && (row !== ROW_NUMBER - 1)) {
    return (openZoneAtLastColumn({ field, column, row }))
  }
  if ((row === 0) && (column !== 0) && (column !== COLUMN_NUMBER - 1)) {
    return (openZoneAtFirstRow({ field, column, row }))
  }
  if ((row === ROW_NUMBER - 1) && (column !== 0) && (column !== COLUMN_NUMBER - 1)) {
    return (openZoneAtLastRow({ field, column, row }))
  }
  if ((column === 0) && (row === 0)) {
    return (openZoneAtUpperLeftCorner({ field, column, row }))
  }
  if ((column === (COLUMN_NUMBER - 1)) && (row === 0)) {
    return (openZoneAtUpperRightCorner({ field, column, row }))
  }
  if ((column === 0) && (row === (ROW_NUMBER - 1))) {
    return (openZoneAtLowerLeftCorner({ field, column, row }))
  }
  if ((column === (COLUMN_NUMBER - 1)) && (row === (ROW_NUMBER - 1))) {
    return (openZoneAtLowerRightCorner({ field, column, row }))
  }
  return (field)
}
