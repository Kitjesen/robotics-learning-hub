import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const topics = [
  {
    title: "Artificial Intelligence in Robotics",
    description: "Latest developments in AI-powered robotics systems",
    tags: ["Machine Learning", "Neural Networks", "Computer Vision"],
    papers: 342,
    trending: true
  },
  {
    title: "Soft Robotics",
    description: "Flexible and adaptable robotic systems",
    tags: ["Materials", "Biomimicry", "Actuators"],
    papers: 156,
    trending: true
  },
  {
    title: "Human-Robot Interaction",
    description: "Advancing the collaboration between humans and robots",
    tags: ["Social Robotics", "Interface Design", "Psychology"],
    papers: 278,
    trending: false
  },
  {
    title: "Swarm Robotics",
    description: "Coordinated multi-robot systems",
    tags: ["Distributed Systems", "Collective Behavior", "Algorithms"],
    papers: 198,
    trending: true
  }
]

export function FeaturedTopics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {topics.map((topic) => (
        <Card key={topic.title} className="group hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {topic.title}
              {topic.trending && (
                <Badge variant="secondary" className="ml-2">Trending</Badge>
              )}
            </CardTitle>
            <CardDescription>{topic.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {topic.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              {topic.papers} research papers published
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

