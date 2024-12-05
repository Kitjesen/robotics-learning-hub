import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const areas = [
  {
    title: "AI & Machine Learning",
    description: "Neural networks, deep learning, and reinforcement learning for robotics",
    papers: "2,500+ papers",
    href: "/research/ai-ml",
    tags: ["Deep Learning", "Neural Networks", "Reinforcement Learning", "Machine Vision"]
  },
  {
    title: "Robot Manipulation",
    description: "Grasping, dexterity, and fine motor control",
    papers: "1,800+ papers",
    href: "/research/manipulation",
    tags: ["Grasping", "Motion Planning", "Dexterity", "Control"]
  },
  {
    title: "Swarm Robotics",
    description: "Multi-robot systems and collective behavior",
    papers: "1,200+ papers",
    href: "/research/swarm",
    tags: ["Multi-Agent", "Coordination", "Distributed Systems", "Collective Behavior"]
  },
  {
    title: "Human-Robot Interaction",
    description: "Social robotics and collaborative systems",
    papers: "1,500+ papers",
    href: "/research/hri",
    tags: ["Social Robotics", "Collaboration", "Interface Design", "Safety"]
  },
  {
    title: "Robot Perception",
    description: "Computer vision and sensor fusion",
    papers: "2,000+ papers",
    href: "/research/perception",
    tags: ["Computer Vision", "Sensor Fusion", "SLAM", "Object Detection"]
  },
  {
    title: "Control Systems",
    description: "Motion planning and control theory",
    papers: "1,600+ papers",
    href: "/research/control",
    tags: ["Control Theory", "Path Planning", "Dynamics", "Optimization"]
  }
]

export function ResearchAreas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {areas.map((area) => (
        <Link 
          key={area.title} 
          href={area.href}
          className="block group"
        >
          <Card className="p-6 h-full rounded-2xl transition-all duration-200 hover:shadow-lg border-0 bg-white/60 backdrop-blur-md backdrop-filter">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 group-hover:text-gray-700 transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2 font-medium">{area.papers}</p>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

