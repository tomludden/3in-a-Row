import { createGameUI } from './src/components/UI/UI.js'
import { initColorSelection } from './src/components/color-selection/colorSelection.js'
import { initButtons } from './src/components/buttons/buttons.js'

import {
  createBoard,
  loadGameState,
  startGame,
  resetGame,
  playerColors,
  saveGameState
} from './src/components/GameLogic/GameLogic.js'

document.addEventListener('DOMContentLoaded', () => {
  createGameUI()
  initColorSelection(playerColors, saveGameState)
  initButtons(startGame, resetGame)
  createBoard()
  loadGameState()
})
