"use client"

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Clock, Trash2 } from 'lucide-react'
import { SearchHistory } from "@/components/search-history"

const AI_MODELS = [
  { id: 'gpt-3.5', name: 'GPT-3.5' },
  { id: 'gpt-4', name: 'GPT-4' },
  { id: 'claude-2', name: 'Claude 2' },
  { id: 'palm-2', name: 'PaLM 2' },
]

interface AISearchBarProps {
  onSearch: (query: string, model: string) => void
}

interface SearchHistoryItem {
  query: string
  model: string
  timestamp: number
}

export function AISearchBar({ onSearch }: AISearchBarProps) {
  const [query, setQuery] = useState('')
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0].id)
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([])

  useEffect(() => {
    const savedHistory = localStorage.getItem('aiSearchHistory')
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory))
    }
  }, [])

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query, selectedModel)
      const newHistoryItem: SearchHistoryItem = {
        query,
        model: selectedModel,
        timestamp: Date.now()
      }
      const updatedHistory = [newHistoryItem, ...searchHistory.slice(0, 9)]
      setSearchHistory(updatedHistory)
      localStorage.setItem('aiSearchHistory', JSON.stringify(updatedHistory))
    }
  }

  const handleHistoryItemClick = (item: SearchHistoryItem) => {
    setQuery(item.query)
    setSelectedModel(item.model)
  }

  const handleDeleteHistoryItem = (index: number) => {
    const updatedHistory = searchHistory.filter((_, i) => i !== index)
    setSearchHistory(updatedHistory)
    localStorage.setItem('aiSearchHistory', JSON.stringify(updatedHistory))
  }

  const handleClearHistory = () => {
    setSearchHistory([])
    localStorage.removeItem('aiSearchHistory')
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="flex items-center space-x-2 mb-2">
        <Sparkles className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold">AI-Powered Search</h2>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your research question or topic..."
          className="flex-grow"
        />
        <Select value={selectedModel} onValueChange={setSelectedModel}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select AI model" />
          </SelectTrigger>
          <SelectContent>
            {AI_MODELS.map((model) => (
              <SelectItem key={model.id} value={model.id}>
                {model.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleSearch}>Search</Button>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <h3 className="text-sm font-medium text-gray-700">Search History</h3>
          </div>
          {searchHistory.length > 0 && (
            <Button variant="ghost" size="sm" onClick={handleClearHistory}>
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          )}
        </div>
        <SearchHistory 
          history={searchHistory} 
          onItemClick={handleHistoryItemClick} 
          onItemDelete={handleDeleteHistoryItem}
        />
      </div>
    </div>
  )
}

