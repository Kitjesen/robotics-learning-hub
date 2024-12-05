import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, BookOpen, Star, GitPullRequest } from 'lucide-react'

interface ResourcePreviewProps {
  title: string
  description: string
  level: string
  contributors: number
  pullRequests: number
  stars: number
  sections: {
    title: string
    description: string
    lastUpdated: string
    contributors: number
  }[]
}

export function ResourcePreview({ title, description, level, contributors, pullRequests, stars, sections }: ResourcePreviewProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Quick Preview</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="outline">{level}</Badge>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{contributors} contributors</span>
              </div>
              <div className="flex items-center">
                <GitPullRequest className="w-4 h-4 mr-1" />
                <span>{pullRequests} PRs</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1" />
                <span>{stars} stars</span>
              </div>
            </div>
          </div>
          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Content Overview</h4>
            {sections.map((section, index) => (
              <div key={index} className="mb-3">
                <h5 className="font-medium text-sm">{section.title}</h5>
                <p className="text-sm text-gray-500">{section.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mt-1">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    Last updated {section.lastUpdated}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {section.contributors} contributors
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

