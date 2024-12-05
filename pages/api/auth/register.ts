import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
  id: string
  username: string
  email: string
}

// This is a mock database. In a real application, you would use a proper database.
let users: User[] = [
  { id: '1', username: 'user1', email: 'user1@example.com' },
  { id: '2', username: 'user2', email: 'user2@example.com' },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body

    // Check if user already exists
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Create new user
    const newUser: User = {
      id: (users.length + 1).toString(),
      username,
      email,
    }
    users.push(newUser)

    res.status(201).json({ message: 'User created successfully', user: newUser })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

