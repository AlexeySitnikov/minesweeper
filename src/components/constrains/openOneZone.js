export function openOneZone({ column, row, field }) {
  const currentField = field
  currentField[column][row].hide = false
  return (currentField)
}
