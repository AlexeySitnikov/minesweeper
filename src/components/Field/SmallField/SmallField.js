import { useState } from 'react'
import { getField } from '../../constrains/getField'
import { VerticalLine } from './VerticalLine'
import style from './style.module.css'
import { ROW_NUMBER } from '../../constrains/rowNumber'
import { COLUMN_NUMBER } from '../../constrains/columnNumber'

export function SmallField() {
  const [field, setField] = useState(getField(COLUMN_NUMBER, ROW_NUMBER, 5))

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
