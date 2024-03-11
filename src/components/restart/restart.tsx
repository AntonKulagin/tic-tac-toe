import { FC } from 'react'
import { IRestartProps } from '../../types'

export const Restart: FC<IRestartProps> = ({ onRestart }) => {
  return (
    <button style={{ padding: '0.5rem 1rem' }} onClick={onRestart}>
      restart
    </button>
  )
}
