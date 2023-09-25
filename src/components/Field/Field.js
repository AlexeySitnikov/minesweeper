import { useState } from 'react'
import { BegginerGame } from './Game/BegginerGame'
import { IntermediateGame } from './Game/IntermediateGame'
import { ExpertGame } from './Game/ExpertGame'

export function Field() {
  const [difficulty, setDifficulty] = useState('Expert')
  const [face, setFace] = useState('smileFace')

  if (difficulty === 'Begginer') {
    return (
      <BegginerGame
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        face={face}
        setFace={setFace}
      />
    )
  }
  if (difficulty === 'Intermediate') {
    return (
      <IntermediateGame
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        face={face}
        setFace={setFace}
      />
    )
  }
  return (
    <ExpertGame
      difficulty={difficulty}
      setDifficulty={setDifficulty}
      face={face}
      setFace={setFace}
    />
  )
}
