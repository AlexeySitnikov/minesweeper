import { HiddenZone } from '../HiddenZone/HiddenZone'

export function VerticalLine({ line }) {
  return (
    <div>
      {line.map((el) => (
        <HiddenZone key={crypto.randomUUID()} el={el} />
      ))}
    </div>
  )
}
