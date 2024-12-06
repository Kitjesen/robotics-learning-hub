"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BuyingGuide } from "@/components/buying-guide"
import { AISearch } from "@/components/ai-search"
import { Plus, Search, BookOpen, ChevronDown, ChevronUp, ExternalLink, Info } from 'lucide-react'
import { sensorData } from "@/lib/sensor-data"
import { motion } from "framer-motion"
import { SensorCard } from "@/components/sensor-card";
import { AIRecommendation } from "@/components/ai-recommendation"

export default function HardwareCatalogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedView, setSelectedView] = useState<'grid' | 'list'>('grid')
  const [expandedSensor, setExpandedSensor] = useState<string | null>(null)
  const router = useRouter()

  const filteredSensors = sensorData.filter(item => 
    (selectedCategory === 'all' || item.category === selectedCategory) &&
    (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const categories = ['all', ...new Set(sensorData.map(item => item.category))]

  const toggleExpand = (id: string) => {
    setExpandedSensor(expandedSensor === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Robotics Hardware Sensors Catalog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive collection of robotics sensors, contribute to the community, and find the perfect components for your projects.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow flex gap-2">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search sensors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Tabs defaultValue="catalog" className="w-full">
                  <TabsList>
                    <TabsTrigger value="catalog">Catalog</TabsTrigger>
                    <TabsTrigger value="guide">Buying Guide</TabsTrigger>
                    <TabsTrigger value="ai">AI Search</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Button 
                  onClick={() => router.push('/hardware-catalog/contribute')}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Contribute
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <AIRecommendation />

        {/* Tabs Content */}
        <Tabs defaultValue="catalog" className="space-y-8">
          <TabsContent value="catalog">
            <div className="grid gap-6">
              {filteredSensors.map((sensor) => (
                <motion.div
                  key={sensor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SensorCard {...sensor} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="guide">
            <BuyingGuide />
          </TabsContent>
          <TabsContent value="ai">
            <AISearch />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

