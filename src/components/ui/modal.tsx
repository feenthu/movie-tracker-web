'use client'

import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import { Button } from './button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Modal({ isOpen, onClose, children, className, size = 'md' }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div
        className={cn(
          'relative w-full rounded-lg bg-background p-6 shadow-lg',
          {
            'max-w-sm': size === 'sm',
            'max-w-md': size === 'md',
            'max-w-lg': size === 'lg',
            'max-w-xl': size === 'xl',
          },
          className
        )}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

interface ModalHeaderProps {
  title: string
  onClose?: () => void
  className?: string
}

export function ModalHeader({ title, onClose, className }: ModalHeaderProps) {
  return (
    <div className={cn('flex items-center justify-between pb-4', className)}>
      <h2 className="text-lg font-semibold">{title}</h2>
      {onClose && (
        <Button variant="ghost" size="sm" onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 14L14 2M2 2L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Button>
      )}
    </div>
  )
}

interface ModalContentProps {
  children: ReactNode
  className?: string
}

export function ModalContent({ children, className }: ModalContentProps) {
  return <div className={cn('py-4', className)}>{children}</div>
}

interface ModalFooterProps {
  children: ReactNode
  className?: string
}

export function ModalFooter({ children, className }: ModalFooterProps) {
  return <div className={cn('flex justify-end space-x-2 pt-4', className)}>{children}</div>
}