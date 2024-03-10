import { useState } from 'react'
import { Square } from '../square'
import { calculateWinner } from '../../utils/calculateWinner'
import { getStatus } from '../../utils/getStatus'
import cls from './board.module.scss'

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isNextX, setIsNextX] = useState(true)

  const isGameOver = squares.length === squares.filter(Boolean).length
  const winner = calculateWinner(squares)
  const status = getStatus(squares, winner, isGameOver, isNextX)

  const handleClick = (index: number) => {
    if (isGameOver || winner) {
      return
    }
    if (squares[index]) {
      return
    }
    const nextSquares = [...squares]
    nextSquares[index] = isNextX ? 'X' : 'O'
    setSquares(nextSquares)
    setIsNextX((prev) => !prev)
  }

  return (
    <div className={cls.board}>
      <h2 className={winner ? cls.winner : ''}>{status}</h2>
      <ul className={cls.boardList}>
        {squares.map((square, index) => (
          <li key={index}>
            <Square value={square} onSquareClick={() => handleClick(index)} />
          </li>
        ))}
      </ul>
    </div>
  )
}
