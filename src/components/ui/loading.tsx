import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}

export function Loading({ className, size = 'md', ...props }: LoadingProps) {
  return (
    <div
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <div
        className={cn(
          'animate-spin rounded-full border-2 border-muted border-t-primary',
          {
            'h-4 w-4': size === 'sm',
            'h-6 w-6': size === 'md',
            'h-8 w-8': size === 'lg',
          }
        )}
      />
    </div>
  )
}

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

export function Spinner({ className, size = 24, ...props }: SpinnerProps) {
  return (
    <div
      className={cn('animate-spin rounded-full border-2 border-muted border-t-primary', className)}
      style={{ width: size, height: size }}
      {...props}
    />
  )
}