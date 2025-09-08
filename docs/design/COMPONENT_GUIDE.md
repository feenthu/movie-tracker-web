# Component Design Guide

## Overview

This guide documents the comprehensive token-driven shadcn-style component library built for the movie tracker application. All components follow strict semantic token architecture and accessibility standards.

## Design System Foundation

### Semantic Token Architecture
- **Surface Tokens**: `--surface-primary`, `--surface-secondary`, `--surface-tertiary`, `--surface-elevated`, `--surface-overlay`
- **Content Tokens**: `--content-primary`, `--content-secondary`, `--content-tertiary`, `--content-inverse`, `--content-disabled`
- **Brand Tokens**: `--brand-primary`, `--brand-secondary`, with hover variants
- **Feedback Tokens**: `--feedback-success`, `--feedback-warning`, `--feedback-error`, `--feedback-info`
- **Border Tokens**: `--border-semantic-primary`, `--border-semantic-secondary`, `--border-semantic-focus`, `--border-error`
- **Rating Tokens**: `--rating-star-filled`, `--rating-star-empty`, `--rating-heart-filled`, `--rating-heart-empty`

### Accessibility Standards
- All components meet WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text)
- Proper ARIA labels, roles, and properties
- Keyboard navigation support
- Focus-visible indicators
- Screen reader compatibility

## Component Library

### 1. Button (`/components/ui/button.tsx`)

**Purpose**: Primary interaction element with multiple variants and states.

**Variants**:
- `primary` - Main action buttons (CTAs, form submissions)
- `secondary` - Secondary actions (cancel, alternative options)
- `ghost` - Subtle actions (toolbar buttons, navigation)
- `destructive` - Dangerous actions (delete, remove)
- `subtle` - Minimal emphasis actions
- `link` - Text-like buttons for navigation

**Sizes**: `sm`, `md`, `lg`, `icon`

**Features**:
- Loading states with spinner
- Left/right icon slots
- Disabled states
- Focus ring with semantic tokens

**When to Use**:
- Primary: Call-to-action buttons, form submissions
- Secondary: Cancel buttons, alternative actions
- Ghost: Toolbar buttons, subtle interactions
- Destructive: Delete confirmations, destructive actions
- Link: In-text navigation, breadcrumb links

### 2. Card (`/components/ui/card.tsx`)

**Purpose**: Content containers with structured layouts and optional elevation.

**Slots**:
- `CardHeader` - Title, subtitle, and description area
- `CardTitle` - Main heading
- `CardSubtitle` - Secondary heading (new addition)
- `CardDescription` - Descriptive text
- `CardContent` - Main content area
- `CardFooter` - Action area

**Features**:
- `elevated` prop for hover effects
- Semantic content tokens for consistent typography
- Shadow transitions using utility classes

**When to Use**:
- Movie cards with poster, title, and metadata
- Settings panels with grouped controls
- Dashboard widgets with statistics
- Profile information displays

### 3. Input (`/components/ui/input.tsx`)

**Purpose**: Text input with comprehensive validation and helper states.

**Features**:
- Error/success validation states with icons
- Helper text support
- Clear button functionality (optional)
- Semantic border colors for different states
- Focus ring indicators

**Validation States**:
- Default: Standard input appearance
- Error: Red border with error icon and message
- Success: Green border with success icon and message
- Helper: Neutral helper text below input

**When to Use**:
- Form inputs with validation requirements
- Search fields with clear functionality
- Settings inputs with helper guidance

### 4. Textarea (`/components/ui/textarea.tsx`)

**Purpose**: Multi-line text input with validation states.

**Features**:
- Consistent with Input component validation patterns
- Vertical resize only
- Error/success states with appropriate styling
- Helper text support

**When to Use**:
- Movie reviews and comments
- Long-form content entry
- Feedback forms

### 5. Select (`/components/ui/select.tsx`)

**Purpose**: Dropdown selection with Radix UI integration and validation.

**Features**:
- Radix Select primitive integration
- Validation states matching Input/Textarea patterns
- Keyboard navigation support
- `SelectWithValidation` wrapper component
- Consistent styling with other form elements

**When to Use**:
- Genre selection
- Rating filters
- Sort options
- Settings dropdowns

### 6. Badge (`/components/ui/badge.tsx`)

**Purpose**: Status indicators and labels with multiple style options.

**Variants**: `neutral`, `brand`, `success`, `warning`, `error`
**Styles**: `solid`, `soft`, `outline`

**Style Combinations**:
- Solid: High contrast, primary emphasis
- Soft: Subtle background, medium emphasis
- Outline: Border only, minimal emphasis

**When to Use**:
- Movie genres (`neutral` with `outline`)
- Release status (`success` for available, `warning` for limited)
- User roles (`brand` with `solid`)
- Error states (`error` with `soft`)

### 7. Tabs (`/components/ui/tabs.tsx`)

**Purpose**: Content organization with two distinct visual styles.

**Styles**:
- `pill` - Background-based selection (default)
- `underline` - Border-based selection for navigation-style tabs

**Features**:
- Radix Tabs primitive integration
- Keyboard navigation
- Semantic token styling
- Responsive design

**When to Use**:
- Pill style: Settings panels, content categories
- Underline style: Navigation tabs, movie details sections (Overview, Cast, Reviews)

### 8. Dialog (`/components/ui/dialog.tsx`)

**Purpose**: Modal overlays for focused interactions.

**Features**:
- Radix Dialog primitive integration
- Semantic overlay and surface tokens
- Auto-focus management
- ESC key handling
- Backdrop click dismissal

**Components**:
- `DialogHeader` - Title and description area
- `DialogTitle` - Modal heading
- `DialogDescription` - Context information
- `DialogFooter` - Action buttons area

**When to Use**:
- Movie details modal
- Edit profile forms
- Confirmation dialogs
- Settings panels

### 9. Dropdown Menu (`/components/ui/dropdown-menu.tsx`)

**Purpose**: Contextual action menus with rich interaction patterns.

**Features**:
- Radix DropdownMenu primitive integration
- Checkbox and radio item variants
- Keyboard shortcuts display
- Nested submenus support
- Semantic token theming

**When to Use**:
- Movie action menus (add to list, rate, favorite)
- User profile menus
- Bulk action menus
- Context-sensitive options

### 10. Tooltip (`/components/ui/tooltip.tsx`)

**Purpose**: Contextual help and additional information display.

**Features**:
- Radix Tooltip primitive integration
- Semantic surface tokens
- Configurable delay and positioning
- Animation support

**When to Use**:
- Icon button explanations
- Feature descriptions
- Truncated text expansion
- Help hints

### 11. Skeleton (`/components/ui/skeleton.tsx`)

**Purpose**: Loading state indicators using semantic tokens and shimmer animation.

**Variants**:
- `Skeleton` - Basic rectangular placeholder
- `SkeletonText` - Multi-line text placeholders
- `SkeletonAvatar` - Circular avatar placeholders
- `SkeletonCard` - Complete card structure placeholder
- `SkeletonPoster` - Movie poster with text placeholder

**Features**:
- Shimmer animation using CSS tokens
- Multiple size variants
- Composable building blocks

**When to Use**:
- Loading movie grids
- Fetching user data
- Content loading states
- Progressive loading experiences

### 12. Pagination (`/components/ui/pagination.tsx`)

**Purpose**: Navigation through paged content with semantic styling.

**Features**:
- Previous/Next navigation
- Page number links
- Ellipsis for large page ranges
- Semantic button integration
- Accessibility labels

**When to Use**:
- Movie search results
- User lists pagination
- Review pagination
- Any multi-page content

### 13. Breadcrumbs (`/components/ui/breadcrumbs.tsx`)

**Purpose**: Navigation hierarchy display with semantic tokens.

**Features**:
- Customizable separators
- Ellipsis for long paths
- Current page indication
- Link integration (Next.js compatible)
- Semantic focus states

**When to Use**:
- Movie category navigation (Home > Movies > Action > The Dark Knight)
- User profile sections
- Settings navigation
- Multi-level content hierarchies

### 14. Rating Stars (`/components/ui/rating-stars.tsx`)

**Purpose**: Movie rating display and input with precise control.

**Features**:
- 0-5 rating with half-star precision
- Interactive and read-only modes
- Customizable max rating (for 10-point scales)
- Semantic rating tokens
- Size variants (`sm`, `md`, `lg`)
- Optional value display

**Interaction Modes**:
- Read-only: Display existing ratings
- Interactive: Allow user rating input
- Hover preview: Show rating before clicking

**When to Use**:
- Movie rating display
- User rating input
- Review ratings
- Average rating indicators

## Implementation Guidelines

### Token Usage
- Always use semantic tokens instead of hardcoded colors
- Leverage CSS custom properties for theme consistency
- Ensure tokens work in both light and dark modes

### Accessibility Compliance
- Include `data-testid` attributes for testing
- Implement proper ARIA labels and roles
- Support keyboard navigation
- Maintain sufficient color contrast

### Component Composition
- Components are designed to work together harmoniously
- Use consistent spacing and sizing across components
- Follow established patterns for state management

### Responsive Design
- Components adapt to different screen sizes
- Use responsive utility classes where appropriate
- Consider mobile-first design approaches

## Usage Patterns

### Form Compositions
```tsx
<div className="space-y-4">
  <Input 
    placeholder="Movie title" 
    error={errors.title}
  />
  <Select error={errors.genre}>
    <SelectTrigger>
      <SelectValue placeholder="Select genre" />
    </SelectTrigger>
  </Select>
  <RatingStars 
    rating={rating}
    readonly={false}
    onRatingChange={setRating}
  />
</div>
```

### Movie Card Pattern
```tsx
<Card elevated>
  <CardHeader>
    <CardTitle>Movie Title</CardTitle>
    <CardSubtitle>2024 • Action</CardSubtitle>
  </CardHeader>
  <CardContent>
    <RatingStars rating={4.5} showValue />
    <div className="flex gap-2 mt-2">
      <Badge variant="neutral" style="outline">Action</Badge>
      <Badge variant="success" style="soft">Available</Badge>
    </div>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Watch Now</Button>
    <Button variant="ghost" size="icon">
      <Heart className="h-4 w-4" />
    </Button>
  </CardFooter>
</Card>
```

### Navigation Pattern
```tsx
<div className="space-y-4">
  <Breadcrumbs>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Movies</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumbs>
  
  <Tabs defaultValue="popular">
    <TabsList style="underline">
      <TabsTrigger value="popular" style="underline">Popular</TabsTrigger>
      <TabsTrigger value="new" style="underline">New Releases</TabsTrigger>
    </TabsList>
  </Tabs>
</div>
```

## Future Enhancements

### Planned Components
- Switch/Toggle components
- Progress indicators
- Data tables
- Toast notifications
- Command palette

### Token Extensions
- Animation timing tokens
- Shadow elevation tokens
- Typography scale tokens
- Spacing scale refinements

This component library provides a robust foundation for building consistent, accessible, and maintainable UI across the movie tracking application while maintaining flexibility for future enhancements.