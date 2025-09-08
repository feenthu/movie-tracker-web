import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-solid))] focus-visible:ring-offset-2 transition-colors overflow-hidden",
  {
    variants: {
      variant: {
        // Neutral variants
        "neutral-solid": "bg-[hsl(var(--content-primary))] text-[hsl(var(--content-inverse))] border-transparent",
        "neutral-soft": "bg-[hsl(var(--surface-muted))] text-[hsl(var(--content-primary))] border-transparent",
        "neutral-outline": "bg-transparent text-[hsl(var(--content-primary))] border-[hsl(var(--border-subtle))]",
        
        // Brand variants
        "brand-solid": "bg-[hsl(var(--brand-solid))] text-[hsl(var(--content-onBrand))] border-transparent",
        "brand-soft": "bg-[hsl(var(--brand-solid))] bg-opacity-10 text-[hsl(var(--brand-solid))] border-transparent",
        "brand-outline": "bg-transparent text-[hsl(var(--brand-solid))] border-[hsl(var(--brand-solid))]",
        
        // Success variants
        "success-solid": "bg-[hsl(var(--feedback-success))] text-[hsl(var(--content-inverse))] border-transparent",
        "success-soft": "bg-[hsl(var(--feedback-success))] bg-opacity-10 text-[hsl(var(--feedback-success))] border-transparent",
        "success-outline": "bg-transparent text-[hsl(var(--feedback-success))] border-[hsl(var(--feedback-success))]",
        
        // Warning variants
        "warn-solid": "bg-[hsl(var(--feedback-warning))] text-[hsl(var(--content-inverse))] border-transparent",
        "warn-soft": "bg-[hsl(var(--feedback-warning))] bg-opacity-10 text-[hsl(var(--feedback-warning))] border-transparent",
        "warn-outline": "bg-transparent text-[hsl(var(--feedback-warning))] border-[hsl(var(--feedback-warning))]",
        
        // Error variants
        "error-solid": "bg-[hsl(var(--feedback-error))] text-[hsl(var(--content-inverse))] border-transparent",
        "error-soft": "bg-[hsl(var(--feedback-error))] bg-opacity-10 text-[hsl(var(--feedback-error))] border-transparent",
        "error-outline": "bg-transparent text-[hsl(var(--feedback-error))] border-[hsl(var(--feedback-error))]",
      },
      size: {
        sm: "h-6 px-2 text-xs",
        md: "h-7 px-2.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "neutral-solid",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      data-testid="badge"
      {...props}
    />
  );
}

export { Badge, badgeVariants };

/*
Usage Examples:

// Basic badges
<Badge>Default</Badge>
<Badge variant="brand-solid">Featured</Badge>
<Badge variant="success-soft">Available</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>

// Movie-specific examples
<Badge variant="success-solid">9.0</Badge>
<Badge variant="warn-soft">PG-13</Badge>
<Badge variant="neutral-outline">Drama</Badge>

// Status indicators
<Badge variant="success-outline">Watched</Badge>
<Badge variant="brand-soft">Wishlist</Badge>
<Badge variant="error-soft">Unavailable</Badge>

// Rating badges
<Badge variant="success-solid" className="text-xs font-semibold">
  ⭐ 4.2
</Badge>

// Genre badges
<div className="flex gap-1">
  <Badge variant="secondary">Action</Badge>
  <Badge variant="secondary">Thriller</Badge>
  <Badge variant="secondary">Sci-Fi</Badge>
</div>
*/