export type THistoryButton = 'start' | 'end' | 'left' | 'right'

export interface IHistoryButtonProps {
  type: THistoryButton
  onClick: (type: THistoryButton) => void
}

export type TSquare = 'X' | 'O' | null

export interface IHistoryProps {
  onHistory: (type: THistoryButton) => void
}

export interface IRestartProps {
  onRestart: () => void
}

export interface IBoardProps {
  squares: TSquare[]
  winner: string | null
  status: string
  onSquareClick(i: number): void
}
