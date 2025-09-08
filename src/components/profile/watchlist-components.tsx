"use client"

import { useState } from "react"

interface WatchlistFilm {
  id: number
  title: string
  year: number
  poster: string
  gradient: string
  dateAdded: string
}

interface WatchlistStats {
  wantToWatch: number
  addedThisYear: number
  totalPages: number
  totalRuntime: string
}

const watchlistFilms: WatchlistFilm[] = [
  {
    id: 1,
    title: "Killers of the Flower Moon",
    year: 2023,
    poster: "",
    gradient: "#dc2626 #991b1b",
    dateAdded: "2 weeks ago"
  },
  {
    id: 2,
    title: "Past Lives",
    year: 2023,
    poster: "",
    gradient: "#059669 #047857",
    dateAdded: "1 month ago"
  },
  {
    id: 3,
    title: "The Zone of Interest",
    year: 2023,
    poster: "",
    gradient: "#f59e0b #d97706",
    dateAdded: "3 weeks ago"
  },
  {
    id: 4,
    title: "Anatomy of a Fall",
    year: 2023,
    poster: "",
    gradient: "#7c3aed #5b21b6",
    dateAdded: "1 week ago"
  },
  {
    id: 5,
    title: "Poor Things",
    year: 2023,
    poster: "",
    gradient: "#1f2937 #111827",
    dateAdded: "2 months ago"
  },
  {
    id: 6,
    title: "The Holdovers",
    year: 2023,
    poster: "",
    gradient: "#ea580c #c2410c",
    dateAdded: "4 weeks ago"
  },
  {
    id: 7,
    title: "May December",
    year: 2023,
    poster: "",
    gradient: "#be123c #9f1239",
    dateAdded: "5 days ago"
  },
  {
    id: 8,
    title: "American Fiction",
    year: 2023,
    poster: "",
    gradient: "#065f46 #064e3b",
    dateAdded: "1 week ago"
  },
  {
    id: 9,
    title: "Asteroid City",
    year: 2023,
    poster: "",
    gradient: "#6366f1 #4f46e5",
    dateAdded: "3 days ago"
  },
  {
    id: 10,
    title: "The Color Purple",
    year: 2023,
    poster: "",
    gradient: "#0891b2 #0e7490",
    dateAdded: "1 month ago"
  },
  {
    id: 11,
    title: "Saltburn",
    year: 2023,
    poster: "",
    gradient: "#db2777 #be185d",
    dateAdded: "2 weeks ago"
  },
  {
    id: 12,
    title: "Priscilla",
    year: 2023,
    poster: "",
    gradient: "#a855f7 #9333ea",
    dateAdded: "6 days ago"
  }
]

const watchlistStats: WatchlistStats = {
  wantToWatch: 15,
  addedThisYear: 8,
  totalPages: 2,
  totalRuntime: "28h 45m"
}

export function WatchlistGrid() {
  return (
    <div className="watchlist-grid">
      {watchlistFilms.map((film) => (
        <div key={film.id} className="watchlist-poster">
          <div 
            style={{
              background: `linear-gradient(to bottom, ${film.gradient.split(' ')[0].replace('from-', '#')}, ${film.gradient.split(' ')[1].replace('to-', '#')})`,
              width: '100%',
              height: '100%',
              position: 'relative'
            }}
          >
            <div className="watchlist-badge">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div className="poster-overlay">
              <div className="film-info">
                <div className="film-title">{film.title}</div>
                <div className="film-year">{film.year}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function WatchlistSidebar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeDecades, setActiveDecades] = useState(new Set(["2020s"]))
  const [activeGenres, setActiveGenres] = useState(new Set(["Drama"]))
  const [viewType, setViewType] = useState("small")
  
  const toggleFilter = (set: Set<string>, setter: (set: Set<string>) => void, value: string) => {
    const newSet = new Set(set)
    if (newSet.has(value)) {
      newSet.delete(value)
    } else {
      newSet.add(value)
    }
    setter(newSet)
  }
  
  return (
    <aside className="sidebar">
      {/* Add Films */}
      <div className="sidebar-card">
        <h3 className="sidebar-title">Add Films</h3>
        <div className="add-films-section">
          <input 
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="add-film-btn">Add to Watchlist</button>
        </div>
      </div>

      {/* Filters */}
      <div className="sidebar-card">
        <h3 className="sidebar-title">Filters</h3>
        
        <div className="filter-group">
          <div className="filter-label">Decade</div>
          <div className="filter-options">
            {["2020s", "2010s", "2000s"].map((decade) => (
              <div 
                key={decade}
                className="filter-option"
                onClick={() => toggleFilter(activeDecades, setActiveDecades, decade)}
              >
                <div className={`filter-checkbox ${activeDecades.has(decade) ? 'checked' : ''}`}>
                  {activeDecades.has(decade) && (
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  )}
                </div>
                <span>{decade}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <div className="filter-label">Genre</div>
          <div className="filter-options">
            {["Drama", "Comedy", "Thriller"].map((genre) => (
              <div 
                key={genre}
                className="filter-option"
                onClick={() => toggleFilter(activeGenres, setActiveGenres, genre)}
              >
                <div className={`filter-checkbox ${activeGenres.has(genre) ? 'checked' : ''}`}>
                  {activeGenres.has(genre) && (
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  )}
                </div>
                <span>{genre}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View Options */}
      <div className="sidebar-card">
        <h3 className="sidebar-title">View</h3>
        
        <div className="view-options">
          {[{key: "small", label: "Small posters"}, {key: "large", label: "Large posters"}].map(({key, label}) => (
            <div 
              key={key}
              className={`view-option ${viewType === key ? 'active' : ''}`}
              onClick={() => setViewType(key)}
            >
              <div className={`radio-button ${viewType === key ? 'active' : ''}`}></div>
              <span>{label}</span>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '16px' }}>
          <div className="filter-label">Sort by</div>
          <select className="sort-select">
            <option>Date added (newest first)</option>
            <option>Date added (oldest first)</option>
            <option>Film title (A-Z)</option>
            <option>Film title (Z-A)</option>
            <option>Release date (newest first)</option>
            <option>Release date (oldest first)</option>
            <option>Popular</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="sidebar-card">
        <h3 className="sidebar-title">Watchlist Stats</h3>
        <div className="stats-grid">
          <div className="stat-row">
            <span className="stat-label">Want to watch</span>
            <span className="stat-value">15</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Added this year</span>
            <span className="stat-value">8</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">From 2023</span>
            <span className="stat-value">12</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Dramas</span>
            <span className="stat-value">9</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export function WatchlistPageLayout() {
  return (
    <div className="main-container">
      <main>
        <WatchlistGrid />
        
        <div className="load-more">
          <button className="load-more-btn">Load More Films</button>
        </div>
      </main>
      
      <WatchlistSidebar />
    </div>
  )
}