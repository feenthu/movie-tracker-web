'use client'

import { useState } from 'react'
import { Search, Filter, Menu } from 'lucide-react'

export function FilmsBrowseSection() {
  const [activeFilter, setActiveFilter] = useState('Popular')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState('2024')
  const [selectedGenre, setSelectedGenre] = useState('All Genres')
  const [selectedService, setSelectedService] = useState('All Services')

  return (
    <div style={{ marginBottom: '16px' }}>
      {/* Toolbar */}
      <div style={{
        background: 'var(--movietracker-background-card)',
        border: '1px solid var(--movietracker-border)',
        borderRadius: '8px',
        padding: '12px 16px',
        marginBottom: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          {/* Left Side - Quick Filters */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{
              fontSize: '12px',
              fontWeight: '500',
              color: 'var(--movietracker-text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Quick Browse:
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['Popular', 'New', 'Top', 'Trending'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    background: activeFilter === filter ? 'var(--movietracker-accent-orange)' : 'var(--movietracker-background-secondary)',
                    color: activeFilter === filter ? 'var(--movietracker-background)' : 'var(--movietracker-text-secondary)',
                    fontSize: '12px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== filter) {
                      e.currentTarget.style.background = 'var(--movietracker-background)'
                      e.currentTarget.style.color = 'var(--movietracker-text-primary)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== filter) {
                      e.currentTarget.style.background = 'var(--movietracker-background-secondary)'
                      e.currentTarget.style.color = 'var(--movietracker-text-secondary)'
                    }
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Side - Dropdowns */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                background: 'var(--movietracker-background)',
                border: '1px solid var(--movietracker-border)',
                borderRadius: '4px',
                fontSize: '12px',
                padding: '6px 8px',
                color: 'var(--movietracker-text-primary)',
                cursor: 'pointer',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--movietracker-accent-orange)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--movietracker-border)'}
            >
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>All Years</option>
            </select>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              style={{
                background: 'var(--movietracker-background)',
                border: '1px solid var(--movietracker-border)',
                borderRadius: '4px',
                fontSize: '12px',
                padding: '6px 8px',
                color: 'var(--movietracker-text-primary)',
                cursor: 'pointer',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--movietracker-accent-orange)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--movietracker-border)'}
            >
              <option>All Genres</option>
              <option>Action</option>
              <option>Comedy</option>
              <option>Drama</option>
              <option>Horror</option>
              <option>Sci-Fi</option>
            </select>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              style={{
                background: 'var(--movietracker-background)',
                border: '1px solid var(--movietracker-border)',
                borderRadius: '4px',
                fontSize: '12px',
                padding: '6px 8px',
                color: 'var(--movietracker-text-primary)',
                cursor: 'pointer',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--movietracker-accent-orange)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--movietracker-border)'}
            >
              <option>All Services</option>
              <option>Netflix</option>
              <option>Prime Video</option>
              <option>Disney+</option>
              <option>HBO Max</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      <div style={{
        background: 'var(--movietracker-background-card)',
        border: '1px solid var(--movietracker-border)',
        borderRadius: '8px',
        padding: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            flex: 1,
            position: 'relative'
          }}>
            <input
              type="text"
              placeholder="Search films, directors, actors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--movietracker-background)',
                border: '1px solid var(--movietracker-border)',
                borderRadius: '8px',
                padding: '10px 16px 10px 40px',
                fontSize: '14px',
                color: 'var(--movietracker-text-primary)',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--movietracker-accent-orange)'
                e.target.style.boxShadow = '0 0 0 3px rgba(247, 127, 0, 0.1)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--movietracker-border)'
                e.target.style.boxShadow = 'none'
              }}
            />
            <Search 
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '16px',
                height: '16px',
                color: 'var(--movietracker-text-muted)'
              }}
            />
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <button 
              style={{
                background: 'var(--movietracker-background-secondary)',
                color: 'var(--movietracker-text-secondary)',
                padding: '8px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--movietracker-background)'
                e.currentTarget.style.color = 'var(--movietracker-text-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--movietracker-background-secondary)'
                e.currentTarget.style.color = 'var(--movietracker-text-secondary)'
              }}
            >
              <Filter style={{ width: '16px', height: '16px' }} />
            </button>
            <button 
              style={{
                background: 'var(--movietracker-background-secondary)',
                color: 'var(--movietracker-text-secondary)',
                padding: '8px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--movietracker-background)'
                e.currentTarget.style.color = 'var(--movietracker-text-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--movietracker-background-secondary)'
                e.currentTarget.style.color = 'var(--movietracker-text-secondary)'
              }}
            >
              <Menu style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}