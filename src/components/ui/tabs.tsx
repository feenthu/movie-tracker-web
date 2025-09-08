import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tabsListVariants = cva(
  "inline-flex items-center text-[hsl(var(--content-secondary))]",
  {
    variants: {
      variant: {
        pill: "h-10 justify-center rounded-full bg-[hsl(var(--surface-muted))] p-1",
        underline: "h-10 justify-start border-b border-[hsl(var(--border-subtle))]",
      },
    },
    defaultVariants: {
      variant: "pill",
    },
  }
)

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-[hsl(var(--surface-canvas))] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-solid))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        pill: "rounded-full data-[state=active]:bg-[hsl(var(--content-primary))] data-[state=active]:text-[hsl(var(--content-inverse))] data-[state=active]:shadow-xs",
        underline: "rounded-none border-b-2 border-transparent data-[state=active]:border-[hsl(var(--brand-solid))] data-[state=active]:text-[hsl(var(--content-primary))]",
      },
    },
    defaultVariants: {
      variant: "pill",
    },
  }
)

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
    VariantProps<typeof tabsListVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant }), className)}
    data-testid="tabs-list"
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    VariantProps<typeof tabsTriggerVariants>
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant }), className)}
    data-testid="tabs-trigger"
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-[hsl(var(--surface-canvas))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-solid))] focus-visible:ring-offset-2",
      className
    )}
    data-testid="tabs-content"
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }

/*
Usage Examples:

// Pill style tabs (default)
<Tabs defaultValue="overview" className="w-full">
  <TabsList variant="pill">
    <TabsTrigger variant="pill" value="overview">Overview</TabsTrigger>
    <TabsTrigger variant="pill" value="reviews">Reviews</TabsTrigger>
    <TabsTrigger variant="pill" value="cast">Cast</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    <p>Movie overview content...</p>
  </TabsContent>
  <TabsContent value="reviews">
    <p>Movie reviews content...</p>
  </TabsContent>
  <TabsContent value="cast">
    <p>Cast information...</p>
  </TabsContent>
</Tabs>

// Underline style tabs
<Tabs defaultValue="all" className="w-full">
  <TabsList variant="underline">
    <TabsTrigger variant="underline" value="all">All Movies</TabsTrigger>
    <TabsTrigger variant="underline" value="watched">Watched</TabsTrigger>
    <TabsTrigger variant="underline" value="wishlist">Wishlist</TabsTrigger>
    <TabsTrigger variant="underline" value="favorites">Favorites</TabsTrigger>
  </TabsList>
  <TabsContent value="all">
    <div>All movies grid...</div>
  </TabsContent>
  <TabsContent value="watched">
    <div>Watched movies...</div>
  </TabsContent>
  <TabsContent value="wishlist">
    <div>Wishlist movies...</div>
  </TabsContent>
  <TabsContent value="favorites">
    <div>Favorite movies...</div>
  </TabsContent>
</Tabs>

// Movie dashboard navigation
<Tabs defaultValue="dashboard" className="w-full">
  <TabsList variant="underline" className="w-full justify-start">
    <TabsTrigger variant="underline" value="dashboard">Dashboard</TabsTrigger>
    <TabsTrigger variant="underline" value="movies">Movies</TabsTrigger>
    <TabsTrigger variant="underline" value="watchlist">Watchlist</TabsTrigger>
    <TabsTrigger variant="underline" value="reviews">Reviews</TabsTrigger>
    <TabsTrigger variant="underline" value="stats">Statistics</TabsTrigger>
  </TabsList>
  <TabsContent value="dashboard" className="space-y-4">
    <h2>Your Dashboard</h2>
    // Dashboard content goes here
  </TabsContent>
  // Other tab contents...
</Tabs>

// Compact pill tabs
<Tabs defaultValue="popular" className="w-fit">
  <TabsList variant="pill" className="grid w-full grid-cols-3">
    <TabsTrigger variant="pill" value="popular">Popular</TabsTrigger>
    <TabsTrigger variant="pill" value="recent">Recent</TabsTrigger>
    <TabsTrigger variant="pill" value="top">Top Rated</TabsTrigger>
  </TabsList>
  <TabsContent value="popular">Popular movies...</TabsContent>
  <TabsContent value="recent">Recent releases...</TabsContent>
  <TabsContent value="top">Top rated movies...</TabsContent>
</Tabs>
*/