import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export function Profile() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Avatar className="h-20 w-20">
        <AvatarImage src="/avatars/01.png" alt="@username" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <h3 className="text-lg font-semibold">陈娜</h3>
        <p className="text-sm text-muted-foreground">Robotics Enthusiast</p>
      </div>
      <div className="w-full space-y-2">
        <div className="flex justify-between text-sm">
          <span>Profile Completion</span>
          <span>80%</span>
        </div>
        <Progress value={80} className="w-full" />
      </div>
      <Button asChild>
        <Link href="/dashboard/profile">Edit Profile</Link>
      </Button>
    </div>
  )
}

