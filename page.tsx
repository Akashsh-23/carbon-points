import {
  CircleIcon,
  CloudLightningIcon as LightningIcon,
  RecycleIcon,
  ZapIcon,
  PlusIcon,
  HelpCircleIcon,
  GiftIcon,
  Users2Icon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function CarbonPoints() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 border-r bg-white p-4">
        <h1 className="mb-8 text-xl font-bold text-green-600">Carbon Points</h1>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            Home
          </Button>
          <Button variant="secondary" className="w-full justify-start">
            Activities
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Rewards
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Community
          </Button>
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-4 flex items-center gap-3 p-2">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6">
        {/* Recent Activities */}
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
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="p-4 text-center hover:bg-green-50">
            <PlusIcon className="mx-auto mb-2 h-6 w-6 text-green-600" />
            <p className="text-green-600">Log Activity</p>
          </Card>
          <Card className="p-4 text-center hover:bg-blue-50">
            <GiftIcon className="mx-auto mb-2 h-6 w-6 text-blue-600" />
            <p className="text-blue-600">View Rewards</p>
          </Card>
          <Card className="p-4 text-center hover:bg-purple-50">
            <Users2Icon className="mx-auto mb-2 h-6 w-6 text-purple-600" />
            <p className="text-purple-600">Join Challenge</p>
          </Card>
          <Card className="p-4 text-center hover:bg-gray-50">
            <HelpCircleIcon className="mx-auto mb-2 h-6 w-6 text-gray-600" />
            <p className="text-gray-600">Help Center</p>
          </Card>
        </div>

        {/* Activities Section */}
        <div>
          <h2 className="mb-2 text-lg font-semibold">Log Your Activities</h2>
          <p className="mb-6 text-sm text-muted-foreground">Track your daily sustainable actions and earn points</p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Transportation */}
            <Card className="p-4">
              <div className="mb-4 flex items-center gap-2">
                <CircleIcon className="h-5 w-5 text-blue-600" />
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
              </div>
            </Card>

            {/* Energy Use */}
            <Card className="p-4">
              <div className="mb-4 flex items-center gap-2">
                <LightningIcon className="h-5 w-5 text-green-600" />
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
        </div>
      </div>
    </div>
  )
}

