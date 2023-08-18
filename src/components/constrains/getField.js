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
    if (field[x][y] !== 9) {
      field[x][y] = 9
    }
  }

  for (let i = 1; i < horizontal - 1; i += 1) {
    for (let j = 1; j < vertical - 1; j += 1) {
      if (field[i][j] === 9) {
        if (field[i - 1][j - 1] !== 9) {
          field[i - 1][j - 1] += 1
        }
        if (field[i][j - 1] !== 9) {
          field[i][j - 1] += 1
        }
        if (field[i + 1][j - 1] !== 9) {
          field[i + 1][j - 1] += 1
        }
        if (field[i + 1][j] !== 9) {
          field[i + 1][j] += 1
        }
        if (field[i + 1][j + 1] !== 9) {
          field[i + 1][j + 1] += 1
        }
        if (field[i][j + 1] !== 9) {
          field[i][j + 1] += 1
        }
        if (field[i - 1][j + 1] !== 9) {
          field[i - 1][j + 1] += 1
        }
        if (field[i - 1][j] !== 9) {
          field[i - 1][j] += 1
        }
      }
    }
  }

  for (let i = 1; i < vertical - 1; i += 1) {
    if (field[i][0] === 9) {
      if (field[i - 1][0] !== 9) {
        field[i - 1][0] += 1
      }
      if (field[i - 1][1] !== 9) {
        field[i - 1][1] += 1
      }
      if (field[i][1] !== 9) {
        field[i][1] += 1
      }
      if (field[i + 1][1] !== 9) {
        field[i + 1][1] += 1
      }
      if (field[i + 1][0] !== 9) {
        field[i + 1][0] += 1
      }
    }
  }

  for (let i = 1; i < vertical - 1; i += 1) {
    if (field[i][horizontal - 1] === 9) {
      if (field[i - 1][horizontal - 1] !== 9) {
        field[i - 1][horizontal - 1] += 1
      }
      if (field[i - 1][horizontal - 2] !== 9) {
        field[i - 1][horizontal - 2] += 1
      }
      if (field[i][horizontal - 2] !== 9) {
        field[i][horizontal - 2] += 1
      }
      if (field[i + 1][horizontal - 2] !== 9) {
        field[i + 1][horizontal - 2] += 1
      }
      if (field[i + 1][horizontal - 1] !== 9) {
        field[i + 1][horizontal - 1] += 1
      }
    }
  }

  for (let j = 1; j < horizontal - 1; j += 1) {
    if (field[0][j] === 9) {
      if (field[0][j - 1] !== 9) {
        field[0][j - 1] += 1
      }
      if (field[1][j - 1] !== 9) {
        field[1][j - 1] += 1
      }
      if (field[1][j] !== 9) {
        field[1][j] += 1
      }
      if (field[1][j + 1] !== 9) {
        field[1][j + 1] += 1
      }
      if (field[0][j + 1] !== 9) {
        field[0][j + 1] += 1
      }
    }
  }

  for (let j = 1; j < horizontal - 1; j += 1) {
    if (field[vertical - 1][j] === 9) {
      if (field[vertical - 1][j + 1] !== 9) {
        field[vertical - 1][j + 1] += 1
      }
      if (field[vertical - 2][j + 1] !== 9) {
        field[vertical - 2][j + 1] += 1
      }
      if (field[vertical - 2][j] !== 9) {
        field[vertical - 2][j] += 1
      }
      if (field[vertical - 2][j - 1] !== 9) {
        field[vertical - 2][j - 1] += 1
      }
      if (field[vertical - 1][j - 1] !== 9) {
        field[vertical - 1][j - 1] += 1
      }
    }
  }

  if (field[0][0] === 9) {
    if (field[1][0] !== 9) {
      field[1][0] += 1
    }
    if (field[1][1] !== 9) {
      field[1][1] += 1
    }
    if (field[0][1] !== 9) {
      field[0][1] += 1
    }
  }

  if (field[vertical - 1][0] === 9) {
    if (field[vertical - 2][0] !== 9) {
      field[vertical - 2][0] += 1
    }
    if (field[vertical - 2][1] !== 9) {
      field[vertical - 2][1] += 1
    }
    if (field[vertical - 1][1] !== 9) {
      field[vertical - 1][1] += 1
    }
  }

  if (field[vertical - 1][horizontal - 1] === 9) {
    if (field[vertical - 2][horizontal - 1] !== 9) {
      field[vertical - 2][horizontal - 1] += 1
    }
    if (field[vertical - 2][horizontal - 2] !== 9) {
      field[vertical - 2][horizontal - 2] += 1
    }
    if (field[vertical - 1][horizontal - 2] !== 9) {
      field[vertical - 1][horizontal - 2] += 1
    }
  }

  if (field[0][horizontal - 1] === 9) {
    if (field[0][horizontal - 2] !== 9) {
      field[0][horizontal - 2] += 1
    }
    if (field[1][horizontal - 2] !== 9) {
      field[1][horizontal - 2] += 1
    }
    if (field[1][horizontal - 1] !== 9) {
      field[1][horizontal - 1] += 1
    }
  }
  return (field)
}
