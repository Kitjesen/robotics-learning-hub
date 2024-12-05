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
import { RoboticsHistory } from "@/components/robotics-history"

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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <Hero />

      {/* Featured Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Featured Robotics Projects and Research
          </h2>
          <FeaturedCarousel />
        </div>
      </section>

      {/* Community Roadmap Section */}
      <CommunityRoadmap />

      {/* Robotics History Section */}
      <RoboticsHistory />

      {/* Research Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Explore Research Areas
          </h2>
          <ResearchAreas />
        </div>
      </section>

      {/* Latest Papers Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Latest Research Papers
          </h2>
          <LatestPapers />
        </div>
      </section>

      {/* Community & Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Community Spotlight</h2>
              <div className="flex-1">
                <CommunitySpotlight />
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Upcoming Events</h2>
              <div className="flex-1">
                <UpcomingEvents />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Latest News and Updates
          </h2>
          <NewsUpdates />
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

