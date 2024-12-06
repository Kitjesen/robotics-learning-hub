"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ChevronDown, ChevronUp, FileText, ExternalLink, Cpu, Gauge, Zap, CircuitBoard, Info } from 'lucide-react'
import Link from "next/link"
import Image from "next/image";

interface SensorCardProps {
  id: string
  name: string
  description: string
  price: string
  manufacturer: string
  category: string
  tags: string[]
  specs: Record<string, string>
  features: string[]
  documentation: string
  image?: string
}

export function SensorCard({
  id,
  name,
  description,
  price,
  manufacturer,
  category,
  tags,
  specs,
  features,
  documentation,
  image
}: SensorCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Get appropriate icon for the sensor category
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'imu':
        return Gauge
      case 'distance':
        return Cpu
      case 'power':
        return Zap
      default:
        return CircuitBoard
    }
  }

  const CategoryIcon = getCategoryIcon(category)

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-900">
      <CardContent className="p-2">
        <div className="space-y-2">
          {/* Title and category */}
          <div className="flex items-start justify-between mb-3">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold mb-0.5">{name}</h3>
              <div className="flex items-center text-muted-foreground">
                <CategoryIcon className="w-4 h-4 mr-2" />
                <span>{category}</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 text-blue-700 dark:text-blue-100"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm mb-1 line-clamp-2">{description}</p>

          {/* Key specs preview */}
          <div className="grid grid-cols-2 gap-1 mb-2 text-sm">
            <div className="space-y-1">
              <span className="text-muted-foreground">Manufacturer</span>
              <p className="font-medium">{manufacturer}</p>
            </div>
            {Object.entries(specs).slice(0, 1).map(([key, value]) => (
              <div key={key} className="space-y-1">
                <span className="text-muted-foreground">{key}</span>
                <p className="font-medium">{value}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-7 px-2 text-xs gap-1"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  More
                </>
              )}
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-7 px-2 text-xs" asChild>
                <Link href={documentation} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-1" />
                  Docs
                </Link>
              </Button>
              <Button asChild className="h-7 px-2 text-xs bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                <Link href={`/hardware/${id}`}>
                  Details
                </Link>
              </Button>
            </div>
          </div>

          {/* Expanded details */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-3 grid md:grid-cols-2 gap-3">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Specifications</h4>
                    <dl className="space-y-1 text-sm">
                      {Object.entries(specs).map(([key, value]) => (
                        <div key={key} className="grid grid-cols-2 gap-2">
                          <dt className="text-muted-foreground">{key}</dt>
                          <dd className="font-medium">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Features</h4>
                    <ul className="space-y-1 text-sm">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  )
}

