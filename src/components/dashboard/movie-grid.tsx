import { MoviePoster } from './movie-poster'
import { clsx } from 'clsx'

interface Movie {
  id: string
  title: string
  posterPath?: string
  userRating?: number
  year?: number
}

interface MovieGridProps {
  movies: Movie[]
  columns?: number
  showRating?: boolean
  showTitle?: boolean
  onMovieClick?: (movie: Movie) => void
  loading?: boolean
  emptyMessage?: string
  className?: string
  posterSize?: 'sm' | 'md' | 'lg'
}

function MovieGridSkeleton({ columns = 6 }: { columns?: number }) {
  return (
    <div className={clsx('grid gap-4', `grid-cols-${Math.min(columns, 6)}`)}>
      {Array.from({ length: columns }).map((_, i) => (
        <div key={i} className="w-32 h-48 bg-gray-700 rounded-lg animate-pulse" />
      ))}
    </div>
  )
}

export function MovieGrid({
  movies,
  columns = 6,
  showRating = false,
  showTitle = false,
  onMovieClick,
  loading = false,
  emptyMessage = "No movies to display",
  className,
  posterSize = 'md'
}: MovieGridProps) {
  if (loading) {
    return <MovieGridSkeleton columns={columns} />
  }

  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">{emptyMessage}</p>
      </div>
    )
  }

  const getGridClass = () => {
    switch (columns) {
      case 2: return 'grid-cols-2'
      case 3: return 'grid-cols-3'
      case 4: return 'grid-cols-4'
      case 5: return 'grid-cols-5'
      case 6: return 'grid-cols-6'
      default: return 'grid-cols-6'
    }
  }

  return (
    <div className={clsx(
      'grid gap-4',
      getGridClass(),
      className
    )}>
      {movies.map((movie) => (
        <MoviePoster
          key={movie.id}
          movie={movie}
          showRating={showRating}
          showTitle={showTitle}
          onClick={onMovieClick}
          size={posterSize}
        />
      ))}
    </div>
  )
}