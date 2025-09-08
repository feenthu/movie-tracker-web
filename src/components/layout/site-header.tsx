"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BrandMark } from "@/components/icons/brand-mark"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ChevronDown, Search, Plus } from "lucide-react"

const navLinks = [
  { label: "FILMS", href: "/movies" },
  { label: "LISTS", href: "/lists" },
  { label: "MEMBERS", href: "/members" },
  { label: "JOURNAL", href: "/journal" },
]

export function SiteHeader() {
  return (
    <header className="bg-[hsl(var(--surface-primary))] border-b border-[hsl(var(--border-subtle))]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            </div>
            <Link href="/dashboard">
              <span className="text-xl font-bold text-[hsl(var(--content-primary))]">
                MovieTracker
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[hsl(var(--content-secondary))] hover:text-[hsl(var(--content-primary))] transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-solid))] focus-visible:ring-offset-2 rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-[hsl(var(--content-secondary))] hover:text-[hsl(var(--content-primary))] aspect-square p-2"
            >
              <Search className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2 text-[hsl(var(--content-secondary))] hover:text-[hsl(var(--content-primary))] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-solid))] focus-visible:ring-offset-2 rounded-sm">
              <Avatar className="w-6 h-6">
                <AvatarFallback className="bg-[hsl(var(--surface-muted))] text-xs text-[hsl(var(--content-primary))]">
                  T
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">TYONEILL</span>
              <ChevronDown className="h-4 w-4" />
            </div>

            <Button leftIcon={<Plus />} className="bg-[hsl(var(--success-solid))] hover:bg-[hsl(var(--success-solid))]/90 text-[hsl(var(--content-onBrand))]">
              LOG
            </Button>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}