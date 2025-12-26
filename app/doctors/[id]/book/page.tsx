"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, MapPin, Video, Info, History } from "lucide-react"
import { useState, use } from "react"

const AVAILABLE_DATES = [
  { date: "Dec 26", day: "Thu", slots: ["09:00 AM", "10:30 AM", "02:00 PM", "04:15 PM"] },
  { date: "Dec 27", day: "Fri", slots: ["09:00 AM", "11:00 AM", "03:00 PM"] },
  { date: "Dec 30", day: "Mon", slots: ["09:30 AM", "01:00 PM", "03:30 PM", "05:00 PM"] },
]

export default function BookAppointmentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [consultationType, setConsultationType] = useState<"in-person" | "video">("in-person")
  const [appointmentPurpose, setAppointmentPurpose] = useState<"initial" | "follow-up">("initial")

  const handleConfirmBooking = () => {
    window.location.href = `/doctors/${id}/book/confirmation`
  }

  return (
    <div className="flex flex-col gap-8 p-8 max-w-5xl mx-auto">
      <header>
        <h1 className="text-3xl font-serif text-primary-900">Book Consultation</h1>
        <p className="text-muted-foreground">with Dr. Anjali Sharma</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card className="border-primary/20 bg-primary/5 shadow-none">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Info className="size-4 text-primary" /> Appointment Nature
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setAppointmentPurpose("initial")}
                className={`flex items-center gap-3 p-3 border rounded-lg transition-all bg-background ${
                  appointmentPurpose === "initial"
                    ? "border-primary ring-1 ring-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div
                  className={`p-2 rounded-md ${appointmentPurpose === "initial" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  <Calendar className="size-4" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">New Consultation</p>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">
                    First-time visitor
                  </p>
                </div>
              </button>
              <button
                onClick={() => setAppointmentPurpose("follow-up")}
                className={`flex items-center gap-3 p-3 border rounded-lg transition-all bg-background ${
                  appointmentPurpose === "follow-up"
                    ? "border-primary ring-1 ring-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div
                  className={`p-2 rounded-md ${appointmentPurpose === "follow-up" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  <History className="size-4" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">Follow-up Visit</p>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">
                    Previous patient
                  </p>
                </div>
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Select Consultation Type</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setConsultationType("in-person")}
                className={`flex flex-col items-center gap-3 p-4 border-2 rounded-lg transition-all ${
                  consultationType === "in-person"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <MapPin className="size-6 text-primary" />
                <div className="text-center">
                  <p className="font-medium">In-Person</p>
                  <p className="text-xs text-muted-foreground">Visit clinic</p>
                </div>
              </button>
              <button
                onClick={() => setConsultationType("video")}
                className={`flex flex-col items-center gap-3 p-4 border-2 rounded-lg transition-all ${
                  consultationType === "video" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
              >
                <Video className="size-6 text-primary" />
                <div className="text-center">
                  <p className="font-medium">Video Call</p>
                  <p className="text-xs text-muted-foreground">Online consultation</p>
                </div>
              </button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Choose Date & Time</CardTitle>
              <CardDescription>Select from available slots this week.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex gap-3 overflow-x-auto pb-2">
                {AVAILABLE_DATES.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedDate(index)
                      setSelectedSlot(null)
                    }}
                    className={`flex flex-col items-center gap-2 p-4 border-2 rounded-lg min-w-24 transition-all ${
                      selectedDate === index ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Calendar className="size-5 text-primary" />
                    <div className="text-center">
                      <p className="font-bold text-sm">{item.date}</p>
                      <p className="text-xs text-muted-foreground">{item.day}</p>
                    </div>
                  </button>
                ))}
              </div>

              {selectedDate !== null && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {AVAILABLE_DATES[selectedDate].slots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`flex items-center justify-center gap-2 p-3 border-2 rounded-lg transition-all ${
                        selectedSlot === slot
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <Clock className="size-4" />
                      <span className="text-sm font-medium">{slot}</span>
                    </button>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consultation Details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="reason">Reason for Consultation</Label>
                <Textarea
                  id="reason"
                  placeholder="Please describe your health concerns or what you'd like to discuss..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 pb-4 border-b">
                <p className="text-sm text-muted-foreground">Consultation Nature</p>
                <p className="font-medium text-sm capitalize">{appointmentPurpose.replace("-", " ")}</p>
              </div>
              <div className="flex flex-col gap-2 pb-4 border-b">
                <p className="text-sm text-muted-foreground">Practitioner</p>
                <p className="font-medium text-sm">Dr. Anjali Sharma</p>
              </div>
              <div className="flex flex-col gap-2 pb-4 border-b">
                <p className="text-sm text-muted-foreground">Type</p>
                <p className="font-medium capitalize">{consultationType.replace("-", " ")}</p>
              </div>
              {selectedDate !== null && selectedSlot && (
                <div className="flex flex-col gap-2 pb-4 border-b">
                  <p className="text-sm text-muted-foreground">Date & Time</p>
                  <p className="font-medium">
                    {AVAILABLE_DATES[selectedDate].date}, {selectedSlot}
                  </p>
                </div>
              )}
              <div className="flex flex-col gap-2 pb-4 border-b">
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">45 minutes</p>
              </div>
              <div className="flex flex-col gap-2 pb-4 border-b">
                <p className="text-sm text-muted-foreground">Consultation Fee</p>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-xl">{appointmentPurpose === "follow-up" ? "₹800" : "₹1,500"}</p>
                  {appointmentPurpose === "follow-up" && (
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 text-[10px]">
                      Reduced Follow-up Rate
                    </Badge>
                  )}
                </div>
              </div>
              <Button className="w-full" size="lg" disabled={!selectedSlot} onClick={handleConfirmBooking}>
                Confirm Booking
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                You'll receive a confirmation email with session details.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
