import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const AIRecommendation: React.FC = () => {
// This is a placeholder implementation. In a real-world scenario,
// this would likely fetch recommendations from an AI service.
const recommendations = [
  {
    name: "LiDAR Sensor XYZ-100",
    category: "Distance Sensor",
    description: "High-precision LiDAR sensor for accurate distance measurement and mapping.",
    confidence: 0.95
  },
  {
    name: "IMU Sensor ABC-200",
    category: "Motion Sensor",
    description: "6-axis Inertial Measurement Unit for precise motion tracking.",
    confidence: 0.88
  },
  {
    name: "Camera Module DEF-300",
    category: "Vision Sensor",
    description: "High-resolution camera module with built-in image processing capabilities.",
    confidence: 0.92
  }
]

return (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle>AI Recommendations</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="mb-4">Based on your recent searches and project requirements, our AI recommends the following sensors:</p>
      {recommendations.map((rec, index) => (
        <div key={index} className="mb-4 p-4 border rounded-lg">
          <h3 className="text-lg font-semibold">{rec.name}</h3>
          <Badge className="mb-2">{rec.category}</Badge>
          <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
          <p className="text-sm">Confidence: {(rec.confidence * 100).toFixed(1)}%</p>
        </div>
      ))}
    </CardContent>
  </Card>
)
}

export { AIRecommendation }

