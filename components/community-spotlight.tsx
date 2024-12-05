import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const spotlightMembers = [
  {
    name: "Dr. Sarah Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Robotics Researcher",
    institution: "MIT",
    contribution: "Published groundbreaking paper on soft robotics",
    badges: ["Soft Robotics", "Material Science"]
  },
  {
    name: "Alex Rodriguez",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "PhD Candidate",
    institution: "Stanford University",
    contribution: "Developed open-source library for robot motion planning",
    badges: ["Motion Planning", "Open Source"]
  },
  {
    name: "Dr. Yuki Tanaka",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Professor",
    institution: "University of Tokyo",
    contribution: "Leading research on human-robot interaction in eldercare",
    badges: ["HRI", "Eldercare Robotics"]
  }
]

export function CommunitySpotlight() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {spotlightMembers.map((member, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <p className="text-sm font-medium text-blue-600">{member.institution}</p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-3">{member.contribution}</p>
            <div className="flex flex-wrap gap-2">
              {member.badges.map((badge) => (
                <Badge key={badge} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                  {badge}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

