import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { prisma } from "@/lib/db/prisma"
import { authOptions } from "../auth/[...nextauth]/route"
import { z } from "zod"

const activitySchema = z.object({
  type: z.string(),
  category: z.string(),
  points: z.number().int().positive(),
  proofImage: z.string().optional(),
})

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const validation = activitySchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json({ error: "Invalid input data", details: validation.error.format() }, { status: 400 })
    }

    const { type, category, points, proofImage } = validation.data

    // Transaction to ensure both operations succeed or fail together
    const [activity, updatedUser] = await prisma.$transaction([
      prisma.activity.create({
        data: {
          type,
          category,
          points,
          proofImage,
          userId: session.user.id,
        },
      }),
      prisma.user.update({
        where: { id: session.user.id },
        data: { points: { increment: points } },
        include: { badges: true },
      }),
    ])

    // Check for badge eligibility
    let newBadge = null

    // Example badge logic - replace with your actual badge criteria
    if (updatedUser.points >= 1000 && !updatedUser.badges.some((b) => b.name === "Eco Warrior")) {
      const badge = await prisma.badge.findFirst({
        where: { name: "Eco Warrior" },
      })

      if (badge) {
        await prisma.user.update({
          where: { id: session.user.id },
          data: {
            badges: {
              connect: { id: badge.id },
            },
          },
        })
        newBadge = badge
      }
    }

    return NextResponse.json({
      activity,
      points: updatedUser.points,
      newBadge,
    })
  } catch (error) {
    console.error("Activity logging error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : 10

    const activities = await prisma.activity.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
      take: limit,
    })

    return NextResponse.json({ activities })
  } catch (error) {
    console.error("Get activities error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

