import { getField } from '../../constrains/getField'
import { VerticalLine } from './VerticalLine'
import style from './style.module.css'

export function SmallField() {
  return (
    <div className={`${style.field}`}>
      {getField(10, 10, 20).map((el) => (
        <VerticalLine line={el} key={crypto.randomUUID()} />
      ))}
    </div>
  )
}
