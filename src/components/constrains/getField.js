export function getField(columnNumber, rowNumber) {
  const field = []
  for (let i = 0; i < columnNumber; i += 1) {
    field[i] = []
    for (let j = 0; j < rowNumber; j += 1) {
      field[i][j] = {
        hide: true,
        mine: false,
        flag: false,
        value: 0,
      }
    }
  }

  // let mineCounter = 1
  // while (mineCounter <= mines) {
  //   const x = Math.floor(Math.random() * (columnNumber - 1 - 0 + 1) + 0)
  //   const y = Math.floor(Math.random() * (rowNumber - 1 - 0 + 1) + 0)
  //   if (!field[x][y].mine) {
  //     field[x][y].mine = true
  //     field[x][y].value = 9
  //     mineCounter += 1
  //   }
  // }

  // for (let i = 1; i < columnNumber - 1; i += 1) {
  //   for (let j = 1; j < rowNumber - 1; j += 1) {
  //     if (field[i][j].mine) {
  //       if (!field[i - 1][j - 1].mine) {
  //         field[i - 1][j - 1].value += 1
  //       }
  //       if (!field[i][j - 1].mine) {
  //         field[i][j - 1].value += 1
  //       }
  //       if (!field[i + 1][j - 1].mine) {
  //         field[i + 1][j - 1].value += 1
  //       }
  //       if (!field[i + 1][j].mine) {
  //         field[i + 1][j].value += 1
  //       }
  //       if (!field[i + 1][j + 1].mine) {
  //         field[i + 1][j + 1].value += 1
  //       }
  //       if (!field[i][j + 1].mine) {
  //         field[i][j + 1].value += 1
  //       }
  //       if (!field[i - 1][j + 1].mine) {
  //         field[i - 1][j + 1].value += 1
  //       }
  //       if (!field[i - 1][j].mine) {
  //         field[i - 1][j].value += 1
  //       }
  //     }
  //   }
  // }

  // for (let i = 1; i < columnNumber - 1; i += 1) {
  //   if (field[i][0].mine) {
  //     if (!field[i - 1][0].mine) {
  //       field[i - 1][0].value += 1
  //     }
  //     if (!field[i - 1][1].mine) {
  //       field[i - 1][1].value += 1
  //     }
  //     if (!field[i][1].mine) {
  //       field[i][1].value += 1
  //     }
  //     if (!field[i + 1][1].mine) {
  //       field[i + 1][1].value += 1
  //     }
  //     if (!field[i + 1][0].mine) {
  //       field[i + 1][0].value += 1
  //     }
  //   }
  // }

  // for (let i = 1; i < columnNumber - 1; i += 1) {
  //   if (field[i][rowNumber - 1].mine) {
  //     if (!field[i - 1][rowNumber - 1].mine) {
  //       field[i - 1][rowNumber - 1].value += 1
  //     }
  //     if (!field[i - 1][rowNumber - 2].mine) {
  //       field[i - 1][rowNumber - 2].value += 1
  //     }
  //     if (!field[i][rowNumber - 2].mine) {
  //       field[i][rowNumber - 2].value += 1
  //     }
  //     if (!field[i + 1][rowNumber - 2].mine) {
  //       field[i + 1][rowNumber - 2].value += 1
  //     }
  //     if (!field[i + 1][rowNumber - 1].mine) {
  //       field[i + 1][rowNumber - 1].value += 1
  //     }
  //   }
  // }

  // for (let j = 1; j < rowNumber - 1; j += 1) {
  //   if (field[0][j].mine) {
  //     if (!field[0][j - 1].mine) {
  //       field[0][j - 1].value += 1
  //     }
  //     if (!field[1][j - 1].mine) {
  //       field[1][j - 1].value += 1
  //     }
  //     if (!field[1][j].mine) {
  //       field[1][j].value += 1
  //     }
  //     if (!field[1][j + 1].mine) {
  //       field[1][j + 1].value += 1
  //     }
  //     if (!field[0][j + 1].mine) {
  //       field[0][j + 1].value += 1
  //     }
  //   }
  // }

  // for (let j = 1; j < rowNumber - 1; j += 1) {
  //   if (field[columnNumber - 1][j].mine) {
  //     if (!field[columnNumber - 1][j + 1].mine) {
  //       field[columnNumber - 1][j + 1].value += 1
  //     }
  //     if (!field[columnNumber - 2][j + 1].mine) {
  //       field[columnNumber - 2][j + 1].value += 1
  //     }
  //     if (!field[columnNumber - 2][j].mine) {
  //       field[columnNumber - 2][j].value += 1
  //     }
  //     if (!field[columnNumber - 2][j - 1].mine) {
  //       field[columnNumber - 2][j - 1].value += 1
  //     }
  //     if (!field[columnNumber - 1][j - 1].mine) {
  //       field[columnNumber - 1][j - 1].value += 1
  //     }
  //   }
  // }

  // if (field[0][0].mine) {
  //   if (!field[1][0].mine) {
  //     field[1][0].value += 1
  //   }
  //   if (!field[1][1].mine) {
  //     field[1][1].value += 1
  //   }
  //   if (!field[0][1].mine) {
  //     field[0][1].value += 1
  //   }
  // }

  // if (field[columnNumber - 1][0].mine) {
  //   if (!field[columnNumber - 2][0].mine) {
  //     field[columnNumber - 2][0].value += 1
  //   }
  //   if (!field[columnNumber - 2][1].mine) {
  //     field[columnNumber - 2][1].value += 1
  //   }
  //   if (!field[columnNumber - 1][1].mine) {
  //     field[columnNumber - 1][1].value += 1
  //   }
  // }

  // if (field[columnNumber - 1][rowNumber - 1].mine) {
  //   if (!field[columnNumber - 2][rowNumber - 1].mine) {
  //     field[columnNumber - 2][rowNumber - 1].value += 1
  //   }
  //   if (!field[columnNumber - 2][rowNumber - 2].mine) {
  //     field[columnNumber - 2][rowNumber - 2].value += 1
  //   }
  //   if (!field[columnNumber - 1][rowNumber - 2].mine) {
  //     field[columnNumber - 1][rowNumber - 2].value += 1
  //   }
  // }

  // if (field[0][rowNumber - 1].mine) {
  //   if (!field[0][rowNumber - 2].mine) {
  //     field[0][rowNumber - 2].value += 1
  //   }
  //   if (!field[1][rowNumber - 2].mine) {
  //     field[1][rowNumber - 2].value += 1
  //   }
  //   if (!field[1][rowNumber - 1].mine) {
  //     field[1][rowNumber - 1].value += 1
  //   }
  // }
  return (field)
}
