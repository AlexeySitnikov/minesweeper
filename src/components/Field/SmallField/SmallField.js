import { getField } from '../../constrains/getField'
import { VerticalLine } from './VerticalLine'
import style from './style.module.css'

export function SmallField() {
  const field = getField(10, 10, 10)
  if (field) {
    return (
      <div className={`${style.field}`}>
        {getField(20, 10, 10).map((el) => (
          <VerticalLine line={el} key={crypto.randomUUID()} />
        ))}
      </div>
    )
  }
  return (<div />)
}
