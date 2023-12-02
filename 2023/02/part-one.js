const fs = require('fs')
const games = fs.readFileSync('./input.txt', 'utf8').split('\r\n')
const ids = []

games.forEach((game, index) => {
  const gameId = index + 1
  let string = ''
  let isGamePossible = true

  if (gameId < 10) {
    string = game.substring(8)
  } else if (gameId < 100) {
    string = game.substring(9)
  } else {
    string = game.substring(10)
  }
  
  const rounds = string.split(';')

  rounds.forEach(round => {
    const cubes = round.split(',')

    cubes.forEach(cube => {
      const values = cube.trim().split(' ')
      
      const count = parseInt(values[0])
      const color = values[1]

      if (color === 'red' && count > 12) {
        isGamePossible = false
      }

      if (color === 'green' && count > 13) {
        isGamePossible = false
      }

      if (color === 'blue' && count > 14) {
        isGamePossible = false
      }
    })
  })

  if (isGamePossible === true) {
    ids.push(gameId)
  }
})

let result = 0

ids.forEach(id => result += id)

console.log(result)
