import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, ExternalLink } from 'lucide-react'
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "International Conference on Robotics and Automation (ICRA)",
    date: "May 13-17, 2024",
    location: "Yokohama, Japan",
    description: "Premier international forum for robotics researchers to present their work.",
    link: "https://www.icra2024.org"
  },
  {
    id: 2,
    title: "RoboCup 2024",
    date: "July 17-23, 2024",
    location: "Eindhoven, Netherlands",
    description: "Annual competition promoting robotics and AI research through sports.",
    link: "https://2024.robocup.org"
  },
  {
    id: 3,
    title: "ROSCon 2024",
    date: "October 18-20, 2024",
    location: "San Francisco, USA",
    description: "Conference focused on ROS development and applications.",
    link: "https://roscon.ros.org/2024"
  },
  {
    id: 4,
    title: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    date: "October 14-18, 2024",
    location: "Abu Dhabi, UAE",
    description: "One of the largest and most impactful robotics research conferences worldwide.",
    link: "https://iros2024.org"
  }
]

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Robotics Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id} className="flex flex-col p-6 hover:shadow-lg transition-all duration-200">
            <h2 className="text-xl font-semibold mb-4">{event.title}</h2>
            <div className="space-y-3 mb-6 flex-grow">
              <div className="flex items-center text-muted-foreground">
                <CalendarDays className="h-4 w-4 mr-2 shrink-0" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 shrink-0" />
                <span>{event.location}</span>
              </div>
              <p className="text-muted-foreground">{event.description}</p>
            </div>
            <Button asChild variant="outline" className="w-full mt-auto">
              <Link 
                href={event.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Learn More
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

