"use client"

import { useAuth } from "@/contexts/auth-context"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DiscussionForum } from '@/components/community/discussion-forum'
import { ProjectCollaboration } from '@/components/community/project-collaboration'
import { CommunityEvents } from '@/components/community/community-events'
import { CommunityStats } from '@/components/community-stats'
import { FeaturedDiscussions } from '@/components/featured-discussions'
import { UpcomingEvents } from '@/components/upcoming-events'
import { MentorshipProgram } from '@/components/community/mentorship-program'
import { StudyGroups } from '@/components/community/study-groups'
import { ResearchCollaboration } from '@/components/community/research-collaboration'
import { ArrowRight, Users, MessageSquare, BookOpen, Calendar, Lock, Rocket, Award, Zap, Globe, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineContent } from '@mui/lab'


export default function CommunityHub() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
          Welcome to the Robotics Revolution
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Join our thriving community of robotics enthusiasts, researchers, and innovators. 
          Connect, collaborate, and catalyze the future of robotics together!
        </p>
      </motion.div>

      <CommunityStats />

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Rocket className="mr-2 h-5 w-5 text-blue-500" />
                Why Join Our Community?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-blue-500" />
                  <span>Connect with robotics experts worldwide</span>
                </li>
                <li className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-blue-500" />
                  <span>Engage in cutting-edge discussions and Q&A sessions</span>
                </li>
                <li className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-500" />
                  <span>Access exclusive resources and tutorials</span>
                </li>
                <li className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-blue-500" />
                  <span>Participate in virtual events and webinars</span>
                </li>
                <li className="flex items-center">
                  <Award className="mr-2 h-5 w-5 text-blue-500" />
                  <span>Earn badges and climb the leaderboard</span>
                </li>
                <li className="flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-blue-500" />
                  <span>Collaborate on groundbreaking projects</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-blue-500" />
              Exciting Features Coming Soon!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Globe className="mr-2 h-5 w-5 text-blue-500" />
                <span>Expanded Hardware Catalog with Advanced Search and Filtering</span>
              </li>
              <li className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-blue-500" />
                <span>Interactive Robotics Simulations and Virtual Labs</span>
              </li>
              <li className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5 text-blue-500" />
                <span>Enhanced Community Features: Direct Messaging and Interest-Based Groups</span>
              </li>
              <li className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-blue-500" />
                <span>Personalized Learning Paths and Skill Assessments</span>
              </li>
              <li className="flex items-center">
                <Award className="mr-2 h-5 w-5 text-blue-500" />
                <span>Integration with Industry-Leading Robotics Platforms</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        </motion.div>
      </div>

      {user ? (
        <Tabs defaultValue="discussions" className="space-y-4">
          <TabsList>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            <TabsTrigger value="study-groups">Study Groups</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
          <TabsContent value="discussions">
            <Card>
              <CardHeader>
                <CardTitle>Discussion Forum</CardTitle>
              </CardHeader>
              <CardContent>
                <DiscussionForum />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Project Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <ProjectCollaboration />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mentorship">
            <Card>
              <CardHeader>
                <CardTitle>Mentorship Program</CardTitle>
              </CardHeader>
              <CardContent>
                <MentorshipProgram />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="study-groups">
            <Card>
              <CardHeader>
                <CardTitle>Study Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <StudyGroups />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="research">
            <Card>
              <CardHeader>
                <CardTitle>Research Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <ResearchCollaboration />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Community Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CommunityEvents />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      ) : (
        <Card className="mb-12">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Lock className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Unlock the Full Potential of Our Community</h3>
            <p className="text-gray-600 mb-6 text-center max-w-md">
              Join our vibrant robotics community to participate in discussions, collaborate on cutting-edge projects, and access exclusive resources.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Create Account</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Trending Discussions</h2>
        <FeaturedDiscussions />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Robotics Development Timeline</h2>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">1921</TimelineOppositeContent>
            <TimelineSeparator>
              <div className="bg-blue-500 rounded-full w-4 h-4" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Karel Čapek introduces the word "robot" in his play R.U.R.</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">1954</TimelineOppositeContent>
            <TimelineSeparator>
              <div className="bg-blue-500 rounded-full w-4 h-4" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>George Devol invents the first programmable robot arm, Unimate.</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">1969</TimelineOppositeContent>
            <TimelineSeparator>
              <div className="bg-blue-500 rounded-full w-4 h-4" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Victor Scheinman develops the Stanford Arm, a revolutionary all-electric, 6-axis articulated robot.</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">1997</TimelineOppositeContent>
            <TimelineSeparator>
              <div className="bg-blue-500 rounded-full w-4 h-4" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>NASA's Sojourner rover lands on Mars, marking the first successful use of robotics for planetary exploration.</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">2000</TimelineOppositeContent>
            <TimelineSeparator>
              <div className="bg-blue-500 rounded-full w-4 h-4" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Honda unveils ASIMO, an advanced humanoid robot capable of walking, running, and interacting with humans.</TimelineContent>
          </TimelineItem>
          {/* Add more timeline items here */}
        </Timeline>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Upcoming Community Events</h2>
        <UpcomingEvents />
      </div>

      <Card className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <CardContent className="flex flex-col items-center text-center py-8">
          <h2 className="text-3xl font-bold mb-4">Be Part of the Robotics Revolution</h2>
          <p className="mb-6 max-w-2xl text-lg">
            Join our thriving community today and help shape the future of robotics. Whether you're a seasoned expert or a curious beginner, there's a place for you in our innovation ecosystem.
          </p>
          {!user && (
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/signup">
                Join the Revolution <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

