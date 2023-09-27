import { useState } from 'react'
import { difficult } from '../../constrains/difficult'
import { getField } from '../../constrains/getField'
import style from './style.module.css'
import { MenuBar } from '../../MenuBar/MenuBar'
import { BigField } from '../BigField/BigField'

export function ExpertGame({
  difficulty, setDifficulty, ...props
}) {
  const [mines, setMines] = useState(difficult.Expert.mines)
  const [field, setField] = useState(
    getField(
      difficult.Expert.columns,
      difficult.Expert.rows,
      difficult.Expert.mines,
    ),
  )

  const [exploded, setExploded] = useState(false)
  const [firstButtonPressed, setFirstButtonPressed] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

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
          <BigField
            field={field}
            setField={setField}
            exploded={exploded}
            setExploded={setExploded}
            firstButtonPressed={firstButtonPressed}
            setFirstButtonPressed={setFirstButtonPressed}
            mines={mines}
            setMines={setMines}
            setRunning={setRunning}
            columnNumber={difficult.Expert.columns}
            rowNumber={difficult.Expert.rows}
            minesNumber={difficult.Expert.mines}
            {...props}
          />
        </div>
      </div>

    </div>
  )
}
