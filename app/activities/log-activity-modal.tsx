"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface LogActivityModalProps {
  open: boolean
  onClose: () => void
  onSuccess?: (points: number) => void
}

const activities = {
  transportation: [
    { name: "Bus", points: 50 },
    { name: "Metro", points: 50 },
    { name: "Cycling", points: 75 },
    { name: "Walking", points: 30 },
  ],
  energy: [
    { name: "Solar Power", points: 100 },
    { name: "LED Lights", points: 25 },
  ],
  waste: [
    { name: "Recycling", points: 60 },
    { name: "Composting", points: 45 },
  ],
}

export function LogActivityModal({ open, onClose, onSuccess }: LogActivityModalProps) {
  const [category, setCategory] = useState("")
  const [activity, setActivity] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!category || !activity) {
      toast.error("Please select both category and activity")
      return
    }

    setIsLoading(true)

    try {
      // Get points for selected activity
      const selectedActivity = activities[category as keyof typeof activities].find((act) => act.name === activity)

      if (!selectedActivity) {
        throw new Error("Invalid activity selected")
      }

      let proofImageUrl = ""

      // Upload image if provided
      if (file) {
        // In a real app, you would upload to a storage service
        // This is a placeholder for demonstration
        proofImageUrl = "https://example.com/proof-image.jpg"
      }

      // Log the activity
      const response = await fetch("/api/activities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: activity,
          category,
          points: selectedActivity.points,
          proofImage: proofImageUrl,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to log activity")
      }

      const data = await response.json()

      toast.success(`Activity logged! +${selectedActivity.points} points`)

      if (data.newBadge) {
        toast.success(`New badge earned: ${data.newBadge.name}!`)
      }

      if (onSuccess) {
        onSuccess(selectedActivity.points)
      }

      // Reset form
      setCategory("")
      setActivity("")
      setFile(null)
      onClose()
    } catch (error) {
      console.error("Error logging activity:", error)
      toast.error("Failed to log activity")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Log Activity</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="transportation">Transportation</SelectItem>
                <SelectItem value="energy">Energy Use</SelectItem>
                <SelectItem value="waste">Waste Management</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {category && (
            <div className="space-y-2">
              <Label htmlFor="activity">Activity</Label>
              <Select value={activity} onValueChange={setActivity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select activity" />
                </SelectTrigger>
                <SelectContent>
                  {activities[category as keyof typeof activities].map((act) => (
                    <SelectItem key={act.name} value={act.name}>
                      {act.name} (+{act.points} points)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="proof">Upload Proof</Label>
            <Input id="proof" type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
            <p className="text-sm text-muted-foreground">Upload a photo as proof of your activity</p>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" type="button" onClick={onClose} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Activity"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

