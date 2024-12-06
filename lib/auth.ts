import { getServerSession } from "next-auth/next"
import { NextRequest } from "next/server"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function getSession() {
  return await getServerSession(authOptions)
}

export async function getCurrentUser() {
  const session = await getSession()
  return session?.user
}

export async function isAuthenticated(req: NextRequest) {
  const session = await getSession()
  return !!session?.user
}

export async function getUserId() {
  const session = await getSession()
  return session?.user?.id
}
