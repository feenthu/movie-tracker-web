"use client"

import { Check, User } from "lucide-react"
import { useState } from "react"

// Activity Sidebar Component
export function ActivitySidebar() {
  const [activeTab, setActiveTab] = useState("You")
  const [filters, setFilters] = useState({
    watches: true,
    likes: true,
    reviews: true,
    lists: true,
    ratings: true,
  })

  const handleFilterChange = (filter: string) => {
    setFilters(prev => ({
      ...prev,
      [filter]: !prev[filter as keyof typeof prev]
    }))
  }

  return (
    <aside style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
      {/* Activity Filters */}
      <div className="movietracker-sidebar-card">
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: 'var(--movietracker-text-primary)',
          marginBottom: '16px'
        }}>Activity</h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {['Following', 'You', 'Popular'].map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                color: activeTab === tab ? 'var(--movietracker-text-primary)' : 'var(--movietracker-text-secondary)',
                backgroundColor: activeTab === tab ? 'var(--movietracker-background-secondary)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '14px'
              }}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* Filter Options */}
      <div className="movietracker-sidebar-card">
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: 'var(--movietracker-text-primary)',
          marginBottom: '16px'
        }}>Show</h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {[
            { key: 'watches', label: 'Watches' },
            { key: 'likes', label: 'Likes' },
            { key: 'reviews', label: 'Reviews' },
            { key: 'lists', label: 'Lists' },
            { key: 'ratings', label: 'Ratings' },
          ].map((option) => (
            <div
              key={option.key}
              onClick={() => handleFilterChange(option.key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: 'var(--movietracker-text-secondary)',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '16px',
                height: '16px',
                border: '1px solid var(--movietracker-border)',
                borderRadius: '3px',
                backgroundColor: filters[option.key as keyof typeof filters] 
                  ? 'var(--movietracker-accent-orange)' 
                  : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {filters[option.key as keyof typeof filters] && (
                  <Check style={{ width: '10px', height: '10px', color: 'white' }} />
                )}
              </div>
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="movietracker-sidebar-card">
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: 'var(--movietracker-text-primary)',
          marginBottom: '16px'
        }}>Your Stats</h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {[
            { label: 'Films watched', value: '42' },
            { label: 'Lists created', value: '8' },
            { label: 'Likes given', value: '89' },
            { label: 'Reviews written', value: '15' },
          ].map((stat, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '14px'
            }}>
              <span style={{ color: 'var(--movietracker-text-secondary)' }}>{stat.label}</span>
              <span style={{ 
                color: 'var(--movietracker-text-primary)', 
                fontWeight: '600' 
              }}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

// Activity Feed Component
export function ActivityFeed() {
  const activities = [
    {
      id: 1,
      user: "tyshaneoneill",
      action: "watched",
      movie: "The Menu",
      timestamp: "3 hours ago",
      gradient: "linear-gradient(to bottom, #dc2626, #991b1b)"
    },
    {
      id: 2,
      user: "tyshaneoneill", 
      action: "liked",
      movie: "Strange World",
      timestamp: "1 day ago",
      gradient: "linear-gradient(to bottom, #059669, #047857)"
    },
    {
      id: 3,
      user: "tyshaneoneill",
      action: "rated", 
      movie: "Dumb Money",
      rating: "★★★★☆",
      timestamp: "2 days ago",
      gradient: "linear-gradient(to bottom, #f59e0b, #d97706)"
    },
    {
      id: 4,
      user: "tyshaneoneill",
      action: "added",
      movie: "Mickey 17",
      detail: "to watchlist",
      timestamp: "3 days ago", 
      gradient: "linear-gradient(to bottom, #7c3aed, #5b21b6)"
    },
    {
      id: 5,
      user: "tyshaneoneill",
      action: "reviewed",
      movie: "Oppenheimer",
      rating: "★★★★★",
      timestamp: "1 week ago",
      gradient: "linear-gradient(to bottom, #1f2937, #111827)"
    },
  ]

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: '600',
        color: 'var(--movietracker-text-primary)',
        marginBottom: '8px'
      }}>Recent Activity</h1>

      {activities.map((activity) => (
        <div
          key={activity.id}
          style={{
            backgroundColor: 'var(--movietracker-background-card)',
            borderRadius: '8px',
            padding: '16px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
            transition: 'background-color 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--movietracker-background-secondary)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--movietracker-background-card)'
          }}
        >
          {/* Avatar */}
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--movietracker-accent-orange), var(--movietracker-accent-green))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: '600',
            color: 'white',
            flexShrink: 0
          }}>
            T
          </div>

          {/* Content */}
          <div style={{
            flex: 1,
            display: 'flex',
            gap: '12px'
          }}>
            {/* Text Content */}
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '14px',
                color: 'var(--movietracker-text-secondary)',
                marginBottom: '4px'
              }}>
                <strong style={{ color: 'var(--movietracker-text-primary)' }}>
                  {activity.user}
                </strong>{' '}
                {activity.action}{' '}
                <span style={{ 
                  color: 'var(--movietracker-text-primary)', 
                  fontWeight: '500' 
                }}>
                  {activity.movie}
                </span>
                {activity.detail && ` ${activity.detail}`}
              </div>
              
              {activity.rating && (
                <div style={{
                  color: 'var(--movietracker-accent-green)',
                  fontSize: '14px',
                  marginTop: '2px'
                }}>
                  {activity.rating}
                </div>
              )}
              
              <div style={{
                fontSize: '12px',
                color: 'var(--movietracker-text-muted)'
              }}>
                {activity.timestamp}
              </div>
            </div>

            {/* Movie Poster */}
            <div style={{
              width: '60px',
              height: '90px',
              borderRadius: '4px',
              overflow: 'hidden',
              flexShrink: 0,
              position: 'relative',
              background: activity.gradient
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
              }}></div>
            </div>
          </div>
        </div>
      ))}

      {/* Load More Button */}
      <button style={{
        backgroundColor: 'var(--movietracker-background-card)',
        border: '1px solid var(--movietracker-border)',
        color: 'var(--movietracker-text-primary)',
        padding: '12px 24px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'all 0.2s ease',
        marginTop: '16px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--movietracker-background-secondary)'
        e.currentTarget.style.borderColor = 'var(--movietracker-text-muted)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--movietracker-background-card)'
        e.currentTarget.style.borderColor = 'var(--movietracker-border)'
      }}>
        Load More Activities
      </button>
    </main>
  )
}

// Activity Page Layout Component
export function ActivityPageLayout() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '24px'
    }}>
      <ActivitySidebar />
      <ActivityFeed />
    </div>
  )
}