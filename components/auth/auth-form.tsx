"use client"

import { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Icons } from "@/components/ui/icons"
import { motion, AnimatePresence } from "framer-motion"
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const emailSchema = z.string().email({
  message: "Please enter a valid email address",
})

const passwordSchema = z.string().min(8, {
  message: "Password must be at least 8 characters long",
})

export function AuthForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const { login, register, loginWithGithub, loginWithGoogle } = useAuth()
  const { toast } = useToast()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setErrors({})

    const form = event.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      emailSchema.parse(email)
      passwordSchema.parse(password)
      
      if (form.id === 'login-form') {
        await login(email, password)
        toast({
          title: "Success",
          description: "Welcome back!",
        })
      } else if (form.id === 'register-form') {
        const username = formData.get('username') as string
        await register(username, email, password)
        toast({
          title: "Success",
          description: "Your account has been created",
        })
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string[]> = {}
        error.errors.forEach((err) => {
          const path = err.path[0] as string
          if (!fieldErrors[path]) {
            fieldErrors[path] = []
          }
          fieldErrors[path].push(err.message)
        })
        setErrors(fieldErrors)
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleOAuthLogin = async (provider: 'github' | 'google') => {
    setIsLoading(true)
    try {
      if (provider === 'github') {
        await loginWithGithub()
      } else {
        await loginWithGoogle()
      }
      toast({
        title: "Success",
        description: `Successfully signed in with ${provider}`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to sign in with ${provider}`,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Welcome to Robotics Learning Hub
        </CardTitle>
        <CardDescription className="text-center">
          Login or create an account to get started
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={isLoading ? 'loading' : 'loaded'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <TabsContent value="login" className="mt-0">
                  <form id="login-form" onSubmit={onSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="m@example.com"
                        required 
                        className={errors.email?.length > 0 ? "border-red-500" : ""}
                      />
                      {errors.email?.length > 0 && (
                        <ul className="text-sm text-red-500">
                          {errors.email.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        name="password" 
                        type="password"
                        placeholder="••••••••" 
                        required 
                        className={errors.password?.length > 0 ? "border-red-500" : ""}
                      />
                      {errors.password?.length > 0 && (
                        <ul className="text-sm text-red-500">
                          {errors.password.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      Sign In
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="register" className="mt-0">
                  <form id="register-form" onSubmit={onSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input 
                        id="username" 
                        name="username"
                        placeholder="robotics_enthusiast"
                        required 
                      />
                      {errors.username?.length > 0 && (
                        <ul className="text-sm text-red-500">
                          {errors.username.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email"
                        placeholder="m@example.com" 
                        required 
                        className={errors.email?.length > 0 ? "border-red-500" : ""}
                      />
                      {errors.email?.length > 0 && (
                        <ul className="text-sm text-red-500">
                          {errors.email.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        name="password" 
                        type="password"
                        placeholder="••••••••" 
                        required 
                        className={errors.password?.length > 0 ? "border-red-500" : ""}
                      />
                      {errors.password?.length > 0 && (
                        <ul className="text-sm text-red-500">
                          {errors.password.map((error, index) => (
                            <li key={index}>{error}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </div>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 w-full">
          <Button 
            variant="outline" 
            type="button" 
            disabled={isLoading}
            onClick={() => handleOAuthLogin('github')}
            className="bg-background hover:bg-accent"
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            type="button" 
            disabled={isLoading}
            onClick={() => handleOAuthLogin('google')}
            className="bg-background hover:bg-accent"
          >
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
