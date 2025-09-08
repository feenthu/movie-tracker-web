import { cn } from "@/lib/utils"

interface BrandMarkProps {
  className?: string
}

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      {/* Top row: orange and green dots */}
      <circle cx="6" cy="6" r="4" fill="#f97316" />
      <circle cx="18" cy="6" r="4" fill="#22c55e" />
      
      {/* Bottom row: blue and yellow dots */}
      <circle cx="6" cy="18" r="4" fill="#3b82f6" />
      <circle cx="18" cy="18" r="4" fill="#eab308" />
    </svg>
  )
}