import { CalendarDays, MapPin, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const events = [
  {
    title: "International Conference on Robotics and Automation (ICRA)",
    date: "May 13-17, 2024",
    location: "Yokohama, Japan",
    description: "Premier international forum for robotics researchers to present their work.",
    link: "#"
  },
  {
    title: "RoboCup 2024",
    date: "July 17-23, 2024",
    location: "Eindhoven, Netherlands",
    description: "Annual competition promoting robotics and AI research through sports.",
    link: "#"
  },
  {
    title: "ROSCon 2024",
    date: "October 18-20, 2024",
    location: "San Francisco, USA",
    description: "Conference focused on ROS development and applications.",
    link: "#"
  }
]

export function UpcomingEvents() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700" asChild>
          <Link href="/events" className="flex items-center">
            View All Events
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-4">
        {events.map((event, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg text-blue-700">{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-blue-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{event.description}</p>
                <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-700" asChild>
                  <Link href={event.link}>Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

