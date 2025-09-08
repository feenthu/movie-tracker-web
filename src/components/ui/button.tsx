import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--brand-solid))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--surface-canvas))] leading-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[hsl(var(--content-primary))] text-[hsl(var(--content-inverse))] shadow-xs hover:shadow-tokenHover hover:bg-[hsl(var(--content-primary))]/90 active:shadow-tokenActive",
        secondary:
          "bg-[hsl(var(--surface-muted))] text-[hsl(var(--content-primary))] shadow-xs hover:bg-[hsl(var(--surface-hover))] hover:shadow-tokenHover active:shadow-tokenActive",
        ghost:
          "hover:bg-[hsl(var(--surface-muted))] hover:text-[hsl(var(--content-primary))]",
        subtle:
          "bg-[hsl(var(--surface-secondary))] text-[hsl(var(--content-secondary))] hover:bg-[hsl(var(--surface-hover))] hover:text-[hsl(var(--content-primary))]",
        destructive:
          "bg-[hsl(var(--feedback-error))] text-[hsl(var(--content-inverse))] shadow-xs hover:bg-[hsl(var(--feedback-error))]/90 hover:shadow-tokenHover active:shadow-tokenActive",
        link: "text-[hsl(var(--brand-solid))] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-3 text-sm [&>svg]:size-4",
        md: "h-10 px-4 text-sm [&>svg]:size-4", 
        lg: "h-11 px-5 text-base [&>svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, leftIcon, rightIcon, loading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        data-testid="button"
        {...props}
      >
        {loading && (
          <span className="size-4 md:size-4 lg:size-5 shrink-0 animate-spin">
            <svg className="size-full" viewBox="0 0 24 24" fill="none">
              <circle 
                cx="12" cy="12" r="10" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeDasharray="31.416" 
                strokeDashoffset="31.416"
                className="animate-[spin_2s_linear_infinite]"
              />
            </svg>
          </span>
        )}
        {leftIcon && !loading && <span className="size-4 md:size-4 lg:size-5 shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="size-4 md:size-4 lg:size-5 shrink-0">{rightIcon}</span>}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

/*
Usage Examples:

// Basic buttons
<Button>Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>

// With icons
<Button leftIcon={<Plus />}>Add Item</Button>
<Button rightIcon={<ArrowRight />}>Continue</Button>

// Loading state
<Button loading>Processing...</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// Destructive action
<Button variant="destructive">Delete</Button>
*/