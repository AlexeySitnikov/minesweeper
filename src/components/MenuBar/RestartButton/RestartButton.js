// import { COLUMN_NUMBER } from '../../constrains/columnNumber'
import { getField } from '../../constrains/getField'
// import { ROW_NUMBER } from '../../constrains/rowNumber'
import deadFace from '../../constrains/deadFace.jpg'
import smileFace from '../../constrains/smileFace.png'
import style from './style.module.css'
import { difficult } from '../../constrains/difficult'

export function RestartButton({
  setField, exploded, setExploded, setFirstButtonPressed, setSeconds, setMines, difficulty,
}) {
  const onClickRestartButtonHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (difficulty === 'Begginer') {
      setField(getField(
        difficult.Begginer.columns,
        difficult.Begginer.rows,
        difficult.Begginer.mines,
      ))
      setMines(difficult.Begginer.mines)
    } else if (difficulty === 'Intermediate') {
      setField(getField(
        difficult.Intermediate.columns,
        difficult.Intermediate.rows,
        difficult.Intermediate.mines,
      ))
      setMines(difficult.Intermediate.mines)
    } else {
      setField(getField(
        difficult.Expert.columns,
        difficult.Expert.rows,
        difficult.Expert.mines,
      ))
      setMines(difficult.Expert.mines)
    }
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
