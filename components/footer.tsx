"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShieldCheck } from "lucide-react"

export default function Footer() {
  const router = useRouter()

  const gated = () => {
    router.push("/auth/signup")
  }

  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
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

          {/* Community */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              {["Wellness Blogs", "Vedic Q&A", "Find a Vaidya", "Ask a Question"].map(item => (
                <li key={item}>
                  <button
                    onClick={gated}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Portals</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={gated} className="text-muted-foreground hover:text-primary transition-colors">
                  Patient Dashboard
                </button>
              </li>
              <li>
                <button onClick={gated} className="text-muted-foreground hover:text-primary transition-colors">
                  Doctor Portal
                </button>
              </li>
              <li>
                <button onClick={gated} className="text-muted-foreground hover:text-primary transition-colors">
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

          {/* Governance */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Governance</h4>
            <ul className="space-y-2 text-sm">
              {["Admin Console", "Super Admin", "Verification Policy"].map(item => (
                <li key={item}>
                  <button
                    onClick={gated}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Dhanvantariji.com. Preserving the eternal wisdom of Ayurveda for a modern world.
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
    </footer>
  )
}
