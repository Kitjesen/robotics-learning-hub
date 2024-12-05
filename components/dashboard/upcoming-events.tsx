import { CalendarIcon } from "@radix-ui/react-icons"

const events = [
  { name: "Robotics Workshop", date: "2024-03-15", time: "14:00" },
  { name: "AI in Robotics Webinar", date: "2024-03-18", time: "10:00" },
  { name: "ROS2 Study Group", date: "2024-03-20", time: "18:00" },
]

export function UpcomingEvents() {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={index} className="flex items-center">
          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
          <span className="flex-grow font-medium">{event.name}</span>
          <span className="text-sm text-muted-foreground">
            {new Date(`${event.date}T${event.time}`).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  )
}

