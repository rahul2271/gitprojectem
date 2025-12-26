"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Stethoscope, User, Shield, ShieldCheck } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const [activeTab, setActiveTab] = React.useState<"patient" | "doctor" | "admin" | "superadmin">("patient")
  const [showTestCredentials, setShowTestCredentials] = React.useState(false)

  // Mock login handler that sets session role
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Mock login - replace with real authentication in production
    sessionStorage.setItem("userRole", activeTab)
    sessionStorage.setItem("isAuthenticated", "true")

    // Redirect based on role
    if (activeTab === "patient") {
      window.location.href = "/"
    } else if (activeTab === "doctor") {
      window.location.href = "/dashboard/doctor"
    } else if (activeTab === "admin") {
      window.location.href = "/admin/dashboard"
    } else if (activeTab === "superadmin") {
      window.location.href = "/super-admin/dashboard"
    }
  }

  const testCredentials = {
    patient: { email: "patient@test.com", password: "patient123" },
    doctor: { email: "doctor@test.com", password: "doctor123" },
    admin: { email: "admin@test.com", password: "admin123" },
    superadmin: { email: "superadmin@test.com", password: "superadmin123" },
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/30 px-4">
      <Card className="w-full max-w-md shadow-xl border-none">
        <CardHeader className="space-y-1 text-center bg-primary/5 pb-8 rounded-t-xl">
          <CardTitle className="text-3xl font-serif">Sign In</CardTitle>
          <CardDescription>Choose your role and enter credentials</CardDescription>

          {/* Added Admin and Super Admin tabs */}
          <Tabs defaultValue="patient" onValueChange={(v) => setActiveTab(v as any)} className="w-full mx-auto mt-6">
            <TabsList className="grid w-full grid-cols-4 h-auto">
              <TabsTrigger value="patient" className="gap-1 flex-col py-2 text-xs">
                <User className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Patient</span>
              </TabsTrigger>
              <TabsTrigger value="doctor" className="gap-1 flex-col py-2 text-xs">
                <Stethoscope className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Doctor</span>
              </TabsTrigger>
              <TabsTrigger value="admin" className="gap-1 flex-col py-2 text-xs">
                <Shield className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Admin</span>
              </TabsTrigger>
              <TabsTrigger value="superadmin" className="gap-1 flex-col py-2 text-xs">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Super</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent className="grid gap-4 pt-8">
          {/* Added testing credentials toggle */}
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTestCredentials(!showTestCredentials)}
              className="text-xs text-muted-foreground hover:text-primary"
            >
              {showTestCredentials ? "Hide" : "Show"} Test Login
            </Button>
          </div>

          {/* Display test credentials when toggled */}
          {showTestCredentials && (
            <Alert className="bg-accent/50 border-primary/20">
              <AlertDescription className="text-xs space-y-1">
                <div className="font-bold text-primary">Test Credentials:</div>
                <div>Email: {testCredentials[activeTab].email}</div>
                <div>Password: {testCredentials[activeTab].password}</div>
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="name@example.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full h-11 text-lg shadow-lg shadow-primary/20">
              Sign In as{" "}
              {activeTab === "doctor"
                ? "Doctor"
                : activeTab === "admin"
                  ? "Admin"
                  : activeTab === "superadmin"
                    ? "Super Admin"
                    : "Patient"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 bg-muted/30 py-6 border-t rounded-b-xl">
          <div className="text-sm text-center text-muted-foreground">
            New to Dhanvantariji?{" "}
            <Link href="/auth/signup" className="text-primary hover:underline font-bold">
              Join the Community
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
