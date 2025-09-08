/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        md: "var(--radius-md)", lg: "var(--radius-lg)", xl: "var(--radius-xl)"
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        tokenHover: "var(--elevation-hover)",
        tokenActive: "var(--elevation-active)"
      },
      colors: {
        /* Semantic Surface Colors */
        surface: {
          primary: 'hsl(var(--surface-primary))',
          secondary: 'hsl(var(--surface-secondary))',
          tertiary: 'hsl(var(--surface-tertiary))',
          elevated: 'hsl(var(--surface-elevated))',
          overlay: 'hsl(var(--surface-overlay))',
        },
        /* Semantic Content Colors */
        content: {
          primary: 'hsl(var(--content-primary))',
          secondary: 'hsl(var(--content-secondary))',
          tertiary: 'hsl(var(--content-tertiary))',
          inverse: 'hsl(var(--content-inverse))',
          disabled: 'hsl(var(--content-disabled))',
        },
        /* Brand Colors */
        brand: {
          primary: 'hsl(var(--brand-primary))',
          secondary: 'hsl(var(--brand-secondary))',
          'primary-hover': 'hsl(var(--brand-primary-hover))',
          'secondary-hover': 'hsl(var(--brand-secondary-hover))',
        },
        /* Feedback Colors */
        feedback: {
          success: 'hsl(var(--feedback-success))',
          warning: 'hsl(var(--feedback-warning))',
          error: 'hsl(var(--feedback-error))',
          info: 'hsl(var(--feedback-info))',
        },
        /* Border Colors */
        'border-semantic': {
          primary: 'hsl(var(--border-primary))',
          secondary: 'hsl(var(--border-secondary))',
          focus: 'hsl(var(--border-focus))',
          error: 'hsl(var(--border-error))',
        },
        /* Rating Colors */
        rating: {
          'star-filled': 'hsl(var(--rating-star-filled))',
          'star-empty': 'hsl(var(--rating-star-empty))',
          'heart-filled': 'hsl(var(--rating-heart-filled))',
          'heart-empty': 'hsl(var(--rating-heart-empty))',
        },
        /* Legacy compatibility colors */
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      gridTemplateColumns: {
        'movies': 'repeat(auto-fill, minmax(120px, 1fr))',
        'movies-lg': 'repeat(auto-fill, minmax(150px, 1fr))'
      },
      aspectRatio: {
        'poster': '2/3'
      }
    },
  },
  plugins: [],
}