import { HiddenZone } from '../HiddenZone/HiddenZone'

export function VerticalLine({ line }) {
  return (
    <div>
      {line.map(() => (
        <HiddenZone key={crypto.randomUUID()} />
      ))}
    </div>
  )
}
