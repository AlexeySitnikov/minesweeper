import style from './style.module.css'

export function Zero() {
  return (
    <div className={`${style.clock}`}>
      {0}
    </div>
  )
}
