'use client'

import { useState } from 'react'
import { ProfileHeader } from './profile-header'
import { DashboardTabs } from './dashboard-tabs'
import { StatsOverview } from './stats-overview'
import { FavoriteFilms } from './favorite-films'
import { RecentActivity } from './recent-activity'
import { MovieGrid } from './movie-grid'

interface User {
  id: string
  username: string
  avatar?: string
  stats: {
    moviesWatched: number
    following: number
    followers: number
  }
}

interface Movie {
  id: string
  title: string
  posterPath?: string
  userRating?: number
  year?: number
}

interface Activity {
  id: string
  type: 'watched' | 'rated' | 'added_to_list' | 'favorited'
  movie: Movie
  rating?: number
  timestamp: Date
}

interface DashboardData {
  user: User
  favoriteMovies: Movie[]
  recentActivity: Activity[]
  recentLikes: Movie[]
  stats: {
    moviesWatched: number
    moviesInWatchlist: number
    favoriteMovies: number
    averageRating: number
    thisMonthActivity: number
  }
}

interface DashboardLayoutProps {
  data?: DashboardData
  loading?: boolean
  onMovieClick?: (movie: Movie) => void
}

const tabs = [
  { id: 'profile', label: 'Profile' },
  { id: 'activity', label: 'Activity' },
  { id: 'films', label: 'Films' },
  { id: 'diary', label: 'Diary' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'watchlist', label: 'Watchlist' },
  { id: 'lists', label: 'Lists' },
  { id: 'likes', label: 'Likes' },
  { id: 'tags', label: 'Tags' },
  { id: 'network', label: 'Network' }
]

export function DashboardLayout({ 
  data, 
  loading = false, 
  onMovieClick 
}: DashboardLayoutProps) {
  const [activeTab, setActiveTab] = useState('profile')

  // Mock user data for loading state
  const mockUser: User = {
    id: '1',
    username: 'Loading...',
    stats: {
      moviesWatched: 0,
      following: 0,
      followers: 0
    }
  }

  const mockStats = {
    moviesWatched: 0,
    moviesInWatchlist: 0,
    favoriteMovies: 0,
    averageRating: 0,
    thisMonthActivity: 0
  }

  const user = data?.user || mockUser
  const stats = data?.stats || mockStats
  const favoriteMovies = data?.favoriteMovies || []
  const recentActivity = data?.recentActivity || []
  const recentLikes = data?.recentLikes || []

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-12">
            {/* Favorite Films - Hero Section */}
            <section className="">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-sm font-medium text-letterboxd-text-muted uppercase tracking-widest mb-1">
                    FAVORITE FILMS
                  </h2>
                  {favoriteMovies.length === 0 && (
                    <p className="text-letterboxd-text-secondary text-sm">
                      Don't forget to select your favorite films!
                    </p>
                  )}
                </div>
                {favoriteMovies.length > 0 && (
                  <button className="text-sm text-letterboxd-text-secondary hover:text-letterboxd-accent transition-colors font-medium">
                    ALL
                  </button>
                )}
              </div>
              
              {favoriteMovies.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {favoriteMovies.slice(0, 6).map((movie) => (
                    <div key={movie.id} className="group cursor-pointer" onClick={() => onMovieClick?.(movie)}>
                      <div className="aspect-[2/3] bg-letterboxd-card rounded-md overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                        {movie.posterPath ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w342${movie.posterPath}`}
                            alt={movie.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-letterboxd-text-muted text-xs text-center p-2">
                            {movie.title}
                          </div>
                        )}
                        {movie.userRating && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-2 left-2">
                              <div className="flex items-center space-x-1 text-letterboxd-orange">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className={`w-3 h-3 fill-current ${
                                    i < movie.userRating! ? 'text-letterboxd-orange' : 'text-gray-600'
                                  }`} viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border-2 border-dashed border-letterboxd-border rounded-lg p-8 text-center">
                  <p className="text-letterboxd-text-muted">No favorite films selected yet</p>
                </div>
              )}
            </section>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Recent Likes */}
              <div className="lg:col-span-8">
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-medium text-letterboxd-text-muted uppercase tracking-widest">
                      RECENT LIKES
                    </h2>
                    <button className="text-sm text-letterboxd-text-secondary hover:text-letterboxd-accent transition-colors font-medium flex items-center space-x-1">
                      <span>♥ ALL</span>
                    </button>
                  </div>
                  
                  {recentLikes.length > 0 ? (
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                      {recentLikes.slice(0, 8).map((movie) => (
                        <div key={movie.id} className="group cursor-pointer" onClick={() => onMovieClick?.(movie)}>
                          <div className="aspect-[2/3] bg-letterboxd-card rounded-sm overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                            {movie.posterPath ? (
                              <img
                                src={`https://image.tmdb.org/t/p/w154${movie.posterPath}`}
                                alt={movie.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-letterboxd-text-muted text-xs text-center p-1">
                                {movie.title}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-letterboxd-text-muted">No recent likes</p>
                    </div>
                  )}
                </section>
              </div>

              {/* Right Column - Stats & Activity */}
              <div className="lg:col-span-4 space-y-8">
                {/* Compact Stats */}
                <section>
                  <div className="bg-letterboxd-card rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-letterboxd-text-primary">{stats.moviesWatched}</div>
                        <div className="text-xs text-letterboxd-text-muted uppercase tracking-wide">Films</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-letterboxd-text-primary">{stats.moviesInWatchlist}</div>
                        <div className="text-xs text-letterboxd-text-muted uppercase tracking-wide">Watchlist</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-letterboxd-text-primary">{stats.averageRating.toFixed(1)}</div>
                        <div className="text-xs text-letterboxd-text-muted uppercase tracking-wide">Avg Rating</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-letterboxd-text-primary">{stats.thisMonthActivity}</div>
                        <div className="text-xs text-letterboxd-text-muted uppercase tracking-wide">This Month</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Recent Activity */}
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-medium text-letterboxd-text-muted uppercase tracking-widest">
                      DIARY
                    </h2>
                  </div>
                  
                  {recentActivity.length > 0 ? (
                    <div className="space-y-3">
                      {recentActivity.slice(0, 3).map((activity) => (
                        <div key={activity.id} className="bg-letterboxd-card rounded-lg p-3 flex items-center space-x-3">
                          <div className="text-xs text-letterboxd-text-muted bg-letterboxd-darker px-2 py-1 rounded font-mono">
                            {activity.timestamp.getDate().toString().padStart(2, '0')}
                            <div className="text-[10px] opacity-75">
                              {activity.timestamp.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                            </div>
                          </div>
                          <div className="w-8 h-12 flex-shrink-0 cursor-pointer" onClick={() => onMovieClick?.(activity.movie)}>
                            {activity.movie.posterPath ? (
                              <img
                                src={`https://image.tmdb.org/t/p/w92${activity.movie.posterPath}`}
                                alt={activity.movie.title}
                                className="w-full h-full object-cover rounded-sm"
                              />
                            ) : (
                              <div className="w-full h-full bg-letterboxd-darker rounded-sm flex items-center justify-center">
                                <span className="text-[8px] text-letterboxd-text-muted">?</span>
                              </div>
                            )}
                          </div>
                          <div className="flex-grow min-w-0">
                            <button 
                              onClick={() => onMovieClick?.(activity.movie)}
                              className="font-medium text-letterboxd-text-primary hover:text-letterboxd-accent transition-colors text-sm block truncate w-full text-left"
                            >
                              {activity.movie.title}
                            </button>
                            {activity.rating && (
                              <div className="flex items-center space-x-1 mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} className={`w-2 h-2 fill-current ${
                                    i < activity.rating! ? 'text-letterboxd-orange' : 'text-letterboxd-border'
                                  }`} viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-letterboxd-text-muted text-sm">No recent activity</p>
                    </div>
                  )}
                </section>
              </div>
            </div>
          </div>
        )
      
      default:
        return (
          <div className="text-center py-12">
            <p className="text-letterboxd-text-secondary">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} content coming soon...
            </p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-letterboxd-dark-bg text-letterboxd-text-primary">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Profile Header */}
        <ProfileHeader user={user} />

        {/* Navigation Tabs */}
        <DashboardTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabs={tabs}
        />

        {/* Content */}
        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  )
}