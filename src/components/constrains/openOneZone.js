// import { openSquareZone } from './openSquareZone'

export function openOneZone({ column, row, field }) {
  const currentField = field
  currentField[column][row].hide = false
  // if (currentField[column][row].value === 0) {
  //   return (openSquareZone({ field, column, row }))
  // }
  return (currentField)
}
