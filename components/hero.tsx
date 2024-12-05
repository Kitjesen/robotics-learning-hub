import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-gray-50/30 dark:bg-gray-900/20">
      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.15] md:leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Open Source Robotics Learning Community
          </h1>
          
          <p className="text-lg md:text-xl mb-8 md:mb-10 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our open-source community to explore, learn, and innovate in robotics technology. We welcome researchers, engineers, and enthusiasts to contribute knowledge and share experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 min-w-[160px]"
              asChild
            >
              <Link href="/resources">
                Explore Resources
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-blue-500 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/50 min-w-[160px]"
              asChild
            >
              <Link href="/community">
                Join Community
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800/50 min-w-[200px]"
              asChild
            >
              <Link 
                href="https://github.com/your-repo-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                Contribute on GitHub
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

