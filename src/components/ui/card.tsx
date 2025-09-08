import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-[hsl(var(--surface-elevated))] text-[hsl(var(--content-primary))] flex flex-col gap-6 rounded-xl border border-[hsl(var(--border-subtle))] py-6 shadow-xs hover:shadow-tokenHover transition-shadow",
      className
    )}
    data-testid="card"
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot='card-action']:grid-cols-[1fr_auto] [.border-b]:pb-6",
      className
    )}
    data-testid="card-header"
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("leading-none font-semibold text-[hsl(var(--content-primary))]", className)}
    data-testid="card-title"
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-[hsl(var(--content-secondary))]", className)}
    data-testid="card-subtitle"
    {...props}
  />
))
CardSubtitle.displayName = "CardSubtitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-[hsl(var(--content-secondary))] text-sm", className)}
    data-testid="card-description"
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn("px-6", className)} 
    data-testid="card-content"
    {...props} 
  />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
    data-testid="card-footer"
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardSubtitle, CardDescription, CardContent }

/*
Usage Examples:

// Basic card
<Card>
  <CardHeader>
    <CardTitle>Movie Title</CardTitle>
    <CardSubtitle>2024 • Drama</CardSubtitle>
  </CardHeader>
  <CardContent>
    <p>Movie description here...</p>
  </CardContent>
  <CardFooter>
    <Button>Watch Now</Button>
  </CardFooter>
</Card>

// Movie poster card
<Card className="w-[200px]">
  <CardContent className="p-0">
    <img 
      src="/poster.jpg" 
      alt="Movie poster"
      className="w-full aspect-poster rounded-t-xl object-cover"
    />
  </CardContent>
  <CardHeader className="pt-0">
    <CardTitle>The Dark Knight</CardTitle>
    <CardDescription>2008 • Action</CardDescription>
  </CardHeader>
</Card>

// Stats card with hover effect
<Card className="hover:shadow-tokenHover">
  <CardHeader>
    <CardTitle>Total Movies</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="text-2xl font-bold text-[hsl(var(--brand-solid))]">1,234</div>
  </CardContent>
</Card>
*/