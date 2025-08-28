'use client'

import { useAuth } from '@/providers/auth-provider'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'

// Mock data - this would normally come from GraphQL queries
const mockMovies = [
  {
    id: '1',
    title: 'Dumb Money',
    posterPath: '/rFS6KX7EM6bcuGbNjLJpVVBRsCl.jpg',
    userRating: 4,
    year: 2023
  },
  {
    id: '2', 
    title: 'Mickey 17',
    posterPath: '/7bn2fLq7YfOIxzFDjuuGXMd5wbQ.jpg',
    userRating: 5,
    year: 2025
  }
]

const mockActivity = [
  {
    id: '1',
    type: 'watched' as const,
    movie: mockMovies[0],
    rating: 4,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 day ago
  },
  {
    id: '2',
    type: 'rated' as const,
    movie: mockMovies[1], 
    rating: 5,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
  }
]

export default function DashboardPage() {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  const dashboardData = {
    user: {
      id: user.id,
      username: user.username,
      avatar: undefined,
      stats: {
        moviesWatched: 42,
        following: 15,
        followers: 8
      }
    },
    favoriteMovies: mockMovies,
    recentActivity: mockActivity,
    recentLikes: mockMovies,
    stats: {
      moviesWatched: 42,
      moviesInWatchlist: 8,
      favoriteMovies: mockMovies.length,
      averageRating: 4.2,
      thisMonthActivity: 12
    }
  }

  const handleMovieClick = (movie: any) => {
    console.log('Movie clicked:', movie)
    // TODO: Navigate to movie details page
  }

  return (
    <DashboardLayout
      data={dashboardData}
      loading={false}
      onMovieClick={handleMovieClick}
    />
  )
}