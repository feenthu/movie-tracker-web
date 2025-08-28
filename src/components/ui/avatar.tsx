import { clsx } from 'clsx'
import Image from 'next/image'

interface UserAvatarProps {
  src?: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fallback?: string
  className?: string
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 text-lg',
  xl: 'w-24 h-24 text-2xl'
}

export function UserAvatar({ 
  src, 
  alt, 
  size = 'md', 
  fallback, 
  className 
}: UserAvatarProps) {
  const initials = fallback || alt.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)

  return (
    <div className={clsx(
      'rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden relative',
      sizeClasses[size],
      className
    )}>
      {src ? (
        <>
          <Image 
            src={src} 
            alt={alt}
            fill
            className="object-cover"
            sizes="96px"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const fallbackSpan = target.parentElement?.querySelector('.avatar-fallback')
              if (fallbackSpan) {
                fallbackSpan.classList.remove('hidden')
              }
            }}
          />
          <span className="avatar-fallback font-medium text-gray-600 dark:text-gray-300 absolute inset-0 flex items-center justify-center hidden">
            {initials}
          </span>
        </>
      ) : (
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {initials}
        </span>
      )}
    </div>
  )
}