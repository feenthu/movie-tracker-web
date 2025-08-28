import { MovieGrid } from './movie-grid'

interface Movie {
  id: string
  title: string
  posterPath?: string
  userRating?: number
  year?: number
}

interface FavoriteFilmsProps {
  movies: Movie[]
  loading?: boolean
  onViewAll?: () => void
  onMovieClick?: (movie: Movie) => void
  emptyMessage?: string
}

export function FavoriteFilms({ 
  movies, 
  loading = false, 
  onViewAll, 
  onMovieClick,
  emptyMessage = "Don't forget to select your favorite films!"
}: FavoriteFilmsProps) {
  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-300 uppercase tracking-wide">
            FAVORITE FILMS
          </h2>
        </div>
        {movies.length > 0 && onViewAll && (
          <button
            onClick={onViewAll}
            className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
          >
            ALL →
          </button>
        )}
      </div>

      {/* Empty State */}
      {!loading && movies.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed border-gray-700 rounded-lg">
          <p className="text-gray-400 mb-4">{emptyMessage}</p>
        </div>
      )}

      {/* Movies Grid */}
      {(movies.length > 0 || loading) && (
        <MovieGrid
          movies={movies}
          columns={6}
          showRating={true}
          onMovieClick={onMovieClick}
          loading={loading}
          emptyMessage={emptyMessage}
        />
      )}
    </section>
  )
}