"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MOCK_PROJECTS = [
  { id: 1, title: "Open Source Robotic Arm", creator: "MechEnthusiast", collaborators: 5 },
  { id: 2, title: "Swarm Robotics Simulation", creator: "SwarmMaster", collaborators: 3 },
  { id: 3, title: "AI-powered Robot Navigation", creator: "NavBot", collaborators: 7 },
]

export function ProjectCollaboration() {
  const [newProject, setNewProject] = useState('')
  const [projectDescription, setProjectDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ newProject, projectDescription })
    // Reset form
    setNewProject('')
    setProjectDescription('')
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Start a New Project</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Project Title"
            value={newProject}
            onChange={(e) => setNewProject(e.target.value)}
            required
          />
          <Textarea
            placeholder="Project Description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
          <Button type="submit">Create Project</Button>
        </form>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Active Projects</h3>
        {MOCK_PROJECTS.map(project => (
          <Card key={project.id} className="mb-4">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Created by: {project.creator}</p>
              <p>Collaborators: {project.collaborators}</p>
              <Button variant="outline" className="mt-2">Join Project</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

