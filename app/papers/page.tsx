"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Calendar, User, BookOpen, ArrowUpDown, Github, FileText, Sparkles, Share2, Mail, Twitter, Facebook, Linkedin, Share } from 'lucide-react'
import Link from "next/link"
import { AISearchBar } from "@/components/ai-search-bar"
import { AISearchResult } from "@/components/ai-search-result"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

// This would typically come from a database
const allPapers = [
  {
    id: 1,
    title: "Advances in Humanoid Robot Locomotion",
    author: "Jane Doe",
    institution: "MIT",
    date: "2023-05-15",
    category: "Mobility",
    robotType: "Humanoid",
    citations: 45,
    abstract: "This paper presents novel approaches to humanoid robot locomotion in challenging terrains, introducing adaptive gait patterns that significantly improve stability and efficiency.",
    tags: ["Locomotion", "Adaptive Control", "Biomechanics"],
    journal: "IEEE Transactions on Robotics",
    githubLink: "https://github.com/janedoe/humanoid-locomotion"
  },
  {
    id: 2,
    title: "Machine Learning in Industrial Robotic Vision",
    author: "John Smith",
    institution: "Stanford University",
    date: "2023-06-02",
    category: "AI",
    robotType: "Industrial",
    citations: 32,
    abstract: "A comprehensive study of deep learning applications in industrial robotic vision systems, focusing on real-time object detection and scene understanding in manufacturing environments.",
    tags: ["Computer Vision", "Deep Learning", "Neural Networks"],
    journal: "International Journal of Computer Vision",
    githubLink: null
  },
  {
    id: 3,
    title: "Soft Robotics: A New Frontier in Medical Robotics",
    author: "Alice Johnson",
    institution: "Harvard University",
    date: "2023-06-10",
    category: "Materials",
    robotType: "Medical",
    citations: 28,
    abstract: "Exploring the latest developments in soft robotics for medical applications, including novel materials and actuation methods for creating more adaptable and safer medical robots.",
    tags: ["Soft Robotics", "Materials Science", "Biomimicry"],
    journal: "Science Robotics",
    githubLink: "https://github.com/alicejohnson/soft-medical-robotics"
  },
  {
    id: 4,
    title: "Autonomous Navigation for Agricultural Robots",
    author: "Bob Williams",
    institution: "ETH Zurich",
    date: "2023-06-15",
    category: "Navigation",
    robotType: "Agricultural",
    citations: 37,
    abstract: "A novel approach to autonomous navigation for agricultural robots in dynamic field environments using reinforcement learning and real-time path planning.",
    tags: ["Navigation", "SLAM", "Path Planning"],
    journal: "Autonomous Robots",
    githubLink: "https://github.com/bobwilliams/agri-robot-navigation"
  },
  {
    id: 5,
    title: "Swarm Robotics in Search and Rescue Operations",
    author: "Emily Chen",
    institution: "University of Tokyo",
    date: "2023-07-01",
    category: "Swarm Robotics",
    robotType: "Swarm",
    citations: 25,
    abstract: "This paper presents a novel swarm robotics approach for coordinating multiple robots in search and rescue operations, improving efficiency and coverage in disaster scenarios.",
    tags: ["Swarm Intelligence", "Coordination", "Disaster Response"],
    journal: "Journal of Field Robotics",
    githubLink: "https://github.com/emilychen/swarm-sar"
  },
  {
    id: 6,
    title: "Underwater Robotic Manipulation for Deep Sea Exploration",
    author: "Michael Brown",
    institution: "Woods Hole Oceanographic Institution",
    date: "2023-07-10",
    category: "Manipulation",
    robotType: "Underwater",
    citations: 30,
    abstract: "Advancements in underwater robotic manipulation techniques for deep sea exploration, addressing challenges of pressure, visibility, and precise control in extreme environments.",
    tags: ["Underwater Robotics", "Manipulation", "Extreme Environments"],
    journal: "Ocean Engineering",
    githubLink: null
  },
  {
    id: 7,
    title: "Social Robots in Elderly Care: Improving Quality of Life",
    author: "Sarah Lee",
    institution: "Carnegie Mellon University",
    date: "2023-07-20",
    category: "Human-Robot Interaction",
    robotType: "Social",
    citations: 40,
    abstract: "An investigation into the use of social robots in elderly care facilities, examining their impact on patient well-being, social interaction, and cognitive stimulation.",
    tags: ["Social Robotics", "Elderly Care", "Human-Robot Interaction"],
    journal: "ACM Transactions on Human-Robot Interaction",
    githubLink: "https://github.com/sarahlee/eldercare-social-robots"
  },
  {
    id: 8,
    title: "Drone Swarms for Environmental Monitoring",
    author: "David Garcia",
    institution: "University of California, Berkeley",
    date: "2023-08-05",
    category: "Swarm Robotics",
    robotType: "Aerial",
    citations: 22,
    abstract: "A framework for coordinating drone swarms to conduct large-scale environmental monitoring, including air quality assessment and wildlife tracking.",
    tags: ["Drone Swarms", "Environmental Monitoring", "Coordination"],
    journal: "IEEE Robotics and Automation Letters",
    githubLink: "https://github.com/davidgarcia/drone-swarm-monitoring"
  },
  {
    id: 9,
    title: "Soft Robotic Grippers for Delicate Industrial Manipulation",
    author: "Laura Martinez",
    institution: "Technical University of Munich",
    date: "2023-08-15",
    category: "Soft Robotics",
    robotType: "Industrial",
    citations: 18,
    abstract: "Design and implementation of soft robotic grippers for handling delicate objects in industrial settings, improving versatility and reducing product damage.",
    tags: ["Soft Robotics", "Industrial Automation", "Manipulation"],
    journal: "Soft Robotics",
    githubLink: "https://github.com/lauramartinez/soft-industrial-grippers"
  },
  {
    id: 10,
    title: "Legged Robots for Extraterrestrial Exploration",
    author: "Alexander Ivanov",
    institution: "Roscosmos State Corporation",
    date: "2023-08-25",
    category: "Mobility",
    robotType: "Space",
    citations: 35,
    abstract: "Development of advanced legged locomotion systems for robots designed to explore rough terrains on Mars and other extraterrestrial bodies.",
    tags: ["Space Exploration", "Legged Locomotion", "Extreme Environments"],
    journal: "Journal of Field Robotics",
    githubLink: null
  },
  {
    id: 11,
    title: "Collaborative Robots in Small-Scale Manufacturing",
    author: "Jessica Wong",
    institution: "National University of Singapore",
    date: "2023-09-05",
    category: "Human-Robot Collaboration",
    robotType: "Industrial",
    citations: 20,
    abstract: "Exploring the integration of collaborative robots (cobots) in small-scale manufacturing environments to enhance productivity and flexibility.",
    tags: ["Collaborative Robotics", "Manufacturing", "Human-Robot Interaction"],
    journal: "Robotics and Computer-Integrated Manufacturing",
    githubLink: "https://github.com/jessicawong/cobot-manufacturing"
  },
  {
    id: 12,
    title: "Bio-inspired Soft Robots for Medical Diagnostics",
    author: "Thomas Mueller",
    institution: "Max Planck Institute for Intelligent Systems",
    date: "2023-09-15",
    category: "Soft Robotics",
    robotType: "Medical",
    citations: 15,
    abstract: "Design and application of bio-inspired soft robots for minimally invasive medical diagnostics, mimicking natural organisms for improved maneuverability and safety.",
    tags: ["Bio-inspired Robotics", "Medical Diagnostics", "Soft Materials"],
    journal: "Nature Machine Intelligence",
    githubLink: "https://github.com/thomasmueller/bio-soft-medical-robots"
  }
]

const categories = ["All", "Mobility", "AI", "Materials", "Navigation", "Swarm Robotics", "Manipulation", "Human-Robot Interaction", "Soft Robotics"]
const robotTypes = ["All", "Humanoid", "Industrial", "Medical", "Agricultural", "Swarm", "Underwater", "Social", "Aerial", "Space"]
const sortOptions = ["Recent", "Most Cited", "Title A-Z"]

export default function PapersPage() {
  const { user, isLoading } = useAuth()
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedRobotType, setSelectedRobotType] = useState("All")
  const [selectedSort, setSelectedSort] = useState("Recent")
  const [aiSearchResults, setAISearchResults] = useState<any[]>([])
  const [shareDialogOpen, setShareDialogOpen] = useState(false)
  const [selectedPaper, setSelectedPaper] = useState<any>(null)
  const [shareAllDialogOpen, setShareAllDialogOpen] = useState(false)

  if (isLoading) {
    return <div>Loading...</div>
  }

  const filteredPapers = allPapers.filter(paper => 
    (paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     paper.abstract.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === "All" || paper.category === selectedCategory) &&
    (selectedRobotType === "All" || paper.robotType === selectedRobotType)
  )

  const sortedPapers = [...filteredPapers].sort((a, b) => {
    if (selectedSort === "Recent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (selectedSort === "Most Cited") {
      return b.citations - a.citations
    } else {
      return a.title.localeCompare(b.title)
    }
  })

  const papersPerPage = 10
  const indexOfLastPaper = currentPage * papersPerPage
  const indexOfFirstPaper = indexOfLastPaper - papersPerPage
  const currentPapers = sortedPapers.slice(indexOfFirstPaper, indexOfLastPaper)
  const totalPages = Math.ceil(sortedPapers.length / papersPerPage)

  const handleAISearch = (query: string, model: string) => {
    // This is where you would typically call your AI search API
    // For now, we'll simulate results based on the query and model
    const simulatedResults = allPapers.filter(paper => 
      paper.title.toLowerCase().includes(query.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5).map(paper => ({
      ...paper,
      relevance: (Math.random() * 0.5 + 0.5).toFixed(2), // Simulated relevance score between 0.50 and 1.00
      aiExplanation: `Using ${model}, this paper is relevant to "${query}" because it discusses ${paper.tags.join(", ")}.`
    }))
    setAISearchResults(simulatedResults)
  }

  const handleShare = (paper: any) => {
    setSelectedPaper(paper)
    setShareDialogOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Research Papers</h1>
        <Button variant="outline" onClick={() => setShareAllDialogOpen(true)}>
          <Share className="h-4 w-4 mr-2" />
          Share All Results
        </Button>
      </div>

      {/* AI Search Bar with History */}
      <div className="mb-8">
        <AISearchBar onSearch={handleAISearch} />
      </div>

      {/* AI Search Results with Share functionality */}
      {aiSearchResults.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">AI-Powered Search Results</h2>
          <div className="space-y-4">
            {aiSearchResults.map((result) => (
              <AISearchResult key={result.id} result={result} />
            ))}
          </div>
        </div>
      )}

      {/* Regular Search and Filters */}
      <div className="mb-8">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search papers..." 
                className="pl-8" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedRobotType} onValueChange={setSelectedRobotType}>
            <SelectTrigger>
              <SelectValue placeholder="Robot Type" />
            </SelectTrigger>
            <SelectContent>
              {robotTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <Select value={selectedSort} onValueChange={setSelectedSort}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <span className="text-sm text-gray-500">
            Showing {indexOfFirstPaper + 1}-{Math.min(indexOfLastPaper, sortedPapers.length)} of {sortedPapers.length} papers
          </span>
        </div>
      </div>

      {/* Papers List */}
      <div className="space-y-6">
        {currentPapers.map((paper) => (
          <div
            key={paper.id}
            className="bg-white rounded-xl border p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <Link 
                    href={`/papers/${paper.id}`}
                    className="text-xl font-semibold hover:text-blue-600 transition-colors"
                  >
                    {paper.title}
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {paper.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{paper.abstract}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="mr-1 h-4 w-4" />
                    <span>{paper.author}</span>
                    <span className="mx-1">·</span>
                    <span className="text-blue-600">{paper.institution}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{new Date(paper.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="mr-1 h-4 w-4" />
                    <span>{paper.journal}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="mr-1 h-4 w-4" />
                    <span>{paper.citations} citations</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 flex flex-row gap-2">
                {paper.githubLink && (
                  <Button variant="outline" size="icon" asChild>
                    <Link href={paper.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">View Code</span>
                    </Link>
                  </Button>
                )}
                <Button variant="outline" size="icon" onClick={() => handleShare(paper)}>
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button variant="outline">
                  Read Paper
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant="outline"
              size="sm"
              className={currentPage === page ? "bg-blue-50" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </nav>
      </div>

      {selectedPaper && (
        <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share Paper</DialogTitle>
              <DialogDescription>
                Share "{selectedPaper.title}" with others via:
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Input 
                  value={`${window.location.origin}/papers/${selectedPaper.id}`} 
                  readOnly 
                />
                <Button onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/papers/${selectedPaper.id}`)
                }}>
                  Copy
                </Button>
              </div>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" onClick={() => {
                  window.open(`mailto:?subject=${encodeURIComponent(selectedPaper.title)}&body=${encodeURIComponent(`Check out this paper: ${window.location.origin}/papers/${selectedPaper.id}`)}`)
                }}>
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => {
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out "${selectedPaper.title}": ${window.location.origin}/papers/${selectedPaper.id}`)}`)
                }}>
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => {
                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${window.location.origin}/papers/${selectedPaper.id}`)}`)
                }}>
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => {
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${window.location.origin}/papers/${selectedPaper.id}`)}`)
                }}>
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Share All Results Dialog */}
      <Dialog open={shareAllDialogOpen} onOpenChange={setShareAllDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share All Search Results</DialogTitle>
            <DialogDescription>
              Share this entire search result page with others.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Input 
                value={`${window.location.origin}${window.location.pathname}${window.location.search}`} 
                readOnly 
              />
              <Button onClick={() => {
                navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}${window.location.search}`)
              }}>
                Copy
              </Button>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" onClick={() => {
                window.open(`mailto:?subject=${encodeURIComponent("Robotics Research Papers")}&body=${encodeURIComponent(`Check out these research papers: ${window.location.origin}${window.location.pathname}${window.location.search}`)}`)
              }}>
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => {
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out these robotics research papers: ${window.location.origin}${window.location.pathname}${window.location.search}`)}`)
              }}>
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${window.location.origin}${window.location.pathname}${window.location.search}`)}`)
              }}>
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => {
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${window.location.origin}${window.location.pathname}${window.location.search}`)}`)
              }}>
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

