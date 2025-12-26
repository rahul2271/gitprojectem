import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // In a real app, fetch post by ID. Mocking content for now.
  const post = {
    title: "Understanding Dinacharya: The Vedic Daily Routine",
    content: `
      <p>Dinacharya, the Ayurvedic concept of a daily routine, is one of the most powerful tools for maintaining health and preventing disease. The word "Dina" means day and "Acharya" means to follow or conduct. Together, Dinacharya refers to a conduct that follows the natural rhythms of the sun and the earth.</p>
      
      <h2>The Brahmamuhurta: Waking Up</h2>
      <p>Ideally, one should wake up during the Brahmamuhurta, which is approximately 1.5 hours before sunrise. This time is considered sacred and is saturated with Sattva (purity). The air is fresh, the mind is calm, and the environment is conducive to spiritual practice and meditation.</p>

      <h2>Cleansing and Sensory Care</h2>
      <p>After waking, the focus shifts to internal and external cleansing. This includes practices like tongue scraping (Jivha Nirlekhana) to remove toxins, and oil pulling (Gandusha) to strengthen the teeth and gums. These rituals are not just about hygiene; they are about preparing the senses for the day ahead.</p>

      <h2>The Importance of Consistency</h2>
      <p>The true power of Dinacharya lies in consistency. By repeating these practices daily, we align our biological clock with the cosmic clock, leading to improved digestion, better sleep, and a deeper sense of inner peace.</p>
    `,
    author: "Vaidya Anjali Sharma",
    authorRole: "Senior Ayurvedic Consultant",
    date: "Dec 20, 2025",
    category: "Lifestyle",
    readTime: "8 min read",
    image: "/ayurvedic-lifestyle-morning-routine.jpg",
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/blogs" className="flex items-center text-primary hover:underline mb-8 transition-all">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Wisdom Hub
      </Link>

      <div className="space-y-6 mb-12 text-center">
        <Badge className="px-4 py-1 text-sm">{post.category}</Badge>
        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight text-balance">{post.title}</h1>

        <div className="flex flex-wrap justify-center gap-6 text-muted-foreground text-sm border-y py-4 border-border/50">
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span className="font-medium text-foreground">{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            {post.readTime}
          </div>
        </div>
      </div>

      <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-xl">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>

      <div
        className="prose prose-lg prose-stone dark:prose-invert max-w-none 
        prose-headings:font-serif prose-h2:text-primary prose-p:text-pretty prose-p:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-16 p-8 bg-muted/30 rounded-2xl border border-border/50">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
            {post.author[0]}
          </div>
          <div>
            <h3 className="text-xl font-bold font-serif">{post.author}</h3>
            <p className="text-muted-foreground">{post.authorRole}</p>
          </div>
          <Button variant="outline" className="ml-auto bg-transparent">
            Follow Author
          </Button>
        </div>
      </div>
    </article>
  )
}
