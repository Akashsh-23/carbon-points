import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { prisma } from "@/lib/db/prisma"
import { authOptions } from "../auth/[...nextauth]/route"

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : 10

    // Get top users by points
    const topUsers = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        points: true,
        badges: {
          select: {
            name: true,
            imageUrl: true,
          },
        },
      },
      orderBy: {
        points: "desc",
      },
      take: limit,
    })

    // Add rank to each user
    const leaderboard = topUsers.map((user, index) => ({
      ...user,
      rank: index + 1,
      // Get the highest badge if user has multiple
      badge: user.badges.length > 0 ? user.badges[0].name : null,
      badgeImage: user.badges.length > 0 ? user.badges[0].imageUrl : null,
    }))

    // Get current user's rank
    const userCount = await prisma.user.count({
      where: {
        points: {
          gt: session.user.points || 0,
        },
      },
    })

    const currentUserRank = userCount + 1

    return NextResponse.json({
      leaderboard,
      currentUserRank,
    })
  } catch (error) {
    console.error("Leaderboard error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

