"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

const featuredProjects = [
  {
    title: "Boston Dynamics Spot",
    description: "Agile mobile robot for industrial applications",
    organization: "Boston Dynamics",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "NASA Perseverance",
    description: "Mars exploration rover",
    organization: "NASA JPL",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Soft Robotics Gripper",
    description: "Adaptive gripping technology",
    organization: "Soft Robotics Inc.",
    image: "/placeholder.svg?height=400&width=600"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function FeaturedSection() {
  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Robotics Projects and Research
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{project.organization}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

