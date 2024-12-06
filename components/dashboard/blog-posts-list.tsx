"use client"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit2, Trash2 } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: "Introduction to ROS2",
    status: "published",
    date: "2024-02-01",
    views: 1234,
  },
  {
    id: 2,
    title: "Advanced Robot Control Systems",
    status: "draft",
    date: "2024-02-05",
    views: 0,
  },
  {
    id: 3,
    title: "Machine Learning in Robotics",
    status: "published",
    date: "2024-01-28",
    views: 2156,
  },
]

export function BlogPostsList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Views</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.map((post) => (
          <TableRow key={post.id}>
            <TableCell className="font-medium">{post.title}</TableCell>
            <TableCell>
              <Badge
                variant={post.status === "published" ? "default" : "secondary"}
              >
                {post.status}
              </Badge>
            </TableCell>
            <TableCell>{post.date}</TableCell>
            <TableCell>{post.views.toLocaleString()}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="icon">
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

