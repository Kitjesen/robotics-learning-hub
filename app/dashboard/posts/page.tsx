import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlogPostsList } from "@/components/dashboard/blog-posts-list"
import Link from "next/link"
import { Plus } from 'lucide-react'

export default function BlogPostsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Blog Posts</h3>
          <p className="text-sm text-muted-foreground">
            Manage your blog posts and articles
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/posts/new">
            <Plus className="mr-2 h-4 w-4" /> New Post
          </Link>
        </Button>
      </div>
      <Card className="p-6">
        <BlogPostsList />
      </Card>
    </div>
  )
}

