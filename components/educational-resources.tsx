import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, FileText, Globe } from 'lucide-react'
import Link from "next/link"

const resources = [
  {
    title: "Introduction to Robotics",
    type: "Course",
    provider: "Stanford University",
    description: "Comprehensive online course covering the fundamentals of robotics.",
    link: "https://online.stanford.edu/courses/cs223a-introduction-robotics",
    icon: BookOpen
  },
  {
    title: "ROS 2 Tutorials",
    type: "Video Series",
    provider: "The Construct",
    description: "Step-by-step video tutorials for learning Robot Operating System 2.",
    link: "https://www.theconstructsim.com/ros2-tutorials/",
    icon: Video
  },
  {
    title: "Handbook of Robotics",
    type: "E-Book",
    provider: "Springer",
    description: "Comprehensive reference book covering all aspects of robotics.",
    link: "https://link.springer.com/book/10.1007/978-3-540-30301-5",
    icon: FileText
  },
  {
    title: "Robotics Today",
    type: "Webinar Series",
    provider: "IEEE RAS",
    description: "Weekly webinars featuring talks from leading robotics researchers.",
    link: "https://www.ieee-ras.org/conferences-workshops/robotics-today",
    icon: Globe
  }
]

export function EducationalResources() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {resources.map((resource, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <resource.icon className="mr-2 h-5 w-5" />
              {resource.title}
            </CardTitle>
            <CardDescription>{resource.type} by {resource.provider}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{resource.description}</p>
            <Button variant="outline" size="sm" asChild>
              <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                Access Resource
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

