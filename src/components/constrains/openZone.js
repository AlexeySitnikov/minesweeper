import { COLUMN_NUMBER } from './columnNumber'
import { ROW_NUMBER } from './rowNumber'

export function openZone({
  column, row,
}) {
  if ((column > 0) && (column < COLUMN_NUMBER - 1) && (row > 0) && (row < ROW_NUMBER - 1)) {
    console.log('center')
  }
  return (1)
}
