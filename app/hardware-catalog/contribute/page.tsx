"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Upload } from 'lucide-react'

export default function ContributeSensorPage() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log({ name, description, manufacturer, file })
    // TODO: Implement file upload and parameter extraction
    // Reset form and navigate back to the catalog
    router.push('/hardware-catalog')
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => router.push('/hardware-catalog')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Catalog
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Contribute a New Sensor</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Sensor Name</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="manufacturer">Manufacturer</Label>
              <Input 
                id="manufacturer" 
                value={manufacturer} 
                onChange={(e) => setManufacturer(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file">Datasheet (PDF)</Label>
              <Input 
                id="file" 
                type="file" 
                accept=".pdf" 
                onChange={handleFileChange}
              />
            </div>
            <Button type="submit" className="w-full">
              <Upload className="mr-2 h-4 w-4" />
              Submit Sensor
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

