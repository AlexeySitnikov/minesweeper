import { getAllConnectedZones } from './getAllConnectedZones'
import { openOneZone } from './openOneZone'

export function openFreeZone({
  column, row, field, setField,
}) {
  const currentField = field
  getAllConnectedZones({ field: currentField, column, row })
    .forEach((el) => {
      if (currentField[el.column][el.row].hide) {
        setField([...openOneZone({ field: currentField, column: el.column, row: el.row })])
        if (currentField[el.column][el.row].value === 0) {
          openFreeZone({
            field: currentField, column: el.column, row: el.row, setField,
          })
        }
      }
    })
}
