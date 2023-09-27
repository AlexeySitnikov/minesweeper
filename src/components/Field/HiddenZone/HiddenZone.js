/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import style from './style.module.css'
import { Number } from '../Numbers/Number'
import { openOneZone } from '../../constrains/openOneZone'
import { isAllFlags } from '../../constrains/isAllFlags'
import { openFreeZone } from '../../constrains/openFreeZone'
import { openSquareZone } from '../../constrains/openSquareZone'
import { getHiddenZones } from '../../constrains/getHiddenZones'

export function HiddenZone(
  {
    column, row, field, setField, exploded, setExploded, firstButtonPressed, setFirstButtonPressed,
    mines, setMines, setFace, setRunning, running, columnNumber, rowNumber, minesNumber,
  },
) {
  const currentField = field

  const onClickFieldHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()

    // press button to start timer
    if (!firstButtonPressed) {
      setFirstButtonPressed(true)
      setRunning(true)
    }

    // left button pressed
    if (
      (e.buttons === 1)
      && (currentField[column][row].hide)
      && (!currentField[column][row].flag)
      && (!exploded) && (running)
    ) {
      if (currentField[column][row].value === 0) {
        openFreeZone({
          field: currentField, column, row, setField,
        })
      }
      if (currentField[column][row].mine) {
        setExploded(true)
        setFace('deadFace')
      }
      setField([...openOneZone({
        field: currentField, column, row,
      })])
    }

    // right button pressed
    if ((e.buttons === 2) && (currentField[column][row].hide) && (!exploded) && (running)) {
      currentField[column][row].flag = !currentField[column][row].flag
      if (currentField[column][row].flag) {
        setMines(mines - 1)
      }
      if (!currentField[column][row].flag) {
        setMines(mines + 1)
      }
      setField([...currentField])
    }

    // middle button pressed
    if (
      ((e.buttons === 3) || ((e.buttons === 4)))
      && (!currentField[column][row].flag)
      && (isAllFlags({ field, column, row }))
      && (!currentField[column][row].hide)
      && (!exploded) && (running)
    ) {
      openSquareZone({
        field: currentField, column, row, setField, setExploded,
      })
      setFace('searchFace')
    }
  }

  const onMouseUpClickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // console.log(mines)
    if (!exploded) {
      setFace('smileFace')
    }
    if (!exploded && (getHiddenZones({ field, columnNumber, rowNumber }) === minesNumber)) {
      setFace('coolFace')
      setRunning(false)
    }
  }

  return (
    <div className={`${style.container}`}>
      <div
        className={`${style.square}`}
        onMouseDown={onClickFieldHandler}
        onMouseUp={onMouseUpClickHandler}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Number el={currentField[column][row]} />

      </div>
    </div>
  )
}
