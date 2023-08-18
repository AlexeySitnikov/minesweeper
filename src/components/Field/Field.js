import { MenuBar } from '../MenuBar/MenuBar'
import { SmallField } from './SmallField/SmallField'
import style from './style.module.css'

export function Field() {
  return (
    <div className={`${style.container}`}>
      <MenuBar />
      <div className={`${style.Field}`}>
        <SmallField />
      </div>
    </div>
  )
}
