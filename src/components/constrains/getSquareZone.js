export function getSquareZone({ field, column, row }) {
  const currentField = field
  const freeZoneArray = []
  const notFreeZoneArray = []

  if (currentField[column]) {
    if ((currentField[column][row - 1]) && (!currentField[column][row - 1].flag)) {
      if (currentField[column][row - 1].value === 0) {
        freeZoneArray.push({ column, row: row - 1 })
      } else notFreeZoneArray.push({ column, row: row - 1 })
    }
    if ((currentField[column][row + 1]) && (!currentField[column][row + 1].flag)) {
      if (currentField[column][row + 1].value === 0) {
        freeZoneArray.push({ column, row: row + 1 })
      } else notFreeZoneArray.push({ column, row: row + 1 })
    }
  }

  if (currentField[column - 1]) {
    if ((currentField[column - 1][row - 1]) && (!currentField[column - 1][row - 1].flag)) {
      if (currentField[column - 1][row - 1].value === 0) {
        freeZoneArray.push({ column: column - 1, row: row - 1 })
      } else notFreeZoneArray.push({ column: column - 1, row: row - 1 })
    }
    if ((currentField[column - 1][row + 1]) && (!currentField[column - 1][row + 1].flag)) {
      if (currentField[column - 1][row + 1].value === 0) {
        freeZoneArray.push({ column: column - 1, row: row + 1 })
      } else notFreeZoneArray.push({ column: column - 1, row: row + 1 })
    }
    if ((currentField[column - 1][row]) && (!currentField[column - 1][row].flag)) {
      if (currentField[column - 1][row].value === 0) {
        freeZoneArray.push({ column: column - 1, row })
      } else notFreeZoneArray.push({ column: column - 1, row })
    }
  }

  if (currentField[column + 1]) {
    if ((currentField[column + 1][row - 1]) && (!currentField[column + 1][row - 1].flag)) {
      if (currentField[column + 1][row - 1].value === 0) {
        freeZoneArray.push({ column: column + 1, row: row - 1 })
      } else notFreeZoneArray.push({ column: column + 1, row: row - 1 })
    }
    if ((currentField[column + 1][row]) && (!currentField[column + 1][row].flag)) {
      if (currentField[column + 1][row].value === 0) {
        freeZoneArray.push({ column: column + 1, row })
      } else notFreeZoneArray.push({ column: column + 1, row })
    }
    if ((currentField[column + 1][row + 1]) && (!currentField[column + 1][row + 1].flag)) {
      if (currentField[column + 1][row + 1].value === 0) {
        freeZoneArray.push({ column: column + 1, row: row + 1 })
      } else notFreeZoneArray.push({ column: column + 1, row: row + 1 })
    }
  }

  return { freeZoneArray, notFreeZoneArray }
}
