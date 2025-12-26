"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Plus, X } from "lucide-react"
import { useState } from "react"

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function DoctorAvailabilityPage() {
  const [availability, setAvailability] = useState([
    { day: "Monday", enabled: true, slots: [{ start: "09:00", end: "17:00" }] },
    { day: "Tuesday", enabled: true, slots: [{ start: "09:00", end: "17:00" }] },
    { day: "Wednesday", enabled: true, slots: [{ start: "09:00", end: "17:00" }] },
    { day: "Thursday", enabled: true, slots: [{ start: "09:00", end: "17:00" }] },
    { day: "Friday", enabled: true, slots: [{ start: "09:00", end: "17:00" }] },
    { day: "Saturday", enabled: false, slots: [] },
    { day: "Sunday", enabled: false, slots: [] },
  ])

  return (
    <div className="flex flex-col gap-8 p-8 max-w-5xl mx-auto">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif text-primary-900">Manage Availability</h1>
          <p className="text-muted-foreground">Set your consultation hours and time slots.</p>
        </div>
        <Button>Save Changes</Button>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Schedule</CardTitle>
          <CardDescription>Configure the days and hours you are available for consultations.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {availability.map((item, index) => (
            <div key={item.day} className="flex items-start gap-4 p-4 border rounded-lg">
              <Checkbox
                id={`day-${item.day}`}
                checked={item.enabled}
                onCheckedChange={(checked) => {
                  const updated = [...availability]
                  updated[index].enabled = checked as boolean
                  setAvailability(updated)
                }}
              />
              <div className="flex-1 flex flex-col gap-3">
                <Label htmlFor={`day-${item.day}`} className="font-medium text-base">
                  {item.day}
                </Label>
                {item.enabled && (
                  <div className="flex flex-col gap-2">
                    {item.slots.map((slot, slotIndex) => (
                      <div key={slotIndex} className="flex items-center gap-2">
                        <Clock className="size-4 text-muted-foreground" />
                        <Input type="time" value={slot.start} className="w-32" />
                        <span className="text-muted-foreground">to</span>
                        <Input type="time" value={slot.end} className="w-32" />
                        <Button variant="ghost" size="icon" className="size-8">
                          <X className="size-4" />
                        </Button>
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="w-fit gap-2">
                      <Plus className="size-4" /> Add Time Slot
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Consultation Settings</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="duration">Default Consultation Duration (minutes)</Label>
            <Input id="duration" type="number" defaultValue="45" className="w-32" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="buffer">Buffer Time Between Consultations (minutes)</Label>
            <Input id="buffer" type="number" defaultValue="15" className="w-32" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
