const fs = require('fs')
const games = fs.readFileSync('./input.txt', 'utf8').split('\r\n')
const totals = []

games.forEach((game, index) => {
  const gameId = index + 1
  let string = ''

  if (gameId < 10) {
    string = game.substring(8)
  } else if (gameId < 100) {
    string = game.substring(9)
  } else {
    string = game.substring(10)
  }

  const reds = []
  const greens = []
  const blues = []
  
  const rounds = string.split(';')

  rounds.forEach(round => {
    const cubes = round.split(',')

    cubes.forEach(cube => {
      const values = cube.trim().split(' ')
      
      const count = parseInt(values[0])
      const color = values[1]

      if (color === 'red') {
        reds.push(count)
      }

      if (color === 'green') {
        greens.push(count)
      }

      if (color === 'blue') {
        blues.push(count)
      }
    })
  })

  let maxRed = 0

  reds.forEach(red => {
    if (red > maxRed) {
      maxRed = red
    }
  })

  let maxGreen = 0

  greens.forEach(green => {
    if (green > maxGreen) {
      maxGreen = green
    }
  })

  let maxBlue = 0

  blues.forEach(blue => {
    if (blue > maxBlue) {
      maxBlue = blue
    }
  })

  const total = maxRed * maxGreen * maxBlue
  totals.push(total)
})

let result = 0

totals.forEach(total => result += total)

console.log(result)
