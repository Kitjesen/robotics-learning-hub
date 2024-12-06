import { Users, BookOpen, BotIcon as Robot, School } from 'lucide-react'

const stats = [
  {
    name: "Active Users",
    value: "50,000+",
    icon: Users,
    description: "Robotics enthusiasts and researchers"
  },
  {
    name: "Research Papers",
    value: "10,000+",
    icon: BookOpen,
    description: "Peer-reviewed publications"
  },
  {
    name: "Robot Profiles",
    value: "1,000+",
    icon: Robot,
    description: "Detailed robot specifications"
  },
  {
    name: "Institutions",
    value: "500+",
    icon: School,
    description: "Leading research institutions"
  }
]

export function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat.name} className="flex flex-col items-center text-center p-6 rounded-xl bg-white hover:bg-gray-50 transition-colors">
          <stat.icon className="h-8 w-8 mb-4 text-blue-600" />
          <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
          <p className="font-semibold mb-1">{stat.name}</p>
          <p className="text-sm text-gray-600">{stat.description}</p>
        </div>
      ))}
    </div>
  )
}

