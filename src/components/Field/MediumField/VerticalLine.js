import { HiddenZone } from '../HiddenZone/HiddenZone'

export function VerticalLine({ line, column, ...props }) {
  return (
    <div>
      {line.map((el, index) => (
        <HiddenZone
          el={el}
          column={column}
          row={index}
          {...props}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  )
}
