import { Difficulty } from './Difficulty'

export function DifficultySelector() {
  const difficulty = [1, 2, 3]
  return (
    <select>
      {difficulty.map((el) => (
        <Difficulty difficulty={el} key={crypto.randomUUID()} />
      ))}
    </select>
  )
}
