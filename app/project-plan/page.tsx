"use client"

import { Metadata } from "next"
import { motion } from "framer-motion"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Resource, Risk } from '@/types/project'
import type { LucideIcon } from 'lucide-react'
import { 
  AlertTriangle,
  Award,
  Blocks,
  Book,
  BookOpen,
  Bot,
  Brain,
  CalendarDays,
  CheckCircle,
  ChevronRight,
  Clock,
  Code2,
  Cpu,
  Database,
  Download,
  FileCode2,
  Filter,
  Gauge,
  GitBranch,
  GitPullRequest,
  GraduationCap,
  Lightbulb,
  Library,
  Medal,
  MessageSquare,
  Microscope,
  MonitorPlay,
  Network,
  Plus,
  Presentation,
  RefreshCw,
  Rocket,
  Server,
  Settings,
  Share2,
  Shield,
  Target,
  TestTube,
  UserPlus,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Project Plan & Roadmap",
  description: "Comprehensive development plan for the robotics learning platform",
}

// Define RoadmapItemProps interface
interface RoadmapItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  status: 'completed' | 'in-progress' | 'development' | 'planned' | 'ongoing';
  quarter: string;
  dependencies?: string[];
  impact?: 'high' | 'medium' | 'low';
  team?: string[];
  priority?: 'high' | 'medium' | 'low';
}

// Roadmap Item Component
function RoadmapItem({ 
  title, 
  description, 
  icon: Icon, 
  status, 
  quarter, 
  dependencies = [], 
  impact = "medium", 
  team = [], 
  priority = "medium" 
}: RoadmapItemProps) {
  const statusColors = {
    completed: "bg-gradient-to-r from-teal-500 to-teal-400 text-white",
    "in-progress": "bg-gradient-to-r from-sky-500 to-sky-400 text-white",
    development: "bg-gradient-to-r from-indigo-500 to-indigo-400 text-white",
    planned: "bg-gradient-to-r from-slate-500 to-slate-400 text-white",
    ongoing: "bg-gradient-to-r from-amber-500 to-amber-400 text-white"
  }

  const priorityColors = {
    high: "text-rose-600 bg-rose-50/80 border border-rose-100",
    medium: "text-amber-600 bg-amber-50/80 border border-amber-100",
    low: "text-emerald-600 bg-emerald-50/80 border border-emerald-100"
  }

  return (
    <div className="group relative flex flex-col gap-2 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2 min-w-0 flex-1">
          <div className={`p-1.5 rounded-lg bg-gradient-to-br ${status === 'completed' ? 'from-teal-50 to-teal-100' : status === 'in-progress' ? 'from-sky-50 to-sky-100' : status === 'development' ? 'from-indigo-50 to-indigo-100' : status === 'ongoing' ? 'from-amber-50 to-amber-100' : 'from-slate-50 to-slate-100'}`}>
            <Icon className={`w-4 h-4 ${status === 'completed' ? 'text-teal-600' : status === 'in-progress' ? 'text-sky-600' : status === 'development' ? 'text-indigo-600' : status === 'ongoing' ? 'text-amber-600' : 'text-slate-600'}`} />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-medium text-gray-900 text-sm group-hover:text-gray-700 transition-colors">{title}</h4>
            <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">{description}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[status]}`}>
            {status}
          </span>
          <span className="text-xs text-gray-600 bg-gray-100/80 px-2 py-0.5 rounded-full">
            {quarter}
          </span>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-1.5">
        <div className={`text-xs px-2 py-0.5 rounded-full ${priorityColors[priority]}`}>
          {priority} priority
        </div>
        <div className={`text-xs px-2 py-0.5 rounded-full ${priorityColors[impact]}`}>
          {impact} impact
        </div>
      </div>

      {dependencies.length > 0 && (
        <div className="flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50/80 p-1.5 rounded-lg">
          <GitBranch className="w-3 h-3 text-gray-500" />
          <div className="flex flex-wrap gap-1">
            {dependencies.map((dep: string, index: number) => (
              <span key={index} className="bg-white px-1.5 py-0.5 rounded text-xs border border-gray-200">
                {dep}
              </span>
            ))}
          </div>
        </div>
      )}

      {team.length > 0 && (
        <div className="flex items-center gap-1.5">
          <div className="flex -space-x-1.5">
            {team.map((member: string, index: number) => (
              <div key={index} className="w-5 h-5 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
                <span className="text-xs font-medium text-gray-600">{member[0]}</span>
              </div>
            ))}
          </div>
          <span className="text-xs text-gray-500">Team</span>
        </div>
      )}
    </div>
  )
}

// Roadmap Section Component
function RoadmapSection({ 
  title, 
  status, 
  description, 
  color, 
  icon: Icon,
  completion = "0%",
  quarterRange = "",
  team = [],
  children 
}: any) {
  const colors = {
    blue: "from-sky-100 to-sky-50",
    purple: "from-indigo-100 to-indigo-50",
    pink: "from-rose-100 to-rose-50",
    green: "from-emerald-100 to-emerald-50",
    gray: "from-slate-100 to-slate-50"
  }

  const statusColors = {
    completed: "from-teal-500 to-teal-600",
    "in-progress": "from-sky-500 to-sky-600",
    development: "from-indigo-500 to-indigo-600",
    planned: "from-slate-400 to-slate-500",
    ongoing: "from-amber-500 to-amber-600"
  }

  return (
    <div className="relative pl-12">
      {/* Status indicator */}
      <div className="absolute left-0 top-8 flex items-center">
        <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${statusColors[status]} ring-4 ring-white shadow-md`} />
        <div className="h-px w-8 bg-gray-200" />
      </div>
      
      <div className={`rounded-lg bg-gradient-to-br ${colors[color]} p-4 shadow-sm`}>
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-white shadow-sm`}>
            <Icon className="w-5 h-5 text-gray-700" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                {quarterRange && (
                  <span className="text-xs font-medium text-gray-500 bg-white/60 px-2 py-1 rounded-full">
                    {quarterRange}
                  </span>
                )}
                <div className="flex items-center gap-2">
                  <div className="h-2 w-20 bg-white/60 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-gray-600 to-gray-700 rounded-full transition-all duration-500 ease-out"
                      style={{ width: completion }}
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-600">{completion}</span>
                </div>
              </div>
            </div>
            {team.length > 0 && (
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                <Users className="w-3.5 h-3.5" />
                <div className="flex gap-1">
                  {team.map((member: string, index: number) => (
                    <span key={index} className="bg-white/60 px-1.5 py-0.5 rounded">
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {children}
        </div>
      </div>
    </div>
  )
}

// Progress Ring Component
function ProgressRing({ progress, size = 40, strokeWidth = 4 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        className="stroke-gray-200"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="stroke-blue-500 transition-all duration-500 ease-in-out"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
}

// Stats Card Component with more detailed information
function StatsCard({ title, value, icon: Icon, trend = 0, subtext = "", color = "blue" }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg bg-${color}-50`}>
            <Icon className={`w-4 h-4 text-${color}-600`} />
          </div>
          <span className="text-sm font-medium text-gray-600">{title}</span>
        </div>
        {trend !== 0 && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${trend > 0 ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
      </div>
      <div className="flex items-end gap-2">
        <p className="text-2xl font-bold">{value}</p>
        {subtext && <p className="text-xs text-gray-500 mb-1">{subtext}</p>}
      </div>
    </div>
  )
}

// Risk Level Indicator
function RiskIndicator({ level }) {
  const colors = {
    low: "bg-green-500",
    medium: "bg-yellow-500",
    high: "bg-red-500"
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 h-2 rounded-full ${colors[level]}`} />
      <span className="text-xs text-gray-600 capitalize">{level} risk</span>
    </div>
  );
}

// Team Member Card with Status
function TeamMemberCard({ name, role, status, avatar }) {
  const statusColors = {
    online: "bg-green-500",
    busy: "bg-yellow-500",
    offline: "bg-gray-400"
  };

  return (
    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full rounded-full" />
          ) : (
            <span className="text-sm font-medium text-gray-600">{name[0]}</span>
          )}
        </div>
        <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${statusColors[status]}`} />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  );
}

// Quick Action Button with additional information
interface QuickActionProps {
  icon: LucideIcon;
  label: string;
  description: string;
  badge?: string | null;
}

function QuickAction({ 
  icon: Icon, 
  label, 
  description, 
  badge 
}: QuickActionProps) {
  return (
    <button className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all group w-full text-left">
      <div className="p-2 rounded-lg bg-gray-100 text-gray-600 group-hover:bg-gray-200 transition-colors">
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-medium text-gray-900">{label}</h4>
          {badge && (
            <span className="px-2 py-0.5 rounded-full text-xs bg-blue-50 text-blue-600">
              {badge}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">{description}</p>
      </div>
    </button>
  );
}

// Activity Item with more context
function ActivityItem({ user, action, target, time, icon: Icon, category }) {
  const categoryColors = {
    update: "text-blue-600 bg-blue-50",
    completion: "text-green-600 bg-green-50",
    creation: "text-purple-600 bg-purple-50",
    comment: "text-yellow-600 bg-yellow-50"
  };

  return (
    <div className="flex gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
      <div className={`p-2 rounded-lg ${categoryColors[category]} self-start`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm">
          <span className="font-medium text-gray-900">{user}</span>
          <span className="text-gray-500"> {action} </span>
          <span className="font-medium text-gray-900">{target}</span>
        </p>
        <p className="text-xs text-gray-500 mt-0.5">{time}</p>
      </div>
    </div>
  );
}

// Milestone Timeline Component
function MilestoneTimeline({ milestones }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="font-medium text-gray-900 mb-4">Upcoming Milestones</h3>
      <div className="space-y-4">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative pl-6">
            <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-blue-500 bg-white" />
            {index !== milestones.length - 1 && (
              <div className="absolute left-1.5 top-4 bottom-0 w-px bg-gray-200" />
            )}
            <div className="mb-1">
              <h4 className="text-sm font-medium text-gray-900">{milestone.title}</h4>
              <p className="text-xs text-gray-500">{milestone.date}</p>
            </div>
            <p className="text-xs text-gray-600">{milestone.description}</p>
            {milestone.status && (
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                milestone.status === 'completed' ? 'bg-green-100 text-green-800' :
                milestone.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              } mt-1`}>
                {milestone.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Resource Allocation Chart
function ResourceAllocation({ 
  resources
}: { 
  resources: Resource[];
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
      <h3 className="font-medium text-gray-900 mb-4">Resource Allocation</h3>
      <div className="space-y-3">
        {resources.map((resource, index) => (
          <Link
            key={index}
            href={`/project-plan/resources/${encodeURIComponent(resource.name.toLowerCase().replace(/\s+/g, '-'))}`}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="space-y-1.5 p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between text-sm">
                <span className="text-gray-700 font-medium">{resource.name}</span>
                <span className="text-gray-900 font-medium bg-gray-100 px-2 py-0.5 rounded-full">
                  {resource.allocation}%
                </span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${resource.allocation}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Risk Assessment Component
function RiskAssessment({ 
  risks
}: { 
  risks: Risk[];
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
      <h3 className="font-medium text-gray-900 mb-4">Risk Assessment</h3>
      <div className="space-y-3">
        {risks.map((risk, index) => (
          <Link
            key={index}
            href={`/project-plan/risks/${encodeURIComponent(risk.title.toLowerCase().replace(/\s+/g, '-'))}`}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-all group"
            >
              <div className={`p-2 rounded-lg transition-colors ${
                risk.level === 'high' ? 'bg-red-50 text-red-600 group-hover:bg-red-100' :
                risk.level === 'medium' ? 'bg-yellow-50 text-yellow-600 group-hover:bg-yellow-100' :
                'bg-green-50 text-green-600 group-hover:bg-green-100'
              }`}>
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-medium text-gray-900">{risk.title}</h4>
                  <RiskIndicator level={risk.level} />
                </div>
                <p className="text-xs text-gray-600 mb-1.5 line-clamp-2">{risk.description}</p>
                {risk.mitigation && (
                  <div className="flex items-start gap-1.5 text-xs text-gray-500">
                    <span className="font-medium min-w-fit">Mitigation:</span>
                    <span className="line-clamp-1">{risk.mitigation}</span>
                  </div>
                )}
              </div>
              <div className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Sprint Progress Component
function SprintProgress({ sprint }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-gray-900">Current Sprint</h3>
        <span className="text-sm text-gray-500">{sprint.timeRemaining} days left</span>
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{sprint.progress}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${sprint.progress}%` }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="bg-gray-50 rounded-lg p-2">
            <div className="text-sm font-medium text-gray-900">{sprint.completedTasks}</div>
            <div className="text-xs text-gray-500">Completed</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-2">
            <div className="text-sm font-medium text-gray-900">{sprint.remainingTasks}</div>
            <div className="text-xs text-gray-500">Remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Velocity Chart Component
function VelocityChart({ data }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <h3 className="font-medium text-gray-900 mb-3">Team Velocity</h3>
      <div className="space-y-2">
        {data.map((sprint, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Sprint {sprint.number}</span>
              <span className="text-gray-900 font-medium">{sprint.points} pts</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(sprint.points / data[0].points) * 100}%`,
                  backgroundColor: `${sprint.completed ? '#10B981' : '#3B82F6'}`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RoadmapPage() {
  const router = useRouter();

  const resources: Resource[] = [
    { name: "Development Team", allocation: 75 },
    { name: "Content Creation", allocation: 60 },
    { name: "Research Support", allocation: 40 },
    { name: "Community Management", allocation: 25 }
  ];

  const risks: Risk[] = [
    {
      title: "Technical Debt",
      level: "medium",
      description: "Accumulating technical debt in the core architecture",
      mitigation: "Regular refactoring sessions scheduled"
    },
    {
      title: "Resource Constraints",
      level: "high",
      description: "Limited availability of senior developers",
      mitigation: "Recruiting additional team members"
    },
    {
      title: "Security Vulnerabilities",
      level: "low",
      description: "Potential security issues in third-party dependencies",
      mitigation: "Regular security audits and updates"
    }
  ];

  const milestones = [
    {
      title: "Infrastructure Setup Complete",
      description: "Core infrastructure and development environment setup",
      status: "completed",
      date: "2024-01-15",
      icon: Server
    },
    {
      title: "MVP Release",
      description: "Initial release of core features",
      status: "in-progress",
      date: "2024-02-28",
      icon: Rocket
    },
    {
      title: "Beta Testing",
      description: "Public beta testing phase",
      status: "planned",
      date: "2024-03-15",
      icon: TestTube
    }
  ];

  const sprintData = {
    timeRemaining: 8,
    progress: 65,
    completedTasks: 13,
    remainingTasks: 7
  };

  const velocityData = [
    { number: 4, points: 34, completed: false },
    { number: 3, points: 28, completed: true },
    { number: 2, points: 31, completed: true },
    { number: 1, points: 25, completed: true }
  ];

  const quickActions = [
    {
      icon: Plus,
      label: "Create Task",
      description: "Add a new task to the project",
      badge: "Quick"
    },
    {
      icon: Filter,
      label: "Filter Tasks",
      description: "Filter and sort project tasks",
      badge: "New"
    },
    {
      icon: Download,
      label: "Export Report",
      description: "Download project progress report",
      badge: "Pro"
    }
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Building the Future of Robotics Together</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our comprehensive development roadmap outlines the journey to create an open,
            collaborative robotics learning ecosystem. Join us in shaping the future of robotics
            education and research.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-2 space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-3">Project Stats</h3>
              <div className="space-y-3">
                <StatsCard
                  title="Completed Tasks"
                  value="12"
                  icon={CheckCircle}
                  trend={5}
                  subtext="Out of 20 tasks"
                  color="green"
                />
                <StatsCard
                  title="In Progress"
                  value="8"
                  icon={Clock}
                  trend={-2}
                  subtext="Out of 15 tasks"
                  color="blue"
                />
                <StatsCard
                  title="Team Members"
                  value="15"
                  icon={Users}
                  trend={0}
                  subtext="Active contributors"
                  color="purple"
                />
              </div>
            </div>
            <MilestoneTimeline milestones={milestones} />
            <SprintProgress sprint={sprintData} />
            <VelocityChart data={velocityData} />
          </div>

          {/* Main Content */}
          <div className="col-span-8">
            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200" />

              {/* Roadmap Sections */}
              <div className="space-y-6">
                {/* Infrastructure & Foundation */}
                <RoadmapSection
                  title="Infrastructure & Foundation"
                  status="completed"
                  description="Establishing the core technical infrastructure and community framework"
                  color="blue"
                  icon={Server}
                  completion="100%"
                  quarterRange="Q1 2024"
                  team={["Alex", "Sarah", "Mike"]}
                >
                  <RoadmapItem
                    title="Core Architecture"
                    description="Design and implement the foundational system architecture"
                    icon={Blocks}
                    status="completed"
                    quarter="Q1 2024"
                    dependencies={["Server Setup", "Database Design"]}
                    impact="high"
                    priority="high"
                    team={["Alex", "Sarah"]}
                  />
                  <RoadmapItem
                    title="Version Control"
                    description="Set up Git repositories and branching strategies"
                    icon={GitBranch}
                    status="completed"
                    quarter="Q1 2024"
                    dependencies={["Core Architecture"]}
                    impact="medium"
                    priority="medium"
                    team={["Mike"]}
                  />
                  <RoadmapItem
                    title="CI/CD Pipeline"
                    description="Implement automated testing and deployment workflows"
                    icon={Code2}
                    status="completed"
                    quarter="Q1 2024"
                    dependencies={["Version Control"]}
                    impact="high"
                    priority="high"
                    team={["Alex", "Sarah"]}
                  />
                  <RoadmapItem
                    title="Security Framework"
                    description="Establish security protocols and access controls"
                    icon={Shield}
                    status="completed"
                    quarter="Q1 2024"
                    dependencies={["CI/CD Pipeline"]}
                    impact="high"
                    priority="high"
                    team={["Mike"]}
                  />
                </RoadmapSection>

                {/* Learning Platform */}
                <RoadmapSection
                  title="Learning Platform Development"
                  status="in-progress"
                  description="Building a comprehensive educational platform for robotics"
                  color="purple"
                  icon={GraduationCap}
                  completion="50%"
                  quarterRange="Q2-Q3 2024"
                  team={["Alex", "Sarah", "Mike"]}
                >
                  <RoadmapItem
                    title="Course Framework"
                    description="Develop the core course management system"
                    icon={Book}
                    status="in-progress"
                    quarter="Q2 2024"
                    dependencies={["Infrastructure & Foundation"]}
                    impact="high"
                    priority="high"
                    team={["Alex", "Sarah"]}
                  />
                  <RoadmapItem
                    title="Interactive Labs"
                    description="Create virtual robotics simulation environments"
                    icon={MonitorPlay}
                    status="in-progress"
                    quarter="Q2 2024"
                    dependencies={["Course Framework"]}
                    impact="medium"
                    priority="medium"
                    team={["Mike"]}
                  />
                  <RoadmapItem
                    title="Resource Library"
                    description="Build a searchable repository of learning materials"
                    icon={Library}
                    status="development"
                    quarter="Q3 2024"
                    dependencies={["Interactive Labs"]}
                    impact="low"
                    priority="low"
                    team={["Alex"]}
                  />
                  <RoadmapItem
                    title="Progress Tracking"
                    description="Implement learning progress and achievement system"
                    icon={Target}
                    status="planned"
                    quarter="Q3 2024"
                    dependencies={["Resource Library"]}
                    impact="medium"
                    priority="medium"
                    team={["Sarah"]}
                  />
                </RoadmapSection>

                {/* Research & Innovation */}
                <RoadmapSection
                  title="Research & Innovation Hub"
                  status="development"
                  description="Creating a collaborative environment for robotics research"
                  color="pink"
                  icon={TestTube}
                  completion="25%"
                  quarterRange="Q2-Q4 2024"
                  team={["Alex", "Sarah", "Mike"]}
                >
                  <RoadmapItem
                    title="Research Database"
                    description="Develop paper indexing and search functionality"
                    icon={Database}
                    status="development"
                    quarter="Q2 2024"
                    dependencies={["Learning Platform Development"]}
                    impact="high"
                    priority="high"
                    team={["Alex", "Sarah"]}
                  />
                  <RoadmapItem
                    title="Collaboration Tools"
                    description="Implement tools for research team collaboration"
                    icon={Network}
                    status="development"
                    quarter="Q3 2024"
                    dependencies={["Research Database"]}
                    impact="medium"
                    priority="medium"
                    team={["Mike"]}
                  />
                  <RoadmapItem
                    title="Project Management"
                    description="Create research project tracking and management tools"
                    icon={Presentation}
                    status="planned"
                    quarter="Q3 2024"
                    dependencies={["Collaboration Tools"]}
                    impact="low"
                    priority="low"
                    team={["Alex"]}
                  />
                  <RoadmapItem
                    title="Analytics Dashboard"
                    description="Build research impact and metrics visualization"
                    icon={Gauge}
                    status="planned"
                    quarter="Q4 2024"
                    dependencies={["Project Management"]}
                    impact="medium"
                    priority="medium"
                    team={["Sarah"]}
                  />
                </RoadmapSection>

                {/* Community & Events */}
                <RoadmapSection
                  title="Community & Events"
                  status="ongoing"
                  description="Building and nurturing the robotics learning community"
                  color="green"
                  icon={Users}
                  completion="75%"
                  quarterRange="Q2-Q4 2024"
                  team={["Alex", "Sarah", "Mike"]}
                >
                  <RoadmapItem
                    title="Discussion Forums"
                    description="Implement community discussion and Q&A platform"
                    icon={MessageSquare}
                    status="in-progress"
                    quarter="Q2 2024"
                    dependencies={["Research & Innovation Hub"]}
                    impact="high"
                    priority="high"
                    team={["Alex", "Sarah"]}
                  />
                  <RoadmapItem
                    title="Project Showcase"
                    description="Create platform for sharing community projects"
                    icon={Rocket}
                    status="development"
                    quarter="Q3 2024"
                    dependencies={["Discussion Forums"]}
                    impact="medium"
                    priority="medium"
                    team={["Mike"]}
                  />
                  <RoadmapItem
                    title="Mentorship Program"
                    description="Develop mentorship matching and management system"
                    icon={UserPlus}
                    status="planned"
                    quarter="Q3 2024"
                    dependencies={["Project Showcase"]}
                    impact="low"
                    priority="low"
                    team={["Alex"]}
                  />
                  <RoadmapItem
                    title="Events Platform"
                    description="Build system for organizing and managing events"
                    icon={CalendarDays}
                    status="planned"
                    quarter="Q4 2024"
                    dependencies={["Mentorship Program"]}
                    impact="medium"
                    priority="medium"
                    team={["Sarah"]}
                  />
                </RoadmapSection>

                {/* Quality & Recognition */}
                <RoadmapSection
                  title="Quality & Recognition"
                  status="planned"
                  description="Ensuring platform quality and recognizing community contributions"
                  color="gray"
                  icon={Award}
                  completion="0%"
                  quarterRange="Q3-Q4 2024"
                  team={["Alex", "Sarah", "Mike"]}
                >
                  <RoadmapItem
                    title="Quality Assurance"
                    description="Implement comprehensive testing and feedback systems"
                    icon={Shield}
                    status="planned"
                    quarter="Q3 2024"
                    dependencies={["Community & Events"]}
                    impact="high"
                    priority="high"
                    team={["Alex", "Sarah"]}
                  />
                  <RoadmapItem
                    title="Certification System"
                    description="Develop achievement and certification framework"
                    icon={Award}
                    status="planned"
                    quarter="Q4 2024"
                    dependencies={["Quality Assurance"]}
                    impact="medium"
                    priority="medium"
                    team={["Mike"]}
                  />
                  <RoadmapItem
                    title="Contribution Recognition"
                    description="Create system for tracking and rewarding contributions"
                    icon={GitPullRequest}
                    status="planned"
                    quarter="Q4 2024"
                    dependencies={["Certification System"]}
                    impact="low"
                    priority="low"
                    team={["Alex"]}
                  />
                  <RoadmapItem
                    title="Community Awards"
                    description="Establish program for recognizing community achievements"
                    icon={Medal}
                    status="planned"
                    quarter="Q4 2024"
                    dependencies={["Contribution Recognition"]}
                    impact="medium"
                    priority="medium"
                    team={["Sarah"]}
                  />
                </RoadmapSection>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-2 space-y-4">
            {/* Quick Actions Card */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                {quickActions.map((action, index) => (
                  <QuickAction
                    key={index}
                    icon={action.icon}
                    label={action.label}
                    description={action.description}
                    badge={action.badge}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-3">Team Activity</h3>
              <div className="space-y-3">
                <ActivityItem
                  user="Sarah"
                  action="updated"
                  target="CI/CD Pipeline"
                  time="2h ago"
                  icon={Clock}
                  category="update"
                />
                <ActivityItem
                  user="Mike"
                  action="completed"
                  target="Security Framework"
                  time="5h ago"
                  icon={Shield}
                  category="completion"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <ResourceAllocation resources={resources} />
                <RiskAssessment risks={risks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
