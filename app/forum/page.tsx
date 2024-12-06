"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MessageSquare, Plus, TrendingUp } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const topics = [
  {
    title: "Best practices for robot arm calibration",
    description: "Looking for advice on calibrating a 6-DOF robotic arm...",
    author: "RoboEngineer",
    replies: 12,
    views: 234,
    tags: ["Hardware", "Calibration", "Industrial"],
    lastActive: "2 hours ago",
  },
  {
    title: "ROS2 Navigation Stack Implementation",
    description: "Has anyone successfully implemented the ROS2 Nav2 stack?",
    author: "ROSexpert",
    replies: 8,
    views: 156,
    tags: ["ROS2", "Navigation", "Software"],
    lastActive: "5 hours ago",
  },
  {
    title: "Machine Learning for Object Detection",
    description: "Discussion about using YOLOv8 for robotic vision...",
    author: "AIRoboticist",
    replies: 15,
    views: 342,
    tags: ["AI", "Computer Vision", "Deep Learning"],
    lastActive: "1 day ago",
  },
]

export default function ForumPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Forum</h1>
          <p className="text-muted-foreground">
            Join discussions with other robotics enthusiasts
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Topic
        </Button>
      </div>

      <Tabs defaultValue="latest" className="mb-8">
        <TabsList>
          <TabsTrigger value="latest">Latest</TabsTrigger>
          <TabsTrigger value="trending">
            <TrendingUp className="mr-2 h-4 w-4" />
            Trending
          </TabsTrigger>
          <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
        </TabsList>
        <TabsContent value="latest">
          <div className="space-y-4">
            {topics.map((topic) => (
              <Card key={topic.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center">
                        <Users className="mr-1 h-4 w-4" />
                        {topic.author}
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="mr-1 h-4 w-4" />
                        {topic.replies} replies
                      </div>
                      <div className="text-muted-foreground">
                        Last active {topic.lastActive}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {topic.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
