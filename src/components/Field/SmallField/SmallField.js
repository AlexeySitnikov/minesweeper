import { useState } from 'react'
import { getField } from '../../constrains/getField'
import { VerticalLine } from './VerticalLine'
import style from './style.module.css'

export function SmallField() {
  const [field, setField] = useState(getField(10, 10, 20))

  return (
    <div className={`${style.field}`}>
      {field.map((el, index) => (
        <VerticalLine
          line={el}
          column={index}
          field={field}
          setField={setField}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  )
}
