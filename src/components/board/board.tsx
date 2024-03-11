import { FC } from 'react'
import { Square } from '../square'
import { IBoardProps } from '../../types'
import cls from './board.module.scss'

export const Board: FC<IBoardProps> = ({
  squares,
  winner,
  status,
  onSquareClick,
}) => {
  return (
    <div className={cls.board}>
      <h2 className={winner ? cls.winner : ''}>{status}</h2>
      <ul className={cls.boardList}>
        {squares.map((square, index) => (
          <li key={index}>
            <Square value={square} onSquareClick={() => onSquareClick(index)} />
          </li>
        ))}
      </ul>
    </div>
  )
}
