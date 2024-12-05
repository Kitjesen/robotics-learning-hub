"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const MENTORS = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Senior Robotics Engineer",
    expertise: ["Computer Vision", "Deep Learning", "ROS"],
    availability: "2 slots available",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Prof. James Wilson",
    role: "Research Director",
    expertise: ["Robot Control", "Path Planning", "SLAM"],
    availability: "1 slot available",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Dr. Maria Garcia",
    role: "AI Research Scientist",
    expertise: ["Reinforcement Learning", "Neural Networks", "Robotics"],
    availability: "3 slots available",
    avatar: "/placeholder.svg"
  }
]

export function MentorshipProgram() {
  const [selectedMentor, setSelectedMentor] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MENTORS.map((mentor) => (
          <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={mentor.avatar} alt={mentor.name} />
                <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{mentor.name}</CardTitle>
                <p className="text-sm text-gray-600">{mentor.role}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.expertise.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-4">{mentor.availability}</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setSelectedMentor(mentor.id)}
              >
                Request Mentorship
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-4">
          Want to become a mentor? Share your expertise with the robotics community!
        </p>
        <Button variant="outline">Apply as Mentor</Button>
      </div>
    </div>
  )
}

