import { HiddenZone } from '../HiddenZone/HiddenZone'

export function VerticalLine({ line }) {
  // console.log({ line })
  return (
    <div>
      {line.map((el) => (
        <HiddenZone key={crypto.randomUUID()} el={el} />
      ))}
    </div>
  )
}
