import { useState } from "react"
import { Star, Heart, Eye, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface RatingProps {
  maxRating?: number
  currentRating?: number
  onRatingChange?: (rating: number) => void
  size?: "sm" | "md" | "lg"
  variant?: "star" | "heart"
  readonly?: boolean
  showLabel?: boolean
  className?: string
}

export function Rating({
  maxRating = 5,
  currentRating = 0,
  onRatingChange,
  size = "md",
  variant = "star",
  readonly = false,
  showLabel = false,
  className
}: RatingProps) {
  const [hoverRating, setHoverRating] = useState(0)
  
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5", 
    lg: "w-6 h-6"
  }

  const handleClick = (rating: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(rating)
    }
  }

  const handleMouseEnter = (rating: number) => {
    if (!readonly) {
      setHoverRating(rating)
    }
  }

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0)
    }
  }

  const displayRating = hoverRating || currentRating
  const Icon = variant === "heart" ? Heart : Star

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxRating }, (_, index) => {
          const ratingValue = index + 1
          const isFilled = ratingValue <= displayRating
          
          return (
            <Icon
              key={index}
              className={cn(
                sizeClasses[size],
                "transition-colors duration-200",
                readonly ? "cursor-default" : "cursor-pointer",
                isFilled
                  ? variant === "heart"
                    ? "fill-rating-heart-filled text-rating-heart-filled"
                    : "fill-rating-star-filled text-rating-star-filled"
                  : variant === "heart"
                    ? "fill-rating-heart-empty text-rating-heart-empty"
                    : "fill-rating-star-empty text-rating-star-empty",
                !readonly && "hover:scale-110"
              )}
              onClick={() => handleClick(ratingValue)}
              onMouseEnter={() => handleMouseEnter(ratingValue)}
              onMouseLeave={handleMouseLeave}
            />
          )
        })}
      </div>
      
      {showLabel && (
        <span className="text-sm font-medium text-content-primary">
          {currentRating > 0 ? `${currentRating}/${maxRating}` : "Not rated"}
        </span>
      )}
    </div>
  )
}

interface WatchStatusProps {
  isWatched?: boolean
  isFavorite?: boolean
  isWatchlisted?: boolean
  onWatchedChange?: (watched: boolean) => void
  onFavoriteChange?: (favorite: boolean) => void
  onWatchlistChange?: (watchlisted: boolean) => void
  size?: "sm" | "md" | "lg"
}

export function WatchStatus({
  isWatched = false,
  isFavorite = false,
  isWatchlisted = false,
  onWatchedChange,
  onFavoriteChange,
  onWatchlistChange,
  size = "md"
}: WatchStatusProps) {
  const sizeClasses = {
    sm: "h-8 px-2 text-xs",
    md: "h-9 px-3 text-sm",
    lg: "h-10 px-4 text-base"
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={isWatched ? "primary" : "secondary"}
        size="sm"
        className={cn(
          sizeClasses[size],
          isWatched && "bg-feedback-success hover:bg-feedback-success/90"
        )}
        onClick={() => onWatchedChange?.(!isWatched)}
      >
        <Eye className={cn(size === "sm" ? "w-3 h-3" : "w-4 h-4", "mr-1")} />
        {isWatched ? "Watched" : "Mark as Watched"}
      </Button>

      <Button
        variant={isFavorite ? "primary" : "secondary"}
        size="sm"
        className={cn(
          sizeClasses[size],
          isFavorite && "bg-rating-heart-filled hover:bg-rating-heart-filled/90"
        )}
        onClick={() => onFavoriteChange?.(!isFavorite)}
      >
        <Heart
          className={cn(
            size === "sm" ? "w-3 h-3" : "w-4 h-4",
            "mr-1",
            isFavorite && "fill-current"
          )}
        />
        {isFavorite ? "Favorited" : "Add to Favorites"}
      </Button>

      <Button
        variant={isWatchlisted ? "secondary" : "secondary"}
        size="sm"
        className={cn(
          sizeClasses[size],
          isWatchlisted && "bg-brand-secondary hover:bg-brand-secondary-hover"
        )}
        onClick={() => onWatchlistChange?.(!isWatchlisted)}
      >
        <Clock className={cn(size === "sm" ? "w-3 h-3" : "w-4 h-4", "mr-1")} />
        {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
      </Button>
    </div>
  )
}

// Showcase component
export function RatingShowcase() {
  const [userRating, setUserRating] = useState(0)
  const [isWatched, setIsWatched] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isWatchlisted, setIsWatchlisted] = useState(false)

  return (
    <div className="space-y-8 p-6 bg-surface-primary rounded-lg">
      <div>
        <h3 className="text-lg font-semibold text-content-primary mb-4">Rating Components</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-content-secondary min-w-24">Interactive:</span>
            <Rating
              currentRating={userRating}
              onRatingChange={setUserRating}
              showLabel
            />
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-content-secondary min-w-24">Read-only:</span>
            <Rating currentRating={4} readonly showLabel />
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-content-secondary min-w-24">Heart variant:</span>
            <Rating
              variant="heart"
              maxRating={1}
              currentRating={isFavorite ? 1 : 0}
              onRatingChange={(rating) => setIsFavorite(rating > 0)}
            />
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-content-secondary min-w-24">Different sizes:</span>
            <div className="flex items-center gap-4">
              <Rating size="sm" currentRating={3} readonly />
              <Rating size="md" currentRating={3} readonly />
              <Rating size="lg" currentRating={3} readonly />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-content-primary mb-4">Watch Status Components</h3>
        <WatchStatus
          isWatched={isWatched}
          isFavorite={isFavorite}
          isWatchlisted={isWatchlisted}
          onWatchedChange={setIsWatched}
          onFavoriteChange={setIsFavorite}
          onWatchlistChange={setIsWatchlisted}
        />
      </div>
    </div>
  )
}