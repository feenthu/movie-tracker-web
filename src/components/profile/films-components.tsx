"use client"

import { Check, ChevronRight } from "lucide-react"
import { useState } from "react"

// Interface for Film data
interface Film {
  id: number
  title: string
  year: number
  rating: number
  gradient: string
  poster?: string
}

// Films Grid Component
export function FilmsGrid() {
  const [films] = useState<Film[]>([
    {
      id: 1,
      title: "The Menu",
      year: 2022,
      rating: 4,
      gradient: "linear-gradient(to bottom, #dc2626, #991b1b)"
    },
    {
      id: 2,
      title: "Strange World", 
      year: 2022,
      rating: 5,
      gradient: "linear-gradient(to bottom, #059669, #047857)"
    },
    {
      id: 3,
      title: "Dumb Money",
      year: 2023,
      rating: 4,
      gradient: "linear-gradient(to bottom, #f59e0b, #d97706)"
    },
    {
      id: 4,
      title: "Mickey 17",
      year: 2024,
      rating: 5,
      gradient: "linear-gradient(to bottom, #7c3aed, #5b21b6)"
    },
    {
      id: 5,
      title: "Oppenheimer",
      year: 2023,
      rating: 5,
      gradient: "linear-gradient(to bottom, #1f2937, #111827)"
    },
    {
      id: 6,
      title: "Avatar: The Way of Water",
      year: 2022,
      rating: 3,
      gradient: "linear-gradient(to bottom, #ea580c, #c2410c)"
    },
    {
      id: 7,
      title: "Top Gun: Maverick",
      year: 2022,
      rating: 4,
      gradient: "linear-gradient(to bottom, #be123c, #9f1239)"
    },
    {
      id: 8,
      title: "Everything Everywhere All at Once",
      year: 2022,
      rating: 5,
      gradient: "linear-gradient(to bottom, #065f46, #064e3b)"
    },
    {
      id: 9,
      title: "Black Panther: Wakanda Forever",
      year: 2022,
      rating: 3,
      gradient: "linear-gradient(to bottom, #6366f1, #4f46e5)"
    },
    {
      id: 10,
      title: "The Batman",
      year: 2022,
      rating: 4,
      gradient: "linear-gradient(to bottom, #0891b2, #0e7490)"
    },
    {
      id: 11,
      title: "Spider-Man: No Way Home",
      year: 2021,
      rating: 4,
      gradient: "linear-gradient(to bottom, #db2777, #be185d)"
    },
    {
      id: 12,
      title: "Dune",
      year: 2021,
      rating: 5,
      gradient: "linear-gradient(to bottom, #a855f7, #9333ea)"
    },
  ])

  const generateStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating)
  }

  return (
    <main>

      {/* Films Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '16px',
        marginBottom: '32px'
      }}>
        {films.map((film) => (
          <div
            key={film.id}
            style={{
              aspectRatio: '2/3',
              borderRadius: '6px',
              overflow: 'hidden',
              position: 'relative',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              background: 'var(--movietracker-background-card)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)'
              const overlay = e.currentTarget.querySelector('.film-overlay') as HTMLElement
              if (overlay) overlay.style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = 'none'
              const overlay = e.currentTarget.querySelector('.film-overlay') as HTMLElement
              if (overlay) overlay.style.opacity = '0'
            }}
          >
            {/* Film Poster Background */}
            <div style={{
              background: film.gradient,
              width: '100%',
              height: '100%',
              position: 'relative'
            }}>
              {/* Rating Badge */}
              <div style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'var(--movietracker-accent-green)',
                padding: '2px 6px',
                borderRadius: '3px',
                fontSize: '10px',
                fontWeight: '600'
              }}>
                {generateStars(film.rating)}
              </div>

              {/* Hover Overlay */}
              <div 
                className="film-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '12px',
                  opacity: 0,
                  transition: 'opacity 0.2s ease'
                }}
              >
                <div style={{ color: 'white' }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    marginBottom: '2px',
                    lineHeight: '1.2'
                  }}>
                    {film.title}
                  </div>
                  <div style={{
                    fontSize: '10px',
                    opacity: 0.8
                  }}>
                    {film.year}
                  </div>
                </div>
              </div>
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
          Load More Films
        </button>
      </div>
    </main>
  )
}

// Films Sidebar Component
export function FilmsSidebar() {
  const [filters, setFilters] = useState({
    decades: { '2020s': true, '2010s': false, '2000s': false },
    genres: { 'Drama': true, 'Action': true, 'Comedy': false },
    ratings: { '5': true, '4': true, '3': false }
  })

  const [viewOption, setViewOption] = useState('small')
  const [sortOption, setSortOption] = useState('date-newest')

  const handleFilterChange = (category: string, item: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [item]: !prev[category as keyof typeof prev][item as keyof typeof prev[keyof typeof prev]]
      }
    }))
  }

  return (
    <aside style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
      {/* Filters */}
      <div className="movietracker-sidebar-card">
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: 'var(--movietracker-text-primary)',
          marginBottom: '16px'
        }}>
          Filters
        </h3>
        
        {/* Decade Filter */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{
            fontSize: '12px',
            color: 'var(--movietracker-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            Decade
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {Object.entries(filters.decades).map(([decade, checked]) => (
              <div
                key={decade}
                onClick={() => handleFilterChange('decades', decade)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  color: 'var(--movietracker-text-secondary)',
                  cursor: 'pointer',
                  padding: '4px 0',
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
                <span>{decade}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Genre Filter */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{
            fontSize: '12px',
            color: 'var(--movietracker-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            Genre
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {Object.entries(filters.genres).map(([genre, checked]) => (
              <div
                key={genre}
                onClick={() => handleFilterChange('genres', genre)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  color: 'var(--movietracker-text-secondary)',
                  cursor: 'pointer',
                  padding: '4px 0',
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
                <span>{genre}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div>
          <div style={{
            fontSize: '12px',
            color: 'var(--movietracker-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            Rating
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {Object.entries(filters.ratings).map(([rating, checked]) => (
              <div
                key={rating}
                onClick={() => handleFilterChange('ratings', rating)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  color: 'var(--movietracker-text-secondary)',
                  cursor: 'pointer',
                  padding: '4px 0',
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
                <span>{"★".repeat(parseInt(rating))}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View Options */}
      <div className="movietracker-sidebar-card">
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: 'var(--movietracker-text-primary)',
          marginBottom: '16px'
        }}>
          View
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          {[
            { key: 'small', label: 'Small posters' },
            { key: 'large', label: 'Large posters' }
          ].map((option) => (
            <div
              key={option.key}
              onClick={() => setViewOption(option.key)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: viewOption === option.key ? 'var(--movietracker-text-primary)' : 'var(--movietracker-text-secondary)',
                cursor: 'pointer',
                padding: '4px 0',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--movietracker-text-primary)'
              }}
              onMouseLeave={(e) => {
                if (viewOption !== option.key) {
                  e.currentTarget.style.color = 'var(--movietracker-text-secondary)'
                }
              }}
            >
              <div style={{
                width: '14px',
                height: '14px',
                border: '1px solid var(--movietracker-border)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                borderColor: viewOption === option.key ? 'var(--movietracker-accent-orange)' : 'var(--movietracker-border)'
              }}>
                {viewOption === option.key && (
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--movietracker-accent-orange)'
                  }}></div>
                )}
              </div>
              <span>{option.label}</span>
            </div>
          ))}
        </div>
        
        <div>
          <div style={{
            fontSize: '12px',
            color: 'var(--movietracker-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            Sort by
          </div>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={{
              backgroundColor: 'var(--movietracker-background-secondary)',
              border: '1px solid var(--movietracker-border)',
              color: 'var(--movietracker-text-primary)',
              padding: '8px 12px',
              borderRadius: '4px',
              fontSize: '14px',
              width: '100%',
              cursor: 'pointer'
            }}
          >
            <option value="date-newest">Date added (newest first)</option>
            <option value="date-oldest">Date added (oldest first)</option>
            <option value="title-az">Film title (A-Z)</option>
            <option value="title-za">Film title (Z-A)</option>
            <option value="release-newest">Release date (newest first)</option>
            <option value="release-oldest">Release date (oldest first)</option>
            <option value="rating-highest">Rating (highest first)</option>
            <option value="rating-lowest">Rating (lowest first)</option>
          </select>
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
          Stats
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { label: 'Total films', value: '42' },
            { label: 'This year', value: '18' },
            { label: 'Average rating', value: '3.8★' },
            { label: 'Highest rated', value: '5★' }
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

// Breadcrumb Component  
export function FilmsBreadcrumb() {
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
        <span style={{
          color: 'var(--movietracker-text-primary)',
          fontWeight: '500',
          fontSize: '14px'
        }}>
          Films
        </span>
      </div>
    </div>
  )
}

// Films Page Layout Component
export function FilmsPageLayout() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 280px',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '32px 24px'
    }}>
      <FilmsGrid />
      <FilmsSidebar />
    </div>
  )
}