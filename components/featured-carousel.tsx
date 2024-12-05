"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const featuredContent = [
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "Boston Dynamics Spot",
    description: "Agile mobile robot for industrial applications",
    organization: "Boston Dynamics"
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "NASA Perseverance",
    description: "Mars exploration rover",
    organization: "NASA JPL"
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "Soft Robotics Gripper",
    description: "Adaptive gripping technology",
    organization: "Soft Robotics Inc."
  },
  {
    image: "/placeholder.svg?height=400&width=600",
    title: "Autonomous Drone Swarms",
    description: "Coordinated multi-robot systems",
    organization: "ETH Zurich"
  }
]

export function FeaturedCarousel() {
  const [api, setApi] = React.useState<any>()
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )

  React.useEffect(() => {
    if (api) {
      api.on('select', () => {
        // Handle slide change
      })
    }
  }, [api])

  return (
    <Carousel
      plugins={[plugin.current]}
      setApi={setApi}
      className="w-full max-w-5xl mx-auto"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {featuredContent.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
                <p className="text-xs mt-1 opacity-75">{item.organization}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-12" />
      <CarouselNext className="hidden md:flex -right-12" />
    </Carousel>
  )
}

