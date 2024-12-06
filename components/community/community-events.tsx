"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MOCK_EVENTS = [
  { id: 1, title: "Robotics Workshop: ROS2 Basics", date: "2024-07-15", organizer: "ROS Community" },
  { id: 2, title: "AI in Robotics Conference", date: "2024-08-22", organizer: "AI Robotics Association" },
  { id: 3, title: "Hackathon: Build a Robot in 48 Hours", date: "2024-09-10", organizer: "RoboHack" },
]

export function CommunityEvents() {
  const [newEvent, setNewEvent] = useState('')
  const [eventDescription, setEventDescription] = useState('')
  const [eventDate, setEventDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ newEvent, eventDescription, eventDate })
    // Reset form
    setNewEvent('')
    setEventDescription('')
    setEventDate('')
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Create a New Event</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Event Title"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            required
          />
          <Textarea
            placeholder="Event Description"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
          <Input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
          <Button type="submit">Create Event</Button>
        </form>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
        {MOCK_EVENTS.map(event => (
          <Card key={event.id} className="mb-4">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Date: {event.date}</p>
              <p>Organizer: {event.organizer}</p>
              <Button variant="outline" className="mt-2">RSVP</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

