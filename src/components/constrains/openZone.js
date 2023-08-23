import { COLUMN_NUMBER } from './columnNumber'
import { ROW_NUMBER } from './rowNumber'

export function openZone({
  column, row, field,
}) {
  const currentField = field
  const mines = currentField[column][row].value
  let flags = 0
  if ((column > 0) && (column < COLUMN_NUMBER - 1) && (row > 0) && (row < ROW_NUMBER - 1)) {
    if (currentField[column][row - 1].flag) {
      flags += 1
    }
    if (currentField[column - 1][row - 1].flag) {
      flags += 1
    }
    if (currentField[column - 1][row].flag) {
      flags += 1
    }
    if (currentField[column - 1][row + 1].flag) {
      flags += 1
    }
    if (currentField[column][row + 1].flag) {
      flags += 1
    }
    if (currentField[column + 1][row + 1].flag) {
      flags += 1
    }
    if (currentField[column + 1][row].flag) {
      flags += 1
    }
    if (currentField[column + 1][row - 1].flag) {
      flags += 1
    }
    if (mines === flags) {
      if (!currentField[column][row - 1].flag) {
        currentField[column][row - 1].hide = false
      }
      if (!currentField[column - 1][row - 1].flag) {
        currentField[column - 1][row - 1].hide = false
      }
      if (!currentField[column - 1][row].flag) {
        currentField[column - 1][row].hide = false
      }
      if (!currentField[column - 1][row + 1].flag) {
        currentField[column - 1][row + 1].hide = false
      }
      if (!currentField[column][row + 1].flag) {
        currentField[column][row + 1].hide = false
      }
      if (!currentField[column + 1][row + 1].flag) {
        currentField[column + 1][row + 1].hide = false
      }
      if (!currentField[column + 1][row].flag) {
        currentField[column + 1][row].hide = false
      }
      if (!currentField[column + 1][row - 1].flag) {
        currentField[column + 1][row - 1].hide = false
      }
    //   setField([...currentField])
    }
  }
  return (currentField)
}
