"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Search, FileText, Users } from 'lucide-react'

const RESEARCH_PROJECTS = [
  {
    id: 1,
    title: "Soft Robotics for Medical Applications",
    institution: "MIT",
    description: "Developing novel soft robotic systems for minimally invasive surgery",
    areas: ["Medical Robotics", "Soft Robotics", "Control Systems"],
    collaborators: 5,
    openPositions: ["PhD Student", "Research Engineer"]
  },
  {
    id: 2,
    title: "Swarm Robotics in Agriculture",
    institution: "Stanford University",
    description: "Implementing swarm intelligence for autonomous farming robots",
    areas: ["Swarm Robotics", "Agriculture", "AI"],
    collaborators: 3,
    openPositions: ["Postdoc", "Research Assistant"]
  },
  {
    id: 3,
    title: "Human-Robot Collaboration",
    institution: "ETH Zurich",
    description: "Improving safety and efficiency in human-robot collaborative tasks",
    areas: ["HRI", "Safety Systems", "Machine Learning"],
    collaborators: 4,
    openPositions: ["PhD Student"]
  }
]

export function ResearchCollaboration() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search research projects..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>Propose Project</Button>
      </div>

      <div className="space-y-6">
        {RESEARCH_PROJECTS.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                  <p className="text-sm text-gray-600">{project.institution}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{project.collaborators} collaborators</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.areas.map((area) => (
                  <Badge key={area} variant="secondary">{area}</Badge>
                ))}
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Open Positions:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {project.openPositions.map((position) => (
                    <li key={position}>{position}</li>
                  ))}
                </ul>
              </div>
              <Button variant="outline" className="w-full">Express Interest</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

