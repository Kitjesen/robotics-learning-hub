import { Progress } from "@/components/ui/progress"

const courses = [
  { name: "Introduction to Robotics", progress: 75 },
  { name: "Machine Learning for Robotics", progress: 40 },
  { name: "Robot Operating System (ROS)", progress: 90 },
  { name: "Computer Vision in Robotics", progress: 60 },
]

export function LearningProgress() {
  return (
    <div className="space-y-4">
      {courses.map((course, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{course.name}</span>
            <span>{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="w-full" />
        </div>
      ))}
    </div>
  )
}

