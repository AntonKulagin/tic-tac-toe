import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import type { TypeButton } from '../historyButton'

export function getButtonContent(type: TypeButton) {
  switch (type) {
    case 'start':
      return <ChevronsLeft />
    case 'end':
      return <ChevronsRight />
    case 'left':
      return <ChevronLeft />
    case 'right':
      return <ChevronRight />
    default:
      return <>+</>
  }
}
