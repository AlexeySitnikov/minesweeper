import { useState } from 'react'
import { difficult } from '../../constrains/difficult'
import { getField } from '../../constrains/getField'
import { MenuBar } from '../../MenuBar/MenuBar'
import style from './style.module.css'
import { SmallField } from '../SmallField/SmallField'

export function BegginerGame({
  difficulty, setDifficulty, ...props
}) {
  const [mines, setMines] = useState(difficult.Begginer.mines)
  const [field, setField] = useState(
    getField(difficult.Begginer.columns, difficult.Begginer.rows, difficult.Begginer.mines),
  )

  const [exploded, setExploded] = useState(false)
  const [firstButtonPressed, setFirstButtonPressed] = useState(false)
  const [running, setRunning] = useState(false)
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
          running={running}
          {...props}

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
            setRunning={setRunning}
            columnNumber={difficult.Begginer.columns}
            rowNumber={difficult.Begginer.rows}
            minesNumber={difficult.Begginer.mines}
            {...props}
          />
        </div>
      </div>

    </div>
  )
}
