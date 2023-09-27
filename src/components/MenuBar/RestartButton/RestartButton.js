import { getField } from '../../constrains/getField'
import style from './style.module.css'
import { difficult } from '../../constrains/difficult'

export function RestartButton({
  setField,
  setExploded,
  setFirstButtonPressed,
  setSeconds,
  setMines,
  difficulty,
  setDifficulty,
  face,
  setFace,
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
      setFace('smileFace')
    } else if (difficulty === 'Intermediate') {
      setField(getField(
        difficult.Intermediate.columns,
        difficult.Intermediate.rows,
        difficult.Intermediate.mines,
      ))
      setMines(difficult.Intermediate.mines)
      setDifficulty('Intermediate')
      setFace('smileFace')
    } else {
      setField(getField(
        difficult.Expert.columns,
        difficult.Expert.rows,
        difficult.Expert.mines,
      ))
      setMines(difficult.Expert.mines)
      setDifficulty('Expert')
      setFace('smileFace')
    }
    setExploded(false)
    setFirstButtonPressed(false)
    setSeconds(0)
  }

  return (
    <button className={`${style.faceButton}`} type="button" onClick={onClickRestartButtonHandler}>
      <img className={`${style.Face}`} src={face} alt="deadFace" />
    </button>
  )
}
