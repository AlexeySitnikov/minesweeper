import style from './style.module.css'

export function MinesCounter({ mines }) {
  return (
    <div className={`${style.minesCounter}`}>
      {mines}
    </div>
  )
}
