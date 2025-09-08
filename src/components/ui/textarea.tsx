import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  success?: boolean;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, success, helperText, ...props }, ref) => {
    const textareaId = React.useId();
    const helperTextId = helperText ? `${textareaId}-helper` : undefined;

    return (
      <div className="w-full">
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[80px] w-full rounded-lg bg-[hsl(var(--surface-raised))] px-3 py-2 text-sm text-[hsl(var(--content-strong))] placeholder:text-[hsl(var(--content-muted))] border border-[hsl(var(--border-subtle))] transition-colors focus-visible:outline-none focus-visible:ring-[hsl(var(--brand-ring))] focus-visible:ring-2 focus-visible:ring-offset-[hsl(var(--surface-canvas))] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 resize-y",
            error && "border-[hsl(var(--danger-solid))] text-[hsl(var(--content-strong))]",
            success && "border-[hsl(var(--success-subtle))]",
            className
          )}
          ref={ref}
          data-testid="textarea"
          aria-describedby={helperTextId}
          aria-invalid={error}
          {...props}
        />
        {helperText && (
          <p
            id={helperTextId}
            className={cn(
              "mt-1 text-xs text-[hsl(var(--content-muted))]",
              error && "text-[hsl(var(--danger-solid))]",
              success && "text-[hsl(var(--success-subtle))]"
            )}
            data-testid="textarea-helper-text"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

/*
Usage Examples:

// Basic textarea
<Textarea placeholder="Enter your message..." />

// Textarea with helper text
<Textarea 
  placeholder="Write your review..." 
  helperText="Share your thoughts about the movie"
/>

// Error state
<Textarea 
  placeholder="Enter your message..." 
  error 
  helperText="Message is required"
/>

// Success state
<Textarea 
  placeholder="Enter your message..." 
  success 
  helperText="Message looks good"
/>

// Disabled textarea
<Textarea 
  placeholder="Disabled textarea" 
  disabled 
/>

// Custom height
<Textarea 
  className="min-h-[120px]" 
  placeholder="Larger textarea..."
/>
*/