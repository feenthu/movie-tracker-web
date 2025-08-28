'use client'

import { clsx } from 'clsx'

interface Movie {
  id: string
  title: string
  posterPath?: string
  userRating?: number
  year?: number
}

interface MoviePosterProps {
  movie: Movie
  showRating?: boolean
  showTitle?: boolean
  onClick?: (movie: Movie) => void
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-20 h-30',
  md: 'w-32 h-48', 
  lg: 'w-40 h-60'
}

function getMoviePosterUrl(posterPath?: string, size: 'w154' | 'w342' | 'w500' = 'w342') {
  if (!posterPath) return '/placeholder-poster.png'
  return `https://image.tmdb.org/t/p/${size}${posterPath}`
}

export function MoviePoster({ 
  movie, 
  showRating = false, 
  showTitle = false,
  onClick,
  size = 'md',
  className 
}: MoviePosterProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(movie)
    }
  }

  return (
    <div 
      className={clsx(
        'relative group cursor-pointer',
        sizeClasses[size],
        className
      )}
      onClick={handleClick}
    >
      {/* Movie Poster */}
      <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        {movie.posterPath ? (
          <img
            src={getMoviePosterUrl(movie.posterPath)}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-700">
            <span className="text-gray-400 text-xs text-center px-2">
              {movie.title}
            </span>
          </div>
        )}

        {/* Rating Badge */}
        {showRating && movie.userRating && (
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
            ★ {movie.userRating}
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
      </div>

      {/* Title (if shown) */}
      {showTitle && (
        <div className="mt-2">
          <h4 className="text-sm font-medium text-white truncate">
            {movie.title}
          </h4>
          {movie.year && (
            <p className="text-xs text-gray-400">
              {movie.year}
            </p>
          )}
        </div>
      )}
    </div>
  )
}