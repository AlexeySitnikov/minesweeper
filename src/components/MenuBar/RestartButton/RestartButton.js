import { COLUMN_NUMBER } from '../../constrains/columnNumber'
import { getField } from '../../constrains/getField'
import { ROW_NUMBER } from '../../constrains/rowNumber'
import deadFace from '../../constrains/deadFace.jpg'
import smileFace from '../../constrains/smileFace.png'
import style from './style.module.css'

export function RestartButton({
  setField, exploded, setExploded, setFirstButtonPressed, setSeconds,
}) {
  const onClickRestartButtonHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setField(getField(COLUMN_NUMBER, ROW_NUMBER, 10))
    setExploded(false)
    setFirstButtonPressed(false)
    setSeconds(0)
  }

  if (exploded) {
    return (
      <button type="button" onClick={onClickRestartButtonHandler}>
        <img className={`${style.Faces}`} src={deadFace} alt="deadFace" />
      </button>
    )
  }
  return (
    <button type="button" onClick={onClickRestartButtonHandler}>
      <img className={`${style.Faces}`} src={smileFace} alt="deadFace" />
    </button>
  )
}
