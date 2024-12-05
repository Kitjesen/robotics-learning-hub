"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Users, Calendar } from 'lucide-react'

const STUDY_GROUPS = [
  {
    id: 1,
    name: "ROS2 Learning Group",
    topic: "Robot Operating System 2",
    members: 12,
    schedule: "Tuesdays, 7 PM EST",
    level: "Intermediate"
  },
  {
    id: 2,
    name: "Computer Vision Study Circle",
    topic: "OpenCV and Deep Learning",
    members: 8,
    schedule: "Wednesdays, 6 PM EST",
    level: "Advanced"
  },
  {
    id: 3,
    name: "Robotics Math Fundamentals",
    topic: "Linear Algebra & Control Theory",
    members: 15,
    schedule: "Mondays, 8 PM EST",
    level: "Beginner"
  }
]

export function StudyGroups() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search study groups..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>Create Group</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {STUDY_GROUPS.map((group) => (
          <Card key={group.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{group.name}</span>
                <Badge>{group.level}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{group.topic}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  <span>{group.members} members</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{group.schedule}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">Join Group</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

