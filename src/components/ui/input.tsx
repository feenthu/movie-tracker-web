import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
  helperText?: string;
  showClear?: boolean;
  onClear?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, success, helperText, showClear, onClear, disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
      <div className="relative">
        <input
          type={inputType}
          className={cn(
            "flex h-10 w-full rounded-lg border px-3 py-2 text-sm bg-[hsl(var(--surface-raised))] text-[hsl(var(--content-strong))] placeholder:text-[hsl(var(--content-muted))] border-[hsl(var(--border-subtle))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand-solid))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--surface-canvas))] disabled:cursor-not-allowed disabled:opacity-60",
            error && "border-[hsl(var(--danger-solid))] focus:ring-[hsl(var(--danger-solid))]",
            success && "border-[hsl(var(--success-subtle))] focus:ring-[hsl(var(--success-subtle))]",
            className
          )}
          ref={ref}
          disabled={disabled}
          data-testid="input"
          {...props}
        />
        
        {/* Clear button */}
        {showClear && props.value && !disabled && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(var(--content-muted))] hover:text-[hsl(var(--content-primary))] transition-colors"
            data-testid="input-clear"
          >
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        {/* Password toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(var(--content-muted))] hover:text-[hsl(var(--content-primary))] transition-colors"
            data-testid="password-toggle"
          >
            {showPassword ? (
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L18 18" />
              </svg>
            ) : (
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        )}

        {/* Helper text */}
        {helperText && (
          <p 
            className={cn(
              "text-xs mt-1",
              error ? "text-[hsl(var(--danger-solid))]" : success ? "text-[hsl(var(--success-subtle))]" : "text-[hsl(var(--content-muted))]"
            )}
            data-testid="input-helper-text"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

/*
Usage Examples:

// Basic input
<Input placeholder="Enter your email" />

// With helper text
<Input 
  placeholder="Search movies..." 
  helperText="Search by title, director, or actor"
/>

// Error state
<Input 
  placeholder="Password"
  type="password"
  error
  helperText="Password must be at least 8 characters"
/>

// Success state  
<Input 
  value="john@example.com"
  success
  helperText="Email verified"
/>

// With clear button
<Input 
  value="Search term"
  showClear
  onClear={() => console.log('cleared')}
/>

// Movie search example
<Input 
  placeholder="Search for movies..."
  className="w-full max-w-md"
  leftIcon={<Search className="size-4" />}
/>

// Disabled state
<Input 
  placeholder="Disabled input" 
  disabled 
  helperText="This field is not editable"
/>
*/