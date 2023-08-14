import { Clock } from './Clock/Clock'
import { DifficultySelector } from './DifficultySelector/DifficultySelector'
import { MinesCounter } from './MinesCounter/MinesCounter'
import { RestartButton } from './RestartButton/RestartButton'
import style from './style.module.css'

export function MenuBar() {
  return (
    <div className={`${style.container}`}>
      <DifficultySelector />
      <div className={`${style.counterButtonClock}`}>
        <MinesCounter />
        <RestartButton />
        <Clock />
      </div>
    </div>
  )
}
