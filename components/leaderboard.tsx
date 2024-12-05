"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Star, Users, ArrowRight, BookOpen, Code, Cpu, Lightbulb, FileText, TrendingUp, Check, Info } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"


interface LeaderboardItem {
rank: number
title: string
category: string
description: string
difficulty?: string
duration?: string | number
score: number
views: number
rating: number
updatedAt: string
enrolledUsers?: number
reviews?: number
trending?: boolean
popularity?: number
prerequisites?: string[]
outline?: string[]
link?: string
tags?: string[]
image?: string
}

// Pastel color palette
const pastelColors = {
blue: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
purple: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200",
green: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
yellow: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200",
pink: "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-200",
}

const leaderboardData: LeaderboardItem[] = [
  { 
    rank: 1, 
    title: "Introduction to ROS2", 
    category: "Tutorials",
    description: "Learn the fundamentals of ROS2, from installation to creating your first nodes and topics.", 
    difficulty: "Beginner",
    duration: 4,
    trending: true,
    popularity: 95,
    score: 1500, 
    views: 1500,
    rating: 4.8,
    updatedAt: "2 weeks ago",
    enrolledUsers: 5000,
    reviews: 120,
    prerequisites: ["Basic programming knowledge"],
    outline: ["ROS2 installation", "Nodes and topics", "Creating ROS2 packages"],
    link: "/tutorials/ros2-intro",
    tags: ["ROS", "Beginner", "Tutorial"]
  },
  { 
    rank: 2, 
    title: "Computer Vision for Robotics", 
    category: "Courses", 
    description: "Master computer vision techniques and apply them to robotics applications.",
    difficulty: "Intermediate",
    duration: "12 hours",
    trending: false,
    popularity: 85,
    score: 1200, 
    views: 1200,
    rating: 4.5,
    updatedAt: "1 month ago",
    enrolledUsers: 3000,
    reviews: 80,
    prerequisites: ["Linear algebra", "Calculus"],
    outline: ["Image processing", "Object detection", "3D vision"],
    tags: ["Computer Vision", "Robotics", "Intermediate"],
    image: "/placeholder.svg?height=200&width=300"
  },
  { 
    rank: 3, 
    title: "Building a Robotic Arm", 
    category: "Projects", 
    description: "Design, build, and program your own robotic arm from scratch.",
    difficulty: "Advanced",
    duration: 20, 
    trending: true,
    popularity: 78,
    score: 1000, 
    views: 1000,
    rating: 4.2,
    updatedAt: "3 months ago",
    enrolledUsers: 1000,
    reviews: 30,
    prerequisites: ["ROS2", "Control systems"],
    outline: ["Mechanical design", "Electronics", "Software integration"],
    tags: ["Robotics", "Project", "Advanced"],
    image: "/placeholder.svg?height=200&width=300"
  },
  { 
    rank: 4, 
    title: "AI in Robotics", 
    category: "Articles", 
    description: "Explore the latest advancements in artificial intelligence and their impact on robotics.",
    score: 800, 
    trending: false,
    popularity: 62,
    views: 800,
    rating: 4,
    updatedAt: "6 months ago",
    tags: ["AI", "Robotics", "Article"],
    image: "/placeholder.svg?height=200&width=300"
  },
  { 
    rank: 5, 
    title: "SLAM Fundamentals", 
    category: "Tutorials", 
    description: "Understand the core concepts of Simultaneous Localization and Mapping (SLAM).",
    difficulty: "Intermediate",
    duration: "8 hours",
    trending: true,
    popularity: 88,
    score: 700, 
    views: 700,
    rating: 4.7,
    updatedAt: "2 months ago",
    enrolledUsers: 2000,
    reviews: 50,
    prerequisites: ["Probability", "Statistics"],
    outline: ["SLAM algorithms", "Sensor fusion", "Mapping techniques"],
    tags: ["SLAM", "Intermediate", "Tutorial"],
    image: "/placeholder.svg?height=200&width=300"
  },
]

// Corrected categories array: remove the duplicate 'All'
const categories = ["All", ...new Set(leaderboardData.map(item => item.category))].filter(cat => cat !== "All")

const formatViews = (views: number) => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`
  } else {
    return views.toString()
  }
}

const getIcon = (category: string) => {
  switch (category) {
    case "Tutorials":
      return <Lightbulb className="h-4 w-4 mr-1" />
    case "Courses":
      return <BookOpen className="h-4 w-4 mr-1" />
    case "Projects":
      return <Code className="h-4 w-4 mr-1" />
    case "Articles":
      return <FileText className="h-4 w-4 mr-1" />
    default:
      return null
  }
}

const difficultyColors = {
"Beginner": "bg-emerald-100 text-emerald-800",
"Intermediate": "bg-sky-100 text-sky-800",
"Advanced": "bg-purple-100 text-purple-800",
}

export function Leaderboard() {
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredData = leaderboardData.filter(item => selectedCategory === "All" || item.category === selectedCategory)

  return (
    <div className="container mx-auto p-4 py-8">
      <div className="mb-8 text-center md:text-left"> 
        <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-2">Discover Top-Rated Content</h2>
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between"> 
        <h1 className="text-3xl font-bold text-primary mb-4 md:mb-0">Trending Resources</h1> {/* Updated title */}
        <div className="w-full md:w-auto">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem> {/* Added "All" option */}
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>      
      <p className="text-gray-600 dark:text-gray-400 text-center md:text-left"> {/* Added description */}
        Explore our curated collection of top-performing robotics resources, ranked by community engagement and expert reviews.
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> {/* Updated grid layout for smaller screens */}
        {filteredData.map((item) => (
          <motion.div
            key={item.rank}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={item.link || "#"} className="block">
              <Card
                className="hugging-face-card group"
                onMouseEnter={() => setIsHovered(item.rank)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <CardHeader className="relative p-4 pb-2"> {/* Restored padding bottom */}
                  <Badge variant="outline" className="absolute top-4 right-4 z-10 bg-yellow-50 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100">
                    #{item.rank}
                  </Badge>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getIcon(item.category)}
                      <CardTitle className="text-lg font-medium">{item.title}</CardTitle>
                    </div>
                    {item.trending && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Badge variant="secondary" className="flex items-center gap-1.5 text-blue-700 bg-blue-100">
                              <TrendingUp className="h-4 w-4" /> Trending
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            This resource is currently trending!
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-1 text-sm">
                    {item.difficulty && (
                      <div className="flex items-center gap-2">
                        <Info className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
                        <Badge variant="outline" className={cn(difficultyColors[item.difficulty] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300", "text-xs")}>
                          {item.difficulty}
                        </Badge>
                      </div>
                    )}
                    {item.duration && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
                        <span className="text-xs text-gray-600 dark:text-gray-300">{typeof item.duration === 'number' ? `${item.duration} hours` : item.duration}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Users className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-300">{formatViews(item.views)} views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-3.5 w-3.5 text-yellow-500 dark:text-yellow-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-300">{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                      <span className="text-xs text-gray-600 dark:text-gray-300">{item.updatedAt}</span>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 mt-2 line-clamp-3 text-sm dark:text-gray-300">{item.description}</CardDescription>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {item.tags?.map(tag => (
                      <Badge key={tag} variant="outline" size="sm" className="text-gray-600 dark:text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {item.image && (
                  <div className="relative aspect-video w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-b-lg"
                    />
                  </div>
                )}
                {item.link && (
                  <CardFooter className="flex justify-end p-4 pt-2"> {/* Removed padding top */}
                    <Button variant="link" asChild>
                      <Link href={item.link}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

