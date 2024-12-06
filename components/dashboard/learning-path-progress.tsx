import { Progress } from "@/components/ui/progress"

const paths = [
  { name: "机器人操作系统 (ROS)", progress: 75 },
  { name: "计算机视觉基础", progress: 60 },
  { name: "机器学习在机器人中的应用", progress: 40 },
]

export function LearningPathProgress() {
  return (
    <div className="space-y-4">
      {paths.map((path, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">{path.name}</span>
            <span>{path.progress}%</span>
          </div>
          <Progress value={path.progress} className="w-full" />
        </div>
      ))}
    </div>
  )
}

