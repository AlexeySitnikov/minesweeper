import { Clock } from './Clock/Clock'
import { DifficultySelector } from './DifficultySelector/DifficultySelector'
import { MinesCounter } from './MinesCounter/MinesCounter'
import { RestartButton } from './RestartButton/RestartButton'
import style from './style.module.css'

export function MenuBar({ ...props }) {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.difficultySelector}`}>
        <DifficultySelector
          {...props}
        />
      </div>
      <div className={`${style.counterButtonClock}`}>
        <MinesCounter
          {...props}
        />
        <RestartButton
          {...props}
        />
        <Clock
          {...props}
        />
      </div>
    </div>
  )
}
