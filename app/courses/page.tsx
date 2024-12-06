"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, BookOpen, Clock, Star } from "lucide-react"

const courses = [
  {
    title: "Introduction to Robotics",
    description: "Learn the fundamentals of robotics, including kinematics, dynamics, and control systems.",
    duration: "8 weeks",
    level: "Beginner",
    rating: 4.8,
    enrolled: 1234,
  },
  {
    title: "Robot Programming with ROS",
    description: "Master Robot Operating System (ROS) and learn to program robots using Python and C++.",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.7,
    enrolled: 987,
  },
  {
    title: "Computer Vision for Robotics",
    description: "Learn how to implement computer vision algorithms for robot perception and navigation.",
    duration: "6 weeks",
    level: "Advanced",
    rating: 4.9,
    enrolled: 756,
  },
]

export default function CoursesPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
          <p className="text-muted-foreground">
            Learn robotics through structured courses designed by experts
          </p>
        </div>
        <Button>
          <BookOpen className="mr-2 h-4 w-4" />
          Browse All Courses
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.title}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Bot className="mr-1 h-4 w-4" />
                  {course.level}
                </div>
                <div className="flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {course.rating}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Enroll Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
