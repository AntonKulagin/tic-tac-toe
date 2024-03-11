import { Board } from './components/board'
import { History } from './components/history'
import { useState } from 'react'
import { calculateWinner } from './utils/calculateWinner'
import { getStatus } from './utils/getStatus'
import { THistoryButton, TSquare } from './types'
import { Restart } from './components/restart'
import './App.scss'

export const App = () => {
  const [isNextX, setIsNextX] = useState(true)
  const [history, setHistory] = useState<TSquare[][]>([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [isBlockedGame, setIsBlockedGame] = useState(false)

  const isGameOver =
    history[currentMove].length === history[currentMove].filter(Boolean).length
  const winner = calculateWinner(history[currentMove])
  const status = getStatus(history[currentMove], winner, isGameOver)

  const handleSquareClick = (index: number) => {
    if (isGameOver || winner || isBlockedGame) {
      return
    }
    if (history[currentMove][index]) {
      return
    }
    const nextSquares = [...history[currentMove]]
    nextSquares[index] = isNextX ? 'X' : 'O'
    setIsNextX((prev) => !prev)
    setHistory([...history, nextSquares])
    setCurrentMove(currentMove + 1)
  }

  const handleHistory = (type: THistoryButton) => {
    setIsBlockedGame(true)

    switch (type) {
      case 'start':
        setCurrentMove(0)
        break
      case 'end':
        setCurrentMove(history.length - 1)
        break
      case 'left':
        setCurrentMove((prev) => (prev > 0 ? (prev -= 1) : 0))
        break
      case 'right':
        setCurrentMove((prev) =>
          prev < history.length - 1 ? (prev += 1) : history.length - 1
        )
        break
      default:
        break
    }
  }

  const handleRestart = () => {
    setIsNextX(true)
    setHistory([Array(9).fill(null)])
    setCurrentMove(0)
    setIsBlockedGame(false)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Board
        {...{ winner, status }}
        squares={history[currentMove]}
        onSquareClick={handleSquareClick}
      />
      {(isGameOver || winner || isBlockedGame) && (
        <>
          <History onHistory={handleHistory} />
          <Restart onRestart={handleRestart} />
        </>
      )}
    </div>
  )
}
