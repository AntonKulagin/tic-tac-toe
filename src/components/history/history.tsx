import { HistoryButton } from './historyButton'
import cls from './history.module.scss'
import { IHistoryProps } from '../../types'
import { FC } from 'react'

export const History: FC<IHistoryProps> = ({ onHistory }) => {
  return (
    <div className={cls.history}>
      <HistoryButton type="start" onClick={onHistory} />
      <HistoryButton type="left" onClick={onHistory} />
      <h3>history</h3>
      <HistoryButton type="right" onClick={onHistory} />
      <HistoryButton type="end" onClick={onHistory} />
    </div>
  )
}
