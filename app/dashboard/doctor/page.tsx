import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MessageSquare, FileText, UserCheck, TrendingUp, Clock, Heart, Eye, UserPlus } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function DoctorDashboard() {
  return (
    <div className="flex flex-col gap-8 p-8 max-w-7xl mx-auto">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif text-primary-900">Namaste, Dr. Sharma</h1>
        <p className="text-muted-foreground">Your practice at a glance for today.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
            <Calendar className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
            <MessageSquare className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">3 urgent inquiries</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Verification Status</CardTitle>
            <UserCheck className="size-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">Verified</div>
            <p className="text-xs text-muted-foreground">Level 2 Gold Tier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Wisdom Index</CardTitle>
            <TrendingUp className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">842</div>
            <p className="text-xs text-muted-foreground">Top 5% contributors</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="font-serif text-xl flex items-center gap-2">
            <TrendingUp className="size-5 text-primary" /> Feed Analytics & Content Impact
          </CardTitle>
          <CardDescription>
            Your community engagement metrics and content performance over the last 7 days.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-background rounded-lg border shadow-sm">
                <Eye className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter mb-0.5">
                  Profile Views
                </p>
                <p className="text-2xl font-bold font-serif">3.2k</p>
                <p className="text-[10px] text-emerald-600 font-bold">+15% vs last week</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-background rounded-lg border shadow-sm">
                <Heart className="size-5 text-red-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter mb-0.5">Total Likes</p>
                <p className="text-2xl font-bold font-serif">1.8k</p>
                <p className="text-[10px] text-emerald-600 font-bold">+23% vs last week</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-background rounded-lg border shadow-sm">
                <MessageSquare className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter mb-0.5">
                  Feed Responses
                </p>
                <p className="text-2xl font-bold font-serif">45</p>
                <p className="text-[10px] text-muted-foreground font-bold">This week</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-background rounded-lg border shadow-sm">
                <UserPlus className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter mb-0.5">
                  New Followers
                </p>
                <p className="text-2xl font-bold font-serif">127</p>
                <p className="text-[10px] text-emerald-600 font-bold">+35% vs last week</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="font-serif text-xl">Top Performing Content</CardTitle>
              <CardDescription>Your most engaged blogs and Q&A responses from the feed.</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild className="bg-transparent">
              <Link href="/dashboard/doctor/analytics">View All Analytics</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              type: "Blog",
              title: "The Role of Ghee in Ayurvedic Detoxification",
              likes: "1.2k",
              views: "4.5k",
              comments: "87",
            },
            {
              type: "Q&A Response",
              title: "How can I balance my Vata dosha during winter?",
              likes: "850",
              views: "2.1k",
              comments: "45",
            },
            {
              type: "Blog",
              title: "Understanding Your Dosha: A Guide to Personalized Nutrition",
              likes: "620",
              views: "1.8k",
              comments: "32",
            },
          ].map((content, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors gap-3"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-[10px] uppercase">
                    {content.type}
                  </Badge>
                </div>
                <p className="font-medium text-sm leading-snug">{content.title}</p>
              </div>
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Eye className="size-3.5" />
                  <span className="font-bold">{content.views}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Heart className="size-3.5" />
                  <span className="font-bold">{content.likes}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="size-3.5" />
                  <span className="font-bold">{content.comments}</span>
                </div>
                <Button variant="ghost" size="sm" className="h-7 text-xs">
                  View
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Consultations</CardTitle>
            <CardDescription>Scheduled appointments for the next 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {[
              { time: "10:30 AM", patient: "Rahul Mehta", type: "Vata Balancing", status: "Confirmed" },
              { time: "11:45 AM", patient: "Sonia Singh", type: "Panchakarma Follow-up", status: "Pending" },
              { time: "02:15 PM", patient: "Amit Verma", type: "Initial Consultation", status: "Confirmed" },
            ].map((app, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center justify-center size-12 bg-primary/10 text-primary rounded-md">
                    <Clock className="size-4" />
                    <span className="text-[10px] font-bold">{app.time.split(" ")[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium">{app.patient}</p>
                    <p className="text-xs text-muted-foreground">{app.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${app.status === "Confirmed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}
                  >
                    {app.status}
                  </span>
                  <Button variant="ghost" size="sm">
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Button variant="outline" className="justify-start gap-2 bg-transparent" asChild>
                <Link href="/dashboard/doctor/availability">
                  <Calendar className="size-4" /> Update Availability
                </Link>
              </Button>
              <Button variant="outline" className="justify-start gap-2 bg-transparent" asChild>
                <Link href="/blogs/new">
                  <FileText className="size-4" /> Write New Article
                </Link>
              </Button>
              <Button variant="outline" className="justify-start gap-2 bg-transparent" asChild>
                <Link href="/qa/dashboard">
                  <MessageSquare className="size-4" /> Unanswered Questions
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
