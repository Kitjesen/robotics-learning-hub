"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ResourceUpload() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ title, description, category, file })
    // Reset form
    setTitle('')
    setDescription('')
    setCategory('')
    setFile(null)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Resource Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Select value={category} onValueChange={setCategory} required>
        <SelectTrigger>
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="tutorial">Tutorial</SelectItem>
          <SelectItem value="paper">Research Paper</SelectItem>
          <SelectItem value="code">Code Sample</SelectItem>
          <SelectItem value="dataset">Dataset</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="file"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
        required
      />
      <Button type="submit">Upload Resource</Button>
    </form>
  )
}

