"use client"

import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icons } from "@/components/ui/icons"
import { motion } from "framer-motion"
import { z } from "zod"

const emailSchema = z.string().email({
  message: "Please enter a valid email address",
})

export function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<string>("")
  const { login, register, loginWithGithub, loginWithGoogle } = useAuth()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setEmailError("")

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      emailSchema.parse(email)
      
      if (form.id === 'login-form') {
        await login(email, password)
      } else if (form.id === 'register-form') {
        const username = formData.get('username') as string
        await register(username, email, password)
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setEmailError(error.errors[0].message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleGithubLogin = async () => {
    setIsLoading(true)
    try {
      await loginWithGithub()
    } catch (error) {
      console.error('Github login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setIsLoading(true)
    try {
      await loginWithGoogle()
    } catch (error) {
      console.error('Google login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal */}
      <div className="relative w-[400px] overflow-hidden rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-center mb-6">
          Welcome to Robotics Learning Hub
        </h2>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TabsContent value="login">
              <form id="login-form" onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className={`w-full bg-transparent ${emailError ? "border-red-500" : ""}`}
                  />
                  {emailError && (
                    <p className="text-sm text-red-500">{emailError}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" required className="w-full bg-transparent" />
                </div>
                <Button type="submit" className="w-full bg-black hover:bg-gray-800" disabled={isLoading}>
                  {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}
                  Log in
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form id="register-form" onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" name="username" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className={`w-full bg-transparent ${emailError ? "border-red-500" : ""}`}
                  />
                  {emailError && (
                    <p className="text-sm text-red-500">{emailError}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" required className="w-full bg-transparent" />
                </div>
                <Button type="submit" className="w-full bg-black hover:bg-gray-800" disabled={isLoading}>
                  {isLoading ? (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}
                  Register
                </Button>
              </form>
            </TabsContent>
          </motion.div>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  Continue with
                </span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                type="button" 
                disabled={isLoading}
                onClick={handleGithubLogin}
                className="bg-white hover:bg-gray-50"
              >
                <Icons.gitHub className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button 
                variant="outline" 
                type="button" 
                disabled={isLoading}
                onClick={handleGoogleLogin}
                className="bg-white hover:bg-gray-50"
              >
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

