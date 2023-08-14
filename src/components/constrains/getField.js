export function getField(vertical, horizontal, mines) {
  const field = [[]]

  for (let x = 0; x < vertical; x += 1) {
    for (let y = 0; y < horizontal; y += 1) {
      field[x][y] = 0
    }
  }
  console.log(field)
  for (let i = 0; i < mines; i += 1) {
    const x = Math.floor(Math.random() * (horizontal - 1 + 1)) + 1
    const y = Math.floor(Math.random() * (vertical - 1 + 1)) + 1
    // if (field[x][y] !== 1) {
    //   field[x][y] = 1
    // }
    console.log(field[x][y])
    // console.log(i)
  }
  return (field)
}
