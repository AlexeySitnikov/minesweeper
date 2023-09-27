import { useState } from 'react'
import { difficult } from '../../constrains/difficult'
import { getField } from '../../constrains/getField'
import style from './style.module.css'
import { MenuBar } from '../../MenuBar/MenuBar'
import { MediumField } from '../MediumField/MediumField'

export function IntermediateGame({ difficulty, setDifficulty, ...props }) {
  const [mines, setMines] = useState(difficult.Intermediate.mines)
  const [field, setField] = useState(
    getField(
      difficult.Intermediate.columns,
      difficult.Intermediate.rows,
      difficult.Intermediate.mines,
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
          <MediumField
            field={field}
            setField={setField}
            exploded={exploded}
            setExploded={setExploded}
            firstButtonPressed={firstButtonPressed}
            setFirstButtonPressed={setFirstButtonPressed}
            mines={mines}
            setMines={setMines}
            setRunning={setRunning}
            columnNumber={difficult.Intermediate.columns}
            rowNumber={difficult.Intermediate.rows}
            minesNumber={difficult.Intermediate.mines}
            {...props}
          />
        </div>
      </div>

    </div>
  )
}
