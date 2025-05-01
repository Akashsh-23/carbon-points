"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { CircleIcon, ZapIcon, BusIcon, LightbulbIcon, RecycleIcon } from "lucide-react"
import { LogActivityModal } from "./log-activity-modal"
import Link from "next/link"

export default function ActivitiesPage() {
  const [showLogModal, setShowLogModal] = useState(false)

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Activities</h1>
        <p className="text-muted-foreground">Track your daily sustainable actions and earn points</p>
      </div>

      {/* Quick Actions */}
      <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4 text-center hover:bg-green-50 cursor-pointer" onClick={() => setShowLogModal(true)}>
          <CircleIcon className="mx-auto mb-2 h-6 w-6 text-green-600" />
          <p className="text-green-600">Log Activity</p>
        </Card>
        <Link href="/rewards">
          <Card className="p-4 text-center hover:bg-blue-50">
            <ZapIcon className="mx-auto mb-2 h-6 w-6 text-blue-600" />
            <p className="text-blue-600">View Rewards</p>
          </Card>
        </Link>
        <Link href="/community">
          <Card className="p-4 text-center hover:bg-purple-50">
            <CircleIcon className="mx-auto mb-2 h-6 w-6 text-purple-600" />
            <p className="text-purple-600">Join Challenge</p>
          </Card>
        </Link>
        <Card className="p-4 text-center hover:bg-gray-50 cursor-pointer">
          <CircleIcon className="mx-auto mb-2 h-6 w-6 text-gray-600" />
          <p className="text-gray-600">Help Center</p>
        </Card>
      </div>

      {/* Log Your Activities */}
      <h2 className="mb-2 text-lg font-semibold">Log Your Activities</h2>
      <p className="mb-6 text-sm text-muted-foreground">Track your daily sustainable actions and earn points</p>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Transportation */}
        <Card className="p-4">
          <div className="mb-4 flex items-center gap-2">
            <BusIcon className="h-5 w-5 text-blue-600" />
            <h3 className="font-medium">Transportation</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Public Transport</span>
              <span className="text-blue-600">+50 points</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Cycling</span>
              <span className="text-blue-600">+75 points</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Walking</span>
              <span className="text-blue-600">+30 points</span>
            </div>
          </div>
        </Card>

        {/* Energy Use */}
        <Card className="p-4">
          <div className="mb-4 flex items-center gap-2">
            <LightbulbIcon className="h-5 w-5 text-green-600" />
            <h3 className="font-medium">Energy Use</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Solar Power</span>
              <span className="text-green-600">+100 points</span>
            </div>
            <div className="flex items-center justify-between">
              <span>LED Lights</span>
              <span className="text-green-600">+25 points</span>
            </div>
          </div>
        </Card>

        {/* Waste Management */}
        <Card className="p-4">
          <div className="mb-4 flex items-center gap-2">
            <RecycleIcon className="h-5 w-5 text-purple-600" />
            <h3 className="font-medium">Waste Management</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Recycling</span>
              <span className="text-purple-600">+60 points</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Composting</span>
              <span className="text-purple-600">+45 points</span>
            </div>
          </div>
        </Card>
      </div>

      <LogActivityModal open={showLogModal} onClose={() => setShowLogModal(false)} />
    </div>
  )
}

