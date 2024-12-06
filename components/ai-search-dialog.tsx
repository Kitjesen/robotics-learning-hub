import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface AISearchDialogProps {
  isOpen: boolean
  onClose: () => void
  onSearch: (query: string) => void
}

export function AISearchDialog({ isOpen, onClose, onSearch }: AISearchDialogProps) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    onSearch(query)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>AI-Powered Search</DialogTitle>
          <DialogDescription>
            Enter your research question or topic to get AI-assisted results.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="E.g., Latest advancements in soft robotics"
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

