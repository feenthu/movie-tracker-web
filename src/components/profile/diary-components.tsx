"use client"

import { Check, ChevronRight, Heart, RotateCw } from "lucide-react"
import { useState } from "react"

// Interface for Diary Entry data
interface DiaryEntry {
  id: number
  date: {
    day: number
    month: string
    year: number
    fullDate: string
  }
  film: {
    title: string
    rating: number
    gradient: string
  }
  review?: string
  isRewatch?: boolean
  likes: number
  specialNote?: string
}

// Interface for month sections
interface MonthSection {
  month: string
  year: number
  entries: DiaryEntry[]
}

// Diary Timeline Component
export function DiaryTimeline() {
  const [diaryData] = useState<MonthSection[]>([
    {
      month: "January",
      year: 2024,
      entries: [
        {
          id: 1,
          date: { day: 30, month: "JAN", year: 2024, fullDate: "2024-01-30" },
          film: {
            title: "The Menu",
            rating: 4,
            gradient: "linear-gradient(to bottom, #dc2626, #991b1b)"
          },
          review: "A deliciously twisted satire that serves up dark humor and social commentary with equal precision. Ralph Fiennes is absolutely magnetic as the obsessive chef, and the film's escalating tension keeps you on the edge throughout. The way it skewers both pretentious fine dining culture and entitled wealth is masterful.",
          likes: 5
        },
        {
          id: 2,
          date: { day: 25, month: "JAN", year: 2024, fullDate: "2024-01-25" },
          film: {
            title: "Strange World",
            rating: 5,
            gradient: "linear-gradient(to bottom, #059669, #047857)"
          },
          review: "Disney's most adventurous film in years! The world-building is absolutely stunning and the environmental themes are handled with surprising nuance. Great family dynamics too.",
          likes: 12
        },
        {
          id: 3,
          date: { day: 18, month: "JAN", year: 2024, fullDate: "2024-01-18" },
          film: {
            title: "Dumb Money",
            rating: 4,
            gradient: "linear-gradient(to bottom, #f59e0b, #d97706)"
          },
          review: "A surprisingly engaging take on the GameStop saga. Paul Dano brings his usual intensity, and the ensemble cast makes the complex financial story accessible and entertaining.",
          isRewatch: true,
          likes: 3
        }
      ]
    },
    {
      month: "December",
      year: 2023,
      entries: [
        {
          id: 4,
          date: { day: 15, month: "DEC", year: 2023, fullDate: "2023-12-15" },
          film: {
            title: "Oppenheimer",
            rating: 5,
            gradient: "linear-gradient(to bottom, #1f2937, #111827)"
          },
          review: "Nolan's masterpiece. A haunting and complex portrayal of one of history's most consequential figures. Cillian Murphy delivers a career-defining performance, and the film's exploration of moral responsibility in the atomic age is both timely and timeless.",
          likes: 28,
          specialNote: "IMAX screening"
        },
        {
          id: 5,
          date: { day: 8, month: "DEC", year: 2023, fullDate: "2023-12-08" },
          film: {
            title: "Mickey 17",
            rating: 5,
            gradient: "linear-gradient(to bottom, #7c3aed, #5b21b6)"
          },
          review: "Bong Joon-ho does it again! A brilliant blend of sci-fi concepts and dark comedy. Robert Pattinson is fantastic in multiple roles.",
          likes: 15
        }
      ]
    }
  ])

  const generateStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating)
  }

  return (
    <main>

      {/* Diary Timeline */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
        {diaryData.map((monthSection, sectionIndex) => (
          <div key={sectionIndex} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {/* Month Header */}
            <h2 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: 'var(--movietracker-text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              paddingBottom: '8px',
              borderBottom: '1px solid var(--movietracker-border)'
            }}>
              {monthSection.month} {monthSection.year}
            </h2>

            {/* Diary Entries */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {monthSection.entries.map((entry) => (
                <div
                  key={entry.id}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '16px',
                    backgroundColor: 'var(--movietracker-background-card)',
                    borderRadius: '8px',
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
                  {/* Date Block */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'var(--movietracker-background-secondary)',
                    padding: '12px 8px',
                    borderRadius: '6px',
                    minWidth: '60px',
                    textAlign: 'center'
                  }}>
                    <div style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: 'var(--movietracker-text-primary)',
                      lineHeight: 1
                    }}>
                      {entry.date.day}
                    </div>
                    <div style={{
                      fontSize: '10px',
                      color: 'var(--movietracker-text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginTop: '2px'
                    }}>
                      {entry.date.month}
                    </div>
                  </div>

                  {/* Movie Poster */}
                  <div
                    style={{
                      width: '60px',
                      height: '90px',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease',
                      background: entry.film.gradient
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
                    }}></div>
                  </div>

                  {/* Content */}
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    {/* Film Title */}
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: 'var(--movietracker-text-primary)',
                      marginBottom: '4px'
                    }}>
                      {entry.film.title}
                    </h3>

                    {/* Rating */}
                    <div style={{
                      color: 'var(--movietracker-accent-green)',
                      fontSize: '14px',
                      marginBottom: '8px'
                    }}>
                      {generateStars(entry.film.rating)}
                    </div>

                    {/* Review */}
                    {entry.review && (
                      <p style={{
                        color: 'var(--movietracker-text-secondary)',
                        fontSize: '14px',
                        lineHeight: '1.4'
                      }}>
                        {entry.review}
                      </p>
                    )}

                    {/* Meta Information */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginTop: '8px',
                      fontSize: '12px',
                      color: 'var(--movietracker-text-muted)'
                    }}>
                      {entry.isRewatch && (
                        <>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            <RotateCw style={{ width: '12px', height: '12px' }} />
                            <span>Rewatch</span>
                          </div>
                          <span>•</span>
                        </>
                      )}
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <Heart style={{ width: '12px', height: '12px' }} />
                        <span>{entry.likes} likes</span>
                      </div>

                      {entry.specialNote && (
                        <>
                          <span>•</span>
                          <span>{entry.specialNote}</span>
                        </>
                      )}

                      {!entry.isRewatch && !entry.specialNote && (
                        <>
                          <span>•</span>
                          <span>First watch</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <button style={{
          backgroundColor: 'var(--movietracker-background-card)',
          border: '1px solid var(--movietracker-border)',
          color: 'var(--movietracker-text-primary)',
          padding: '12px 32px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '500',
          transition: 'all 0.2s ease',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--movietracker-background-secondary)'
          e.currentTarget.style.borderColor = 'var(--movietracker-text-muted)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--movietracker-background-card)'
          e.currentTarget.style.borderColor = 'var(--movietracker-border)'
        }}>
          Load More Entries
        </button>
      </div>
    </main>
  )
}

// Diary Sidebar Component
export function DiarySidebar() {
  const [activeYear, setActiveYear] = useState("2024")
  const [monthFilters, setMonthFilters] = useState({
    "January": true,
    "February": true,
    "March": false,
    "April": false,
    "May": false,
    "June": false,
    "July": false,
    "August": false,
    "September": false,
    "October": false,
    "November": false,
    "December": false
  })

  const yearData = [
    { year: "2024", count: 18 },
    { year: "2023", count: 24 },
    { year: "2022", count: 15 },
    { year: "2021", count: 8 }
  ]

  const handleMonthToggle = (month: string) => {
    setMonthFilters(prev => ({
      ...prev,
      [month]: !prev[month as keyof typeof prev]
    }))
  }

  return (
    <aside style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
      {/* Year Filters */}
      <div className="movietracker-sidebar-card">
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: 'var(--movietracker-text-primary)',
          marginBottom: '16px'
        }}>
          Year
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {yearData.map((yearItem) => (
            <div
              key={yearItem.year}
              onClick={() => setActiveYear(yearItem.year)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '14px',
                backgroundColor: activeYear === yearItem.year 
                  ? 'var(--movietracker-background-secondary)' 
                  : 'transparent',
                color: activeYear === yearItem.year 
                  ? 'var(--movietracker-text-primary)' 
                  : 'var(--movietracker-text-secondary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--movietracker-background-secondary)'
                e.currentTarget.style.color = 'var(--movietracker-text-primary)'
              }}
              onMouseLeave={(e) => {
                if (activeYear !== yearItem.year) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'var(--movietracker-text-secondary)'
                }
              }}
            >
              <span>{yearItem.year}</span>
              <span style={{
                fontSize: '12px',
                color: 'var(--movietracker-text-muted)'
              }}>
                {yearItem.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Month Filters */}
      <div className="movietracker-sidebar-card">
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: 'var(--movietracker-text-primary)',
          marginBottom: '16px'
        }}>
          Month
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}>
          {Object.entries(monthFilters).map(([month, checked]) => (
            <div
              key={month}
              onClick={() => handleMonthToggle(month)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 0',
                fontSize: '14px',
                color: 'var(--movietracker-text-secondary)',
                cursor: 'pointer',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--movietracker-text-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--movietracker-text-secondary)'
              }}
            >
              <div style={{
                width: '14px',
                height: '14px',
                border: '1px solid var(--movietracker-border)',
                borderRadius: '3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                backgroundColor: checked ? 'var(--movietracker-accent-orange)' : 'transparent',
                borderColor: checked ? 'var(--movietracker-accent-orange)' : 'var(--movietracker-border)'
              }}>
                {checked && (
                  <Check style={{ width: '8px', height: '8px', color: 'white' }} />
                )}
              </div>
              <span>{month}</span>
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
        }}>
          Diary Stats
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { label: 'Total entries', value: '42' },
            { label: 'This year', value: '18' },
            { label: 'Average rating', value: '3.8★' },
            { label: 'Rewatches', value: '5' },
            { label: 'Reviews written', value: '15' }
          ].map((stat, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ 
                color: 'var(--movietracker-text-secondary)', 
                fontSize: '14px' 
              }}>{stat.label}</span>
              <span style={{ 
                color: 'var(--movietracker-text-primary)', 
                fontWeight: '600',
                fontSize: '14px'
              }}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

// Diary Breadcrumb Component  
export function DiaryBreadcrumb() {
  return (
    <div style={{
      backgroundColor: 'var(--movietracker-background)',
      padding: '16px 0',
      borderBottom: '1px solid var(--movietracker-border)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <a href="#" style={{
          color: 'var(--movietracker-text-secondary)',
          textDecoration: 'none',
          fontSize: '14px',
          transition: 'color 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--movietracker-text-primary)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--movietracker-text-secondary)'
        }}>
          tyshaneoneill
        </a>
        <ChevronRight style={{ 
          width: '16px', 
          height: '16px', 
          color: 'var(--movietracker-text-muted)' 
        }} />
        <a href="#" style={{
          color: 'var(--movietracker-text-secondary)',
          textDecoration: 'none',
          fontSize: '14px',
          transition: 'color 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--movietracker-text-primary)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--movietracker-text-secondary)'
        }}>
          Films
        </a>
        <ChevronRight style={{ 
          width: '16px', 
          height: '16px', 
          color: 'var(--movietracker-text-muted)' 
        }} />
        <span style={{
          color: 'var(--movietracker-text-primary)',
          fontWeight: '500',
          fontSize: '14px'
        }}>
          Diary
        </span>
      </div>
    </div>
  )
}

// Diary Page Layout Component
export function DiaryPageLayout() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 280px',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 24px'
    }}>
      <DiaryTimeline />
      <DiarySidebar />
    </div>
  )
}