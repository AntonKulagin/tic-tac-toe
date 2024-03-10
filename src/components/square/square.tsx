import { FC } from 'react'
import cls from './square.module.scss'

interface SquareProps {
  value: number
  onSquareClick: () => void
}

export const Square: FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button className={cls.square} onClick={onSquareClick}>
      {value}
    </button>
  )
}
