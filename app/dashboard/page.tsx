import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TodoList } from "@/components/dashboard/todo-list"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { CommunityDiscussions } from "@/components/dashboard/community-discussions"
import { SkillsRadar } from "@/components/dashboard/skills-radar"

export default function DashboardPage() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your learning progress.
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-md transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+20% from last month</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contributions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+5 this week</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bookmarks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34</div>
            <p className="text-xs text-muted-foreground">+2 new bookmarks</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 in progress, 1 completed</p>
          </CardContent>
        </Card>
      </div>

      {/* Learning Progress and Skills */}
      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4 hover:shadow-md transition-all">
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Introduction to Robotics</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Machine Learning for Robotics</span>
                <span>40%</span>
              </div>
              <Progress value={40} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Robot Operating System (ROS)</span>
                <span>90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Computer Vision in Robotics</span>
                <span>60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3 hover:shadow-md transition-all">
          <CardHeader>
            <CardTitle>Skills Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <SkillsRadar />
          </CardContent>
        </Card>
      </div>

      {/* Todo List and Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="hover:shadow-md transition-all">
          <CardHeader>
            <CardTitle>To-Do List</CardTitle>
          </CardHeader>
          <CardContent>
            <TodoList />
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-all">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>

      {/* Community Discussions */}
      <Card className="hover:shadow-md transition-all">
        <CardHeader>
          <CardTitle>Community Discussions</CardTitle>
        </CardHeader>
        <CardContent>
          <CommunityDiscussions />
        </CardContent>
      </Card>
    </div>
  )
}

