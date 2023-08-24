export function openZoneAtLowerLeftCorner({ field, column, row }) {
  const currentField = field
  let flags = 0
  const mines = currentField[column][row].value
  if (currentField[column][row - 1].flag) {
    flags += 1
  }
  if (currentField[column + 1][row - 1].flag) {
    flags += 1
  }
  if (currentField[column + 1][row].flag) {
    flags += 1
  }
  if (mines === flags) {
    if (!currentField[column][row - 1].flag) {
      currentField[column][row - 1].hide = false
    }
    if (!currentField[column + 1][row - 1].flag) {
      currentField[column + 1][row - 1].hide = false
    }
    if (!currentField[column + 1][row].flag) {
      currentField[column + 1][row].hide = false
    }
  }
  return (currentField)
}
