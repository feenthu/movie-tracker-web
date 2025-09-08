import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrandMark } from "@/components/icons/BrandMark";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  const navLinks = ["Films", "Lists", "Members", "Journal"];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[--background]/95 backdrop-blur supports-[backdrop-filter]:bg-[--background]/95">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Brand */}
          <div className="flex items-center space-x-3">
            <BrandMark />
            <span className="text-xl font-bold text-foreground">
              MovieTracker
            </span>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--ring]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[--background] rounded-sm px-1 py-1"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[--accent] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Search + Auth buttons */}
          <div className="flex items-center space-x-4">
            {/* Search - hidden on mobile */}
            <div className="hidden sm:block">
              <Input
                placeholder="Search films..."
                className="w-64 rounded-full bg-[--muted] border-[--border] focus-visible:ring-[--ring]/50"
              />
            </div>

            {/* Desktop auth buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm"
                className="rounded-full focus-visible:ring-[--ring]/50"
              >
                Sign in
              </Button>
              <Button 
                size="sm"
                className="rounded-full bg-[--accent] hover:bg-[--accent]/90 text-black focus-visible:ring-[--ring]/50"
              >
                Create account
              </Button>
            </div>

            {/* Mobile navigation */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}