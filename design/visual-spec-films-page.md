# Visual Specification: Films Page Design

## Overview
Comprehensive design specification for the Films page, combining insights from Letterboxd's cinematic aesthetic, Trakt's dashboard efficiency, and TMDB's information architecture. This specification provides detailed wireframes, component states, and implementation guidelines.

## Page Structure & Layout

### Header Section
```
┌─────────────────────────────────────────────────────────────┐
│  FILMS                                    [Search Bar]  [⚙] │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                            │
│  │ All │ │Watch│ │Fav  │ │List │         Sort: [Popular ▼] │
│  └─────┘ └─────┘ └─────┘ └─────┘                            │
└─────────────────────────────────────────────────────────────┘
```

**Components:**
- Page title with semantic hierarchy (`text-content-primary, text-3xl font-bold`)
- Search input with focus states (`border-focus` on focus)
- Filter tabs using semantic surface tokens
- Sort dropdown with semantic content colors
- Settings/filter toggle

**Responsive Behavior:**
- Mobile: Stack title and search vertically, collapse sort to icon
- Tablet: Maintain horizontal layout with adjusted spacing
- Desktop: Full horizontal layout with generous spacing

### Filter Bar
```
┌─────────────────────────────────────────────────────────────┐
│  Genres: [Action] [Drama] [Comedy] [+]                      │
│  Year: [2020-2024]  Rating: [★★★+]  Status: [All]          │
│  ┌─────────────────┐  [Clear Filters]                       │
│  │ Applied Filters │                                        │
│  │ • Action        │                                        │
│  │ • 2023-2024    │                                        │
│  └─────────────────┘                                        │
└─────────────────────────────────────────────────────────────┘
```

**Visual Specifications:**
- Background: `bg-surface-secondary`
- Border: `border-border-primary`
- Filter chips: `bg-brand-primary` when active, `bg-surface-tertiary` when inactive
- Typography: `text-content-secondary` for labels, `text-content-primary` for values

### Main Content Area

#### Grid Layout
```
┌──┬──┬──┬──┬──┐  ← Desktop: 5 columns (180px min-width)
│▓▓│▓▓│▓▓│▓▓│▓▓│  ← Tablet: 4 columns (150px min-width)  
│▓▓│▓▓│▓▓│▓▓│▓▓│  ← Mobile: 3 columns (120px min-width)
└──┴──┴──┴──┴──┘
```

**Grid Specifications:**
- Uses CSS Grid with `grid-template-columns: repeat(auto-fill, minmax(var(--min-width), 1fr))`
- Gap: `gap-6` (24px) on desktop, `gap-4` (16px) on mobile
- Aspect ratio: `aspect-poster` (2:3 ratio)

## Component Specifications

### Movie Card Component

#### Default State
```
┌─────────────────┐
│     [POSTER]    │ ← aspect-poster ratio
│                 │ ← hover: opacity-90 transition
│                 │
│  [🏆][♥][👁]   │ ← Status badges (top-right)
└─────────────────┘
│ Movie Title     │ ← text-content-primary, font-medium
│ (Year)          │ ← text-content-tertiary, text-xs
│ ★★★★☆ 4.2      │ ← Rating display
└─────────────────┘
```

**Visual Properties:**
- Card Background: `bg-surface-elevated`
- Border: `border-border-primary`
- Border Radius: `rounded-lg`
- Shadow: `shadow-base` default, `shadow-lg` on hover
- Transition: `transition-all duration-300`

#### Hover State
```
┌─────────────────┐
│   [BACKDROP]    │ ← Slightly scaled (scale-105)
│    ┌─────┐      │ ← Overlay with actions
│    │Watch│      │ ← Primary button: bg-brand-primary
│    │ ♥ + │      │ ← Secondary actions
│    └─────┘      │
└─────────────────┘
│ Movie Title     │ ← Enhanced contrast
│ (Year) | Genre  │ ← Additional metadata
│ ★★★★☆ 4.2      │ ← Maintains rating
└─────────────────┘
```

**Hover Enhancements:**
- Scale: `hover:scale-105`
- Overlay: `bg-surface-overlay` (0.6 opacity)
- Button visibility: `opacity-0` to `opacity-100`
- Shadow elevation: `hover:shadow-lg`

#### Loading State (Skeleton)
```
┌─────────────────┐
│                 │ ← Shimmer animation
│   ░░░░░░░░░     │ ← Skeleton placeholder
│   ░░░░░░░░░     │ ← Uses shimmer utility class
│                 │
└─────────────────┘
│ ░░░░░░░░░       │ ← Title skeleton
│ ░░░░            │ ← Year skeleton
│ ░░░░░ ░░        │ ← Rating skeleton
└─────────────────┘
```

**Skeleton Specifications:**
- Background: `bg-surface-secondary`
- Animation: `animate-shimmer` (custom animation)
- Border radius matches card design
- Maintains aspect ratios

### Search & Filter Components

#### Search Input
```
┌─────────────────────────────────────┐
│  🔍  Search movies...               │ ← Placeholder text
└─────────────────────────────────────┘
     ↑
  Icon color: content-tertiary
  Focus: border-focus, ring-focus
```

**States:**
- Default: `border-border-primary`
- Focus: `border-border-focus ring-2 ring-border-focus/20`
- Error: `border-border-error` (if search fails)

#### Filter Dropdown
```
Genre ▼                    │ Year Range        │ Rating
┌─────────────────┐       │ ┌───┐ ── ┌───┐   │ ★★★★★
│ ✓ Action        │       │ │2020│    │2024│   │ ★★★★☆  
│ ✓ Drama         │       │ └───┘    └───┘   │ ★★★☆☆
│   Comedy        │       │                  │ ★★☆☆☆
│   Horror        │       │                  │ ★☆☆☆☆
│   Sci-Fi        │       │                  │ ☆☆☆☆☆
└─────────────────┘       │                  │
```

**Visual Properties:**
- Dropdown background: `bg-surface-elevated`
- Border: `border-border-primary`
- Selected items: `bg-brand-primary text-content-inverse`
- Hover: `bg-surface-secondary`

### Pagination Component
```
┌─────────────────────────────────────────────────────────┐
│  ← Prev    [1] [2] [3] ... [45] [46] [47]    Next →    │
└─────────────────────────────────────────────────────────┘
```

**States:**
- Current page: `bg-brand-primary text-content-inverse`
- Inactive page: `text-content-secondary hover:text-content-primary`
- Disabled: `text-content-disabled cursor-not-allowed`

## Responsive Design Specifications

### Mobile (320px - 767px)
- **Grid**: 3 columns, 120px minimum width
- **Gap**: 16px between cards
- **Typography**: Reduced font sizes (scale down by 0.875x)
- **Search**: Full width, stack with filters
- **Navigation**: Collapsed hamburger menu

### Tablet (768px - 1023px)  
- **Grid**: 4 columns, 150px minimum width
- **Gap**: 20px between cards
- **Typography**: Standard scale
- **Search**: 50% width, inline filters
- **Navigation**: Horizontal tabs

### Desktop (1024px+)
- **Grid**: 5-6 columns, 180px minimum width  
- **Gap**: 24px between cards
- **Typography**: Full scale with hierarchy
- **Search**: 40% width, full filter bar
- **Navigation**: Full horizontal layout

## Animation & Interaction Patterns

### Card Interactions
```css
/* Hover lift effect */
.movie-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.movie-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: var(--shadow-lg);
}

/* Stagger loading animation */
.movie-grid-item:nth-child(n) {
  animation: slideUp 0.4s ease-out;
  animation-delay: calc(var(--index) * 0.1s);
}
```

### Filter Animations
- **Chip Selection**: Scale and color transition (0.2s ease-out)
- **Dropdown Open**: Slide down with opacity (0.3s ease-out)
- **Results Update**: Fade out old, fade in new (0.4s ease-in-out)

### Loading States
- **Initial Load**: Skeleton cards with shimmer animation
- **Pagination**: Fade transition between page sets
- **Filter Update**: Loading overlay with spinner

## Accessibility Specifications

### Color Contrast
All color combinations meet WCAG AA standards:
- Primary text on background: 4.5:1 minimum
- Secondary text on background: 4.5:1 minimum
- Focus indicators: 3:1 minimum with background

### Keyboard Navigation
- **Tab Order**: Search → Filters → Sort → Grid → Pagination
- **Focus Indicators**: `ring-2 ring-border-focus` on all interactive elements
- **Grid Navigation**: Arrow keys navigate between cards
- **Action Shortcuts**: Space/Enter to activate cards and buttons

### Screen Reader Support
- **Card Labels**: "Movie title, year, rating X out of 5 stars"
- **Filter Status**: "Applied filters: Action, Drama, Released 2023-2024"
- **Loading States**: "Loading movies..." announcements
- **Result Count**: "Showing 240 of 1,847 movies"

## Implementation Notes

### CSS Custom Properties Usage
```css
/* Card styling using semantic tokens */
.movie-card {
  background-color: hsl(var(--surface-elevated));
  border: 1px solid hsl(var(--border-primary));
  color: hsl(var(--content-primary));
}

.movie-card:hover {
  border-color: hsl(var(--border-secondary));
  transform: translateY(-2px);
}

/* Rating stars using semantic colors */
.rating-star.filled {
  color: hsl(var(--rating-star-filled));
}

.rating-star.empty {
  color: hsl(var(--rating-star-empty));
}
```

### Responsive Grid Implementation
```css
.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
}

@media (min-width: 768px) {
  .movie-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .movie-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1.5rem;
  }
}
```

## Performance Considerations

### Image Loading
- **Lazy Loading**: `loading="lazy"` for poster images
- **Progressive Enhancement**: Skeleton → Low-res → High-res
- **Responsive Images**: Multiple sizes for different breakpoints

### Virtual Scrolling
- **Large Lists**: Implement virtual scrolling for 1000+ movies
- **Pagination**: Server-side pagination with client-side caching
- **Prefetching**: Load next page when user reaches 80% scroll

### State Management
- **Filter State**: URL-based state for shareable links
- **Cache Strategy**: Cache movie data for 5 minutes
- **Optimistic Updates**: Immediate UI feedback for user actions

This specification provides a comprehensive foundation for implementing a cohesive, accessible, and performant Films page that leverages the semantic token system and follows established design patterns from the competitive research.