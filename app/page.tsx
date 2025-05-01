import {
  CircleIcon,
  TrendingUpIcon,
  GaugeIcon,
  TimerIcon,
  ZapIcon,
  PlusIcon,
  HelpCircleIcon,
  GiftIcon,
  Users2Icon,
} from "lucide-react"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome back, Deekshita Mathur!</h1>
        <p className="text-muted-foreground">Your carbon footprint impact dashboard</p>
      </div>

      {/* Stats Overview */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Card className="p-4 bg-green-50">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-green-600">Carbon Points</span>
              <TrendingUpIcon className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex items-baseline justify-between">
              <h2 className="text-3xl font-bold">2,450</h2>
              <span className="text-sm text-green-600">+15% from last week</span>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-blue-50">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-600">Current AQI</span>
              <GaugeIcon className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex items-baseline justify-between">
              <h2 className="text-3xl font-bold">156</h2>
              <span className="text-sm text-blue-600">Moderate</span>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-purple-50">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-purple-600">Active Challenges</span>
              <TimerIcon className="h-4 w-4 text-purple-600" />
            </div>
            <div className="flex items-baseline justify-between">
              <h2 className="text-3xl font-bold">3</h2>
              <span className="text-sm text-purple-600">2 completing soon</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activities */}
      <h2 className="mb-4 text-lg font-semibold">Recent Activities</h2>
      <div className="mb-8 space-y-4">
        <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-green-100 p-2">
              <ZapIcon className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium">Used Public Transport</h3>
              <p className="text-sm text-muted-foreground">Today, 9:30 AM</p>
            </div>
          </div>
          <span className="text-green-600">+50 points</span>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-blue-100 p-2">
              <CircleIcon className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium">Completed Challenge</h3>
              <p className="text-sm text-muted-foreground">Yesterday</p>
            </div>
          </div>
          <span className="text-blue-600">+100 points</span>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4 text-center hover:bg-green-50 cursor-pointer">
          <PlusIcon className="mx-auto mb-2 h-6 w-6 text-green-600" />
          <p className="text-green-600">Log Activity</p>
        </Card>
        <Card className="p-4 text-center hover:bg-blue-50 cursor-pointer">
          <GiftIcon className="mx-auto mb-2 h-6 w-6 text-blue-600" />
          <p className="text-blue-600">View Rewards</p>
        </Card>
        <Card className="p-4 text-center hover:bg-purple-50 cursor-pointer">
          <Users2Icon className="mx-auto mb-2 h-6 w-6 text-purple-600" />
          <p className="text-purple-600">Join Challenge</p>
        </Card>
        <Card className="p-4 text-center hover:bg-gray-50 cursor-pointer">
          <HelpCircleIcon className="mx-auto mb-2 h-6 w-6 text-gray-600" />
          <p className="text-gray-600">Help Center</p>
        </Card>
      </div>
    </div>
  )
}

