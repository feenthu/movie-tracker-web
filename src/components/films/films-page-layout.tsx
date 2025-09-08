'use client'

import { MovieTrackerHeader } from '@/components/profile/movietracker-header'
import { FilmsBrowseSection } from './films-browse-section'
import { FilmsSidebar } from './films-sidebar'

export function FilmsPageLayout() {
  return (
    <div style={{ 
      backgroundColor: 'var(--movietracker-background)', 
      color: 'var(--movietracker-text-primary)', 
      minHeight: '100vh'
    }}>
      <MovieTrackerHeader />
      
      {/* Browse Section - Full Width */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '40px 24px 0 24px'
      }}
      className="films-browse-container">
        <FilmsBrowseSection />
      </div>
      
      {/* Content sections with same max-width as browse section */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 24px 80px 24px'
      }}>
        <FilmsSidebar />
      </div>
    </div>
  )
}