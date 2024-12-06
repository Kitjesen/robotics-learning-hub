import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"

interface Change {
  id: number
  description: string
  date: string
}

interface RecentChangesProps {
  category: string
}

export function RecentChanges({ category }: RecentChangesProps) {
  const [changes, setChanges] = useState<Change[]>([])

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const mockChanges: Change[] = [
      { id: 1, description: "Updated introduction section", date: "2024-03-01" },
      { id: 2, description: "Added new tutorial on sensor fusion", date: "2024-02-28" },
      { id: 3, description: "Fixed typos in control systems chapter", date: "2024-02-25" },
    ]
    setChanges(mockChanges)
  }, [category])

  return (
    <div className="space-y-4">
      {changes.map((change) => (
        <Card key={change.id}>
          <CardContent className="p-4">
            <p className="font-medium">{change.description}</p>
            <p className="text-sm text-gray-500">{change.date}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

