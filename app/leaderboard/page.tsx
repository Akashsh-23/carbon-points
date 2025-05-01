import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data - replace with actual data from your database
const leaderboardData = [
  { id: 1, name: "Sarah Anderson", points: 2450, badge: "Eco Warrior", rank: 1 },
  { id: 2, name: "Mike Johnson", points: 2100, badge: "Green Champion", rank: 2 },
  { id: 3, name: "Emma Wilson", points: 1950, badge: "Earth Guardian", rank: 3 },
  // Add more users...
]

export default function LeaderboardPage() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Community Leaderboard</h1>
        <p className="text-muted-foreground">See how you rank against other eco-warriors</p>
      </div>

      <div className="grid gap-6">
        {/* Top 3 Users */}
        <div className="grid gap-4 md:grid-cols-3">
          {leaderboardData.slice(0, 3).map((user) => (
            <Card key={user.id} className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2">
                    <Badge variant={user.rank === 1 ? "default" : "secondary"}>#{user.rank}</Badge>
                  </div>
                </div>
                <h3 className="mt-4 font-semibold">{user.name}</h3>
                <p className="text-2xl font-bold text-green-600">{user.points}</p>
                <Badge className="mt-2" variant="outline">
                  {user.badge}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Badge</TableHead>
                <TableHead className="text-right">Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">#{user.rank}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {user.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.badge}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">{user.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}

