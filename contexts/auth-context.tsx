import React, { createContext, useState, useContext, useEffect } from 'react'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  bio?: string
  joinedDate: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  updateProfile: (data: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored auth token and validate session
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token')
        if (token) {
          // In a real app, validate token with backend
          const mockUser: User = {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            joinedDate: '2024-01-01',
            bio: 'Robotics enthusiast and researcher'
          }
          setUser(mockUser)
        }
      } catch (error) {
        console.error('Auth check failed:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      // In a real app, make API call to login endpoint
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email,
        joinedDate: '2024-01-01'
      }
      localStorage.setItem('auth_token', 'mock_token')
      setUser(mockUser)
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  const register = async (name: string, email: string, password: string) => {
    try {
      // In a real app, make API call to register endpoint
      const mockUser: User = {
        id: '1',
        name,
        email,
        joinedDate: new Date().toISOString().split('T')[0]
      }
      localStorage.setItem('auth_token', 'mock_token')
      setUser(mockUser)
    } catch (error) {
      console.error('Registration failed:', error)
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('auth_token')
    setUser(null)
  }

  const updateProfile = async (data: Partial<User>) => {
    try {
      // In a real app, make API call to update profile
      setUser(prev => prev ? { ...prev, ...data } : null)
    } catch (error) {
      console.error('Profile update failed:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoading, 
        login, 
        register, 
        logout,
        updateProfile
      }}
    >
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

