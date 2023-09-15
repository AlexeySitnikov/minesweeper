import { useState } from 'react'
import { MenuBar } from '../MenuBar/MenuBar'
import { SmallField } from './SmallField/SmallField'
import style from './style.module.css'
import { getField } from '../constrains/getField'
import { COLUMN_NUMBER } from '../constrains/columnNumber'
import { ROW_NUMBER } from '../constrains/rowNumber'

export function Field() {
  const [field, setField] = useState(getField(COLUMN_NUMBER, ROW_NUMBER, 10))
  const [exploded, setExploded] = useState(false)
  const [firstButtonPressed, setFirstButtonPressed] = useState(false)
  const [seconds, setSeconds] = useState(0)

  return (
    <div className={`${style.container}`}>
      <MenuBar
        setField={setField}
        exploded={exploded}
        setExploded={setExploded}
        firstButtonPressed={firstButtonPressed}
        setFirstButtonPressed={setFirstButtonPressed}
        seconds={seconds}
        setSeconds={setSeconds}
      />
      <div className={`${style.Field}`}>
        <SmallField
          field={field}
          setField={setField}
          exploded={exploded}
          setExploded={setExploded}
          firstButtonPressed={firstButtonPressed}
          setFirstButtonPressed={setFirstButtonPressed}
        />
      </div>
    </div>
  )
}
