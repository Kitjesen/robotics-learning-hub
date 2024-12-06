import { Button } from "@/components/ui/button"
import { Trash2 } from 'lucide-react'

interface SearchHistoryItem {
  query: string
  model: string
  timestamp: number
}

interface SearchHistoryProps {
  history: SearchHistoryItem[]
  onItemClick: (item: SearchHistoryItem) => void
  onItemDelete: (index: number) => void
}

export function SearchHistory({ history, onItemClick, onItemDelete }: SearchHistoryProps) {
  return (
    <div className="space-y-2">
      {history.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <Button
            variant="ghost"
            className="w-full justify-start text-left"
            onClick={() => onItemClick(item)}
          >
            <div className="truncate">
              <span className="font-medium">{item.query}</span>
              <span className="ml-2 text-sm text-gray-500">
                ({item.model} - {new Date(item.timestamp).toLocaleString()})
              </span>
            </div>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onItemDelete(index)}
            className="ml-2"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  )
}

