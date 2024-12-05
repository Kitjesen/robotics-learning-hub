"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Code, Lightbulb, CheckCircle, AlertTriangle, HelpCircle, ImageIcon, VideoIcon, Bug, Database, UserPlus, Presentation, BookOpen, CalendarDays, Info, Rocket, ChevronRight, Search, FlameIcon as Fire } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Separator from "@/components/ui/separator"


interface ContributionType {
  id: string
  title: string
  description: string
  icon: React.ComponentType
  color: string
  requirements: string[]
  link: string
  recentContributions?: number
}


const contributionTypes: ContributionType[] = [
  {
    id: "tutorial",
    title: "Tutorial",
    description: "Share your knowledge through step-by-step guides",
    icon: BookOpen,
    color: "text-blue-500",
    requirements: [
      "Clear step-by-step instructions",
      "Code examples (if applicable)",
      "Screenshots or diagrams",
      "Expected outcomes"
    ],
    link: "/contribute/tutorial",
    recentContributions: 5
  },
  {
    id: "code",
    title: "Code Sample",
    description: "Share reusable code snippets and examples",
    icon: Code,
    color: "text-green-500",
    requirements: [
      "Well-documented code",
      "Usage examples",
      "Dependencies listed",
      "Performance considerations"
    ],
    link: "/contribute/code",
    recentContributions: 12
  },
  {
    id: "research",
    title: "Research Paper",
    description: "Share your research findings and insights",
    icon: FileText,
    color: "text-purple-500",
    requirements: [
      "Abstract",
      "Methodology",
      "Results and discussion",
      "References"
    ],
    link: "/contribute/research",
    recentContributions: 3
  },
  {
    id: "images",
    title: "Images",
    description: "Contribute high-quality images related to robotics",
    icon: ImageIcon,
    color: "text-pink-500",
    requirements: [
      "High-resolution images",
      "Relevant to robotics",
      "Creative Commons license"
    ],
    link: "/contribute/images",
    recentContributions: 8
  },
  {
    id: "videos",
    title: "Videos",
    description: "Share educational or project videos",
    icon: VideoIcon,
    color: "text-red-500",
    requirements: [
      "Clear audio and video",
      "Relevant to robotics",
      "Descriptive title and tags"
    ],
    link: "/contribute/videos",
    recentContributions: 2
  },
  {
    id: "article",
    title: "Article",
    description: "Write insightful articles on robotics topics",
    icon: FileText,
    color: "text-orange-500",
    requirements: [
      "Original content",
      "Well-researched information",
      "Engaging writing style"
    ],
    link: "/contribute/article",
    recentContributions: 7
  },
  {
    id: "bug-report",
    title: "Bug Report",
    description: "Report bugs or issues with the platform",
    icon: Bug,
    color: "text-red-700",
    requirements: [
      "Clear description of the bug",
      "Steps to reproduce",
      "Expected behavior",
      "Actual behavior"
    ],
    link: "/contribute/bug-report",
    recentContributions: 1
  },
  {
    id: "dataset",
    title: "Dataset",
    description: "Contribute datasets for research and development",
    icon: Database,
    color: "text-teal-500",
    requirements: [
      "Data format and description",
      "Data collection methods",
      "Usage guidelines",
      "License information"
    ],
    link: "/contribute/dataset",
    recentContributions: 4
  },
  {
    id: "project-idea",
    title: "Project Idea",
    description: "Propose new robotics projects and concepts",
    icon: Lightbulb,
    color: "text-yellow-500",
    requirements: [
      "Project overview",
      "Technical requirements",
      "Expected challenges",
      "Potential impact"
    ],
    link: "/contribute/project-idea",
    recentContributions: 9
  },
  {
    id: "event",
    title: "Event",
    description: "Organize or promote robotics events",
    icon: CalendarDays,
    color: "text-indigo-500",
    requirements: [
      "Event title and description",
      "Date, time, and location",
      "Target audience",
      "Contact information"
    ],
    link: "/contribute/event",
    recentContributions: 6
  },
  {
    id: "community-member",
    title: "Community Member",
    description: "Become a moderator or contributor",
    icon: UserPlus,
    color: "text-emerald-500",
    requirements: [
      "Robotics expertise",
      "Community involvement",
      "Commitment to open source"
    ],
    link: "/contribute/community-member",
    recentContributions: 15
  },
  {
    id: "presentation",
    title: "Presentation",
    description: "Share your presentations and slides",
    icon: Presentation,
    color: "text-fuchsia-500",
    requirements: [
      "Presentation slides (PDF or PPT)",
      "Presentation recording (optional)",
      "Topic and abstract",
      "Target audience"
    ],
    link: "/contribute/presentation",
    recentContributions: 10
  }
]

const guidelines = [
  {
    icon: CheckCircle,
    color: "text-emerald-600",
    text: "Ensure your contribution is original, relevant to robotics, and follows community standards."
  },
  {
    icon: FileText,
    color: "text-blue-600",
    text: "Provide clear and concise documentation, including examples and explanations where applicable."
  },
  {
    icon: Code,
    color: "text-green-600",
    text: "If submitting code, ensure it is well-commented, functional, and includes necessary dependencies."
  },
]

const reviewProcess = [
  {
    step: 1,
    title: "Submission",
    description: "Submit your contribution through the designated form, providing all necessary details.",
  },
  {
    step: 2,
    title: "Initial Review",
    description: "Our team reviews your submission for completeness and adherence to guidelines (1-2 business days).",
  },
  {
    step: 3,
    title: "Community Feedback",
    description: "Your contribution is opened for community feedback and suggestions (3-5 business days).",
  },
  {
    step: 4,
    title: "Final Approval",
    description: "Based on feedback, any necessary revisions are made, and final approval is granted.",
  },
  {
    step: 5,
    title: "Publication",
    description: "Your approved contribution is published on the platform and made available to the community.",
  }
]



export default function ContributePage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ selectedType, title, description, file })
    router.push('/dashboard/contributions')
  }

  const filteredContributionTypes = contributionTypes.filter(type =>
    type.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    type.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
          Contribute to the Community
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Share your knowledge, experience, and insights with the robotics community. Your contributions help others learn and grow.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        <Input
          type="text"
          placeholder="Search contribution types..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="pl-10 py-2 pr-4 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
        />
      </div>

      {/* Contribution Types Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {filteredContributionTypes.map((type) => (
          <Card
            key={type.id}
            className="border hover:shadow-md transition-shadow p-4 cursor-pointer"
            onClick={() => setSelectedType(type.id)}
            style={{ backgroundColor: selectedType === type.id ? 'rgba(203, 213, 225, 0.2)' : '' }} 
          >
            <CardHeader className="flex flex-row items-center gap-4 p-4">
              <div className={`p-2 rounded-md ${type.color} bg-opacity-10`}>
                <type.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{type.title}</h3>
            </CardHeader>

            {type.recentContributions && (
              <div className="flex items-center space-x-1 mt-1">
                <Fire className="h-4 w-4 text-red-500" />
                <span className="text-xs text-gray-500">
                  {type.recentContributions} recent contributions
                </span>
              </div>
            )}

            <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
              {type.description}
            </p>

            {selectedType === type.id && (
              <>
                <Separator className="my-4" />
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mt-2 mb-1">Requirements:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  {type.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input 
                      id="title" 
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)} 
                      placeholder="Enter a descriptive title for your contribution"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      value={description} 
                      onChange={(e) => setDescription(e.target.value)} 
                      placeholder="Provide a detailed description of your contribution"
                      className="min-h-[200px]"
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="file">Attachments</Label>
                    <div className="flex items-center gap-4">
                      <Input 
                        id="file" 
                        type="file" 
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="flex-1"
                      />
                      <Button variant="outline" type="button">
                        Add More
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500">
                      Supported formats: PDF, MD, ZIP, images (PNG, JPG)
                    </p>
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Submit Contribution</Button>
                </form>
              </>
            )}
          </Card>
        ))}
      </div>

      {/* Guidelines Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contribution Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guidelines.map((guideline, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow">
              <CardContent className="flex items-start gap-3 p-4">
                <guideline.icon className={`h-6 w-6 shrink-0 ${guideline.color}`} />
                <p className="text-gray-700 dark:text-gray-300">{guideline.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


      {/* Review Process Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Review Process</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {reviewProcess.map((stepItem) => (
          <li key={stepItem.step} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{stepItem.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{stepItem.description}</p>
          </li>
          ))}
        </ol>
      </div>

      {/* Start Contributing Section (Hugging Face style) */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg p-8 mb-12">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Share Your Expertise?</h2>
          <p className="text-lg mb-6">Start contributing to the Robotics Learning Hub today!</p>
          <Button variant="secondary" size="lg" className="text-blue-600 bg-white hover:bg-gray-100">
            <Rocket className="mr-2 h-4 w-4" />
            Start Contributing
          </Button>
        </div>
      </div>

    </div>
  )
}

