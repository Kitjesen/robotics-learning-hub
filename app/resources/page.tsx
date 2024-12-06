"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Plus, Users, GitPullRequest, Star, Clock, ArrowRight, BookOpen, Code, Cpu, Brain, Cog, Sparkles, Heart } from 'lucide-react'
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ResourcePreview } from "@/components/resource-preview"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { RecentChanges } from "@/components/recent-changes"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/components/ui/use-toast"

const resources = [
  {
    title: "Fundamentals",
    description: "Essential concepts and basics of robotics",
    level: "beginner",
    contributors: 156,
    pullRequests: 12,
    stars: 342,
    icon: BookOpen,
    sections: [
      {
        title: "Introduction to Robotics",
        description: "Basic concepts, history, and types of robots",
        href: "/resources/fundamentals/introduction",
        lastUpdated: "2024-01-15",
        contributors: 45
      },
      {
        title: "Mathematics for Robotics",
        description: "Essential math concepts including linear algebra and kinematics",
        href: "/resources/fundamentals/mathematics",
        lastUpdated: "2024-01-20",
        contributors: 67
      },
      {
        title: "Programming Basics",
        description: "Introduction to programming concepts for robotics",
        href: "/resources/fundamentals/programming",
        lastUpdated: "2024-01-18",
        contributors: 89
      }
    ]
  },
  {
    title: "Hardware",
    description: "Robotics hardware components and design",
    level: "intermediate",
    contributors: 132,
    pullRequests: 8,
    stars: 287,
    icon: Cpu,
    sections: [
      {
        title: "Sensors and Actuators",
        description: "Overview of various sensors and actuators used in robotics",
        href: "/resources/hardware/sensors-actuators",
        lastUpdated: "2024-02-05",
        contributors: 38
      },
      {
        title: "Mechanical Design",
        description: "Principles of mechanical design for robotic systems",
        href: "/resources/hardware/mechanical-design",
        lastUpdated: "2024-02-10",
        contributors: 52
      },
      {
        title: "Embedded Systems",
        description: "Embedded systems for robotics applications",
        href: "/resources/hardware/embedded-systems",
        lastUpdated: "2024-02-08",
        contributors: 41
      }
    ]
  },
  {
    title: "Software",
    description: "Robot software development and architecture",
    level: "intermediate",
    contributors: 178,
    pullRequests: 15,
    stars: 412,
    icon: Code,
    sections: [
      {
        title: "Robot Operating System (ROS)",
        description: "Introduction to ROS and its applications",
        href: "/resources/software/ros",
        lastUpdated: "2024-02-12",
        contributors: 73
      },
      {
        title: "Computer Vision",
        description: "Image processing and computer vision for robotics",
        href: "/resources/software/computer-vision",
        lastUpdated: "2024-02-15",
        contributors: 61
      },
      {
        title: "Motion Planning Algorithms",
        description: "Algorithms for robot motion planning and navigation",
        href: "/resources/software/motion-planning",
        lastUpdated: "2024-02-18",
        contributors: 44
      }
    ]
  },
  {
    title: "Control Systems",
    description: "Robot control theory and implementation",
    level: "advanced",
    contributors: 98,
    pullRequests: 7,
    stars: 231,
    icon: Cog,
    sections: [
      {
        title: "Classical Control",
        description: "PID and other classical control methods for robots",
        href: "/resources/control-systems/classical-control",
        lastUpdated: "2024-02-20",
        contributors: 32
      },
      {
        title: "Modern Control",
        description: "State-space and optimal control for robotics",
        href: "/resources/control-systems/modern-control",
        lastUpdated: "2024-02-22",
        contributors: 29
      },
      {
        title: "Adaptive and Robust Control",
        description: "Advanced control techniques for uncertain systems",
        href: "/resources/control-systems/adaptive-robust-control",
        lastUpdated: "2024-02-25",
        contributors: 37
      }
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "AI and ML applications in robotics",
    level: "advanced",
    contributors: 215,
    pullRequests: 18,
    stars: 523,
    icon: Brain,
    sections: [
      {
        title: "Reinforcement Learning for Robotics",
        description: "RL algorithms and applications in robotic control",
        href: "/resources/ai-ml/reinforcement-learning",
        lastUpdated: "2024-02-28",
        contributors: 89
      },
      {
        title: "Deep Learning in Robotics",
        description: "Neural networks for perception and decision-making",
        href: "/resources/ai-ml/deep-learning",
        lastUpdated: "2024-03-02",
        contributors: 76
      },
      {
        title: "Natural Language Processing for HRI",
        description: "NLP techniques for human-robot interaction",
        href: "/resources/ai-ml/nlp-hri",
        lastUpdated: "2024-03-05",
        contributors: 50
      }
    ]
  }
]

function getLevelColor(level: string) {
  switch (level) {
    case "beginner":
      return "bg-emerald-100 text-emerald-700"
    case "intermediate":
      return "bg-blue-100 text-blue-700"
    case "advanced":
      return "bg-purple-100 text-purple-700"
    default:
      return "bg-gray-100 text-gray-700"
  }
}

export default function ResourcesPage() {
  const [favorites, setFavorites] = useState<string[]>([])
  const { user } = useAuth()
  const { toast } = useToast()

  useEffect(() => {
    // Fetch user's favorites when the component mounts
    if (user) {
      fetchFavorites()
    }
  }, [user])

  const fetchFavorites = async () => {
    try {
      const response = await fetch('/api/favorites')
      if (response.ok) {
        const data = await response.json()
        setFavorites(data.favorites)
      }
    } catch (error) {
      console.error('Error fetching favorites:', error)
    }
  }

  const toggleFavorite = async (title: string) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to favorite resources.",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resourceTitle: title }),
      })

      if (response.ok) {
        setFavorites(prev =>
          prev.includes(title)
            ? prev.filter(item => item !== title)
            : [...prev, title]
        )
        toast({
          title: favorites.includes(title) ? "Removed from favorites" : "Added to favorites",
          description: `"${title}" has been ${favorites.includes(title) ? "removed from" : "added to"} your favorites.`,
        })
      } else {
        throw new Error('Failed to update favorites')
      }
    } catch (error) {
      console.error('Error updating favorites:', error)
      toast({
        title: "Error",
        description: "Failed to update favorites. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Resources</h1>
      
      {/* Resource Categories Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Resource Categories</h2>
        <div className="space-y-2">
          {resources.map((category) => (
            <Link
              key={category.title}
              href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="block"
            >
              <div className="flex items-center justify-between w-full p-3 bg-white rounded-lg border hover:border-gray-300 hover:shadow-sm transition-all group">
                <div className="flex items-center flex-grow min-w-0">
                  <category.icon className="h-5 w-5 text-gray-700 flex-shrink-0" />
                  <div className="ml-3 flex-grow min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">{category.title}</h3>
                      <Badge className={`ml-2 ${getLevelColor(category.level)}`}>
                        {category.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{category.description}</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 ml-4 flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Detailed Resource Categories */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Detailed Resources</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {resources.map((category) => {
            const colors = getLevelColor(category.level)
            return (
              <Card key={category.title} id={category.title.toLowerCase().replace(/\s+/g, '-')} className="overflow-hidden border-2 flex flex-col scroll-mt-16">
                <CardHeader className={`${colors} p-8`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <category.icon className="h-7 w-7 text-gray-700" />
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={`${colors} text-sm px-3 py-1.5 font-medium`}>
                        {category.level}
                      </Badge>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-yellow-500">
                            <Sparkles className="h-5 w-5" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Recent Changes for {category.title}</DialogTitle>
                          </DialogHeader>
                          <RecentChanges category={category.title} />
                        </DialogContent>
                      </Dialog>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleFavorite(category.title)}
                        className={favorites.includes(category.title) ? "text-red-500" : "text-gray-500"}
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <div className="flex items-center gap-8 text-sm">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span>{category.contributors}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{category.contributors} contributors</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="flex items-center gap-2">
                          <GitPullRequest className="h-4 w-4 text-gray-500" />
                          <span>{category.pullRequests}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{category.pullRequests} open pull requests</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{category.stars}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{category.stars} stars</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <div className="divide-y">
                    {category.sections.map((section, index) => (
                      <Link
                        key={section.title}
                        href={section.href}
                        className={`block p-6 transition-colors hover:bg-gray-50`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <h3 className="font-semibold text-lg group-hover:text-primary">
                              {section.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {section.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                Last updated {section.lastUpdated}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {section.contributors} contributors
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-6 bg-gray-50 mt-auto">
                  <ResourcePreview
                    title={category.title}
                    description={category.description}
                    level={category.level}
                    contributors={category.contributors}
                    pullRequests={category.pullRequests}
                    stars={category.stars}
                    sections={category.sections}
                  />
                  <Button variant="outline" className="text-sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Content
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}

