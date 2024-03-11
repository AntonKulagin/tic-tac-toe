import { TSquare } from '../types'

export function getStatus(
  squares: TSquare[],
  winner: string | null,
  isGameOver: boolean
) {
  const isX = squares.filter(Boolean).length % 2 === 0

  if (winner) {
    return 'Winner: ' + winner
  } else if (isGameOver) {
    return 'Nobody won'
  } else if (!squares.filter(Boolean).length) {
    return 'Start player: ' + (isX ? 'X' : 'O')
  } else {
    return 'Next player: ' + (isX ? 'X' : 'O')
  }
}
