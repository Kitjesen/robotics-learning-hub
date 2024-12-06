import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarDays } from 'lucide-react'

const news = [
  {
    title: "Breakthrough in Soft Robotics",
    date: "2024-02-01",
    category: "Research",
    description: "Scientists develop new material that enables robots to stretch and flex like natural muscles.",
    link: "#"
  },
  {
    title: "AI-Powered Robot Sets New Record",
    date: "2024-01-28",
    category: "Achievement",
    description: "Robot completes complex assembly tasks with unprecedented speed and accuracy.",
    link: "#"
  },
  {
    title: "Major Grant Awarded for Robotics Research",
    date: "2024-01-25",
    category: "Funding",
    description: "$10M grant awarded to advance human-robot collaboration research.",
    link: "#"
  }
]

export function NewsUpdates() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        {news.map((item) => (
          <Card key={item.title} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary">{item.category}</Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
              </div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{item.description}</CardDescription>
              <Button variant="link" className="p-0" asChild>
                <Link href={item.link}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/news">View All News</Link>
        </Button>
      </div>
    </div>
  )
}

