"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Header() {
  const router = useRouter()

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        className="flex items-center gap-2 font-serif text-xl font-bold text-primary cursor-pointer"
      >
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
          D
        </div>
        Dhanvantariji
      </div>

      {/* Navigation */}
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <button
          onClick={() => router.push("/blogs")}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Blogs
        </button>

        <button
          onClick={() => router.push("/qa")}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Q&A
        </button>

        <button
          onClick={() => router.push("/doctors")}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Doctors
        </button>

        <button
          onClick={() => router.push("/chat")}
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Messages
        </button>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 border-l pl-4 ml-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
