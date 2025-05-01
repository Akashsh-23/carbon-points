import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LeafIcon, BusIcon, TreesIcon as TreeIcon } from "lucide-react"

export default function RewardsPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Rewards</h1>
        <p className="text-muted-foreground">Redeem your points for eco-friendly rewards</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">
            <LeafIcon className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Eco-friendly Products</h3>
          <p className="text-muted-foreground mb-4">Get sustainable products for your home</p>
          <div className="flex items-center justify-between">
            <span className="font-medium text-green-600">500 points</span>
            <Button variant="outline">Redeem</Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-4 rounded-full bg-blue-100 p-3 w-fit">
            <BusIcon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Transit Pass</h3>
          <p className="text-muted-foreground mb-4">Free public transportation pass</p>
          <div className="flex items-center justify-between">
            <span className="font-medium text-blue-600">1000 points</span>
            <Button variant="outline">Redeem</Button>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-4 rounded-full bg-purple-100 p-3 w-fit">
            <TreeIcon className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Plant a Tree</h3>
          <p className="text-muted-foreground mb-4">We'll plant a tree in your name</p>
          <div className="flex items-center justify-between">
            <span className="font-medium text-purple-600">750 points</span>
            <Button variant="outline">Redeem</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

