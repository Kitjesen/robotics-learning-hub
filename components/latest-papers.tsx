import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const papers = [
  {
    title: "Adaptive Control Strategies for Soft Robotic Manipulators",
    authors: "Zhang, L., et al.",
    journal: "IEEE Robotics and Automation Letters",
    date: "2024-05-15",
    tags: ["Soft Robotics", "Control Systems"],
    abstract: "This paper presents novel adaptive control strategies for soft robotic manipulators, addressing the challenges of non-linear dynamics and environmental interactions.",
    doi: "10.1109/LRA.2024.3178901"
  },
  {
    title: "Deep Reinforcement Learning for Multi-Agent Robotic Swarms",
    authors: "Patel, R., et al.",
    journal: "Robotics and Autonomous Systems",
    date: "2024-06-02",
    tags: ["Swarm Robotics", "Machine Learning"],
    abstract: "We propose a new deep reinforcement learning framework for coordinating large-scale robotic swarms in complex, dynamic environments.",
    doi: "10.1016/j.robot.2024.104321"
  },
  {
    title: "Human-Robot Collaboration in Manufacturing: A Comprehensive Review",
    authors: "Johnson, M., et al.",
    journal: "Annual Review of Control, Robotics, and Autonomous Systems",
    date: "2024-06-20",
    tags: ["Human-Robot Interaction", "Manufacturing"],
    abstract: "This review summarizes recent advancements in human-robot collaboration within manufacturing settings, highlighting key challenges and future research directions.",
    doi: "10.1146/annurev-control-062024-090215"
  }
]

export function LatestPapers() {
  return (
    <div className="space-y-6">
      {papers.map((paper, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">{paper.title}</CardTitle>
            <CardDescription>{paper.authors} • {paper.journal} • {paper.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">{paper.abstract}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {paper.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
                Read Paper
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
      <div className="text-center">
        <Button asChild>
          <Link href="/papers">View All Papers</Link>
        </Button>
      </div>
    </div>
  )
}

