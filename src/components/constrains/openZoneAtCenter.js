export function openZoneAtCenter({ field, column, row }) {
  const currentField = field
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
        const o = {
          column,
          row: row - 1,
        }
        arr.push(o)
      }
    }
    if (!currentField[column - 1][row - 1].flag) {
      currentField[column - 1][row - 1].hide = false
      if (currentField[column - 1][row - 1].value === 0) {
        const o = {
          column: column - 1,
          row: row - 1,
        }
        arr.push(o)
      }
    }
    if (!currentField[column - 1][row].flag) {
      currentField[column - 1][row].hide = false
      if (currentField[column - 1][row].value === 0) {
        const o = {
          column: column - 1,
          row,
        }
        arr.push(o)
      }
    }
    if (!currentField[column - 1][row + 1].flag) {
      currentField[column - 1][row + 1].hide = false
      if (currentField[column - 1][row + 1].value === 0) {
        const o = {
          column: column - 1,
          row: row + 1,
        }
        arr.push(o)
      }
    }
    if (!currentField[column][row + 1].flag) {
      currentField[column][row + 1].hide = false
      if (currentField[column][row + 1].value === 0) {
        const o = {
          column,
          row: row + 1,
        }
        arr.push(o)
      }
    }
    if (!currentField[column + 1][row + 1].flag) {
      currentField[column + 1][row + 1].hide = false
      if (currentField[column + 1][row + 1].value === 0) {
        const o = {
          column: column + 1,
          row: row + 1,
        }
        arr.push(o)
      }
    }
    if (!currentField[column + 1][row].flag) {
      currentField[column + 1][row].hide = false
      if (currentField[column + 1][row].value === 0) {
        const o = {
          column: column + 1,
          row,
        }
        arr.push(o)
      }
    }
    if (!currentField[column + 1][row - 1].flag) {
      currentField[column + 1][row - 1].hide = false
      if (currentField[column + 1][row - 1].value === 0) {
        const o = {
          column: column + 1,
          row: row - 1,
        }
        arr.push(o)
      }
    }
  }
  // console.log({ arr })
  arr.forEach((el) => {
    console.log(el.column)
    console.log(el.row)
    // openFreeZone(currentField, el.column, el.row)
  })
  return (currentField)
}
