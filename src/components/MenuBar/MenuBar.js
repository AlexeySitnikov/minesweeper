import { Clock } from './Clock/Clock'
import { DifficultySelector } from './DifficultySelector/DifficultySelector'
import { MinesCounter } from './MinesCounter/MinesCounter'
import { RestartButton } from './RestartButton/RestartButton'
import style from './style.module.css'

export function MenuBar({
  setField, exploded, setExploded, firstButtonPressed, setFirstButtonPressed, seconds, setSeconds,
}) {
  return (
    <div className={`${style.container}`}>
      <DifficultySelector />
      <div className={`${style.counterButtonClock}`}>
        <MinesCounter />
        <RestartButton
          setField={setField}
          exploded={exploded}
          setExploded={setExploded}
          setFirstButtonPressed={setFirstButtonPressed}
          setSeconds={setSeconds}
        />
        <Clock
          firstButtonPressed={firstButtonPressed}
          seconds={seconds}
          setSeconds={setSeconds}
        />
      </div>
    </div>
  )
}
