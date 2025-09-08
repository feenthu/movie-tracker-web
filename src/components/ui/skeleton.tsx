import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[hsl(var(--surface-muted))]",
        className
      )}
      data-testid="skeleton"
      {...props}
    />
  );
}

export { Skeleton };

/*
Usage Examples:

// Basic skeleton shapes
<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-4 w-[200px]" />
<Skeleton className="h-4 w-[150px]" />

// Movie poster skeleton
<Skeleton className="h-[300px] w-[200px] aspect-poster rounded-lg" />

// Profile avatar skeleton
<Skeleton className="h-12 w-12 rounded-full" />

// Text line skeletons
<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-[90%]" />
  <Skeleton className="h-4 w-[80%]" />
</div>

// Movie card skeleton
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[160px]" />
  </div>
</div>

// Movie grid skeleton
<div className="grid grid-cols-movies gap-4">
  {Array.from({ length: 8 }).map((_, i) => (
    <div key={i} className="space-y-2">
      <Skeleton className="aspect-poster w-full rounded-lg" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-3 w-3/4" />
    </div>
  ))}
</div>

// Button skeleton
<Skeleton className="h-10 w-24 rounded-lg" />

// Badge skeletons
<div className="flex gap-2">
  <Skeleton className="h-6 w-16 rounded-full" />
  <Skeleton className="h-6 w-20 rounded-full" />
  <Skeleton className="h-6 w-14 rounded-full" />
</div>

// Movie details skeleton
<div className="space-y-6">
  <div className="flex space-x-6">
    <Skeleton className="h-[400px] w-[267px] rounded-lg" />
    <div className="flex-1 space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-14 rounded-full" />
      </div>
    </div>
  </div>
</div>

// Rating skeleton
<div className="flex items-center space-x-2">
  <div className="flex space-x-1">
    <Skeleton className="h-4 w-4" />
    <Skeleton className="h-4 w-4" />
    <Skeleton className="h-4 w-4" />
    <Skeleton className="h-4 w-4" />
    <Skeleton className="h-4 w-4" />
  </div>
  <Skeleton className="h-4 w-12" />
</div>
*/