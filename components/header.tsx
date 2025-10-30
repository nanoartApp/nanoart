"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { UserMenu } from "@/components/auth/UserMenu"
import { cn } from "@/lib/utils"
import type { User } from "@supabase/supabase-js"

interface HeaderProps {
  user: User | null
}

export function Header({ user }: HeaderProps) {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <span className="text-3xl">🎨</span>
            <h1 className="text-xl font-bold text-foreground">nanoart</h1>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors",
                pathname === "/" && "text-foreground font-medium"
              )}
            >
              Home
            </Link>
            <Link 
              href="/generator" 
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors",
                pathname === "/generator" && "text-foreground font-medium"
              )}
            >
              Generator
            </Link>
            <Link 
              href="/#features" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link 
              href="/#pricing" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <UserMenu user={user} />
          </div>
        </div>
      </div>
    </header>
  )
}