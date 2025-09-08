"use client"

import { User, MoreHorizontal, Heart, Calendar, Star, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

// Main Profile Header Component - Exact match to HTML
export function ProfileHeader() {
  return (
    <div className="movietracker-profile-header">
      {/* Column 1: Profile Picture */}
      <div className="movietracker-profile-avatar">
        <User style={{ width: '32px', height: '32px', color: 'var(--movietracker-text-secondary)' }} />
      </div>
      
      {/* Column 2: Username */}
      <div className="movietracker-username">tyshaneoneill</div>
      
      {/* Column 3: Three Dots */}
      <button style={{ 
        color: 'var(--movietracker-text-muted)', 
        background: 'transparent', 
        border: 'none',
        padding: '4px',
        cursor: 'pointer',
        transition: 'color 0.2s ease'
      }}>
        <MoreHorizontal style={{ width: '20px', height: '20px' }} />
      </button>
      
      {/* Column 4: Blank Spacer */}
      <div></div>
      
      {/* Column 5: Films Count */}
      <div className="movietracker-stat">
        <div className="movietracker-stat-number">4</div>
        <div className="movietracker-stat-label">Films</div>
      </div>
      
      {/* Column 6: Following Count */}
      <div className="movietracker-stat">
        <div className="movietracker-stat-number">0</div>
        <div className="movietracker-stat-label">Following</div>
      </div>
      
      {/* Column 7: Followers Count */}
      <div className="movietracker-stat">
        <div className="movietracker-stat-number">0</div>
        <div className="movietracker-stat-label">Followers</div>
      </div>
    </div>
  )
}

// Profile Navigation Tabs - Now functional with tab switching
interface ProfileTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function ProfileTabs({ activeTab, onTabChange }: ProfileTabsProps) {
  const tabs = ['Profile', 'Activity', 'Films', 'Diary', 'Watchlist', 'Likes']
  
  return (
    <div className="movietracker-profile-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`movietracker-tab ${activeTab === tab ? 'active' : ''}`}
          style={{ 
            background: 'transparent', 
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

// Recent Likes Movie Grid - Exact match to HTML
export function RecentLikesGrid() {
  const movies = [
    { title: "Strange World", gradient: "linear-gradient(to bottom, #f87171, #dc2626)" },
    { title: "The Menu", gradient: "linear-gradient(to bottom, #2dd4bf, #059669)" },
    { title: "Mickey 17", gradient: "linear-gradient(to bottom, #fbbf24, #d97706)" },
    { title: "Dumb Money", gradient: "linear-gradient(to bottom, #fb923c, #dc2626)" },
  ]

  return (
    <div>
      <div className="movietracker-section-title">
        <Heart style={{ width: '16px', height: '16px' }} />
        Recent Likes
        <div style={{ marginLeft: 'auto' }}>
          <a href="#" style={{ 
            color: 'var(--movietracker-text-muted)', 
            fontSize: '14px',
            textDecoration: 'none',
            transition: 'color 0.2s ease'
          }}>ALL</a>
        </div>
      </div>
      <div className="movietracker-movie-grid">
        {movies.map((movie, index) => (
          <div key={index} className="movietracker-movie-poster" style={{ background: movie.gradient }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '8px',
              left: '8px',
              right: '8px',
              color: 'white',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              {movie.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Right Rail Container - Exact match to HTML
export function RightRail({ children }: { children: React.ReactNode }) {
  return (
    <div className="movietracker-sidebar">
      {children}
    </div>
  )
}

// Pro Promotion Card Component - Exact match to HTML
export function PromoCard() {
  return (
    <div className="movietracker-promo-card">
      <h3 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '8px' }}>NEED AN UPGRADE?</h3>
      <p style={{ fontSize: '14px', marginBottom: '16px', opacity: 0.9 }}>
        Profile stats, lifetime by favorite streaming services, watchlist alerts and no ads!
      </p>
      <button style={{
        backgroundColor: 'var(--movietracker-background)',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px',
        fontSize: '14px',
        fontWeight: '500',
        border: 'none',
        cursor: 'pointer'
      }}>
        GET PRO
      </button>
    </div>
  )
}

// Diary Card Component - Exact match to HTML
export function DiaryCard() {
  return (
    <div className="movietracker-sidebar-card">
      <div className="movietracker-section-title">
        <Calendar style={{ width: '16px', height: '16px' }} />
        Diary
        <div style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--movietracker-text-muted)' }}>1</div>
      </div>
      <div className="movietracker-diary-entry">
        <div className="movietracker-diary-date">
          <div style={{ fontSize: '12px', color: 'var(--movietracker-text-muted)' }}>30</div>
        </div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--movietracker-text-primary)' }}>Dumb Money</div>
        </div>
      </div>
    </div>
  )
}

// Ratings Histogram Component - Exact match to HTML
export function RatingsHistogram() {
  const ratings = [20, 40, 80, 60, 100] // Heights as percentages
  
  return (
    <div className="movietracker-sidebar-card">
      <div className="movietracker-section-title">
        <Star style={{ width: '16px', height: '16px' }} />
        Ratings
        <div style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--movietracker-text-muted)' }}>4</div>
      </div>
      <div className="movietracker-ratings-chart">
        {ratings.map((height, index) => (
          <div
            key={index}
            className="movietracker-rating-bar"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--movietracker-text-muted)' }}>
        <span>★</span>
        <span>★★★★★</span>
      </div>
    </div>
  )
}

// Activity List Component - Exact match to HTML
export function ActivityList() {
  const activities = [
    { user: "tyshaneoneill", action: "rated", movie: "Strange World", rating: "★★★", time: "2d" },
    { user: "tyshaneoneill", action: "liked", movie: "Strange World", time: "2d" },
    { user: "tyshaneoneill", action: "liked", movie: "F1", time: "2d" },
    { user: "tyshaneoneill", action: "rated", movie: "F1", rating: "★★★★★", time: "2d" },
  ]

  return (
    <div className="movietracker-sidebar-card">
      <div className="movietracker-section-title">
        <Activity style={{ width: '16px', height: '16px' }} />
        Activity
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {activities.map((activity, index) => (
          <div key={index} className="movietracker-activity-item">
            <div className="movietracker-activity-avatar">T</div>
            <div className="movietracker-activity-text">
              <strong style={{ color: 'var(--movietracker-text-primary)' }}>{activity.user}</strong> {activity.action} {activity.movie}
              {activity.rating && (
                <div className="movietracker-stars">{activity.rating}</div>
              )}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--movietracker-text-muted)' }}>{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}