export function getRandomNumber1to8() {
  const max = 8
  const min = 1
  return (Math.floor(Math.random() * (max - min) + min))
}

// Math.random() * (max - min) + min
