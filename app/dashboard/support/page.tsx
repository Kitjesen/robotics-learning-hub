import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Support</h3>
        <p className="text-sm text-muted-foreground">
          Get help with your account or ask questions about the platform.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Send us a message and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief description of your issue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Provide details about your issue or question" />
              </div>
              <Button>Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>FAQs</CardTitle>
            <CardDescription>Find quick answers to common questions.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li>How do I reset my password?</li>
              <li>Can I change my username?</li>
              <li>How do I contribute to a project?</li>
              <li>What are the community guidelines?</li>
            </ul>
            <Button className="mt-4" variant="outline">View All FAQs</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

