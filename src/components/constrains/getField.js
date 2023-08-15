export function getField(vertical, horizontal, mines) {
  const field = []
  for (let i = 0; i < vertical; i += 1) {
    field[i] = []
    for (let j = 0; j < horizontal; j += 1) {
      field[i][j] = 0
    }
  }

  for (let i = 0; i < mines; i += 1) {
    const x = Math.floor(Math.random() * (vertical - 1 - 0 + 1) + 0)
    const y = Math.floor(Math.random() * (horizontal - 1 - 0 + 1) + 0)
    if (field[x][y] !== 'mine') {
      field[x][y] = 'mine'
    }
  }

  return (field)
}
