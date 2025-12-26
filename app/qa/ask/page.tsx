"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquarePlus, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function AskQuestionPage() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-3xl text-center">
        <div className="bg-primary/5 rounded-2xl p-12 border border-primary/10">
          <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-serif font-bold mb-4">Question Submitted!</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Your question has been sent to our community of Vaidyas. It will appear in the Wellness Feed once a verified
            practitioner provides guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/">View Feed</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/qa">All Questions</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-8">
        <Link href="/qa" className="text-primary hover:underline text-sm mb-4 inline-block">
          ← Back to Q&A Community
        </Link>
        <h1 className="text-4xl font-bold font-serif">Ask the Community</h1>
        <p className="text-muted-foreground mt-2">
          Get advice from verified Ayurvedic practitioners and the community.
        </p>
      </div>

      <Card className="shadow-md border-primary/10">
        <CardHeader className="bg-primary/5 border-b border-primary/10">
          <div className="flex items-center gap-3">
            <MessageSquarePlus className="h-5 w-5 text-primary" />
            <CardTitle>Submit Your Question</CardTitle>
          </div>
          <CardDescription>Be specific to receive the most accurate Ayurvedic guidance.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <Label htmlFor="title">Your Question</Label>
            <Input id="title" placeholder="e.g., What is the best herb for improving digestion?" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="digestion">Digestion (Agni)</SelectItem>
                <SelectItem value="immunity">Immunity (Ojas)</SelectItem>
                <SelectItem value="sleep">Sleep & Rest</SelectItem>
                <SelectItem value="stress">Stress & Mind</SelectItem>
                <SelectItem value="skincare">Skincare & Beauty</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="details">Details & Context</Label>
            <Textarea
              id="details"
              placeholder="Describe your symptoms, lifestyle, or specific situation..."
              className="min-h-[150px]"
            />
            <p className="text-xs text-muted-foreground">
              Include relevant details like Dosha type (if known) or current habits.
            </p>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Disclaimer:</span> Answers provided by practitioners are
              for educational purposes.
            </p>
          </div>

          <Button
            className="w-full h-12 text-lg"
            onClick={() => {
              console.log("[v0] Submitting question to wellness feed")
              setSubmitted(true)
            }}
          >
            Post to Feed
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
