/* eslint-disable no-nested-ternary */
import { Flag } from '../Flag/Flag'
import { Mine } from '../Mine/Mine'
import style from './style.module.css'

export function Number({ el }) {
  const whatNumber = () => {
    // if (el >= 10) {
    //   console.log(el)
    //   return (<Flag />)
    // }
    switch (el) {
      case 1: return (<p className={`${style.digit_1}`}>{el}</p>)
      case 2: return (<p className={`${style.digit_2}`}>{el}</p>)
      case 3: return (<p className={`${style.digit_3}`}>{el}</p>)
      case 4: return (<p className={`${style.digit_4}`}>{el}</p>)
      case 5: return (<p className={`${style.digit_5}`}>{el}</p>)
      case 6: return (<p className={`${style.digit_6}`}>{el}</p>)
      case 7: return (<p className={`${style.digit_7}`}>{el}</p>)
      case 8: return (<p className={`${style.digit_8}`}>{el}</p>)
      case 9: return (<Mine />)
      case 0: return (<p />)

      default: return (<Flag />)
    }
  }
  return (
    <>
      {whatNumber()}
    </>
  )
}
