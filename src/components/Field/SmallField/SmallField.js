import { getField } from '../../constrains/getField'
import { VerticalLine } from './VerticalLine'
import style from './style.module.css'

export function SmallField() {
  const vertical = Array(9).fill(1)
  const horizontal = Array(9).fill(1)
  console.log(getField(20, 10, 10))

  return (
    <div className={`${style.field}`}>
      {vertical.map(() => (
        <VerticalLine line={horizontal} key={crypto.randomUUID()} />
      ))}
    </div>
  )
}
