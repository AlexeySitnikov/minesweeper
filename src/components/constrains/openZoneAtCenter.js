import { openFreeZone } from './openFreeZone'

export function openZoneAtCenter({ field, column, row }) {
  let currentField = field
  let flags = 0
  const mines = currentField[column][row].value
  const arr = []
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
      if (currentField[column][row - 1].value === 0) {
        arr.push({
          column,
          row: row - 1,
        })
      }
    }
    if (!currentField[column - 1][row - 1].flag) {
      currentField[column - 1][row - 1].hide = false
      if (currentField[column - 1][row - 1].value === 0) {
        arr.push({
          column: column - 1,
          row: row - 1,
        })
      }
    }
    if (!currentField[column - 1][row].flag) {
      currentField[column - 1][row].hide = false
      if (currentField[column - 1][row].value === 0) {
        arr.push({
          column: column - 1,
          row,
        })
      }
    }
    if (!currentField[column - 1][row + 1].flag) {
      currentField[column - 1][row + 1].hide = false
      if (currentField[column - 1][row + 1].value === 0) {
        arr.push({
          column: column - 1,
          row: row + 1,
        })
      }
    }
    if (!currentField[column][row + 1].flag) {
      currentField[column][row + 1].hide = false
      if (currentField[column][row + 1].value === 0) {
        arr.push({
          column,
          row: row + 1,
        })
      }
    }
    if (!currentField[column + 1][row + 1].flag) {
      currentField[column + 1][row + 1].hide = false
      if (currentField[column + 1][row + 1].value === 0) {
        arr.push({
          column: column + 1,
          row: row + 1,
        })
      }
    }
    if (!currentField[column + 1][row].flag) {
      currentField[column + 1][row].hide = false
      if (currentField[column + 1][row].value === 0) {
        arr.push({
          column: column + 1,
          row,
        })
      }
    }
    if (!currentField[column + 1][row - 1].flag) {
      currentField[column + 1][row - 1].hide = false
      if (currentField[column + 1][row - 1].value === 0) {
        arr.push({
          column: column + 1,
          row: row - 1,
        })
      }
    }
  }
  arr.forEach((el) => {
    currentField = openFreeZone({ field: currentField, column: el.column, row: el.row })
  })
  return (currentField)
}
