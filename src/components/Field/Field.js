import { useState } from 'react'
import { BegginerGame } from './Game/BegginerGame'
import { IntermediateGame } from './Game/IntermediateGame'
import { ExpertGame } from './Game/ExpertGame'

// import { MenuBar } from '../MenuBar/MenuBar'
// import { SmallField } from './SmallField/SmallField'
// import style from './style.module.css'
// import { getField } from '../constrains/getField'
// import { difficult } from '../constrains/difficult'

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
  // const [mines, setMines] = useState(difficult.Expert.mines)
  // const [field, setField] = useState(
  //   getField(difficult.Expert.columns, difficult.Expert.rows, difficult.Expert.mines),
  // )

  // const [exploded, setExploded] = useState(false)
  // const [firstButtonPressed, setFirstButtonPressed] = useState(false)
  // const [seconds, setSeconds] = useState(0)

  // return (
  //   <div className={`${style.container}`}>
  //     <div>
  //       <MenuBar
  //         setField={setField}
  //         exploded={exploded}
  //         setExploded={setExploded}
  //         firstButtonPressed={firstButtonPressed}
  //         setFirstButtonPressed={setFirstButtonPressed}
  //         seconds={seconds}
  //         setSeconds={setSeconds}
  //         mines={mines}
  //         setMines={setMines}
  //         difficulty={difficulty}
  //         setDifficulty={setDifficulty}
  //       />
  //       <div className={`${style.Field}`}>
  //         <SmallField
  //           field={field}
  //           setField={setField}
  //           exploded={exploded}
  //           setExploded={setExploded}
  //           firstButtonPressed={firstButtonPressed}
  //           setFirstButtonPressed={setFirstButtonPressed}
  //           mines={mines}
  //           setMines={setMines}
  //         />
  //       </div>
  //     </div>

  //   </div>
  // )
}
