import { FC } from 'react'
import cls from './square.module.scss'
import { TSquare } from '../../types'

interface SquareProps {
  value: TSquare
  onSquareClick: () => void
}

export const Square: FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button className={cls.square} onClick={onSquareClick}>
      {value}
    </button>
  )
}
