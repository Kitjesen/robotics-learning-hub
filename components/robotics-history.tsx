"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BotIcon as Robot, Rocket, Brain, Cpu, Factory, Car, Globe, Microscope, Cog, Zap } from 'lucide-react'

const milestones = [
  {
    year: 1921,
    title: "Birth of the Term 'Robot'",
    description: "Karel Čapek introduces the word 'robot' in his play R.U.R.",
    icon: Robot,
    category: "Terminology",
  },
  {
    year: 1948,
    title: "First Electronic Autonomous Robots",
    description: "William Grey Walter builds Elmer and Elsie, the first electronic autonomous robots.",
    icon: Brain,
    category: "Research",
  },
  {
    year: 1954,
    title: "First Programmable Robot",
    description: "George Devol invents the first programmable robot arm, Unimate.",
    icon: Factory,
    category: "Industrial",
  },
  {
    year: 1961,
    title: "First Industrial Robot",
    description: "The first Unimate robot is installed at General Motors.",
    icon: Cpu,
    category: "Industrial",
  },
  {
    year: 1969,
    title: "Stanford Arm",
    description: "Victor Scheinman develops the Stanford Arm, a revolutionary all-electric, 6-axis articulated robot.",
    icon: Robot,
    category: "Research",
  },
  {
    year: 1973,
    title: "First Computer-Controlled Robot",
    description: "KUKA Robotics develops the first computer-controlled robot.",
    icon: Cog,
    category: "Industrial",
  },
  {
    year: 1989,
    title: "First Mobile Robot",
    description: "CMU develops NAVLAB, one of the first autonomous vehicles.",
    icon: Car,
    category: "Autonomous",
  },
  {
    year: 1997,
    title: "Mars Exploration",
    description: "NASA's Sojourner rover lands on Mars, marking the first successful use of robotics for planetary exploration.",
    icon: Rocket,
    category: "Space",
  },
  {
    year: 2000,
    title: "ASIMO",
    description: "Honda unveils ASIMO, an advanced humanoid robot capable of walking, running, and interacting with humans.",
    icon: Robot,
    category: "Humanoid",
  },
  {
    year: 2002,
    title: "Roomba Launch",
    description: "iRobot launches the Roomba, bringing robots into everyday homes.",
    icon: Globe,
    category: "Consumer",
  },
  {
    year: 2011,
    title: "IBM Watson",
    description: "IBM Watson wins Jeopardy!, showcasing advanced AI capabilities.",
    icon: Brain,
    category: "AI",
  },
  {
    year: 2015,
    title: "Collaborative Robots",
    description: "Universal Robots pioneers safe, collaborative robots for industry.",
    icon: Factory,
    category: "Industrial",
  },
  {
    year: 2017,
    title: "Boston Dynamics Atlas",
    description: "Atlas performs backflips, showing remarkable humanoid agility.",
    icon: Robot,
    category: "Humanoid",
  },
  {
    year: 2020,
    title: "Mars Perseverance",
    description: "NASA's Perseverance rover launches with Ingenuity helicopter.",
    icon: Rocket,
    category: "Space",
  },
  {
    year: 2023,
    title: "AI Integration",
    description: "Large language models are integrated into robotics systems.",
    icon: Zap,
    category: "AI",
  }
]

export function RoboticsHistory() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-900 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Robotics Development Timeline</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A century of innovation: Explore the key milestones that shaped modern robotics.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />

          {/* Scrollable container */}
          <div className="overflow-x-auto pb-8">
            <div className="flex gap-8 min-w-max px-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative ${index % 2 === 0 ? '-mt-32' : 'mt-8'}`}
                >
                  {/* Year marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                  </div>

                  {/* Content */}
                  <Card className="w-64 overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <milestone.icon className="h-5 w-5 text-blue-500" />
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                          {milestone.category}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                        <h3 className="text-lg font-semibold line-clamp-2">{milestone.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                          {milestone.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

