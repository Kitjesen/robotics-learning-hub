import { Metadata } from "next"
import { DashboardNav } from "@/components/dashboard/nav"
import { UserNav } from "@/components/dashboard/user-nav"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard for Robotics Learning Hub",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-50/40">
      <aside className="hidden lg:block w-64 border-r bg-white/60 backdrop-blur-sm">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <span className="font-semibold">Robotics Learning Hub</span>
          </div>
          <DashboardNav />
        </div>
      </aside>
      <div className="flex-1">
        <header className="sticky top-0 z-40 border-b bg-white/60 backdrop-blur-sm">
          <div className="flex h-14 items-center justify-between px-4">
            <span className="font-semibold lg:hidden">Robotics Learning Hub</span>
            <UserNav />
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}

