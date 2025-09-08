# Letterboxd UI Migration Guide (v0.1.2)

This document outlines the migration from MovieTrackerWeb's original theme to the new Letterboxd-inspired design system (Theme v0.1.2).

## 🎨 Token System Migration

### Color Mapping

| Letterboxd Variable | OKLCH Value | MovieTrackerWeb Token | New HSL Value |
|---------------------|-------------|----------------------|---------------|
| `--background` | `1 0 0` / `0.145 0 0` | `--surface-primary` | `0 0% 100%` / `222 47% 9%` |
| `--card` | `1 0 0` / `0.145 0 0` | `--surface-elevated` | `0 0% 100%` / `222 47% 9%` |
| `--secondary` | `0.97 0 0` / `0.269 0 0` | `--surface-muted` | `210 40% 97%` / `222 47% 14%` |
| `--border` | `0.922 0 0` / `0.269 0 0` | `--border-subtle` | `214 32% 91%` / `222 47% 14%` |
| `--primary` | `0.205 0 0` / `0.985 0 0` | `--content-primary` | `222 84% 11%` / `210 40% 98%` |
| `--muted-foreground` | `0.556 0 0` / `0.708 0 0` | `--content-secondary` | `215 16% 56%` / `215 20% 71%` |

### New Tokens Added

- `--surface-canvas`: Main page background
- `--surface-raised`: Card and elevated surfaces 
- `--surface-hover`: Interactive hover states
- `--content-strong`: High-contrast text
- `--content-muted`: Subtle text content
- `--content-onBrand`: Text on brand backgrounds
- `--elevation-xs`: Subtle shadow (0 1px 2px rgba(0,0,0,0.05))
- `--shadow-xs`: Letterboxd-style subtle elevation

## 🧩 Component API Changes

### Button Component

**Old API:**
```tsx
<Button className="gap-2">
  <Plus className="w-4 h-4" />
  Add Item
</Button>
```

**New API:**
```tsx
<Button leftIcon={<Plus />}>Add Item</Button>
<Button rightIcon={<ArrowRight />}>Continue</Button>
<Button loading>Processing...</Button>
```

**New Variants:**
- `primary` (default) - Dark background, white text
- `secondary` - Light background, dark text  
- `ghost` - Transparent background
- `subtle` - Subtle background
- `destructive` - Error/danger actions
- `link` - Text-only link style

**Size Changes:**
- Removed `xl` size
- `sm`: h-9 (was h-8)
- `md`: h-10 (default)
- `lg`: h-11 (was h-12)

### Input Component

**New Props:**
```tsx
<Input 
  error={boolean}
  success={boolean} 
  helperText={string}
  showClear={boolean}
  onClear={() => void}
/>
```

**Old Helper Text Pattern:**
```tsx
<Input placeholder="Email" />
<p className="text-xs text-gray-500">Helper text</p>
```

**New Helper Text Pattern:**
```tsx
<Input 
  placeholder="Email" 
  helperText="Helper text" 
  error={hasError}
/>
```

### Badge Component

**Old Variants:**
- `default`, `secondary`, `destructive`, `outline`

**New Variants (Combined):**
- `neutral-solid`, `neutral-soft`, `neutral-outline`
- `brand-solid`, `brand-soft`, `brand-outline`  
- `success-solid`, `success-soft`, `success-outline`
- `warn-solid`, `warn-soft`, `warn-outline`
- `error-solid`, `error-soft`, `error-outline`

**Migration:**
```tsx
// Old
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>

// New  
<Badge variant="neutral-solid">Default</Badge>
<Badge variant="neutral-soft">Secondary</Badge>
```

### Tabs Component

**New Variant System:**
```tsx
// Pill style (default)
<Tabs defaultValue="tab1">
  <TabsList variant="pill">
    <TabsTrigger variant="pill" value="tab1">Tab 1</TabsTrigger>
  </TabsList>
</Tabs>

// Underline style  
<Tabs defaultValue="tab1">
  <TabsList variant="underline">
    <TabsTrigger variant="underline" value="tab1">Tab 1</TabsTrigger>
  </TabsList>
</Tabs>
```

### Card Component

**New CardSubtitle:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Movie Title</CardTitle>
    <CardSubtitle>2024 • Drama</CardSubtitle> {/* New */}
    <CardDescription>Movie description</CardDescription>
  </CardHeader>
</Card>
```

**Enhanced Hover Effects:**
- Cards now include `hover:shadow-tokenHover` by default
- Subtle shadow animations on interaction

### Rating Stars Component

**New Component:**
```tsx
<RatingStars 
  value={4.5} 
  size="sm" | "md" | "lg"
  interactive={boolean}
  allowHalf={boolean}
  onChange={(rating) => void}
  readOnly={boolean}
  showValue={boolean}
/>
```

## 🎯 Utility Class Updates

### Spacing Classes
- Use semantic tokens: `text-[hsl(var(--content-primary))]`
- No more inline hex colors: ~~`text-gray-900`~~

### Shadow Classes
- `shadow-xs` - Subtle elevation (Letterboxd style)
- `shadow-tokenHover` - Interactive hover elevation  
- `shadow-tokenActive` - Active state elevation

### Border Radius
- `rounded-lg` (10px) - Standard for buttons/cards
- `rounded-xl` (14px) - Large cards  
- `rounded-full` - Badges and pills

## 🚨 Breaking Changes

1. **Button sizes**: `xl` size removed, other sizes adjusted
2. **Badge variants**: Must use combined format (`neutral-solid`)  
3. **Tab variants**: Must specify both `TabsList` and `TabsTrigger` variants
4. **Icon sizing**: Icons capped at `size-4` (16px) for sm/md, `size-5` (20px) for lg
5. **Helper text**: Must use `helperText` prop instead of separate `<p>` elements

## 🎨 Color System

### "Don't Copy" Reminders

**❌ Never use these:**
- Letterboxd brand name or logo
- Exact color values from Letterboxd
- Trademarked terms or imagery

**✅ Do use these:**
- Semantic token names (`--surface-*`, `--content-*`)
- Similar visual patterns and density
- Comparable spacing and typography scales

### Semantic Token Philosophy

```css
/* ✅ Good - Semantic tokens */
.button {
  background: hsl(var(--content-primary));
  color: hsl(var(--content-inverse));
}

/* ❌ Bad - Hard-coded colors */
.button {
  background: #1a1a1a;
  color: #ffffff;
}
```

## 📱 Responsive Behavior

All components now use:
- `max-w-screen-xl` containers
- `px-4 sm:px-6 lg:px-8` responsive padding
- Consistent `space-y-8` between sections
- `space-y-4` within sections

## 🧪 Testing Considerations

Key test attributes:
- All components have `data-testid` attributes
- Form components include proper `aria-label` and `aria-describedby`
- Rating stars include appropriate `role` and `aria-valuenow`
- Tabs maintain keyboard navigation support

## 🔄 Migration Checklist

- [ ] Update all button uses to new leftIcon/rightIcon API
- [ ] Replace badge variants with combined format  
- [ ] Add CardSubtitle where appropriate
- [ ] Update tab implementations with variants
- [ ] Replace helper text patterns with helperText prop
- [ ] Remove hard-coded colors in favor of tokens
- [ ] Test keyboard navigation and screen readers
- [ ] Verify dark mode token switching
- [ ] Check responsive behavior at sm/md/lg breakpoints

## 📊 Before/After Comparison

The new system provides:
- **Improved contrast** - WCAG AA compliance in both themes
- **Better spacing** - Consistent rhythm based on Letterboxd patterns  
- **Enhanced interactions** - Subtle hover effects and focus states
- **Movie-optimized** - Rating systems, poster grids, status badges
- **Cleaner tokens** - Semantic naming over hard-coded values

---

*This migration maintains the spirit and functionality of Letterboxd's design while using your own semantic token system and component architecture.*