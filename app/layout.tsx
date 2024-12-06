"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { NotificationProvider } from "@/contexts/notification-context"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/contexts/auth-context"
import { MainNav } from "@/components/main-nav"
import { Toaster } from "@/components/ui/toaster"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NotificationProvider>
            <AuthProvider>
              <div className="relative min-h-screen">
                <MainNav />
                <main className="flex-1">{children}</main>
                <SiteFooter />
                <Toaster />
              </div>
            </AuthProvider>
          </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
