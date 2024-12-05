"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    title: "Knowledge Base Development",
    description: "Building a comprehensive robotics knowledge base through community collaboration",
    color: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-700 dark:text-blue-300",
    items: ["Tutorial Docs", "Technical Specs", "Best Practices", "API Documentation"],
    status: "In Progress"
  },
  {
    title: "AI-Enhanced Learning",
    description: "Optimizing learning experiences with AI technology and personalized recommendations",
    color: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-700 dark:text-purple-300",
    items: ["AI-Assisted Learning", "Smart Recommendations", "Progress Tracking", "Adaptive Pathways"],
    status: "Development"
  },
  {
    title: "Community Collaboration",
    description: "Creating an open environment for knowledge sharing and project cooperation",
    color: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-700 dark:text-green-300",
    items: ["Project Collaboration", "Resource Sharing", "Technical Discussions", "Experience Exchange"],
    status: "Planning"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function CommunityRoadmap() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
              COMMUNITY ROADMAP
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Building the Future of Robotics Together
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join us in shaping the robotics community through knowledge sharing and innovation
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-16 relative"
            >
              <div className="flex items-center mb-4">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className={`text-xl font-semibold ${step.textColor}`}>{step.title}</h3>
                </div>
                <div className="w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-700 z-10" />
                <div className="w-1/2 pl-8">
                  <Badge 
                    variant="secondary" 
                    className={`${step.textColor} bg-white/50 dark:bg-gray-800/50`}
                  >
                    {step.status}
                  </Badge>
                </div>
              </div>
              <Card className={`${step.color} border-0 shadow-sm hover:shadow-md transition-all duration-300`}>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {step.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {step.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="bg-white/30 dark:bg-gray-800/30 border-0">
                        <div className="p-2">
                          <p className={`text-sm ${step.textColor}`}>{item}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to shape the future of robotics? Join our community today!
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300">
              Get Involved
            </button>
            <button className="px-6 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

