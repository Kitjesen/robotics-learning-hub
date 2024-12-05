import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const resources = [
  {
    title: "Advanced Robot Control Systems",
    type: "Course",
    difficulty: "Intermediate",
    tags: ["Control Theory", "PID", "State Space"],
    link: "/resources/courses/advanced-robot-control"
  },
  {
    title: "Latest Developments in Soft Robotics",
    type: "Article",
    difficulty: "Advanced",
    tags: ["Soft Robotics", "Materials", "Actuators"],
    link: "/resources/articles/soft-robotics-developments"
  },
  {
    title: "Introduction to SLAM",
    type: "Tutorial",
    difficulty: "Beginner",
    tags: ["SLAM", "Localization", "Mapping"],
    link: "/resources/tutorials/intro-to-slam"
  }
]

export function RecommendedResources() {
  return (
    <div className="space-y-4">
      {resources.map((resource, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{resource.title}</CardTitle>
            <CardDescription>{resource.type} • {resource.difficulty}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-2">
              {resource.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <Link href={resource.link} className="text-sm text-blue-600 hover:underline">
              View Resource
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

