import { GitCommit, GitPullRequest, GitMerge } from 'lucide-react'

const contributions = [
  { type: 'commit', description: '更新ROS2安装指南', date: '2024-03-10' },
  { type: 'pull-request', description: '添加计算机视觉教程', date: '2024-03-08' },
  { type: 'merge', description: '合并机器学习模块', date: '2024-03-05' },
]

export function RecentContributions() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'commit':
        return <GitCommit className="h-4 w-4" />
      case 'pull-request':
        return <GitPullRequest className="h-4 w-4" />
      case 'merge':
        return <GitMerge className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {contributions.map((contribution, index) => (
        <div key={index} className="flex items-center space-x-2">
          {getIcon(contribution.type)}
          <span className="flex-grow">{contribution.description}</span>
          <span className="text-sm text-muted-foreground">{contribution.date}</span>
        </div>
      ))}
    </div>
  )
}

