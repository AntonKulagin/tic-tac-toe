import { FC } from 'react'
import { getButtonContent } from './helpers/getButtonContent'
import { IHistoryButtonProps } from '../../types'

export const HistoryButton: FC<IHistoryButtonProps> = ({ type, onClick }) => {
  const content = getButtonContent(type)

  return <button onClick={() => onClick(type)}>{content}</button>
}
