/* eslint-disable no-nested-ternary */
import { Flag } from '../Flag/Flag'
import { Mine } from '../Mine/Mine'
import style from './style.module.css'

export function Number({ el }) {
  if (el.flag) {
    return (<Flag />)
  }

  if (el.hide) {
    return (
      <div className={`${style.hideSquare}`} />
    )
  }

  if (el.mine) {
    return (<Mine />)
  }

  const whatNumber = () => {
    switch (el.value) {
      case 1: return (<p className={`${style.digit_1}`}>{el.value}</p>)
      case 2: return (<p className={`${style.digit_2}`}>{el.value}</p>)
      case 3: return (<p className={`${style.digit_3}`}>{el.value}</p>)
      case 4: return (<p className={`${style.digit_4}`}>{el.value}</p>)
      case 5: return (<p className={`${style.digit_5}`}>{el.value}</p>)
      case 6: return (<p className={`${style.digit_6}`}>{el.value}</p>)
      case 7: return (<p className={`${style.digit_7}`}>{el.value}</p>)
      case 8: return (<p className={`${style.digit_8}`}>{el.value}</p>)
      case 0: return (<p />)

      default: return (<p />)
    }
  }
  return (
    <>
      {whatNumber()}
    </>
  )
}
