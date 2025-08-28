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
          <>
            <StatsOverview stats={stats} loading={loading} />
            <FavoriteFilms
              movies={favoriteMovies}
              loading={loading}
              onMovieClick={onMovieClick}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <RecentActivity
                  activities={recentActivity}
                  loading={loading}
                  onMovieClick={onMovieClick}
                />
              </div>
              
              <div>
                <section className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-300 uppercase tracking-wide">
                      RECENT LIKES
                    </h2>
                    {recentLikes.length > 0 && (
                      <button className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                        ALL →
                      </button>
                    )}
                  </div>
                  
                  <MovieGrid
                    movies={recentLikes}
                    columns={4}
                    showRating={false}
                    onMovieClick={onMovieClick}
                    loading={loading}
                    emptyMessage="No recent likes"
                    posterSize="sm"
                  />
                </section>
              </div>
            </div>
          </>
        )
      
      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-400">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} content coming soon...
            </p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <ProfileHeader user={user} />

        {/* Navigation Tabs */}
        <DashboardTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabs={tabs}
        />

        {/* Content */}
        <div className="space-y-8">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}