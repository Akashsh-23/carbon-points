import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ZapIcon, LeafIcon, TreesIcon as TreeIcon } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Community</h1>
        <p className="text-muted-foreground">See what other eco-warriors are doing</p>
      </div>

      <div className="space-y-4">
        <Card className="p-4">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Manvika Agarwal</h3>
                <Button variant="ghost" size="sm">
                  Follow
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Completed a cycling challenge</p>
              <div className="flex items-center gap-2 text-green-600">
                <ZapIcon className="h-4 w-4" />
                <span className="text-sm">+75 points</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarFallback>SS</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Sanskar Shrivastava</h3>
                <Button variant="ghost" size="sm">
                  Follow
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Started using solar power</p>
              <div className="flex items-center gap-2 text-blue-600">
                <LeafIcon className="h-4 w-4" />
                <span className="text-sm">+100 points</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-start gap-4">
            <Avatar>
              <AvatarFallback>YD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Yash Dangi</h3>
                <Button variant="ghost" size="sm">
                  Follow
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Used Public Transport</p>
              <div className="flex items-center gap-2 text-purple-600">
                <TreeIcon className="h-4 w-4" />
                <span className="text-sm">+150 points</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

