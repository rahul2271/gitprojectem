import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: {
    default: "Dhanvantariji - Authentic Ayurvedic Community",
    template: "%s | Dhanvantariji",
  },
  description:
    "The world's first community for verified Ayurvedic practitioners and seekers. Access sacred Vedic wisdom, explore verified blogs, and get expert health answers.",
  keywords: ["Ayurveda", "Vedic Health", "Ayurvedic Doctors", "Panchakarma", "Vaidya", "Natural Healing"],
  authors: [{ name: "Dhanvantariji Team" }],
  creator: "Dhanvantariji",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhanvantariji.com",
    title: "Dhanvantariji - Authentic Ayurvedic Community",
    description: "Connect with verified Ayurvedic doctors and explore traditional Vedic health wisdom.",
    siteName: "Dhanvantariji",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanvantariji - Authentic Ayurvedic Community",
    description: "Verified Ayurvedic wisdom and community-driven health answers.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
