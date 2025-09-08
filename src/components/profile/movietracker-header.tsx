"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MovieTrackerHeader() {
  return (
    <header className="movietracker-header">
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link href="/dashboard" className="movietracker-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="movietracker-logo-dots">
            <div className="movietracker-dot movietracker-dot-orange"></div>
            <div className="movietracker-dot movietracker-dot-green"></div>
            <div className="movietracker-dot movietracker-dot-blue"></div>
          </div>
          <span style={{ fontSize: '20px', fontWeight: '600', color: 'var(--movietracker-text-primary)' }}>MovieTracker</span>
        </Link>
        
        {/* Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Link href="/films" className="movietracker-nav-link">Films</Link>
          <a href="#" className="movietracker-nav-link">Lists</a>
          <a href="#" className="movietracker-nav-link">Members</a>
          <a href="#" className="movietracker-nav-link">Journal</a>
          <Link href="/" className="movietracker-nav-link">Sign In</Link>
          <Link href="/signup" className="movietracker-nav-link">Create Account</Link>
        </nav>
        
        {/* Search Button */}
        <Button 
          variant="ghost" 
          size="sm" 
          style={{ 
            padding: '8px', 
            color: 'var(--movietracker-text-secondary)', 
            background: 'transparent',
            border: 'none'
          }}
        >
          <Search className="w-5 h-5" />
        </Button>
      </div>
    </header>
  )
}