import { Difficulty } from './Difficulty'
import style from './style.module.css'

export function DifficultySelector({ difficulty, setDifficulty }) {
  const difficultyArray = ['Begginer', 'Intermediate', 'Expert']
  const onSelectHandler = (e) => {
    setDifficulty(e.target.value)
  }
  return (
    <select className={`${style.difficultySelector}`} onChange={onSelectHandler} value={difficulty}>
      {difficultyArray.map((el) => (
        <Difficulty difficult={el} key={crypto.randomUUID()} />
      ))}
    </select>
  )
}
