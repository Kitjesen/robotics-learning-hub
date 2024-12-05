import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentActivities = [
  {
    user: {
      name: "John Doe",
      avatar: "/avatars/john-doe.png",
    },
    activity: "commented on",
    target: "Introduction to Robotics",
    time: "2 hours ago",
  },
  {
    user: {
      name: "Jane Smith",
      avatar: "/avatars/jane-smith.png",
    },
    activity: "updated",
    target: "ROS2 Tutorial",
    time: "4 hours ago",
  },
  {
    user: {
      name: "Bob Johnson",
      avatar: "/avatars/bob-johnson.png",
    },
    activity: "created",
    target: "Machine Learning for Robotics",
    time: "1 day ago",
  },
  {
    user: {
      name: "Alice Brown",
      avatar: "/avatars/alice-brown.png",
    },
    activity: "bookmarked",
    target: "Computer Vision Techniques",
    time: "2 days ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {recentActivities.map((item, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={item.user.avatar} alt={item.user.name} />
            <AvatarFallback>{item.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {item.user.name} {item.activity} {item.target}
            </p>
            <p className="text-sm text-muted-foreground">
              {item.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

