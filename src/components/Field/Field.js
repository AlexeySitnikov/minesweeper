import { useState } from 'react'
import { BegginerGame } from './Game/BegginerGame'
import { IntermediateGame } from './Game/IntermediateGame'
import { ExpertGame } from './Game/ExpertGame'

export function Field() {
  const [difficulty, setDifficulty] = useState('Expert')

  if (difficulty === 'Begginer') {
    return (
      <BegginerGame
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
    )
  }
  if (difficulty === 'Intermediate') {
    return (
      <IntermediateGame
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
    )
  }
  return (
    <ExpertGame
      difficulty={difficulty}
      setDifficulty={setDifficulty}
    />
  )
}
