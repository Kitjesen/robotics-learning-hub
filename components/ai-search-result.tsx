import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, Share2, Mail, Twitter, Facebook, Linkedin } from 'lucide-react'
import Link from "next/link"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface AISearchResultProps {
  result: {
    id: number
    title: string
    author: string
    institution: string
    abstract: string
    tags: string[]
    relevance: string
    aiExplanation: string
  }
}

export function AISearchResult({ result }: AISearchResultProps) {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)
  const [shareUrl, setShareUrl] = useState('')

  const handleShare = () => {
    // In a real application, you would generate a unique URL for sharing
    const shareableUrl = `${window.location.origin}/shared-search?id=${result.id}`
    setShareUrl(shareableUrl)
    setIsShareDialogOpen(true)
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    // You might want to show a toast or some feedback here
  }

  const handleEmailShare = () => {
    const subject = encodeURIComponent(`Check out this research paper: ${result.title}`)
    const body = encodeURIComponent(`I found this interesting paper:\n\n${result.title}\n\nby ${result.author}\n\n${shareUrl}`)
    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  const handleTwitterShare = () => {
    const text = encodeURIComponent(`Check out this research paper: "${result.title}" by ${result.author}`)
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`)
  }

  const handleFacebookShare = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`)
  }

  const handleLinkedInShare = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <Link href={`/papers/${result.id}`} className="hover:text-blue-600 transition-colors">
            {result.title}
          </Link>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="ml-2">
              Relevance: {result.relevance}
            </Badge>
            <Button variant="ghost" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">{result.author} - {result.institution}</p>
        <p className="text-sm mb-4">{result.abstract}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {result.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold flex items-center mb-2">
            <Sparkles className="mr-2 h-4 w-4" />
            AI Explanation
          </h4>
          <p className="text-sm">{result.aiExplanation}</p>
        </div>
        <Button asChild>
          <Link href={`/papers/${result.id}`}>Read Paper</Link>
        </Button>
      </CardContent>

      <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share this search result</DialogTitle>
            <DialogDescription>
              Share this research paper with others via:
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Input value={shareUrl} readOnly />
              <Button onClick={handleCopyLink}>Copy</Button>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon" onClick={handleEmailShare}>
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleTwitterShare}>
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleFacebookShare}>
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleLinkedInShare}>
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  )
}

