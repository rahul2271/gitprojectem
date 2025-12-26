import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, ThumbsUp, MessageSquare, Plus, Search } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ayurvedic Q&A Community",
  description: "Get your health questions answered by verified Ayurvedic practitioners and experienced Vedic seekers.",
}

const QUESTIONS = [
  {
    id: "1",
    title: "Best Ayurvedic remedy for seasonal allergies?",
    preview: "I've been struggling with Kapha-related congestion as the weather turns cold. What herbs or practices...",
    author: "Patient_42",
    date: "2 hours ago",
    category: "Immunity",
    answersCount: 3,
    likes: 12,
    hasDoctorAnswer: true,
  },
  {
    id: "2",
    title: "Can Ashwagandha be taken with heart medication?",
    preview: "I'm interested in the stress-reducing benefits of Ashwagandha but I'm currently on beta-blockers...",
    author: "HealthSeeker",
    date: "5 hours ago",
    category: "Safety",
    answersCount: 1,
    likes: 8,
    hasDoctorAnswer: true,
  },
  {
    id: "3",
    title: "How to improve digestion (Agni) during travel?",
    preview:
      "I'm traveling frequently for work and my digestion is becoming irregular. Are there any portable rituals...",
    author: "VedicTraveler",
    date: "1 day ago",
    category: "Digestion",
    answersCount: 0,
    likes: 5,
    hasDoctorAnswer: false,
  },
]

export default function QAPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold font-serif">Community Q&A</h1>
          <p className="text-xl text-muted-foreground max-w-xl text-pretty">
            Ask questions and get answers from our pool of verified Ayurvedic practitioners and experienced community
            members.
          </p>
        </div>
        <Button size="lg" className="h-12 px-8 shadow-md" asChild>
          <Link href="/qa/ask">
            <Plus className="mr-2 h-5 w-5" /> Ask a Question
          </Link>
        </Button>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search questions about treatments, herbs, or symptoms..." className="pl-10 h-12 text-lg" />
      </div>

      <div className="space-y-6">
        {QUESTIONS.map((q) => (
          <Card key={q.id} className="group hover:border-primary/50 transition-colors shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="text-xs font-normal border-primary/20 bg-primary/5">
                  {q.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{q.date}</span>
              </div>
              <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors leading-tight">
                <Link href={`/qa/${q.id}`}>{q.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-2">{q.preview}</p>
            </CardContent>
            <CardFooter className="pt-4 border-t border-border/50 flex justify-between items-center text-sm">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <ThumbsUp className="h-4 w-4" />
                  <span>{q.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <MessageSquare className="h-4 w-4" />
                  <span>{q.answersCount} answers</span>
                </div>
                {q.hasDoctorAnswer && (
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-200">
                    <MessageCircle className="h-3 w-3 mr-1" /> Verified Answer
                  </Badge>
                )}
              </div>
              <span className="text-muted-foreground italic">Asked by {q.author}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
