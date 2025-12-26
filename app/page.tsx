"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Share2,
  MessageCircle,
  UserPlus,
  MoreHorizontal,
  MessageSquarePlus,
  User,
  Stethoscope,
  Lock,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import * as React from "react"

function FeedItem({
  doctorName,
  doctorImage,
  doctorDegree,
  question,
  answer,
  likes,
  comments,
  time,
}: {
  doctorName: string
  doctorImage: string
  doctorDegree: string
  question: string
  answer: string
  likes: string
  comments: string
  time: string
}) {
  return (
    <Card className="border shadow-sm overflow-hidden mb-8 relative">
      {/* Added blur overlay to gate content */}
      {/* <div className="absolute inset-0 bg-background/80 backdrop-blur-md z-10 flex items-center justify-center">
        <div className="text-center p-8">
          <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-serif font-bold mb-2">Unlock Vedic Wisdom</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-sm">
            Join our community to read full responses, ask questions, and connect with verified practitioners.
          </p>
          <div className="flex gap-3 justify-center">
            <Button asChild size="sm">
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/auth/login">Login</Link>
            </Button>
          </div>
        </div>
      </div> */}
      {/* Content still renders but is blurred behind overlay */}
      <CardHeader className="flex flex-row items-center justify-between pb-3 px-6 pt-6">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-primary/10">
            <AvatarImage src={doctorImage || "/placeholder.svg"} alt={doctorName} />
            <AvatarFallback>{doctorName[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Link href="/doctors/1" className="font-bold hover:text-primary transition-colors">
                {doctorName}
              </Link>
              <Badge
                variant="secondary"
                className="text-[10px] py-0 px-1.5 h-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
              >
                Verified
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">{doctorDegree}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="px-6 pb-2">
        <div className="mb-4">
          <p className="text-sm font-bold text-muted-foreground mb-1 uppercase tracking-wider text-[10px]">
            Patient Query:
          </p>
          <p className="text-md font-serif italic text-foreground leading-relaxed">"{question}"</p>
        </div>
        <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
          <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wider text-[10px]">Vaidya's Guidance:</p>
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{answer}</p>
          <Button variant="link" className="p-0 h-auto text-xs text-primary font-bold mt-2">
            Read full response...
          </Button>
        </div>
      </CardContent>
      <div className="px-6 py-3 flex items-center justify-between border-t mt-2">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-red-500 transition-colors">
            <Heart className="h-5 w-5" />
            <span className="text-xs font-bold">{likes}</span>
          </button>
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs font-bold">{comments}</span>
          </button>
          <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-xs text-primary hover:bg-primary/5">
            <UserPlus className="h-4 w-4" /> Follow
          </Button>
          <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">{time}</span>
        </div>
      </div>
    </Card>
  )
}

export default function LandingPage() {
  // Added state to control the welcome modal
  const [showWelcomeModal, setShowWelcomeModal] = React.useState(true)
  const [selectedRole, setSelectedRole] = React.useState<"patient" | "doctor">("patient")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Added welcome modal that appears on page load */}
      {/* <Dialog open={showWelcomeModal} onOpenChange={setShowWelcomeModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-center">Welcome to Dhanvantariji</DialogTitle>
            <DialogDescription className="text-center pt-2">
              Choose your role to access authentic Ayurvedic wisdom
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <Tabs
              defaultValue="patient"
              onValueChange={(v) => setSelectedRole(v as "patient" | "doctor")}
              className="w-full"
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

            <div className="space-y-3">
              <Button className="w-full h-12 text-base" asChild>
                <Link href={`/auth/signup?role=${selectedRole}`}>Create New Account</Link>
              </Button>
              <Button className="w-full h-12 text-base bg-transparent" variant="outline" asChild>
                <Link href={`/auth/login?role=${selectedRole}`}>Sign In to Existing Account</Link>
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </DialogContent>
      </Dialog> */}

      {/* Navigation */}


      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
  {/* Divine background */}
  <div className="absolute inset-0 bg-[url('/dhanvantari-ji.png')] bg-cover bg-center scale-110 blur-sm brightness-70" />

  {/* Golden aura glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,130,0.25),rgba(0,0,0,0.7))] animate-pulse-slow" />

  {/* Dark vignette */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Content */}
  <div className="relative z-10 flex h-full items-center justify-center">
    <div className="container px-4 md:px-6 mx-auto text-center">
      <div className="flex flex-col items-center space-y-6 max-w-7xl mx-auto">
        
        <h1 className="text-5xl font-serif tracking-wide sm:text-5xl md:text-6xl text-white drop-shadow-[0_2px_10px_rgba(255,215,150,0.25)]">
          Ayurveda, Authenticated.
        </h1>

        <p className="text-white  md:text-2xl leading-relaxed">
          The world's first community platform dedicated to connecting verified Ayurvedic practitioners with wellness seekers.
        </p>

        <Button
          size="lg"
          className="rounded-full px-10 h-12 bg-amber-100 text-black hover:bg-amber-200 shadow-lg shadow-amber-300/30"
          onClick={() => setShowWelcomeModal(true)}
        >
          Begin Your Healing
        </Button>
      </div>
    </div>
  </div>
</section>



        {/* Features - Wellness Feed Section */}
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-emerald-600">
                  <MessageSquarePlus className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-emerald-900 text-lg">Have a health query?</h3>
                  <p className="text-emerald-700 text-sm">Our Vaidyas are here to provide Vedic guidance.</p>
                </div>
              </div>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6"
                onClick={() => setShowWelcomeModal(true)}
              >
                Sign Up to Ask
              </Button>
            </div>
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Feed Column */}
              <div className="lg:col-span-7 xl:col-span-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-serif font-bold text-primary">Wellness Feed</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="rounded-full text-xs bg-transparent">
                      Recent
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full text-xs text-muted-foreground">
                      Trending
                    </Button>
                  </div>
                </div>

                <FeedItem
                  doctorName="Vaidya Anjali Sharma"
                  doctorImage="/doctor-anjali-sharma.jpg"
                  doctorDegree="BAMS, MD (Ayurveda)"
                  question="How can I balance my Vata dosha during the dry winter months?"
                  answer="To pacify Vata in winter, favor warm, cooked foods and regular oil massages (Abhyanga). Sesame oil is particularly beneficial. Avoid raw salads and cold drinks, which can aggravate Vata's dry and cold qualities..."
                  likes="1.2k"
                  comments="45"
                  time="2h ago"
                />

                <FeedItem
                  doctorName="Dr. Rajesh Iyer"
                  doctorImage="/doctor-rajesh-iyer.jpg"
                  doctorDegree="BAMS, PhD"
                  question="Is Amla juice safe to consume on an empty stomach daily?"
                  answer="Yes, Amla is 'Tridosha Hara' and generally safe. However, if you have high Pitta or sensitive stomach, it's best to mix it with a teaspoon of honey or consume it after a light snack to buffer the acidity..."
                  likes="850"
                  comments="12"
                  time="5h ago"
                />
              </div>

              {/* Sidebar/Suggestions Column */}
              <div className="lg:col-span-5 xl:col-span-4 space-y-8">
                <Card className="border shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-serif">Practitioners to Follow</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: "Dr. Vikram Seth", specialty: "Ayurvedic Surgery", image: "/doctor-vikram-seth.jpg" },
                      { name: "Vaidya Meera Jain", specialty: "Panchakarma Expert", image: "/doctor-meera-jain.jpg" },
                    ].map((doc, i) => (
                      <div key={i} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={doc.image || "/placeholder.svg"} />
                            <AvatarFallback>{doc.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <button
                              onClick={() => setShowWelcomeModal(true)}
                              className="text-sm font-bold group-hover:text-primary transition-colors text-left"
                            >
                              {doc.name}
                            </button>
                            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">
                              {doc.specialty}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 text-xs px-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
                          onClick={() => setShowWelcomeModal(true)}
                        >
                          Follow
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="link"
                      className="w-full text-xs text-primary font-bold p-0 h-auto"
                      onClick={() => setShowWelcomeModal(true)}
                    >
                      Discover more doctors
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border shadow-sm bg-primary/5">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-serif">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-background rounded-lg border shadow-xs">
                        <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Wisdom shared</p>
                        <p className="text-xl font-serif font-bold text-primary">12.5k+</p>
                      </div>
                      <div className="p-3 bg-background rounded-lg border shadow-xs">
                        <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">Doctors online</p>
                        <p className="text-xl font-serif font-bold text-primary">450+</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 font-serif text-xl font-bold text-primary mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  D
                </div>
                Dhanvantariji
              </div>
              <p className="text-sm text-muted-foreground max-w-xs mb-6">
                The world's first community platform dedicated to connecting verified Ayurvedic practitioners with
                wellness seekers.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setShowWelcomeModal(true)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Wellness Blogs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowWelcomeModal(true)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Vedic Q&A
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowWelcomeModal(true)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Find a Vaidya
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowWelcomeModal(true)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Ask a Question
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Portals</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setShowWelcomeModal(true)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Patient Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowWelcomeModal(true)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Doctor Portal
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowWelcomeModal(true)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Secure Chat
                  </button>
                </li>
                <li>
                  <Link href="/auth/signup" className="text-muted-foreground hover:text-primary transition-colors">
                    Join as Expert
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/login"
                    className="text-primary font-bold hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Testing Portal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Governance</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => setShowWelcomeModal(true)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Admin Console
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowWelcomeModal(true)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Super Admin
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowWelcomeModal(true)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Verification Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Dhanvantariji.com. Preserving the eternal wisdom of Ayurveda for a modern
              world.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/auth/login"
                className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-widest"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-widest"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
