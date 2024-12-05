"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart, FileText, Settings, LifeBuoy, Folder, Calendar, Users, BookOpen } from 'lucide-react'

const items = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: BarChart,
  },
  {
    title: "Resources",
    href: "/dashboard/resources",
    icon: FileText,
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
    icon: Folder,
  },
  {
    title: "Events",
    href: "/dashboard/events",
    icon: Calendar,
  },
  {
    title: "Community",
    href: "/dashboard/community",
    icon: Users,
  },
  {
    title: "Learning Paths",
    href: "/dashboard/learning-paths",
    icon: BookOpen,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Support",
    href: "/dashboard/support",
    icon: LifeBuoy,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2 p-4">
      {items.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className={cn(
            "justify-start",
            pathname === item.href && "bg-gray-100/80 font-medium"
          )}
          asChild
        >
          <Link href={item.href}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}

