"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from 'lucide-react'

export function AISearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])

  const handleSearch = async () => {
    // In a real application, this would call an AI-powered search API
    // For now, we'll just simulate some results
    const simulatedResults = [
      {
        name: "Advanced LiDAR Sensor XYZ-2000",
        description: "High-precision LiDAR sensor with extended range",
        confidence: 0.95,
        tags: ["LiDAR", "Long Range", "High Precision"]
      },
      {
        name: "Multi-Axis IMU Sensor ABC-500",
        description: "9-axis IMU with advanced fusion algorithms",
        confidence: 0.88,
        tags: ["IMU", "9-DoF", "Sensor Fusion"]
      },
      {
        name: "Thermal Camera Module THM-100",
        description: "High-resolution thermal imaging for robotics",
        confidence: 0.82,
        tags: ["Thermal", "Imaging", "Night Vision"]
      }
    ]
    setResults(simulatedResults)
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="w-5 h-5 mr-2" />
          AI-Powered Sensor Search
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Describe the sensor you're looking for..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        {results.length > 0 && (
          <div className="space-y-4">
            {results.map((result, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{result.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{result.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {result.tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      Confidence: {(result.confidence * 100).toFixed(0)}%
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

