"use client"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

import {
  MapPin,
  Award,
  Star,
  ShieldCheck,
  MessageSquare,
  Clock,
  BookOpen,
  GraduationCap,
  Building2,
  Stethoscope,
  Heart,
  CheckCircle2,
  Book,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  // Mocking profile data
  const doctor = {
    name: "Vaidya Anjali Sharma",
    degree: "BAMS, MD (Ayurveda)",
    specialty: "Panchakarma & Gut Health",
    location: "Rishikesh, India",
    experience: "15+ Years",
    rating: 4.9,
    reviews: 124,
    image: "/doctor-anjali-sharma.jpg",
    bio: "Vaidya Anjali Sharma is a renowned Ayurvedic practitioner with over 15 years of experience in Panchakarma and digestive health. She believes in treating the root cause of ailments through traditional Vedic methods combined with practical lifestyle adjustments.",
    detailedBio:
      "Dr. Anjali's journey into Ayurveda began at the prestigious Banaras Hindu University, where she graduated with top honors. She later specialized in Panchakarma, the science of detoxification, at Gujarat Ayurved University, Jamnagar. Over the past decade and a half, she has successfully treated thousands of patients suffering from chronic digestive disorders, autoimmune conditions, and lifestyle-related ailments. Her approach integrates the profound wisdom of Charaka Samhita with modern clinical diagnostics to provide a holistic healing experience.",
    credentials: [
      {
        year: "2008",
        title: "Bachelors in Ayurvedic Medicine and Surgery (BAMS)",
        institution: "Banaras Hindu University (BHU)",
      },
      { year: "2011", title: "MD in Ayurveda (Panchakarma)", institution: "Gujarat Ayurved University, Jamnagar" },
      { year: "2015", title: "Certified Yoga & Pranayama Instructor", institution: "S-VYASA University" },
    ],
    memberships: [
      "International Member of Ayurvedic Professionals Association",
      "Executive Board Member - Uttarakhand Ayurvedic Council",
      "Member of the World Ayurveda Foundation",
    ],
    expertise: [
      "Panchakarma Therapy",
      "Gastrointestinal Disorders",
      "Ayurvedic Dietetics",
      "Chronic Stress Management",
      "Autoimmune Conditions",
      "Women's Reproductive Health",
    ],
    languages: ["English", "Hindi", "Sanskrit", "Punjabi"],
    clinic: {
      name: "Dhanvantari Holistic Center",
      address: "24 Ganga View Estate, Near Laxman Jhula, Rishikesh, Uttarakhand 249201",
      fee: "₹1,200",
      type: "Online & In-person",
    },
    publications: [
      "The Clinical Efficacy of Basti in IBS: A Comparative Study",
      "Integration of Ritucharya in Modern Lifestyle: A Review",
    ],
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
const router = useRouter()

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <nav className="flex items-center text-sm text-muted-foreground mb-8 gap-2">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <Link href="/doctors" className="hover:text-primary">
          Doctors
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{doctor.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Column: Visual Profile & Quick Stats (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="overflow-hidden border-none shadow-xl bg-card/50 backdrop-blur-sm">
            <div className="relative aspect-[4/5] w-full">
              <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-md px-3 py-1.5 flex items-center gap-1.5 border-none">
                  <ShieldCheck className="w-4 h-4" /> Verified Expert
                </Badge>
              </div>
            </div>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold font-serif leading-tight">{doctor.name}</h1>
                <p className="text-primary font-semibold text-lg">{doctor.degree}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary" className="bg-secondary/50">
                    {doctor.specialty}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Experience</p>
                  <p className="font-serif text-lg">{doctor.experience}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Consultations</p>
                  <p className="font-serif text-lg">2.5k+</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <p className="font-bold text-xl leading-none">{doctor.rating}</p>
                  <p className="text-xs text-muted-foreground">{doctor.reviews} Patient Stories</p>
                </div>
              </div>

              <div className="space-y-3">
                <Button
  onClick={() => router.push(`/doctors/${doctor.id}/book`)} className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]">
                  Book Consultation
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-12 border-primary/20 hover:bg-primary/5 bg-transparent">
                    <MessageSquare className="h-4 w-4 mr-2" /> Message
                  </Button>
                  <Button variant="outline" className="h-12 border-primary/20 hover:bg-primary/5 bg-transparent">
                    <Heart className="h-4 w-4 mr-2" /> Follow
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg overflow-hidden">
            <CardHeader className="bg-muted/30">
              <CardTitle className="text-xl font-serif flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" /> Clinic Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-5">
              <div className="space-y-1">
                <p className="font-bold">{doctor.clinic.name}</p>
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  {doctor.clinic.address}
                </p>
              </div>
              <div className="flex justify-between items-center py-3 border-y border-border/50">
                <span className="text-sm text-muted-foreground">Consultation Fee</span>
                <span className="font-bold text-lg text-primary">{doctor.clinic.fee}</span>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline" className="border-primary/20 text-primary">
                  {doctor.clinic.type}
                </Badge>
                <Badge variant="outline" className="border-primary/20 text-primary">
                  Accepts New Patients
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Narrative & Detailed Tabs (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          <section className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
            <h2 className="text-3xl font-bold font-serif mb-6 flex items-center gap-3">
              <Stethoscope className="h-7 w-7 text-primary" /> Professional Profile
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">{doctor.detailedBio}</p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-serif text-foreground">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {doctor.expertise.map((item, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 px-3 py-1.5 bg-secondary/30 rounded-full text-sm font-medium text-foreground border border-secondary/50"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-serif text-foreground">Languages</h3>
                  <div className="flex gap-4">
                    {doctor.languages.map((lang, i) => (
                      <div key={i} className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-1 text-primary font-bold">
                          {lang[0]}
                        </div>
                        <span className="text-xs font-medium uppercase tracking-tighter">{lang}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Tabs defaultValue="qualifications" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-8 overflow-x-auto">
              <TabsTrigger
                value="qualifications"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-4 text-lg font-serif"
              >
                Education & Research
              </TabsTrigger>
              <TabsTrigger
                value="wisdom"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-4 text-lg font-serif"
              >
                Wisdom & Blogs
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-4 text-lg font-serif"
              >
                Patient Stories
              </TabsTrigger>
            </TabsList>

            <TabsContent value="qualifications" className="pt-8 space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-serif flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" /> Academic Timeline
                </h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                  {doctor.credentials.map((cred, i) => (
                    <div
                      key={i}
                      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-border/50 bg-card shadow-sm">
                        <time className="font-bold text-primary mb-1 block">{cred.year}</time>
                        <div className="font-bold text-lg mb-1">{cred.title}</div>
                        <div className="text-muted-foreground">{cred.institution}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-serif">Memberships</h3>
                  <ul className="space-y-3">
                    {doctor.memberships.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-serif">Research & Publications</h3>
                  <ul className="space-y-4">
                    {doctor.publications.map((pub, i) => (
                      <li
                        key={i}
                        className="group p-4 border border-border/50 rounded-xl hover:bg-primary/5 transition-colors"
                      >
                        <BookOpen className="h-5 w-5 text-primary mb-2" />
                        <p className="font-medium group-hover:text-primary transition-colors italic">"{pub}"</p>
                        <p className="text-xs text-muted-foreground mt-1">Ayurvedic Clinical Journal • Peer Reviewed</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="wisdom" className="pt-8">
              {/* Updated wisdom tab to show more engagement stats */}
              <div className="grid gap-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-muted-foreground italic">
                    Dr. Sharma has shared 12 articles and 45 verified answers.
                  </p>
                  <Button variant="link" className="text-primary font-bold">
                    View All Activity
                  </Button>
                </div>
                {[1, 2].map((i) => (
                  <Link key={i} href="#" className="group">
                    <Card className="flex flex-col md:flex-row overflow-hidden border-none shadow-sm hover:shadow-lg transition-all border-l-4 border-l-transparent hover:border-l-primary bg-card/50">
                      <div className="relative w-full md:w-64 h-40">
                        <Image src={`/article-thumb-${i}.jpg`} alt="Article" fill className="object-cover" />
                      </div>
                      <CardHeader className="flex-1 p-6">
                        <div className="flex gap-2 mb-2">
                          <Badge variant="outline" className="text-[10px] uppercase">
                            Wisdom
                          </Badge>
                          <Badge variant="outline" className="text-[10px] uppercase">
                            Gut Health
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors leading-snug">
                          {i === 1
                            ? "The Role of Ghee in Ayurvedic Detoxification"
                            : "Understanding Your Dosha: A Guide to Personalized Nutrition"}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 mt-2">
                          Ghee, or clarified butter, has been a cornerstone of Ayurvedic medicine for millennia...
                        </CardDescription>
                        <div className="flex items-center gap-6 text-xs text-muted-foreground mt-4 pt-4 border-t border-border/50">
                          <span className="flex items-center gap-1.5 font-medium">
                            <Clock className="h-3.5 w-3.5" /> 8 min read
                          </span>
                          <span className="font-medium">Dec 10, 2025</span>
                          <span className="flex items-center gap-1.5 ml-auto text-primary">Read Article →</span>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="pt-8">
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="border-none shadow-sm bg-card/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-secondary-foreground">
                          {["SK", "RA", "MJ"][i - 1]}
                        </div>
                        <div>
                          <p className="font-bold">Verified Patient</p>
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className="h-3 w-3 fill-primary text-primary" />
                            ))}
                          </div>
                        </div>
                        <time className="ml-auto text-xs text-muted-foreground">2 weeks ago</time>
                      </div>
                      <p className="text-muted-foreground italic leading-relaxed">
                        "Dr. Sharma's approach to my digestive issues was transformative. After years of modern medicine
                        with little relief, the Panchakarma treatment she recommended made a significant difference
                        within weeks. Truly a gifted Vaidya."
                      </p>
                    </CardContent>
                  </Card>
                ))}
                <Button
                  variant="outline"
                  className="w-full h-12 border-dashed border-primary/20 text-primary bg-transparent"
                >
                  Read More Patient Stories
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
