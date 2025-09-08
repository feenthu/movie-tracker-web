import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, Eye, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface MovieCardProps {
  title: string
  year: number
  rating?: number
  userRated?: number
  isWatched?: boolean
  isFavorite?: boolean
  isWatchlisted?: boolean
  posterUrl: string
  className?: string
}

export function MovieCard({
  title,
  year,
  rating,
  userRated,
  isWatched = false,
  isFavorite = false,
  isWatchlisted = false,
  posterUrl,
  className
}: MovieCardProps) {
  return (
    <Card 
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg",
        "bg-surface-elevated border-border-primary hover:border-border-secondary",
        className
      )}
    >
      {/* Poster Container */}
      <div className="relative aspect-poster bg-surface-secondary">
        <img
          src={posterUrl}
          alt={`${title} (${year}) poster`}
          className="h-full w-full object-cover transition-opacity group-hover:opacity-90"
        />
        
        {/* Status Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {isWatched && (
            <Badge variant="secondary" size="sm" className="bg-surface-overlay text-content-inverse">
              <Eye className="w-3 h-3" />
            </Badge>
          )}
          {isFavorite && (
            <Badge variant="secondary" size="sm" className="bg-surface-overlay text-rating-heart-filled">
              <Heart className="w-3 h-3 fill-current" />
            </Badge>
          )}
          {isWatchlisted && (
            <Badge variant="secondary" size="sm" className="bg-surface-overlay text-content-inverse">
              <Clock className="w-3 h-3" />
            </Badge>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-surface-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <Button size="sm" variant="secondary" className="bg-surface-elevated/90 backdrop-blur-sm">
              <Eye className="w-4 h-4 mr-1" />
              Watch
            </Button>
            <Button size="sm" variant="outline" className="bg-surface-elevated/90 backdrop-blur-sm">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <CardContent className="p-3 space-y-2">
        {/* Title and Year */}
        <div>
          <h3 className="font-medium text-content-primary text-sm leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-content-tertiary text-xs mt-1">{year}</p>
        </div>

        {/* Ratings */}
        <div className="flex items-center justify-between">
          {/* TMDB Rating */}
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-rating-star-filled text-rating-star-filled" />
              <span className="text-xs font-medium text-content-primary">
                {rating.toFixed(1)}
              </span>
            </div>
          )}
          
          {/* User Rating */}
          {userRated && (
            <div className="flex items-center gap-1">
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-3 h-3",
                      i < userRated
                        ? "fill-brand-primary text-brand-primary"
                        : "fill-rating-star-empty text-rating-star-empty"
                    )}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Example usage showcase
export function MovieCardShowcase() {
  const sampleMovies = [
    {
      title: "Oppenheimer",
      year: 2023,
      rating: 8.4,
      userRated: 5,
      isWatched: true,
      isFavorite: true,
      posterUrl: "/api/placeholder/300/450"
    },
    {
      title: "The Batman",
      year: 2022,
      rating: 7.8,
      isWatchlisted: true,
      posterUrl: "/api/placeholder/300/450"
    },
    {
      title: "Dune",
      year: 2021,
      rating: 8.0,
      userRated: 4,
      isWatched: true,
      posterUrl: "/api/placeholder/300/450"
    }
  ]

  return (
    <div className="grid grid-cols-movies gap-6 p-6 bg-surface-primary">
      {sampleMovies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  )
}