import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "OpenManipulator",
    description: "An open-source robotic arm platform for education and research.",
    tags: ["ROS", "Robotics", "Education"],
    githubLink: "https://github.com/ROBOTIS-GIT/open_manipulator",
    websiteLink: "https://emanual.robotis.com/docs/en/platform/openmanipulator_x/overview/"
  },
  {
    id: 2,
    title: "PX4 Autopilot",
    description: "Open-source autopilot system for drones and other unmanned vehicles.",
    tags: ["Drones", "Autopilot", "C++"],
    githubLink: "https://github.com/PX4/PX4-Autopilot",
    websiteLink: "https://px4.io/"
  },
  {
    id: 3,
    title: "OpenCV",
    description: "Open-source computer vision library with robotics applications.",
    tags: ["Computer Vision", "C++", "Python"],
    githubLink: "https://github.com/opencv/opencv",
    websiteLink: "https://opencv.org/"
  },
  {
    id: 4,
    title: "ROS 2",
    description: "Robot Operating System 2, a set of software libraries and tools for building robot applications.",
    tags: ["ROS", "Robotics", "C++", "Python"],
    githubLink: "https://github.com/ros2/ros2",
    websiteLink: "https://docs.ros.org/en/rolling/"
  }
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 pt-20 pb-16">
      <h1 className="text-3xl font-semibold mb-8">Open Source Robotics Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="p-6 hover:shadow-lg transition-all duration-200">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              <Button asChild variant="outline" size="sm" className="text-gray-700">
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="text-gray-700">
                <Link href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Website
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

