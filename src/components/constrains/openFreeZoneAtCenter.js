export function openFreeZoneAtCenter({ field, column, row }) {
  const currentField = field
  if (!currentField[column - 1][row].flag) {
    currentField[column - 1][row].hide = false
  }
  if (!currentField[column - 1][row - 1].flag) {
    currentField[column - 1][row - 1].hide = false
  }
  if (!currentField[column][row - 1].flag) {
    currentField[column][row - 1].hide = false
  }
  if (!currentField[column + 1][row - 1].flag) {
    currentField[column + 1][row - 1].hide = false
  }
  if (!currentField[column + 1][row].flag) {
    currentField[column + 1][row].hide = false
  }
  if (!currentField[column + 1][row + 1].flag) {
    currentField[column + 1][row + 1].hide = false
  }
  if (!currentField[column][row + 1].flag) {
    currentField[column][row + 1].hide = false
  }
  if (!currentField[column - 1][row + 1].flag) {
    currentField[column - 1][row + 1].hide = false
  }
  return (currentField)
}
