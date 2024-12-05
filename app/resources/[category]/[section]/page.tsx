"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import Link from "next/link"

// This would typically come from an API or database
const resourceContent = {
  "hardware/sensors": {
    title: "Sensors",
    description: "Learn about different types of sensors used in robotics",
    content: [
      {
        title: "LiDAR Sensors",
        description: "Light Detection and Ranging sensors for distance measurement and mapping",
        topics: [
          "Principles of LiDAR operation",
          "Types of LiDAR sensors",
          "Applications in robotics",
          "Integration and programming"
        ]
      },
      {
        title: "Cameras",
        description: "Vision sensors for perception and object detection",
        topics: [
          "Camera types and specifications",
          "Image processing basics",
          "Stereo vision",
          "Deep learning applications"
        ]
      },
      {
        title: "IMU",
        description: "Inertial Measurement Units for motion and orientation sensing",
        topics: [
          "Accelerometers and gyroscopes",
          "Sensor fusion",
          "Calibration techniques",
          "Navigation applications"
        ]
      },
      {
        title: "Force/Torque Sensors",
        description: "Sensors for measuring forces and torques in robotic systems",
        topics: [
          "Force sensing principles",
          "Torque measurement",
          "Integration with control systems",
          "Applications in manipulation"
        ]
      }
    ]
  }
  // Add more sections as needed
}

export default function ResourceSectionPage() {
  const params = useParams()
  const path = `${params.category}/${params.section}`
  const resource = resourceContent[path]

  if (!resource) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Resource Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested resource could not be found.</p>
          <Button asChild>
            <Link href="/resources">Return to Resources</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button
          variant="ghost"
          size="sm"
          className="mb-4"
          asChild
        >
          <Link href="/resources">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
        </Button>

        <h1 className="text-2xl font-bold">{resource.title}</h1>
        <p className="text-muted-foreground">{resource.description}</p>
      </div>

      <div className="grid gap-6">
        {resource.content.map((section, index) => (
          <div
            key={index}
            className="rounded-lg border p-6 hover:bg-muted/50 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-muted-foreground mb-4">{section.description}</p>
            <ul className="list-disc list-inside space-y-2">
              {section.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className="text-muted-foreground">
                  {topic}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Button>Start Learning</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

