'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ProfileHeader } from './profile-header'
import { DashboardTabs } from './dashboard-tabs'
import { Sidebar } from './sidebar'
import { Heart, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

function ProfileSection({ user }: { user: User }) {
  return (
    <div className="flex items-center justify-between py-8">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-slate-600 flex items-center justify-center text-2xl">
          👤
        </div>

        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-white">{user.username}</h1>
          <Button 
            variant="outline" 
            className="border-slate-600 text-gray-300 hover:bg-slate-700 bg-transparent"
          >
            EDIT PROFILE
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-400 hover:text-white"
          >
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex gap-12">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">{user.stats.moviesWatched}</div>
          <div className="text-sm text-gray-400 uppercase tracking-wide">Films</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">{user.stats.following}</div>
          <div className="text-sm text-gray-400 uppercase tracking-wide">Following</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">{user.stats.followers}</div>
          <div className="text-sm text-gray-400 uppercase tracking-wide">Followers</div>
        </div>
      </div>
    </div>
  )
}

function MainContent({ 
  favoriteMovies, 
  recentLikes, 
  onMovieClick 
}: { 
  favoriteMovies: Movie[]
  recentLikes: Movie[]
  onMovieClick?: (movie: Movie) => void 
}) {
  return (
    <div className="flex-1">
      {/* Favorite Films Section */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-300 mb-4 uppercase tracking-wide">
          Favorite Films
        </h2>
        {favoriteMovies.length === 0 ? (
          <p className="text-gray-400">Don&apos;t forget to select your favorite films!</p>
        ) : (
          <div className="flex gap-4">
            {favoriteMovies.slice(0, 4).map((movie) => (
              <div key={movie.id} className="relative group cursor-pointer" onClick={() => onMovieClick?.(movie)}>
                <div className="w-32 h-48 relative rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                  {movie.posterPath ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w342${movie.posterPath}`}
                      alt={movie.title}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-600 flex items-center justify-center text-xs text-gray-300 text-center p-2">
                      {movie.title}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Recent Likes Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-300 uppercase tracking-wide">
            Recent Likes
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-white cursor-pointer">
            <Heart className="h-4 w-4" />
            <span>ALL</span>
          </div>
        </div>

        <div className="flex gap-4">
          {recentLikes.slice(0, 4).map((movie) => (
            <div key={movie.id} className="relative group cursor-pointer" onClick={() => onMovieClick?.(movie)}>
              <div className="w-32 h-48 relative rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                {movie.posterPath ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w342${movie.posterPath}`}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-600 flex items-center justify-center text-xs text-gray-300 text-center p-2">
                    {movie.title}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
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

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
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
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <ProfileSection user={user} />
        
        {/* Tab Navigation */}
        <DashboardTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabs={tabs}
        />

        {/* Content */}
        {renderContent()}
      </div>
    </div>
  )
}