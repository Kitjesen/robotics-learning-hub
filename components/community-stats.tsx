import { Card, CardContent } from "@/components/ui/card"
import { Users, MessageSquare, BookOpen, Calendar } from 'lucide-react'

const stats = [
  { icon: Users, label: 'Members', value: '10,000+' },
  { icon: MessageSquare, label: 'Discussions', value: '50,000+' },
  { icon: BookOpen, label: 'Resources', value: '5,000+' },
  { icon: Calendar, label: 'Events/Year', value: '100+' },
]

export function CommunityStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <stat.icon className="h-8 w-8 mb-2 text-blue-500" />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

