"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

// This would typically come from an API or database
const resourceDetails = {
  "hardware/sensors": {
    title: "Sensors",
    description: "Comprehensive guide to robotics sensors and their applications",
    sections: [
      {
        title: "LiDAR Sensors",
        content: "Understanding LiDAR technology and its applications in robotics",
        difficulty: "Intermediate",
        estimatedTime: "2 hours",
        link: "/resources/hardware/sensors/lidar-sensors"
      },
      {
        title: "Camera Systems",
        content: "Overview of vision sensors and image processing",
        difficulty: "Beginner",
        estimatedTime: "1.5 hours",
        link: "/resources/hardware/sensors/camera-systems"
      },
      {
        title: "IMU Integration",
        content: "Implementation of Inertial Measurement Units",
        difficulty: "Advanced",
        estimatedTime: "3 hours",
        link: "/resources/hardware/sensors/imu-integration"
      }
    ]
  },
  // Add more resource details as needed
}

export default function ResourceSubcategoryPage() {
  const params = useParams()
  const path = `${params.category}/${params.subcategory}`
  const resource = resourceDetails[path] || {
    title: "Resource Not Found",
    description: "This resource is not available",
    sections: []
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6"
        asChild
      >
        <Link href="/resources">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Resources
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{resource.title}</h1>
        <p className="text-gray-600">{resource.description}</p>
      </div>

      <div className="grid gap-6">
        {resource.sections.map((section, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  <Link href={section.link}>
                    {section.title}
                  </Link>
                </CardTitle>
                <div className="flex gap-2">
                  <Badge variant="outline">{section.difficulty}</Badge>
                  <Badge variant="secondary">{section.estimatedTime}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{section.content}</p>
              <div className="mt-4">
                <Button>Start Learning</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

