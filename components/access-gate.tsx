"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { User, Stethoscope, ShieldCheck, Heart } from "lucide-react"
import Link from "next/link"

export function AccessGate() {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] border-none shadow-2xl p-0 overflow-hidden">
        <DialogHeader className="bg-primary p-8 text-primary-foreground text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <span className="text-3xl font-serif font-bold text-white">D</span>
          </div>
          <DialogTitle className="text-3xl font-serif mb-2">Welcome to Dhanvantariji</DialogTitle>
          <DialogDescription className="text-primary-foreground/90 text-md">
            The world's first community for verified Ayurvedic wisdom. Please join us to continue.
          </DialogDescription>
        </DialogHeader>
        <div className="p-8 space-y-6 bg-background">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/auth/signup?role=patient" className="group">
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-muted hover:border-primary hover:bg-primary/5 transition-all h-full text-center">
                <div className="w-12 h-12 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
                  <User className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">Seeker</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Join to explore wisdom and ask health queries.
                </p>
              </div>
            </Link>
            <Link href="/auth/signup?role=doctor" className="group">
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-muted hover:border-primary hover:bg-primary/5 transition-all h-full text-center">
                <div className="w-12 h-12 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
                  <Stethoscope className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-1">Expert</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Join as a verified Vaidya to guide others.
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <Button className="w-full h-12 text-md shadow-lg shadow-primary/20" asChild>
              <Link href="/auth/signup">Create Your Account</Link>
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Already a member?{" "}
              <Link href="/auth/login" className="text-primary hover:underline font-bold">
                Log In
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 pt-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3" /> Verified
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-3 w-3" /> Purity
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
