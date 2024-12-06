import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, ArrowRight } from 'lucide-react'
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "Breakthrough in Soft Robotics: New Material Mimics Muscle Fibers",
    date: "2024-03-15",
    category: "Research",
    summary: "Scientists develop a new material that closely mimics the behavior of natural muscle fibers, potentially revolutionizing soft robotics applications.",
    link: "/news/soft-robotics-breakthrough"
  },
  {
    id: 2,
    title: "AI-Powered Robot Sets New Assembly Speed Record",
    date: "2024-03-10",
    category: "Industry",
    summary: "A new AI-powered robot has set a world record for the fastest assembly of a car engine, completing the task in just under 20 minutes.",
    link: "/news/ai-robot-assembly-record"
  },
  {
    id: 3,
    title: "Major Grant Awarded for Human-Robot Collaboration Research",
    date: "2024-03-05",
    category: "Funding",
    summary: "A consortium of universities has been awarded a $50 million grant to advance research in human-robot collaboration for manufacturing environments.",
    link: "/news/human-robot-collaboration-grant"
  },
  {
    id: 4,
    title: "Underwater Robots Discover New Marine Species",
    date: "2024-02-28",
    category: "Exploration",
    summary: "A team of underwater robots has discovered several new marine species in the Mariana Trench, showcasing the potential of robotics in deep-sea exploration.",
    link: "/news/underwater-robots-discovery"
  }
]

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Latest Robotics News</h1>
      <div className="space-y-6">
        {newsItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge>{item.category}</Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
              </div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{item.summary}</p>
              <Button asChild variant="outline">
                <Link href={item.link}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

