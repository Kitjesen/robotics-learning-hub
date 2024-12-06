"use client"

import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { ResearchAreas } from "@/components/research-areas"
import { LatestPapers } from "@/components/latest-papers"
import { UpcomingEvents } from "@/components/upcoming-events"
import { CommunitySpotlight } from "@/components/community-spotlight"
import { NewsUpdates } from "@/components/news-updates"
import { Hero } from "@/components/hero"
import { useNotifications } from '@/contexts/notification-context'
import { CommunityRoadmap } from "@/components/community-roadmap"

export default function HomePage() {
  const { addNotification } = useNotifications();

  // Keep the test function but don't render the button in production
  const testNotifications = () => {
    addNotification({
      type: 'info',
      title: 'New Paper Published',
      message: 'A new research paper has been published in your area of interest.'
    });

    setTimeout(() => {
      addNotification({
        type: 'success',
        title: 'Project Update',
        message: 'Your project has been successfully updated!'
      });
    }, 1000);

    setTimeout(() => {
      addNotification({
        type: 'warning',
        title: 'Upcoming Maintenance',
        message: 'The system will undergo maintenance in 1 hour.'
      });
    }, 2000);

    setTimeout(() => {
      addNotification({
        type: 'error',
        title: 'Connection Error',
        message: 'Failed to connect to the server. Please try again.'
      });
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Content */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <FeaturedCarousel />
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-white">
        <div className="container">
          <ResearchAreas />
        </div>
      </section>

      {/* Community Roadmap */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container">
          <CommunityRoadmap />
        </div>
      </section>

      {/* Latest Updates Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <LatestPapers />
            </div>
            <div>
              <UpcomingEvents />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <CommunitySpotlight />
            <NewsUpdates />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-400 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dive Deeper?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our vibrant community of robotics enthusiasts, researchers, and innovators. Start your journey today!
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <Link href="/signup">
              Get Started <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
