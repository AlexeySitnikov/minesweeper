import { getField } from '../../constrains/getField'
import deadFace from '../../constrains/deadFace.jpg'
import smileFace from '../../constrains/smileFace.png'
import style from './style.module.css'
import { difficult } from '../../constrains/difficult'

export function RestartButton({
  setField,
  exploded,
  setExploded,
  setFirstButtonPressed,
  setSeconds,
  setMines,
  difficulty,
  setDifficulty,
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
      setDifficulty('Begginer')
    } else if (difficulty === 'Intermediate') {
      setField(getField(
        difficult.Intermediate.columns,
        difficult.Intermediate.rows,
        difficult.Intermediate.mines,
      ))
      setMines(difficult.Intermediate.mines)
      setDifficulty('Intermediate')
    } else {
      setField(getField(
        difficult.Expert.columns,
        difficult.Expert.rows,
        difficult.Expert.mines,
      ))
      setMines(difficult.Expert.mines)
      setDifficulty('Expert')
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
