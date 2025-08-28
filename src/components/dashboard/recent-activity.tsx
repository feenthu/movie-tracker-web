import { MovieGrid } from './movie-grid'
import Image from 'next/image'

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

interface RecentActivityProps {
  activities: Activity[]
  loading?: boolean
  onViewAll?: () => void
  onMovieClick?: (movie: Movie) => void
}

function ActivityItem({ activity, onMovieClick }: { 
  activity: Activity
  onMovieClick?: (movie: Movie) => void 
}) {
  const getActivityText = (type: Activity['type']) => {
    switch (type) {
      case 'watched': return 'watched'
      case 'rated': return 'rated'
      case 'added_to_list': return 'added to watchlist'
      case 'favorited': return 'favorited'
      default: return 'interacted with'
    }
  }

  const formatDate = (date: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    return date.toLocaleDateString()
  }

  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50">
      <div 
        className="w-12 h-16 flex-shrink-0 cursor-pointer relative"
        onClick={() => onMovieClick?.(activity.movie)}
      >
        {activity.movie.posterPath ? (
          <Image
            src={`https://image.tmdb.org/t/p/w154${activity.movie.posterPath}`}
            alt={activity.movie.title}
            fill
            className="object-cover rounded"
            sizes="48px"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 rounded flex items-center justify-center">
            <span className="text-xs text-gray-400">?</span>
          </div>
        )}
      </div>
      
      <div className="flex-grow min-w-0">
        <p className="text-sm text-gray-300">
          You {getActivityText(activity.type)}{' '}
          <button 
            onClick={() => onMovieClick?.(activity.movie)}
            className="font-medium text-white hover:text-green-400 transition-colors"
          >
            {activity.movie.title}
          </button>
          {activity.rating && (
            <span className="text-yellow-400 ml-2">
              ★ {activity.rating}
            </span>
          )}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {formatDate(activity.timestamp)}
        </p>
      </div>
    </div>
  )
}

export function RecentActivity({ 
  activities, 
  loading = false, 
  onViewAll, 
  onMovieClick 
}: RecentActivityProps) {
  if (loading) {
    return (
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-gray-300 uppercase tracking-wide mb-4">
          RECENT ACTIVITY
        </h2>
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50">
              <div className="w-12 h-16 bg-gray-700 rounded animate-pulse" />
              <div className="flex-grow">
                <div className="h-4 bg-gray-700 rounded animate-pulse mb-2" />
                <div className="h-3 bg-gray-700 rounded animate-pulse w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-300 uppercase tracking-wide">
          RECENT ACTIVITY
        </h2>
        {activities.length > 0 && onViewAll && (
          <button
            onClick={onViewAll}
            className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
          >
            VIEW ALL →
          </button>
        )}
      </div>

      {/* Activity List */}
      {activities.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-gray-700 rounded-lg">
          <p className="text-gray-400">No recent activity</p>
        </div>
      ) : (
        <div className="space-y-3">
          {activities.slice(0, 5).map((activity) => (
            <ActivityItem
              key={activity.id}
              activity={activity}
              onMovieClick={onMovieClick}
            />
          ))}
        </div>
      )}
    </section>
  )
}