import * as React from "react";
import { cn } from "@/lib/utils";

export interface RatingStarsProps {
  value: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  allowHalf?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
  readOnly?: boolean;
  showValue?: boolean;
  precision?: number;
}

const RatingStars = React.forwardRef<HTMLDivElement, RatingStarsProps>(
  ({
    value,
    maxRating = 5,
    size = "md",
    interactive = false,
    allowHalf = true,
    onChange,
    className,
    readOnly = false,
    showValue = false,
    precision = 0.5,
    ...props
  }, ref) => {
    const [hoverValue, setHoverValue] = React.useState<number | null>(null);
    
    const sizeClasses = {
      sm: "size-4",
      md: "size-5",
      lg: "size-6"
    };

    const starSize = sizeClasses[size];
    const displayValue = hoverValue !== null && interactive ? hoverValue : value;

    const handleClick = (rating: number) => {
      if (!interactive || readOnly) return;
      onChange?.(rating);
    };

    const handleMouseEnter = (rating: number) => {
      if (!interactive || readOnly) return;
      setHoverValue(rating);
    };

    const handleMouseLeave = () => {
      if (!interactive || readOnly) return;
      setHoverValue(null);
    };

    const getStarValue = (index: number) => {
      return index + 1;
    };

    const isStarFilled = (starIndex: number) => {
      const starValue = getStarValue(starIndex);
      return displayValue >= starValue;
    };

    const isStarHalf = (starIndex: number) => {
      if (!allowHalf) return false;
      const starValue = getStarValue(starIndex);
      return displayValue >= starValue - 0.5 && displayValue < starValue;
    };

    const stars = Array.from({ length: maxRating }, (_, index) => {
      const starValue = getStarValue(index);
      const filled = isStarFilled(index);
      const half = isStarHalf(index);
      
      return (
        <div 
          key={index} 
          className="relative inline-block cursor-pointer"
          onClick={() => handleClick(starValue)}
          onMouseEnter={() => handleMouseEnter(starValue)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Background star (empty) */}
          <svg
            className={cn(
              starSize,
              "text-[hsl(var(--rating-star-empty))] fill-current"
            )}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          
          {/* Filled star overlay */}
          {(filled || half) && (
            <svg
              className={cn(
                starSize,
                "absolute inset-0 text-[hsl(var(--rating-star-filled))] fill-current",
                half && "overflow-hidden"
              )}
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{
                clipPath: half ? "inset(0 50% 0 0)" : undefined
              }}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          )}

          {/* Half-star click area for better UX */}
          {interactive && allowHalf && (
            <>
              <div
                className="absolute inset-0 w-1/2 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(starValue - 0.5);
                }}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  handleMouseEnter(starValue - 0.5);
                }}
              />
              <div
                className="absolute inset-0 left-1/2 w-1/2 z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(starValue);
                }}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  handleMouseEnter(starValue);
                }}
              />
            </>
          )}
        </div>
      );
    });

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-0.5",
          interactive && !readOnly && "cursor-pointer",
          className
        )}
        aria-label={`Rating: ${value} out of ${maxRating} stars`}
        role={interactive ? "slider" : "img"}
        aria-valuenow={interactive ? value : undefined}
        aria-valuemin={interactive ? 0 : undefined}
        aria-valuemax={interactive ? maxRating : undefined}
        data-testid="rating-stars"
        {...props}
      >
        <div className="flex items-center gap-0.5">
          {stars}
        </div>
        {showValue && (
          <span className="ml-2 text-sm text-[hsl(var(--content-secondary))]">
            {value.toFixed(1)}
          </span>
        )}
      </div>
    );
  }
);

RatingStars.displayName = "RatingStars";

export { RatingStars };

/*
Usage Examples:

// Basic read-only rating
<RatingStars value={4.5} readOnly />

// Interactive rating
<RatingStars 
  value={3} 
  interactive 
  onChange={(rating) => console.log('New rating:', rating)} 
/>

// With value display
<RatingStars value={4.2} showValue readOnly />

// Different sizes
<RatingStars value={5} size="sm" readOnly />
<RatingStars value={4} size="md" readOnly />
<RatingStars value={3.5} size="lg" readOnly />

// Movie rating display
<div className="flex items-center gap-2">
  <RatingStars value={4.3} size="sm" readOnly />
  <span className="text-sm text-[hsl(var(--content-secondary))]">
    4.3 (1,234 reviews)
  </span>
</div>

// User rating input
<div className="space-y-2">
  <label className="text-sm font-medium">Rate this movie:</label>
  <RatingStars 
    value={userRating} 
    interactive 
    onChange={setUserRating}
    size="lg"
  />
</div>

// Compact rating in cards
<div className="flex items-center justify-between">
  <h3 className="font-semibold">The Dark Knight</h3>
  <RatingStars value={4.9} size="sm" readOnly />
</div>

// 10-star rating system
<RatingStars 
  value={8.5} 
  maxRating={10} 
  interactive 
  onChange={(rating) => console.log('Rating out of 10:', rating)} 
/>

// No half stars allowed
<RatingStars 
  value={4} 
  interactive 
  allowHalf={false}
  onChange={(rating) => console.log('Whole stars only:', rating)} 
/>
*/