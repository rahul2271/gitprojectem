import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Award, Star, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Find Verified Ayurvedic Doctors",
  description:
    "Consult with highly qualified Ayurvedic practitioners who have been rigorously verified for Vedic authenticity.",
}

const DOCTORS = [
  {
    id: "1",
    name: "Vaidya Anjali Sharma",
    degree: "BAMS, MD (Ayurveda)",
    specialty: "Panchakarma & Gut Health",
    location: "Rishikesh, India",
    experience: "15+ Years",
    rating: 4.9,
    reviews: 124,
    image: "/doctor-anjali-sharma.jpg",
    verified: true,
  },
  {
    id: "2",
    name: "Dr. Rajesh Iyer",
    degree: "BAMS",
    specialty: "Chronic Pain Management",
    location: "Bangalore, India",
    experience: "10 Years",
    rating: 4.8,
    reviews: 89,
    image: "/doctor-rajesh-iyer.jpg",
    verified: true,
  },
  {
    id: "3",
    name: "Vaidya Vikram Seth",
    degree: "BAMS, Ph.D. (Ayurvedic Herbs)",
    specialty: "Rasayana & Longevity",
    location: "Pune, India",
    experience: "20+ Years",
    rating: 5.0,
    reviews: 210,
    image: "/doctor-vikram-seth.jpg",
    verified: true,
  },
]

export default function DoctorDirectoryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col space-y-4 mb-12">
        <h1 className="text-4xl font-bold font-serif">Verified Ayurvedic Practitioners</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Connect with highly qualified doctors whose credentials have been rigorously verified for Vedic authenticity.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search by name, specialty, or condition..." className="pl-10 h-12" />
        </div>
        <div className="relative w-full md:w-64">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Location" className="pl-10 h-12" />
        </div>
        <Button size="lg" className="h-12 px-8">
          Find Doctor
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {DOCTORS.map((doctor) => (
          <Card key={doctor.id} className="overflow-hidden border-none shadow-md group hover:shadow-lg transition-all">
            <div className="relative h-64 w-full">
              <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
              {doctor.verified && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground shadow-sm px-3 py-1">
                    <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Verified
                  </Badge>
                </div>
              )}
            </div>
            <CardHeader>
              <div className="space-y-1">
                <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors">
                  <Link href={`/doctors/${doctor.id}`}>{doctor.name}</Link>
                </CardTitle>
                <p className="text-sm font-medium text-muted-foreground">{doctor.degree}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <Award className="h-4 w-4 text-primary" />
                <span>{doctor.specialty}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{doctor.location}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-bold">{doctor.rating}</span>
                  <span className="text-muted-foreground text-xs">({doctor.reviews} reviews)</span>
                </div>
                <span className="text-xs font-medium bg-muted px-2 py-1 rounded">{doctor.experience} Exp</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href={`/doctors/${doctor.id}`}>View Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
