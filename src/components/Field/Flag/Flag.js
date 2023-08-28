import flagLogo from '../../constrains/flag.png'
import style from './style.module.css'

export function Flag() {
  return (
    <div className={`${style.hideSquare}`}>
      <img className={`${style.flag}`} src={`${flagLogo}`} alt="flag" />
    </div>
  )
}
