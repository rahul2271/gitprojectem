"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { User, Stethoscope, ShieldCheck, Upload, Heart } from "lucide-react"

export default function UnifiedSignupPage() {
  const [role, setRole] = React.useState<"patient" | "doctor">("patient")

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/30 px-4 py-12">
      <Card className="w-full max-w-2xl shadow-xl border-none">
        <CardHeader className="space-y-1 text-center border-b bg-primary/5 pb-8">
          <CardTitle className="text-3xl font-serif">Join Dhanvantariji</CardTitle>
          <CardDescription className="text-base">
            Choose your role to begin your journey in Vedic wellness
          </CardDescription>

          <Tabs
            defaultValue="patient"
            onValueChange={(v) => setRole(v as "patient" | "doctor")}
            className="w-full max-w-sm mx-auto mt-6"
          >
            <TabsList className="grid w-full grid-cols-2 h-12">
              <TabsTrigger value="patient" className="gap-2 font-medium">
                <User className="h-4 w-4" /> Patient
              </TabsTrigger>
              <TabsTrigger value="doctor" className="gap-2 font-medium">
                <Stethoscope className="h-4 w-4" /> Doctor
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>

        <CardContent className="pt-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="Arjun" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Singh" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="arjun@example.com" required />
            </div>

            {role === "doctor" ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="degree">Medical Qualification</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Degree" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bams">BAMS (Ayurvedacharya)</SelectItem>
                        <SelectItem value="md-ayur">MD / MS (Ayurveda)</SelectItem>
                        <SelectItem value="phd">Ph.D in Ayurveda</SelectItem>
                        <SelectItem value="other">Other Vedic Certification</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="license">Council Reg. Number</Label>
                    <Input id="license" placeholder="Reg No. 12345" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialty">Primary Specialization</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose Specialty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="panchakarma">Panchakarma (Detoxification)</SelectItem>
                      <SelectItem value="kayachikitsa">Kayachikitsa (Internal Medicine)</SelectItem>
                      <SelectItem value="shalyachikitsa">Shalyachikitsa (Surgery)</SelectItem>
                      <SelectItem value="prasuti">Prasuti Tantra (Gynaecology)</SelectItem>
                      <SelectItem value="dravyaguna">Dravyaguna (Pharmacology)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" type="number" placeholder="5" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Describe your practice and dedication to Ayurveda..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Verification Documents (Degree & License)</Label>
                  <div className="border-2 border-dashed rounded-xl p-8 text-center hover:bg-muted/50 transition-all group cursor-pointer border-primary/20">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3 group-hover:text-primary group-hover:scale-110 transition-all" />
                    <p className="text-sm font-medium">Upload PDF or JPEG for manual verification</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Our team reviews all credentials for authenticity
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="space-y-2">
                  <Label htmlFor="health-interest">Primary Health Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="What brings you here?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="preventive">Preventive Wellness</SelectItem>
                      <SelectItem value="chronic">Chronic Condition Management</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle & Diet Optimization</SelectItem>
                      <SelectItem value="mental">Mental Peace & Meditation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="how-heard">How did you hear about us?</Label>
                  <Input id="how-heard" placeholder="Social Media, Friend, Search..." />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="password">Create Secure Password</Label>
              <Input id="password" type="password" required />
            </div>

            <Button className="w-full h-12 text-lg shadow-lg shadow-primary/20">
              {role === "doctor" ? "Submit Application" : "Start Your Journey"}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 border-t bg-muted/50 py-6">
          <div className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary hover:underline font-bold">
              Log In
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" /> Secure Data
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3" /> Vedic Privacy
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
