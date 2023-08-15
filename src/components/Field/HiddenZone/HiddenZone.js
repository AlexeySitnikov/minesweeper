import style from './style.module.css'

export function HiddenZone({ el }) {
  const onClickFieldHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(e.buttons)
  }

  return (
    <div>
      <input type="button" className={`${style.hiddenZone}`} onMouseDown={onClickFieldHandler} onContextMenu={(e) => (e.preventDefault())} value={el} />
    </div>
  )
}
