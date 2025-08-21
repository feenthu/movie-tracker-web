import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { Toast, useToast } from '@/providers/toast-provider'

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  toast: Toast
}

export function ToastComponent({ toast, className, ...props }: ToastProps) {
  const { removeToast } = useToast()

  return (
    <div
      className={cn(
        'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all',
        {
          'border-green-200 bg-green-50 text-green-800': toast.type === 'success',
          'border-red-200 bg-red-50 text-red-800': toast.type === 'error',
          'border-yellow-200 bg-yellow-50 text-yellow-800': toast.type === 'warning',
          'border-blue-200 bg-blue-50 text-blue-800': toast.type === 'info',
        },
        className
      )}
      {...props}
    >
      <div className="grid gap-1">
        <div className="text-sm font-semibold">{toast.title}</div>
        {toast.description && (
          <div className="text-sm opacity-90">{toast.description}</div>
        )}
      </div>
      <button
        onClick={() => removeToast(toast.id)}
        className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
      >
        <span className="sr-only">Close</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M1 11L11 1M1 1L11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map((toast) => (
        <ToastComponent key={toast.id} toast={toast} />
      ))}
    </div>
  )
}