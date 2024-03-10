export function getStatus(
  squares: string[],
  winner: string | null,
  isGameOver: boolean,
  isNextX: boolean
) {
  if (winner) {
    return 'Winner: ' + winner
  } else if (isGameOver) {
    return 'Nobody won'
  } else if (!squares.filter(Boolean).length) {
    return 'Start player: ' + (isNextX ? 'X' : 'O')
  } else {
    return 'Next player: ' + (isNextX ? 'X' : 'O')
  }
}
