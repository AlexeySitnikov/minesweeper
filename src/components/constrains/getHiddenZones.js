export function getHiddenZones({ field, columnNumber, rowNumber }) {
  const currentField = field
  let counter = 0
  for (let i = 0; i < columnNumber; i += 1) {
    for (let j = 0; j < rowNumber; j += 1) {
      if (currentField[i][j]) {
        if (currentField[i][j].hide) {
          counter += 1
        }
      }
    }
  }
  return (counter)
}
