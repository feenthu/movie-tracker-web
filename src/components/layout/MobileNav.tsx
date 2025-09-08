"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MobileNav() {
  const navLinks = ["Films", "Lists", "Members", "Journal"];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-80 bg-[--background] border-r-[--border]"
      >
        <div className="flex flex-col h-full py-6">
          {/* Search field */}
          <div className="px-6 mb-6">
            <Input
              placeholder="Search films..."
              className="w-full rounded-full bg-[--muted] border-[--border] focus-visible:ring-[--ring]/50"
            />
          </div>
          
          <Separator className="mb-6 bg-[--border]" />
          
          {/* Navigation links */}
          <nav className="flex-1 px-6">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center py-3 text-sm font-medium text-foreground hover:text-[--accent] transition-colors duration-200 group"
                  >
                    {link}
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Bottom buttons */}
          <div className="px-6 space-y-3">
            <Button 
              variant="ghost" 
              className="w-full rounded-full"
            >
              Sign in
            </Button>
            <Button 
              className="w-full rounded-full bg-[--accent] hover:bg-[--accent]/90 text-black"
            >
              Create account
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}