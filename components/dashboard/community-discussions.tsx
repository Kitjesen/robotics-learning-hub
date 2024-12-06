import { MessageSquare } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

const discussions = [
  { title: "Best practices for ROS2 development", replies: 15, category: "ROS" },
  { title: "Implementing SLAM in outdoor environments", replies: 8, category: "SLAM" },
  { title: "Ethical considerations in AI-powered robots", replies: 23, category: "AI Ethics" },
]

export function CommunityDiscussions() {
  return (
    <div className="space-y-4">
      {discussions.map((discussion, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="h-4 w-4 opacity-70" />
            <span className="font-medium">{discussion.title}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">{discussion.category}</Badge>
            <span className="text-sm text-muted-foreground">{discussion.replies} replies</span>
          </div>
        </div>
      ))}
    </div>
  )
}

