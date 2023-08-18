import mine from '../../constrains/mineRed.jpg'
import style from './style.module.css'

export function Mine() {
  return (
    <img className={`${style.mine}`} src={`${mine}`} alt="mine" />
  )
}
