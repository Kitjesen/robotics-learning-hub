import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

const discussions = [
  {
    title: "Advancements in Soft Robotics",
    author: "Dr. Sarah Chen",
    replies: 42,
    views: 1200,
    tags: ["Soft Robotics", "Materials", "Biomimicry"],
    href: "/discussions/soft-robotics-advancements"
  },
  {
    title: "Ethical Considerations in AI-powered Robots",
    author: "Prof. Alex Rodriguez",
    replies: 78,
    views: 2500,
    tags: ["AI Ethics", "Robot Rights", "Philosophy"],
    href: "/discussions/ai-ethics-robots"
  },
  {
    title: "Open Source ROS2 Projects for Beginners",
    author: "Emily Watson",
    replies: 35,
    views: 980,
    tags: ["ROS2", "Open Source", "Tutorials"],
    href: "/discussions/ros2-beginner-projects"
  }
]

export function FeaturedDiscussions() {
  return (
    <div className="grid gap-6">
      {discussions.map((discussion, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>
              <Link href={discussion.href} className="hover:text-blue-600 transition-colors">
                {discussion.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">By {discussion.author}</span>
              <div className="text-sm text-gray-600">
                <span className="mr-4">{discussion.replies} replies</span>
                <span>{discussion.views} views</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {discussion.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

