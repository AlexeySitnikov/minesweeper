import { HiddenZone } from '../HiddenZone/HiddenZone'

export function VerticalLine({
  line, column, field, setField,
}) {
  return (
    <div>
      {line.map((el, index) => (
        <HiddenZone
          key={crypto.randomUUID()}
          el={el}
          column={column}
          row={index}
          field={field}
          setField={setField}
        />
      ))}
    </div>
  )
}
