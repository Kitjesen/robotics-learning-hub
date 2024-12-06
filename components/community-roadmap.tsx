"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Bot, 
  Brain, 
  Users, 
  Rocket, 
  Book, 
  FileCode2, 
  Settings, 
  GitBranch,
  Database,
  Cpu,
  Robot,
  Microscope,
  Share2,
  MessageSquare,
  BookOpen,
  Lightbulb,
  Target,
  Gauge
} from 'lucide-react'
import Link from 'next/link'

const roadmapData = [
  {
    title: "Knowledge Base Development",
    description: "Building a comprehensive robotics knowledge base through community collaboration",
    status: "in-progress",
    color: "blue",
    icon: Brain,
    items: [
      {
        title: "Learning Paths",
        description: "Structured educational content",
        icon: BookOpen,
        status: "in-progress"
      },
      {
        title: "Best Practices",
        description: "Community-driven guidelines",
        icon: Lightbulb,
        status: "in-progress"
      },
      {
        title: "Technical Documentation",
        description: "Comprehensive guides",
        icon: Book,
        status: "completed"
      },
      {
        title: "API Documentation",
        description: "Integration guides",
        icon: FileCode2,
        status: "in-progress"
      }
    ]
  },
  {
    title: "AI-Enhanced Learning",
    description: "Optimizing learning experiences with AI technology and personalized recommendations",
    status: "development",
    color: "purple",
    icon: Bot,
    items: [
      {
        title: "Smart Recommendations",
        description: "Personalized learning",
        icon: Target,
        status: "development"
      },
      {
        title: "Progress Analytics",
        description: "Learning insights",
        icon: Gauge,
        status: "planned"
      },
      {
        title: "Code Assistant",
        description: "AI coding support",
        icon: Settings,
        status: "development"
      },
      {
        title: "Performance Optimization",
        description: "Automated tools",
        icon: Rocket,
        status: "planned"
      }
    ]
  },
  {
    title: "Community Collaboration",
    description: "Creating an open environment for knowledge sharing and project cooperation",
    status: "ongoing",
    color: "green",
    icon: Users,
    items: [
      {
        title: "Project Collaboration",
        description: "Team development",
        icon: Share2,
        status: "in-progress"
      },
      {
        title: "Knowledge Sharing",
        description: "Community discussions",
        icon: MessageSquare,
        status: "in-progress"
      },
      {
        title: "Research Integration",
        description: "Academic collaboration",
        icon: Microscope,
        status: "planned"
      },
      {
        title: "Resource Library",
        description: "Shared materials",
        icon: Database,
        status: "in-progress"
      }
    ]
  }
]

export function CommunityRoadmap() {
  const colors = {
    blue: "from-blue-100/80 to-blue-50/50",
    purple: "from-purple-100/80 to-purple-50/50",
    green: "from-green-100/80 to-green-50/50"
  }

  const statusColors = {
    completed: "bg-green-500",
    "in-progress": "bg-blue-500",
    development: "bg-purple-500",
    planned: "bg-gray-500",
    ongoing: "bg-yellow-500"
  }

  return (
    <div className="relative py-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30 -z-10" />
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[50px] -z-10" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <Link href="/project-plan" className="inline-block">
            <h2 className="text-2xl font-bold tracking-tight mb-2 hover:text-blue-600 transition-colors">
              Community Roadmap
            </h2>
          </Link>
          <p className="text-muted-foreground">
            Join us in shaping the future of robotics through open collaboration
          </p>
        </div>

        <div className="grid gap-6">
          {roadmapData.map((section, index) => (
            <div key={section.title} className="relative">
              {/* Status indicator */}
              <div 
                className="absolute -left-3 top-1/2 w-4 h-4 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: statusColors[section.status] }}
              />
              
              <div className={`rounded-xl backdrop-blur-lg bg-gradient-to-br ${colors[section.color]} p-4 shadow-sm border border-white/20`}>
                <div className="flex items-center gap-2 mb-3">
                  <section.icon className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{section.description}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {section.items.map((item) => (
                    <div key={item.title} className="flex items-start gap-2 p-2 rounded-lg bg-white/50 backdrop-blur-sm">
                      <item.icon className="w-4 h-4 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-sm">{item.title}</h4>
                          <span className={`w-1.5 h-1.5 rounded-full ${statusColors[item.status]}`} />
                        </div>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/project-plan">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition">
              View Full Roadmap
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
