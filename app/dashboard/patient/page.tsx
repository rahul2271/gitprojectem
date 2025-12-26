import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Heart, Plus } from "lucide-react"
import Link from "next/link"

export default function PatientDashboard() {
  return (
    <div className="flex flex-col gap-8 p-8 max-w-7xl mx-auto">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif text-primary-900">Welcome, Ananya</h1>
        <p className="text-muted-foreground">Your Ayurvedic wellness journey at a glance.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-primary-900 text-primary-50">
          <CardHeader>
            <CardTitle>Next Consultation</CardTitle>
            <CardDescription className="text-primary-200">With Dr. Sharma • Tomorrow at 10:30 AM</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" className="w-full">
              Join Session
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Saved Wisdom</CardTitle>
            <Heart className="size-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14 Articles</div>
            <p className="text-xs text-muted-foreground">Pitta balancing & Diet</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">My Questions</CardTitle>
            <MessageSquare className="size-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 Active</div>
            <p className="text-xs text-muted-foreground">1 new answer received</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Consultations</CardTitle>
              <CardDescription>History of your Ayurvedic treatments.</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/doctors">Book New</Link>
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {[
              { date: "Dec 12, 2025", doctor: "Dr. Anjali Sharma", type: "Vata Consultation" },
              { date: "Nov 28, 2025", doctor: "Dr. Vikram Seth", type: "Panchakarma Intro" },
            ].map((app, i) => (
              <div key={i} className="flex items-center justify-between p-3 border-b last:border-0">
                <div>
                  <p className="font-medium">{app.doctor}</p>
                  <p className="text-xs text-muted-foreground">{app.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{app.date}</p>
                  <Button variant="link" size="sm" className="h-auto p-0">
                    View Notes
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Card className="bg-muted/30 border-dashed border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Need Advice?</CardTitle>
              <CardDescription>Ask our community of verified doctors.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Plus className="size-6" />
              </div>
              <Button asChild>
                <Link href="/qa/ask">Ask a Question</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
