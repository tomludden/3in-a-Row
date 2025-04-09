export function createGameUI() {
  const app = document.createElement('div')
  app.id = 'app'
  document.body.appendChild(app)

  const header = document.createElement('h1')
  header.textContent = '3 in a Row'
  document.body.appendChild(header)

  const turnIndicator = document.createElement('div')
  turnIndicator.id = 'turn-indicator'
  document.body.appendChild(turnIndicator)

  const board = document.createElement('div')
  board.id = 'game-board'
  board.className = 'game-board'
  document.body.appendChild(board)
}
