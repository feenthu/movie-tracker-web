"use client"

import { usePathname } from 'next/navigation'
import { SiteHeader } from './site-header'

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Pages that should have no wrapper/header (just the raw content)
  const noWrapperPages = ['/', '/dashboard', '/signup', '/films']
  
  // If it's a no-wrapper page, render children directly
  if (noWrapperPages.includes(pathname)) {
    return <>{children}</>
  }
  
  // For all other pages, use the original layout with header and wrapper
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      {children}
    </div>
  )
}