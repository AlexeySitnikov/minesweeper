import { useState } from 'react'
import { BegginerGame } from './Game/BegginerGame'
import { IntermediateGame } from './Game/IntermediateGame'
import { ExpertGame } from './Game/ExpertGame'
import { getFace } from '../Faces/getFace'

export function Field() {
  const [difficulty, setDifficulty] = useState('Expert')
  const [face, setFace] = useState('smileFace')
  const [running, setRunning] = useState(true)

  if (difficulty === 'Begginer') {
    return (
      <BegginerGame
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        face={getFace(face)}
        setFace={setFace}
        running={running}
        setRunning={setRunning}
      />
    )
  }
  if (difficulty === 'Intermediate') {
    return (
      <IntermediateGame
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        face={getFace(face)}
        setFace={setFace}
        running={running}
        setRunning={setRunning}
      />
    )
  }
  return (
    <ExpertGame
      difficulty={difficulty}
      setDifficulty={setDifficulty}
      face={getFace(face)}
      setFace={setFace}
      running={running}
      setRunning={setRunning}
    />
  )
}
