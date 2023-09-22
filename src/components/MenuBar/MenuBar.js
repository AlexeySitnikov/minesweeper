import { Clock } from './Clock/Clock'
import { Zero } from './Clock/Zero'
import { DifficultySelector } from './DifficultySelector/DifficultySelector'
import { MinesCounter } from './MinesCounter/MinesCounter'
import { RestartButton } from './RestartButton/RestartButton'
import style from './style.module.css'

export function MenuBar({ firstButtonPressed, ...props }) {
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
        {firstButtonPressed ? (
          <Clock
            {...props}
          />
        ) : <Zero />}
      </div>
    </div>
  )
}
