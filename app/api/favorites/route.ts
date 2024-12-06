import { NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const favorites = await prisma.favorite.findMany({
      where: { userId: session.user.id },
      select: { resourceTitle: true }
    })

    return NextResponse.json({ favorites: favorites.map(f => f.resourceTitle) })
  } catch (error) {
    console.error('Error fetching favorites:', error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { resourceTitle } = await req.json()

    const existingFavorite = await prisma.favorite.findFirst({
      where: {
        userId: session.user.id,
        resourceTitle: resourceTitle
      }
    })

    if (existingFavorite) {
      await prisma.favorite.delete({
        where: { id: existingFavorite.id }
      })
      return NextResponse.json({ message: "Favorite removed successfully" })
    } else {
      await prisma.favorite.create({
        data: {
          userId: session.user.id,
          resourceTitle: resourceTitle
        }
      })
      return NextResponse.json({ message: "Favorite added successfully" })
    }
  } catch (error) {
    console.error('Error updating favorites:', error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

