// "use client"

// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"

// export default function Header() {
//   const router = useRouter()

//   return (
//     <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
//       {/* Logo */}
//       <div
//         onClick={() => router.push("/")}
//         className="flex items-center gap-2 font-serif text-xl font-bold text-primary cursor-pointer"
//       >
//         <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
//           D
//         </div>
//         Dhanvantariji
//       </div>

//       {/* Navigation */}
//       <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
//         <button
//           onClick={() => router.push("/blogs")}
//           // onClick={() => setShowWelcomeModal(true)}
//           className="text-sm font-medium hover:text-primary transition-colors"
//         >
//           Blogs
//         </button>

//         <button
//           onClick={() => router.push("/qa")}
//           className="text-sm font-medium hover:text-primary transition-colors"
//         >
//           Q&A
//         </button>

//         <button
//           onClick={() => router.push("/doctors")}
//           className="text-sm font-medium hover:text-primary transition-colors"
//         >
//           Doctors
//         </button>

//         <button
//           onClick={() => router.push("/chat")}
//           className="text-sm font-medium hover:text-primary transition-colors"
//         >
//           Messages
//         </button>

//         {/* Auth Buttons */}
//         <div className="flex items-center gap-2 border-l pl-4 ml-2">
//           <Button variant="ghost" size="sm" asChild>
//             <Link href="/auth/login">Login</Link>
//           </Button>
//           <Button size="sm" asChild>
//             <Link href="/auth/signup">Sign Up</Link>
//           </Button>
//         </div>
//       </nav>
//     </header>
//   )
// }


"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "Blogs", href: "/blogs" },
    { label: "Q&A", href: "/qa" },
    { label: "Doctors", href: "/doctors" },
    { label: "Messages", href: "/chat" },
  ]

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-background/95 backdrop-blur sticky top-0 z-50">
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

      {/* Desktop Nav */}
      <nav className="ml-auto hidden md:flex gap-6 items-center">
        {navItems.map(item => (
          <button
            key={item.href}
            onClick={() => router.push(item.href)}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {item.label}
          </button>
        ))}

        <div className="flex items-center gap-2 border-l pl-4 ml-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="ml-auto md:hidden p-2 rounded-lg hover:bg-muted transition"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
{open && (
  <div className="absolute top-16 left-0 w-full max-w-full bg-background border-b shadow-md md:hidden overflow-x-hidden animate-in slide-in-from-top-2 duration-200">
    <nav className="flex flex-col divide-y">
      {navItems.map(item => (
        <button
          key={item.href}
          onClick={() => {
            router.push(item.href)
            setOpen(false)
          }}
          className="px-6 py-4 text-left text-sm font-medium hover:bg-muted transition"
        >
          {item.label}
        </button>
      ))}

      {/* Auth Buttons (stacked, not flex-row) */}
      <div className="flex flex-col gap-3 px-6 py-4 w-full">
        <Button variant="outline" className="w-full">
          <Link href="/auth/login" className="block w-full text-center">
            Login
          </Link>
        </Button>
        <Button className="w-full">
          <Link href="/auth/signup" className="block w-full text-center">
            Sign Up
          </Link>
        </Button>
      </div>
    </nav>
  </div>
)}

    </header>
  )
}
