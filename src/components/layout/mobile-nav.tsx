"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "FILMS", href: "/movies" },
  { label: "LISTS", href: "/lists" },
  { label: "MEMBERS", href: "/members" },
  { label: "JOURNAL", href: "/journal" },
]

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden text-[hsl(var(--content-secondary))] hover:text-[hsl(var(--content-primary))] aspect-square p-2">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 bg-[hsl(var(--surface-elevated))]/95 backdrop-blur-md border-[hsl(var(--border-subtle))] p-0">
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>
            Navigate to different sections of the application
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col h-full px-6">
          {/* Search at top */}
          <div className="pt-8 pb-6">
            <Input 
              placeholder="Search films..."
              className="rounded-full bg-[hsl(var(--surface-raised))]/50 border-[hsl(var(--border-subtle))]"
            />
          </div>
          
          <Separator className="bg-[hsl(var(--border-subtle))]" />
          
          {/* Navigation links */}
          <div className="flex-1 py-6">
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-[hsl(var(--content-primary))] hover:bg-[hsl(var(--surface-hover))] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-solid))] focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Auth buttons at bottom */}
          <div className="border-t border-[hsl(var(--border-subtle))] pt-6 pb-8 space-y-3">
            <Button 
              variant="ghost" 
              className="w-full rounded-full justify-center text-[hsl(var(--content-primary))]"
            >
              Sign in
            </Button>
            <Button 
              className="w-full rounded-full justify-center bg-[hsl(var(--success-solid))] hover:bg-[hsl(var(--success-solid))]/90 text-[hsl(var(--content-onBrand))]"
            >
              Create account
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}