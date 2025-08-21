import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface PageWrapperProps {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

export function PageWrapper({ children, className, maxWidth = 'lg' }: PageWrapperProps) {
  return (
    <main
      className={cn(
        'container mx-auto px-4 py-8',
        {
          'max-w-sm': maxWidth === 'sm',
          'max-w-md': maxWidth === 'md',
          'max-w-lg': maxWidth === 'lg',
          'max-w-xl': maxWidth === 'xl',
          'max-w-2xl': maxWidth === '2xl',
          'max-w-full': maxWidth === 'full',
        },
        className
      )}
    >
      {children}
    </main>
  )
}