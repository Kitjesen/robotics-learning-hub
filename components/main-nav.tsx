"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bot, BookOpen, Lightbulb, Users, Bell, Menu, Calendar, Newspaper, Code, Cpu, ChevronDown, FileText, Plus, CalendarDays, Trophy } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { UserNav } from "./user-nav"
import { useAuth } from '@/contexts/auth-context'
import { AuthForm } from '@/components/auth/auth-form'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { NotificationBar } from "@/components/notification-bar"
import { NotificationProvider } from "@/contexts/notification-context"
import { motion } from "framer-motion"

const mainNavItems = {
  research: {
    title: "Research",
    items: [
      {
        href: "/papers",
        icon: BookOpen,
        label: "Papers",
        description: "Browse research papers and publications"
      },
      {
        href: "/projects",
        icon: Code,
        label: "Projects",
        description: "Open source robotics projects"
      },
    ]
  },
  resources: {
    title: "Resources",
    items: [
      {
        href: "/resources",
        icon: Lightbulb,
        label: "Learning Materials",
        description: "Educational materials and tutorials"
      },
      {
        href: "/hardware-catalog",
        icon: Cpu,
        label: "Hardware Catalog",
        description: "Explore robotics hardware components"
      },
    ]
  },
  community: {
    title: "Community",
    items: [
      {
        href: "/community",
        icon: Users,
        label: "Connect",
        description: "Connect with other researchers"
      },
      {
        href: "/events",
        icon: Calendar,
        label: "Events",
        description: "Upcoming conferences and meetups"
      },
      {
        href: "/news",
        icon: Newspaper,
        label: "News",
        description: "Latest updates in robotics"
      },
    ]
  },
  contribute: {
    title: "Contribute",
    items: [
      {
        href: "/contribute",
        icon: Plus,
        label: "Contribute",
        description: "Share your knowledge and resources"
      },
      {
        href: "/project-plan",
        icon: CalendarDays,
        label: "Project Plan",
        description: "View our development roadmap and contribute"
      },
    ]
  },
  learn: {
    title: "Learn",
    items: [
      {
        href: "/leaderboard",
        icon: Trophy,
        label: "Leaderboard",
        description: "View top trending resources"
      },
    ]
  },
}

export function MainNav() {
  const pathname = usePathname()
  const { user, logout } = useAuth()

  return (
    <NotificationProvider>
      <div className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-background/40">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <div className="flex h-14 items-center px-4">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Bot className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                Robotics Learning Hub
              </span>
            </Link>
            
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {Object.entries(mainNavItems).map(([key, section]) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger className="h-9">
                      <span>{section.title}</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                      >
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                  pathname === item.href && "bg-accent"
                                )}
                              >
                                <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                  <item.icon className="h-4 w-4" />
                                  <span>{item.label}</span>
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </motion.ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4 px-4">
            <NotificationBar />

            {user ? (
              <UserNav user={user} onLogout={logout} />
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">Sign In</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] p-0">
                  <AuthForm />
                </DialogContent>
              </Dialog>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-8 md:hidden"
                  size="icon"
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                {Object.entries(mainNavItems).map(([key, section]) => (
                  <React.Fragment key={key}>
                    <DropdownMenuItem disabled className="font-semibold">
                      {section.title}
                    </DropdownMenuItem>
                    {section.items.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href} className="flex items-center w-full">
                          <item.icon className="mr-2 h-4 w-4" />
                          <div className="flex flex-col">
                            <span>{item.label}</span>
                            <span className="text-xs text-muted-foreground">{item.description}</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                  </React.Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </NotificationProvider>
  )
}

