"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MOCK_DISCUSSIONS = [
  { id: 1, title: "Latest advancements in computer vision for robots", author: "RoboVision", replies: 15 },
  { id: 2, title: "Ethical considerations in AI-powered robots", author: "EthicsBot", replies: 23 },
  { id: 3, title: "Best practices for ROS2 development", author: "ROSmaster", replies: 7 },
]

export function DiscussionForum() {
  const [newTopic, setNewTopic] = useState('')
  const [newContent, setNewContent] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ newTopic, newContent })
    // Reset form
    setNewTopic('')
    setNewContent('')
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Start a New Discussion</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Discussion Topic"
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
            required
          />
          <Textarea
            placeholder="Your thoughts..."
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            required
          />
          <Button type="submit">Post Discussion</Button>
        </form>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Recent Discussions</h3>
        {MOCK_DISCUSSIONS.map(discussion => (
          <Card key={discussion.id} className="mb-4">
            <CardHeader>
              <CardTitle>{discussion.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Started by: {discussion.author}</p>
              <p>Replies: {discussion.replies}</p>
              <Button variant="outline" className="mt-2">View Discussion</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

