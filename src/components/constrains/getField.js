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

  for (let i = 1; i < horizontal - 1; i += 1) {
    for (let j = 1; j < vertical - 1; j += 1) {
      if (field[i][j] === 'mine') {
        if (field[i - 1][j - 1] !== 'mine') {
          field[i - 1][j - 1] += 1
        }
        if (field[i][j - 1] !== 'mine') {
          field[i][j - 1] += 1
        }
        if (field[i + 1][j - 1] !== 'mine') {
          field[i + 1][j - 1] += 1
        }
        if (field[i + 1][j] !== 'mine') {
          field[i + 1][j] += 1
        }
        if (field[i + 1][j + 1] !== 'mine') {
          field[i + 1][j + 1] += 1
        }
        if (field[i][j + 1] !== 'mine') {
          field[i][j + 1] += 1
        }
        if (field[i - 1][j + 1] !== 'mine') {
          field[i - 1][j + 1] += 1
        }
        if (field[i - 1][j] !== 'mine') {
          field[i - 1][j] += 1
        }
      }
    }
  }

  for (let i = 1; i < vertical - 1; i += 1) {
    if (field[i][0] === 'mine') {
      if (field[i - 1][0] !== 'mine') {
        field[i - 1][0] += 1
      }
      if (field[i - 1][1] !== 'mine') {
        field[i - 1][1] += 1
      }
      if (field[i][1] !== 'mine') {
        field[i][1] += 1
      }
      if (field[i + 1][1] !== 'mine') {
        field[i + 1][1] += 1
      }
      if (field[i + 1][0] !== 'mine') {
        field[i + 1][0] += 1
      }
    }
  }

  for (let i = 1; i < vertical - 1; i += 1) {
    if (field[i][horizontal - 1] === 'mine') {
      if (field[i - 1][horizontal - 1] !== 'mine') {
        field[i - 1][horizontal - 1] += 1
      }
      if (field[i - 1][horizontal - 2] !== 'mine') {
        field[i - 1][horizontal - 2] += 1
      }
      if (field[i][horizontal - 2] !== 'mine') {
        field[i][horizontal - 2] += 1
      }
      if (field[i + 1][horizontal - 2] !== 'mine') {
        field[i + 1][horizontal - 2] += 1
      }
      if (field[i + 1][horizontal - 1] !== 'mine') {
        field[i + 1][horizontal - 1] += 1
      }
    }
  }

  for (let j = 1; j < horizontal - 1; j += 1) {
    if (field[0][j] === 'mine') {
      if (field[0][j - 1] !== 'mine') {
        field[0][j - 1] += 1
      }
      if (field[1][j - 1] !== 'mine') {
        field[1][j - 1] += 1
      }
      if (field[1][j] !== 'mine') {
        field[1][j] += 1
      }
      if (field[1][j + 1] !== 'mine') {
        field[1][j + 1] += 1
      }
      if (field[0][j + 1] !== 'mine') {
        field[0][j + 1] += 1
      }
    }
  }

  for (let j = 1; j < horizontal - 1; j += 1) {
    if (field[vertical - 1][j] === 'mine') {
      if (field[vertical - 1][j + 1] !== 'mine') {
        field[vertical - 1][j + 1] += 1
      }
      if (field[vertical - 2][j + 1] !== 'mine') {
        field[vertical - 2][j + 1] += 1
      }
      if (field[vertical - 2][j] !== 'mine') {
        field[vertical - 2][j] += 1
      }
      if (field[vertical - 2][j - 1] !== 'mine') {
        field[vertical - 2][j - 1] += 1
      }
      if (field[vertical - 1][j - 1] !== 'mine') {
        field[vertical - 1][j - 1] += 1
      }
    }
  }

  if (field[0][0] === 'mine') {
    if (field[1][0] !== 'mine') {
      field[1][0] += 1
    }
    if (field[1][1] !== 'mine') {
      field[1][1] += 1
    }
    if (field[0][1] !== 'mine') {
      field[0][1] += 1
    }
  }

  if (field[vertical - 1][0] === 'mine') {
    if (field[vertical - 2][0] !== 'mine') {
      field[vertical - 2][0] += 1
    }
    if (field[vertical - 2][1] !== 'mine') {
      field[vertical - 2][1] += 1
    }
    if (field[vertical - 1][1] !== 'mine') {
      field[vertical - 1][1] += 1
    }
  }

  if (field[vertical - 1][horizontal - 1] === 'mine') {
    if (field[vertical - 2][horizontal - 1] !== 'mine') {
      field[vertical - 2][horizontal - 1] += 1
    }
    if (field[vertical - 2][horizontal - 2] !== 'mine') {
      field[vertical - 2][horizontal - 2] += 1
    }
    if (field[vertical - 1][horizontal - 2] !== 'mine') {
      field[vertical - 1][horizontal - 2] += 1
    }
  }

  if (field[0][horizontal - 1] === 'mine') {
    if (field[0][horizontal - 2] !== 'mine') {
      field[0][horizontal - 2] += 1
    }
    if (field[1][horizontal - 2] !== 'mine') {
      field[1][horizontal - 2] += 1
    }
    if (field[1][horizontal - 1] !== 'mine') {
      field[1][horizontal - 1] += 1
    }
  }
  // console.log(field[0])
  return (field)
}
