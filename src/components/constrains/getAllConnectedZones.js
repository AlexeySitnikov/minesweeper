export function getAllConnectedZones({ field, column, row }) {
  const currentField = field
  const allZonesArray = []

  if (currentField[column]) {
    if ((currentField[column][row - 1]) && (!currentField[column][row - 1].flag)) {
      // currentField[column][row - 1].hide = false
      if (currentField[column][row - 1].value === 0) {
        allZonesArray.push({ column, row: row - 1 })
      } else allZonesArray.push({ column, row: row - 1 })
    }
    if ((currentField[column][row + 1]) && (!currentField[column][row + 1].flag)) {
      // currentField[column][row + 1].hide = false
      if (currentField[column][row + 1].value === 0) {
        allZonesArray.push({ column, row: row + 1 })
      } else allZonesArray.push({ column, row: row + 1 })
    }
  }
  return (allZonesArray)
}
