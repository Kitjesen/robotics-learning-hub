import type { NextApiRequest, NextApiResponse } from 'next'

type User = {
  id: string
  username: string
  email: string
}

// This is a mock database. In a real application, you would use a proper database.
const users: User[] = [
  { id: '1', username: 'user1', email: 'user1@example.com' },
  { id: '2', username: 'user2', email: 'user2@example.com' },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    // In a real application, you would verify the password here
    const user = users.find(u => u.email === email)

    if (user) {
      res.status(200).json({ message: 'Login successful', user })
    } else {
      res.status(401).json({ message: 'Invalid credentials' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

