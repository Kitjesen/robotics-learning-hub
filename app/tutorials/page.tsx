"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Clock, Tag } from "lucide-react"

const tutorials = [
  {
    title: "Building Your First Robot",
    description: "A step-by-step guide to building a simple robot using Arduino.",
    duration: "2 hours",
    tags: ["Arduino", "Hardware", "Beginner"],
    author: "John Doe",
  },
  {
    title: "Sensor Integration",
    description: "Learn how to integrate various sensors into your robot for better perception.",
    duration: "1.5 hours",
    tags: ["Sensors", "Electronics", "Intermediate"],
    author: "Jane Smith",
  },
  {
    title: "Path Planning Algorithms",
    description: "Implement popular path planning algorithms for autonomous navigation.",
    duration: "3 hours",
    tags: ["Algorithms", "Navigation", "Advanced"],
    author: "Mike Johnson",
  },
]

export default function TutorialsPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tutorials</h1>
          <p className="text-muted-foreground">
            Step-by-step guides to help you learn specific robotics topics
          </p>
        </div>
        <Button>
          <Lightbulb className="mr-2 h-4 w-4" />
          Browse All Tutorials
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((tutorial) => (
          <Card key={tutorial.title}>
            <CardHeader>
              <CardTitle>{tutorial.title}</CardTitle>
              <CardDescription>{tutorial.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {tutorial.duration}
                  </div>
                  <div className="flex items-center">
                    <Tag className="mr-1 h-4 w-4" />
                    By {tutorial.author}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tutorial.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Tutorial</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
