import { useState } from 'react'
import { difficult } from '../../constrains/difficult'
import { getField } from '../../constrains/getField'
import { MenuBar } from '../../MenuBar/MenuBar'
import style from './style.module.css'
import { SmallField } from '../SmallField/SmallField'

export function BegginerGame({ difficulty, setDifficulty }) {
  const [mines, setMines] = useState(difficult.Begginer.mines)
  const [field, setField] = useState(
    getField(difficult.Begginer.columns, difficult.Begginer.rows, difficult.Begginer.mines),
  )

  const [exploded, setExploded] = useState(false)
  const [firstButtonPressed, setFirstButtonPressed] = useState(false)
  const [seconds, setSeconds] = useState(0)
  return (
    <div className={`${style.container}`}>
      <div>
        <MenuBar
          setField={setField}
          exploded={exploded}
          setExploded={setExploded}
          firstButtonPressed={firstButtonPressed}
          setFirstButtonPressed={setFirstButtonPressed}
          seconds={seconds}
          setSeconds={setSeconds}
          mines={mines}
          setMines={setMines}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
        <div className={`${style.Field}`}>
          <SmallField
            field={field}
            setField={setField}
            exploded={exploded}
            setExploded={setExploded}
            firstButtonPressed={firstButtonPressed}
            setFirstButtonPressed={setFirstButtonPressed}
            mines={mines}
            setMines={setMines}
          />
        </div>
      </div>

    </div>
  )
}
