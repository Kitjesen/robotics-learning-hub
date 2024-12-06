import { Progress } from "@/components/ui/progress"

const projects = [
  { name: "Autonomous Navigation System", progress: 65 },
  { name: "Robot Arm Control Interface", progress: 40 },
  { name: "Computer Vision for Object Detection", progress: 80 },
]

export function ProjectStatus() {
  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">{project.name}</span>
            <span>{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="w-full" />
        </div>
      ))}
    </div>
  )
}

