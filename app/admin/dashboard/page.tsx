"use client"
import React from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Shield } from "lucide-react"
import { Suspense } from "react"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const checkAuth = () => {
      const userRole = sessionStorage.getItem("userRole")
      if (userRole === "admin" || userRole === "superadmin") {
        setIsAuthenticated(true)
      } else {
        window.location.href = "/auth/login"
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-4">
          <div className="size-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">Verifying admin credentials...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 flex items-center gap-2 text-sm">
        <Shield className="size-4 text-primary" />
        <span className="font-bold">Secure Admin Session Active</span>
        <Badge variant="outline" className="ml-auto bg-emerald-50 text-emerald-700 border-emerald-200">
          Authenticated
        </Badge>
      </div>

      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-serif font-bold text-primary-900">Admin Central</h1>
          <p className="text-muted-foreground">Manage platform operations and verifications.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export Reports</Button>
          <Button>Quick Verify</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Pending Docs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Flagged Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              New Patients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">142</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Revenue (MoM)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₹4.2L</div>
          </CardContent>
        </Card>
      </div>

      <Suspense fallback={<div>Loading Management Console...</div>}>
        <Tabs defaultValue="verification">
          <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0 mb-6">
            <TabsTrigger
              value="verification"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary py-4 px-6 text-sm font-bold"
            >
              Verification Queue
            </TabsTrigger>
            <TabsTrigger
              value="moderation"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary py-4 px-6 text-sm font-bold"
            >
              Moderation
            </TabsTrigger>
            <TabsTrigger
              value="support"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary py-4 px-6 text-sm font-bold"
            >
              Support Tickets
            </TabsTrigger>
          </TabsList>

          <TabsContent value="verification" className="space-y-4">
            <div className="flex justify-between items-center bg-muted/30 p-4 rounded-lg">
              <div className="relative w-80">
                <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
                <Input placeholder="Search practitioners..." className="pl-8" />
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                  24 Pending
                </Badge>
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                  1.2k Verified
                </Badge>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 border-b">
                    <tr>
                      <th className="text-left p-4 font-bold">Practitioner</th>
                      <th className="text-left p-4 font-bold">Degree/License</th>
                      <th className="text-left p-4 font-bold">Applied On</th>
                      <th className="text-left p-4 font-bold">Status</th>
                      <th className="text-right p-4 font-bold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      { name: "Dr. Sandeep Gupta", degree: "BAMS (DU)", date: "Dec 20, 2025", status: "Reviewing" },
                      { name: "Dr. Meera Nair", degree: "MD Ayurveda (BHU)", date: "Dec 21, 2025", status: "Pending" },
                      { name: "Vaidya Arjun Das", degree: "BAMS (Kerala)", date: "Dec 22, 2025", status: "Pending" },
                    ].map((doc, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-medium">{doc.name}</td>
                        <td className="p-4 text-muted-foreground">{doc.degree}</td>
                        <td className="p-4">{doc.date}</td>
                        <td className="p-4">
                          <Badge
                            variant="outline"
                            className={doc.status === "Reviewing" ? "bg-blue-50 text-blue-700 border-blue-200" : ""}
                          >
                            {doc.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-right">
                          <Button variant="ghost" size="sm" className="text-primary font-bold">
                            Review Docs
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="moderation">
            <div className="p-8 text-center text-muted-foreground">Moderation queue is clear.</div>
          </TabsContent>
          <TabsContent value="support">
            <div className="p-8 text-center text-muted-foreground">No active support tickets.</div>
          </TabsContent>
        </Tabs>
      </Suspense>
    </div>
  )
}
