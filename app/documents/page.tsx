"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Plus, FileText, Download } from 'lucide-react'
import Link from "next/link"

// This would typically come from an API or database
const initialDocuments = [
  {
    id: 1,
    title: "Introduction to ROS2",
    category: "Tutorial",
    author: "Jane Doe",
    uploadDate: "2024-03-15",
    downloads: 1234,
  },
  {
    id: 2,
    title: "Advanced Computer Vision Techniques for Robotics",
    category: "Research Paper",
    author: "John Smith",
    uploadDate: "2024-03-10",
    downloads: 567,
  },
  {
    id: 3,
    title: "Building a Simple Robot Arm: Step-by-Step Guide",
    category: "Project",
    author: "Alice Johnson",
    uploadDate: "2024-03-05",
    downloads: 890,
  },
]

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [documents, setDocuments] = useState(initialDocuments)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
    const filteredDocs = initialDocuments.filter(doc => 
      doc.title.toLowerCase().includes(term.toLowerCase()) ||
      doc.category.toLowerCase().includes(term.toLowerCase()) ||
      doc.author.toLowerCase().includes(term.toLowerCase())
    )
    setDocuments(filteredDocs)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Community Documents</h1>
        <Button asChild>
          <Link href="/contribute">
            <Plus className="mr-2 h-4 w-4" />
            Contribute
          </Link>
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input 
            className="pl-8" 
            placeholder="Search documents..." 
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="grid gap-6">
        {documents.map((doc) => (
          <Card key={doc.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-xl">{doc.title}</span>
                <Badge>{doc.category}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Uploaded by {doc.author} on {doc.uploadDate}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {doc.downloads} downloads
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/documents/${doc.id}`}>
                      <FileText className="mr-2 h-4 w-4" />
                      View
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

