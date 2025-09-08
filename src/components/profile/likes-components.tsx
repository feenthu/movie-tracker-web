"use client"

import { useState } from "react"

interface LikedFilm {
  id: number
  title: string
  year: number
  gradient: string
  rating: number
  likedDate: string
}

interface LikesStats {
  filmsLiked: number
  thisYear: number
  averageRating: number
  from2022: number
}

const likedFilms: LikedFilm[] = [
  {
    id: 1,
    title: "Everything Everywhere All at Once",
    year: 2022,
    gradient: "#dc2626 #991b1b",
    rating: 5,
    likedDate: "2 days ago"
  },
  {
    id: 2,
    title: "The Banshees of Inisherin",
    year: 2022,
    gradient: "#059669 #047857",
    rating: 4,
    likedDate: "1 week ago"
  },
  {
    id: 3,
    title: "Triangle of Sadness",
    year: 2022,
    gradient: "#f59e0b #d97706",
    rating: 4,
    likedDate: "2 weeks ago"
  },
  {
    id: 4,
    title: "Top Gun: Maverick",
    year: 2022,
    gradient: "#7c3aed #5b21b6",
    rating: 5,
    likedDate: "3 weeks ago"
  },
  {
    id: 5,
    title: "Nope",
    year: 2022,
    gradient: "#1f2937 #111827",
    rating: 3,
    likedDate: "1 month ago"
  },
  {
    id: 6,
    title: "RRR",
    year: 2022,
    gradient: "#ea580c #c2410c",
    rating: 4,
    likedDate: "1 month ago"
  },
  {
    id: 7,
    title: "The Batman",
    year: 2022,
    gradient: "#be123c #9f1239",
    rating: 4,
    likedDate: "2 months ago"
  },
  {
    id: 8,
    title: "Turning Red",
    year: 2022,
    gradient: "#065f46 #064e3b",
    rating: 3,
    likedDate: "2 months ago"
  }
]

const likesStats: LikesStats = {
  filmsLiked: 8,
  thisYear: 8,
  averageRating: 4.1,
  from2022: 8
}

const renderStars = (rating: number) => {
  return "★".repeat(rating)
}

export function LikesHeader() {
  const [activeTab, setActiveTab] = useState("Films")
  
  return (
    <div className="likes-header">
      <div className="likes-tabs">
        {[
          { key: "Films", count: 8 },
          { key: "Reviews", count: 0 },
          { key: "Lists", count: 0 }
        ].map(({ key, count }) => (
          <button
            key={key}
            className={`likes-tab ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {key}
            <span className="likes-tab-count">{count}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export function LikesControls() {
  const [viewType, setViewType] = useState("Small")
  const [sortBy, setSortBy] = useState("When Liked")
  
  return (
    <div className="controls-bar">
      <div className="view-controls">
        <div className="view-toggle">
          {["Small", "Large"].map((type) => (
            <button
              key={type}
              className={`view-btn ${viewType === type ? 'active' : ''}`}
              onClick={() => setViewType(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <span style={{ fontSize: '12px', color: 'var(--movietracker-text-muted)' }}>
          {likesStats.filmsLiked} films
        </span>
      </div>
      <select 
        className="sort-dropdown"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option>When Liked</option>
        <option>Film Title (A-Z)</option>
        <option>Film Title (Z-A)</option>
        <option>Release Date (Newest)</option>
        <option>Release Date (Oldest)</option>
        <option>Your Rating</option>
      </select>
    </div>
  )
}

export function LikesGrid() {
  return (
    <div className="likes-grid">
      {likedFilms.map((film) => (
        <div key={film.id} className="liked-film">
          <div 
            style={{
              background: `linear-gradient(to bottom, ${film.gradient.split(' ')[0]}, ${film.gradient.split(' ')[1]})`,
              width: '100%',
              height: '100%',
              position: 'relative'
            }}
          >
            <div className="like-badge">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <div className="film-overlay">
              <div className="film-title">{film.title}</div>
              <div className="film-year">{film.year}</div>
              <div className="film-rating">{renderStars(film.rating)}</div>
            </div>
          </div>
          <div className="film-info-below">
            <div className="film-rating-below">{renderStars(film.rating)}</div>
            <div className="liked-date">{film.likedDate}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function LikesSidebar() {
  const [activeDecades, setActiveDecades] = useState(new Set(["2020s"]))
  const [activeGenres, setActiveGenres] = useState(new Set<string>())
  const [activeRatings, setActiveRatings] = useState(new Set<string>())
  
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
            {["Drama", "Comedy", "Action"].map((genre) => (
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

        <div className="filter-group">
          <div className="filter-label">Rating</div>
          <div className="filter-options">
            {[
              { key: "5stars", label: "★★★★★ (5 stars)" },
              { key: "4stars", label: "★★★★ (4+ stars)" },
              { key: "3stars", label: "★★★ (3+ stars)" }
            ].map(({key, label}) => (
              <div 
                key={key}
                className="filter-option"
                onClick={() => toggleFilter(activeRatings, setActiveRatings, key)}
              >
                <div className={`filter-checkbox ${activeRatings.has(key) ? 'checked' : ''}`}>
                  {activeRatings.has(key) && (
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  )}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="sidebar-card">
        <h3 className="sidebar-title">Likes Stats</h3>
        <div className="stats-grid">
          <div className="stat-row">
            <span className="stat-label">Films liked</span>
            <span className="stat-value">{likesStats.filmsLiked}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">This year</span>
            <span className="stat-value">{likesStats.thisYear}</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Average rating</span>
            <span className="stat-value">{likesStats.averageRating} ★</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">From 2022</span>
            <span className="stat-value">{likesStats.from2022}</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export function LikesPageLayout() {
  return (
    <div className="main-container">
      <main>
        <LikesHeader />
        <LikesControls />
        <LikesGrid />
      </main>
      
      <LikesSidebar />
    </div>
  )
}