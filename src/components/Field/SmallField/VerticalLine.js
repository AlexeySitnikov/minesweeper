import { HiddenZone } from '../HiddenZone/HiddenZone'

export function VerticalLine({
  line, column, field, setField, exploded, setExploded, firstButtonPressed, setFirstButtonPressed,
}) {
  return (
    <div>
      {line.map((el, index) => (
        <HiddenZone
          el={el}
          column={column}
          row={index}
          field={field}
          setField={setField}
          exploded={exploded}
          setExploded={setExploded}
          firstButtonPressed={firstButtonPressed}
          setFirstButtonPressed={setFirstButtonPressed}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  )
}
