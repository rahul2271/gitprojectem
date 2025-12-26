"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShieldAlert, Activity, Settings, Database, Terminal, Server } from "lucide-react"

export default function SuperAdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const checkAuth = () => {
      const userRole = sessionStorage.getItem("userRole")
      if (userRole === "superadmin") {
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
          <ShieldAlert className="size-16 text-red-600 mx-auto" />
          <p className="text-muted-foreground font-bold">Verifying System Authority Credentials...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="bg-red-50 border-2 border-red-600 rounded-lg p-3 flex items-center gap-2 text-sm">
        <ShieldAlert className="size-4 text-red-600" />
        <span className="font-bold text-red-900">CRITICAL: Super Admin System Authority Active</span>
        <Badge variant="outline" className="ml-auto bg-red-100 text-red-700 border-red-300">
          Maximum Privilege
        </Badge>
      </div>

      <header className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-red-600 rounded-lg text-white">
            <ShieldAlert className="size-8" />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold tracking-tight">System Authority</h1>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              <span className="flex items-center gap-1 text-emerald-600">
                <span className="size-2 bg-emerald-600 rounded-full animate-pulse" /> All Systems Operational
              </span>
              • Master Control Node: v1.0.4-Stable
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Settings className="size-4" /> Config
          </Button>
          <Button variant="destructive" className="gap-2">
            <Terminal className="size-4" /> System Console
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Real-time Stats */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="size-5 text-primary" /> Traffic & Engagement Matrix
            </CardTitle>
            <CardDescription>Live telemetry from global access points.</CardDescription>
          </CardHeader>
          <CardContent className="h-64 flex items-end gap-2 px-6 pb-6">
            {[45, 60, 40, 80, 55, 90, 75, 85, 65, 95, 100, 80].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="size-5 text-primary" /> Resource Allocation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span>Database Node</span>
                <span>84%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[84%]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span>API Gateway</span>
                <span>42%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[42%]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span>Storage (Blob)</span>
                <span>12%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[12%]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-muted/50 border-dashed">
          <CardHeader className="p-4 flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-bold">Audit Logs</CardTitle>
            <Database className="size-4" />
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <Button variant="link" className="p-0 h-auto text-xs font-bold text-primary">
              Access Data Logs →
            </Button>
          </CardContent>
        </Card>
        {/* Repeated for other critical tools */}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Global Access Permissions</CardTitle>
          <CardDescription>Grant or revoke administrator privileges across regions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { email: "vikram@dhanvantariji.com", role: "Regional Admin", region: "South Asia", status: "Active" },
              { email: "sarah@dhanvantariji.com", role: "Operations Lead", region: "Europe", status: "Active" },
            ].map((admin, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="size-10 bg-muted rounded-full flex items-center justify-center font-bold">
                    {admin.email[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{admin.email}</p>
                    <p className="text-xs text-muted-foreground">
                      {admin.role} • {admin.region}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700">
                    {admin.status}
                  </Badge>
                  <Button variant="ghost" size="sm" className="font-bold">
                    Revoke
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
