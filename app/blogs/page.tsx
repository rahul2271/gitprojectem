import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ayurvedic Wisdom Hub",
  description:
    "Explore articles on daily routines, seasonal wellness, and the foundations of Ayurveda written by verified Vaidyas.",
}

const FEATURED_POSTS = [
  {
    id: "1",
    title: "Understanding Dinacharya: The Vedic Daily Routine",
    excerpt:
      "Discover how aligning your daily habits with natural cycles can transform your long-term health and vitality.",
    author: "Vaidya Anjali Sharma",
    date: "Dec 20, 2025",
    category: "Lifestyle",
    image: "/ayurvedic-herbs-and-morning-sunlight.jpg",
  },
  {
    id: "2",
    title: "The Three Doshas: Finding Your Inner Balance",
    excerpt: "A comprehensive guide to Vata, Pitta, and Kapha, and how to identify your unique mind-body constitution.",
    author: "Dr. Rajesh Iyer",
    date: "Dec 18, 2025",
    category: "Foundations",
    image: "/three-elements-ayurveda-concept.jpg",
  },
  {
    id: "3",
    title: "Ritucharya: Seasonal Wisdom for Winter Wellness",
    excerpt: "Adjust your diet and lifestyle to stay balanced as the seasons transition into the cold winter months.",
    author: "Vaidya Vikram Seth",
    date: "Dec 15, 2025",
    category: "Seasonal",
    image: "/winter-ayurvedic-warm-tea-herbs.jpg",
  },
]

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col space-y-4 mb-12">
        <h1 className="text-4xl font-bold font-serif">Ayurvedic Wisdom</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Explore articles written by verified practitioners, blending ancient Vedic knowledge with modern wellness
          perspectives.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED_POSTS.map((post) => (
          <Card
            key={post.id}
            className="flex flex-col overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {post.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <CardTitle className="font-serif text-2xl leading-tight">
                <Link href={`/blogs/${post.id}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="mt-auto pt-4 border-t border-border/50 flex justify-between items-center">
              <span className="text-sm font-medium italic">By {post.author}</span>
              <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary/80">
                <Link href={`/blogs/${post.id}`}>Read More →</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
