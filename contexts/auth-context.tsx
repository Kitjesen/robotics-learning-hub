"use client"

import React, { createContext, useState, useContext, useEffect } from 'react'

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const isAuthenticated = !!user

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // Add your authentication check logic here
        // For example, checking a token in localStorage or making an API call
        setLoading(false)
      } catch (error) {
        console.error('Authentication check failed:', error)
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      // Add your login logic here
      // For example, making an API call to your backend
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const userData = await response.json()
      setUser(userData)
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      // Add your logout logic here
      // For example, making an API call to your backend
      await fetch('/api/auth/logout', {
        method: 'POST',
      })

      setUser(null)
    } catch (error) {
      console.error('Logout failed:', error)
      throw error
    }
  }

  const register = async (email: string, password: string, name: string) => {
    try {
      // Add your registration logic here
      // For example, making an API call to your backend
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      const userData = await response.json()
      setUser(userData)
    } catch (error) {
      console.error('Registration failed:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
