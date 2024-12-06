"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Clock, Users, Target } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const challenges = [
  {
    title: "Line Following Robot",
    description: "Build a robot that can follow a line using sensors and basic control algorithms.",
    difficulty: "Beginner",
    participants: 156,
    duration: "1 week",
    progress: 65,
    rewards: ["Basic Control Badge", "100 XP"],
    status: "Active",
  },
  {
    title: "Autonomous Navigation Challenge",
    description: "Create a robot that can navigate through a maze autonomously.",
    difficulty: "Intermediate",
    participants: 89,
    duration: "2 weeks",
    progress: 45,
    rewards: ["Navigation Expert Badge", "250 XP"],
    status: "Active",
  },
  {
    title: "Robot Vision Contest",
    description: "Implement computer vision to identify and sort objects by color and shape.",
    difficulty: "Advanced",
    participants: 67,
    duration: "3 weeks",
    progress: 30,
    rewards: ["Vision Master Badge", "500 XP"],
    status: "Active",
  },
]

export default function ChallengesPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Challenges</h1>
          <p className="text-muted-foreground">
            Test your robotics skills with hands-on challenges
          </p>
        </div>
        <Button>
          <Trophy className="mr-2 h-4 w-4" />
          View Leaderboard
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <Card key={challenge.title}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{challenge.title}</CardTitle>
                <Badge variant={challenge.status === "Active" ? "default" : "secondary"}>
                  {challenge.status}
                </Badge>
              </div>
              <CardDescription>{challenge.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Target className="mr-1 h-4 w-4" />
                    {challenge.difficulty}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {challenge.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4" />
                    {challenge.participants}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{challenge.progress}%</span>
                  </div>
                  <Progress value={challenge.progress} />
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-medium">Rewards:</span>
                  <div className="flex flex-wrap gap-2">
                    {challenge.rewards.map((reward) => (
                      <Badge key={reward} variant="secondary">
                        {reward}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Join Challenge</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
