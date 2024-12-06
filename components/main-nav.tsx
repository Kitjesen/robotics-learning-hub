"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Bot, 
  BookOpen, 
  Lightbulb, 
  Users, 
  Bell, 
  Menu, 
  Calendar, 
  Newspaper, 
  Code, 
  Cpu, 
  ChevronDown, 
  FileText, 
  Plus, 
  CalendarDays, 
  Trophy,
  GraduationCap,
  ScrollText,
  LayoutDashboard,
  UserCircle,
  Settings,
  Folder,
  Heart,
  Share2,
  BookMarked,
  Library,
  Wrench,
  BookOpenCheck,
  GitPullRequest,
  MessageSquare,
  Star,
  Video
} from 'lucide-react'
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/auth-context"
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
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { NotificationProvider } from "@/contexts/notification-context"
import { NotificationBar } from "@/components/notification-bar"
import { UserNav } from "@/components/user-nav"
import { AuthForm } from "@/components/auth/auth-form"

const mainNavItems = {
  explore: {
    title: "Explore",
    items: [
      {
        href: "/projects",
        label: "Projects",
        description: "Browse open source robotics projects",
        icon: Code,
      },
      {
        href: "/hardware-catalog",
        label: "Hardware Catalog",
        description: "Open source hardware resources",
        icon: Cpu,
      },
      {
        href: "/showcase",
        label: "Showcase",
        description: "Featured community projects",
        icon: Star,
      },
      {
        href: "/leaderboard",
        label: "Contributors",
        description: "Top community contributors",
        icon: Trophy,
      },
    ],
  },
  learn: {
    title: "Learn",
    items: [
      {
        href: "/courses",
        label: "Courses",
        description: "Structured learning paths",
        icon: GraduationCap,
      },
      {
        href: "/tutorials",
        label: "Tutorials",
        description: "Step-by-step guides",
        icon: Lightbulb,
      },
      {
        href: "/workshops",
        label: "Workshops",
        description: "Interactive learning sessions",
        icon: Video,
      },
      {
        href: "/resources",
        label: "Resources",
        description: "Learning materials and tools",
        icon: Library,
      },
    ],
  },
  research: {
    title: "Research",
    items: [
      {
        href: "/papers",
        label: "Research Papers",
        description: "Open access research",
        icon: ScrollText,
      },
      {
        href: "/implementations",
        label: "Implementations",
        description: "Code implementations of papers",
        icon: Code,
      },
      {
        href: "/experiments",
        label: "Experiments",
        description: "Community experiments and results",
        icon: Wrench,
      },
      {
        href: "/datasets",
        label: "Datasets",
        description: "Open robotics datasets",
        icon: BookOpenCheck,
      },
    ],
  },
  community: {
    title: "Community",
    items: [
      {
        href: "/forum",
        label: "Forum",
        description: "Discuss with community",
        icon: MessageSquare,
      },
      {
        href: "/events",
        label: "Events",
        description: "Community events and meetups",
        icon: Calendar,
      },
      {
        href: "/news",
        label: "News",
        description: "Community updates",
        icon: Newspaper,
      },
      {
        href: "/project-plan",
        label: "Roadmap",
        description: "Community development plan",
        icon: CalendarDays,
      },
    ],
  },
  contribute: {
    title: "Contribute",
    items: [
      {
        href: "/contribute",
        label: "Getting Started",
        description: "Guide to contributing",
        icon: Heart,
      },
      {
        href: "/projects/create",
        label: "Share Project",
        description: "Share your robotics project",
        icon: Share2,
        requiresAuth: true,
      },
      {
        href: "/pull-requests",
        label: "Pull Requests",
        description: "Review community contributions",
        icon: GitPullRequest,
        requiresAuth: true,
      },
      {
        href: "/challenges",
        label: "Challenges",
        description: "Join community challenges",
        icon: Trophy,
      },
    ],
  },
}

const authNavItems = {
  dashboard: {
    title: "Dashboard",
    items: [
      {
        href: "/dashboard",
        label: "Overview",
        description: "Your personal workspace",
        icon: LayoutDashboard,
      },
      {
        href: "/profile",
        label: "Profile",
        description: "Manage your profile",
        icon: UserCircle,
      },
      {
        href: "/profile/contributions",
        label: "My Contributions",
        description: "View your contributions",
        icon: Heart,
      },
      {
        href: "/profile/projects",
        label: "My Projects",
        description: "Manage your projects",
        icon: Folder,
      },
    ],
  },
}

export function MainNav() {
  const pathname = usePathname()
  const { user, logout, isAuthenticated } = useAuth()

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
                  key !== 'contribute' ? (
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
                            item.requiresAuth && !isAuthenticated ? null : (
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
                            )
                          ))}
                        </motion.ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : null
                ))}
                {isAuthenticated && Object.entries(authNavItems).map(([key, section]) => (
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
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9">
                    <span>Contribute</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                    >
                      {mainNavItems.contribute.items.map((item) => (
                        item.requiresAuth && !isAuthenticated ? null : (
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
                        )
                      ))}
                    </motion.ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
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
                      item.requiresAuth && !isAuthenticated ? null : (
                        <DropdownMenuItem key={item.href} asChild>
                          <Link href={item.href} className="flex items-center w-full">
                            <item.icon className="mr-2 h-4 w-4" />
                            <div className="flex flex-col">
                              <span>{item.label}</span>
                              <span className="text-xs text-muted-foreground">{item.description}</span>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      )
                    ))}
                    <DropdownMenuSeparator />
                  </React.Fragment>
                ))}
                {isAuthenticated && Object.entries(authNavItems).map(([key, section]) => (
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
