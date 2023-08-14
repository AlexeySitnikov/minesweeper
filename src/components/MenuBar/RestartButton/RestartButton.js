export function RestartButton() {
  const onClickRestartButtonHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('restart')
  }

  return (
    <button type="button" onClick={onClickRestartButtonHandler}>asd</button>
  )
}
