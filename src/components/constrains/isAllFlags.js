export function isAllFlags({ field, column, row }) {
  const currentField = field
  let flags = 0
  const mines = currentField[column][row].value

  if (mines === 0) {
    return true
  }

  if (currentField[column]) {
    if ((currentField[column][row - 1])) {
      if ((currentField[column][row - 1].flag)) {
        flags += 1
      }
    }
    if ((currentField[column][row + 1])) {
      if ((currentField[column][row + 1].flag)) {
        flags += 1
      }
    }
  }

  if (currentField[column - 1]) {
    if ((currentField[column - 1][row - 1])) {
      if ((currentField[column - 1][row - 1].flag)) {
        flags += 1
      }
    }
    if ((currentField[column - 1][row + 1])) {
      if ((currentField[column - 1][row + 1].flag)) {
        flags += 1
      }
    }
    if ((currentField[column - 1][row])) {
      if ((currentField[column - 1][row].flag)) {
        flags += 1
      }
    }
  }

  if (currentField[column + 1]) {
    if ((currentField[column + 1][row - 1])) {
      if ((currentField[column + 1][row - 1].flag)) {
        flags += 1
      }
    }
    if ((currentField[column + 1][row])) {
      if ((currentField[column + 1][row].flag)) {
        flags += 1
      }
    }
    if ((currentField[column + 1][row + 1])) {
      if ((currentField[column + 1][row + 1].flag)) {
        flags += 1
      }
    }
  }

  if (flags === mines) {
    return true
  }
  return false
}
