'use client'

import { useState } from 'react'
import { ProfileSection } from './profile-section'
import { TabNavigation } from './tab-navigation'
import { MainContent } from './main-content'
import { Sidebar } from './sidebar'

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

  const user = data?.user || mockUser
  const favoriteMovies = data?.favoriteMovies || []
  const recentActivity = data?.recentActivity || []
  const recentLikes = data?.recentLikes || []

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <ProfileSection user={user} />
        <TabNavigation />
        <div className="flex gap-8 mt-8">
          <MainContent 
            favoriteMovies={favoriteMovies}
            recentLikes={recentLikes}
            onMovieClick={onMovieClick}
          />
          <Sidebar 
            recentActivity={recentActivity}
            stats={data?.stats}
          />
        </div>
      </div>
    </div>
  )
}