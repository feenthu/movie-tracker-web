'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Plus, 
  Download, 
  Heart, 
  Star, 
  User, 
  Settings, 
  Home, 
  ChevronDown,
  MoreHorizontal,
  Edit,
  Trash2,
  Calendar,
  Filter,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

// Import all our token-driven components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardSubtitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Pagination } from '@/components/ui/pagination';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumbs';
import { RatingStars } from '@/components/ui/rating-stars';
import { Skeleton } from '@/components/ui/skeleton';

interface KitchenSinkPageProps {}

export default function KitchenSinkPage({}: KitchenSinkPageProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [ratingValue, setRatingValue] = useState(4);
  const [readOnlyRating] = useState(3.5);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  // Mock validation states
  const [inputError, setInputError] = useState(false);
  const [textareaError, setTextareaError] = useState(false);
  const [selectError, setSelectError] = useState(false);

  // Initialize dark mode on component mount
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Apply dark class to document root for proper theme switching
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', newDarkMode);
    }
    console.log('Dark mode toggled:', newDarkMode);
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Kitchen Sink' }
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-[hsl(var(--surface-primary))]">
        {/* Header with Dark Mode Toggle */}
        <header className="sticky top-0 z-50 border-b border-[hsl(var(--border-primary))] bg-[hsl(var(--surface-elevated))] backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[hsl(var(--content-primary))]">
                  Component Kitchen Sink
                </h1>
                <p className="text-sm text-[hsl(var(--content-secondary))]">
                  Comprehensive showcase of all token-driven components
                </p>
              </div>
              <Button
                onClick={toggleDarkMode}
                variant="secondary"
                size="sm"
                className="gap-2"
              >
                {isDarkMode ? '☀️' : '🌙'}
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </Button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8 space-y-8 bg-[hsl(var(--surface-canvas))]">
          {/* Breadcrumbs Section */}
          <section data-testid="section-breadcrumbs" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Breadcrumbs
            </h2>
            <div className="p-4 border border-[hsl(var(--border-primary))] rounded-lg bg-[hsl(var(--surface-secondary))]">
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <BreadcrumbItem>
                        {item.href ? (
                          <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{item.label}</BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                      {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </section>

          {/* Theme Showcase Section */}
          <section data-testid="section-theme-showcase" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Theme Showcase
            </h2>
            <div className="text-sm text-[hsl(var(--content-secondary))]">
              Current theme: <Badge variant={isDarkMode ? "brand-solid" : "neutral-solid"}>{isDarkMode ? 'Dark' : 'Light'}</Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Light Theme Preview */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-[hsl(var(--content-primary))]">Light Mode Preview</h3>
                <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-4">
                  <div className="flex gap-2">
                    <div className="h-10 px-4 bg-green-600 text-white rounded-lg flex items-center text-sm font-medium">
                      Primary Button
                    </div>
                    <div className="h-10 px-4 bg-gray-100 text-gray-900 border border-gray-200 rounded-lg flex items-center text-sm font-medium">
                      Secondary
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                    </div>
                    <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Dark Theme Preview */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-[hsl(var(--content-primary))]">Dark Mode Preview</h3>
                <div className="p-6 bg-gray-900 rounded-lg border border-gray-700 space-y-4">
                  <div className="flex gap-2">
                    <div className="h-10 px-4 bg-green-600 text-white rounded-lg flex items-center text-sm font-medium">
                      Primary Button
                    </div>
                    <div className="h-10 px-4 bg-gray-800 text-gray-100 border border-gray-600 rounded-lg flex items-center text-sm font-medium">
                      Secondary
                    </div>
                  </div>
                  <div className="p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                      <div className="h-4 bg-gray-700 rounded w-24"></div>
                    </div>
                    <div className="h-3 bg-gray-700 rounded w-full mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Buttons Section */}
          <section data-testid="section-buttons" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Buttons
            </h2>
            
            {/* Button Variants */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="subtle">Subtle</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            {/* Button Sizes */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* Loading States */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">Loading States</h3>
              <div className="flex flex-wrap gap-3">
                <Button loading>Loading</Button>
                <Button variant="secondary" loading>Secondary Loading</Button>
                <Button variant="destructive" loading>Destructive Loading</Button>
              </div>
            </div>

            {/* With Icons */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">With Icons</h3>
              <div className="flex flex-wrap gap-3">
                <Button leftIcon={<Plus />}>Add Item</Button>
                <Button variant="secondary" leftIcon={<Download />}>Download</Button>
                <Button variant="ghost" leftIcon={<Heart />}>Like</Button>
                <Button rightIcon={<ArrowRight />}>Continue</Button>
              </div>
            </div>
          </section>

          {/* Inputs Section */}
          <section data-testid="section-inputs" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Inputs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Default State */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                  Default Input
                </label>
                <Input 
                  placeholder="Enter text..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  helperText="Helper text"
                />
              </div>

              {/* Error State */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                  Error State
                </label>
                <Input 
                  placeholder="This has an error"
                  error
                  helperText="This field is required"
                />
              </div>

              {/* Success State */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                  Success State
                </label>
                <Input 
                  placeholder="Valid input"
                  value="valid@email.com"
                  success
                  helperText="Email is valid"
                />
              </div>

              {/* With Clear Button */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                  With Clear Button
                </label>
                <Input 
                  placeholder="Clearable input"
                  value="Clear me"
                  showClear={true}
                  onClear={() => console.log('Cleared')}
                />
              </div>

              {/* With Search Icon */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                  With Icon
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[hsl(var(--content-tertiary))]" />
                  <Input className="pl-10" placeholder="Search..." />
                </div>
              </div>

              {/* Disabled State */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-disabled))]">
                  Disabled Input
                </label>
                <Input 
                  placeholder="Disabled input"
                  disabled={true}
                />
              </div>
            </div>
          </section>

          {/* Select Section */}
          <section data-testid="section-select" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Select
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                  Default Select
                </label>
                <Select value={selectValue} onValueChange={setSelectValue}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-[hsl(var(--content-tertiary))]">Choose one option</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                  Error State
                </label>
                <Select>
                  <SelectTrigger error={true}>
                    <SelectValue placeholder="Select with error" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-[hsl(var(--feedback-error))]">
                  Please select an option
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                  Success State
                </label>
                <Select defaultValue="option1">
                  <SelectTrigger success={true}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Selected Option</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-[hsl(var(--feedback-success))]">
                  Good choice!
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-disabled))]">
                  Disabled Select
                </label>
                <Select disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Disabled select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Textarea Section */}
          <section data-testid="section-textarea" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Textarea
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                  Default Textarea
                </label>
                <Textarea 
                  placeholder="Enter your message..."
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                />
                <p className="text-xs text-[hsl(var(--content-tertiary))]">
                  {textareaValue.length}/500 characters
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                  Error State
                </label>
                <Textarea 
                  placeholder="This has an error"
                  error={true}
                />
                <p className="text-xs text-[hsl(var(--feedback-error))]">
                  Message is too short
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                  Success State
                </label>
                <Textarea 
                  value="This is a valid message that meets all requirements."
                  success={true}
                />
                <p className="text-xs text-[hsl(var(--feedback-success))]">
                  Perfect length!
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-disabled))]">
                  Disabled Textarea
                </label>
                <Textarea 
                  placeholder="Disabled textarea"
                  disabled={true}
                />
              </div>
            </div>
          </section>

          {/* Badges Section */}
          <section data-testid="section-badges" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Badges
            </h2>

            {/* Solid Style */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">Solid Style</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="neutral-solid">Neutral</Badge>
                <Badge variant="brand-solid">Brand</Badge>
                <Badge variant="success-solid">Success</Badge>
                <Badge variant="warn-solid">Warning</Badge>
                <Badge variant="error-solid">Error</Badge>
              </div>
            </div>

            {/* Soft Style */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">Soft Style</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="neutral-soft">Neutral</Badge>
                <Badge variant="brand" >Brand</Badge>
                <Badge variant="success" >Success</Badge>
                <Badge variant="warn-solid">Warning</Badge>
                <Badge variant="error-solid">Error</Badge>
              </div>
            </div>

            {/* Outline Style */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">Outline Style</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="neutral-soft">Neutral</Badge>
                <Badge variant="brand" >Brand</Badge>
                <Badge variant="success" >Success</Badge>
                <Badge variant="warn-solid">Warning</Badge>
                <Badge variant="error-solid">Error</Badge>
              </div>
            </div>
          </section>

          {/* Tabs Section */}
          <section data-testid="section-tabs" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Tabs
            </h2>

            {/* Pill Style */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">Pill Style</h3>
              <Tabs defaultValue="tab1">
                <TabsList variant="pill">
                  <TabsTrigger variant="pill" value="tab1">Overview</TabsTrigger>
                  <TabsTrigger variant="pill" value="tab2">Reviews</TabsTrigger>
                  <TabsTrigger variant="pill" value="tab3">Cast</TabsTrigger>
                  <TabsTrigger variant="pill" value="tab4">Details</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4">
                  <div className="p-4 bg-[hsl(var(--surface-secondary))] rounded-lg">
                    <h4 className="font-medium text-[hsl(var(--content-primary))]">Overview Content</h4>
                    <p className="text-sm text-[hsl(var(--content-secondary))] mt-2">
                      This is the overview tab content with detailed information about the selected item.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="mt-4">
                  <div className="p-4 bg-[hsl(var(--surface-secondary))] rounded-lg">
                    <h4 className="font-medium text-[hsl(var(--content-primary))]">Reviews Content</h4>
                    <p className="text-sm text-[hsl(var(--content-secondary))] mt-2">
                      User reviews and ratings would be displayed here.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="mt-4">
                  <div className="p-4 bg-[hsl(var(--surface-secondary))] rounded-lg">
                    <h4 className="font-medium text-[hsl(var(--content-primary))]">Cast Content</h4>
                    <p className="text-sm text-[hsl(var(--content-secondary))] mt-2">
                      Cast and crew information would be shown here.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="tab4" className="mt-4">
                  <div className="p-4 bg-[hsl(var(--surface-secondary))] rounded-lg">
                    <h4 className="font-medium text-[hsl(var(--content-primary))]">Details Content</h4>
                    <p className="text-sm text-[hsl(var(--content-secondary))] mt-2">
                      Technical details and additional information.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Underline Style */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">Underline Style</h3>
              <Tabs defaultValue="analytics">
                <TabsList variant="underline">
                  <TabsTrigger variant="underline" value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger variant="underline" value="performance">Performance</TabsTrigger>
                  <TabsTrigger variant="underline" value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="analytics" className="mt-4">
                  <div className="p-4 bg-[hsl(var(--surface-secondary))] rounded-lg">
                    <h4 className="font-medium text-[hsl(var(--content-primary))]">Analytics Dashboard</h4>
                    <p className="text-sm text-[hsl(var(--content-secondary))] mt-2">
                      Charts and metrics would be displayed in this section.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="performance" className="mt-4">
                  <div className="p-4 bg-[hsl(var(--surface-secondary))] rounded-lg">
                    <h4 className="font-medium text-[hsl(var(--content-primary))]">Performance Metrics</h4>
                    <p className="text-sm text-[hsl(var(--content-secondary))] mt-2">
                      Performance data and optimization suggestions.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="settings" className="mt-4">
                  <div className="p-4 bg-[hsl(var(--surface-secondary))] rounded-lg">
                    <h4 className="font-medium text-[hsl(var(--content-primary))]">Configuration</h4>
                    <p className="text-sm text-[hsl(var(--content-secondary))] mt-2">
                      Application settings and preferences.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Cards Section */}
          <section data-testid="section-cards" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Cards
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Basic Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>
                    A simple card with header and content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[hsl(var(--content-secondary))]">
                    This is the main content area of the card. It can contain any type of content.
                  </p>
                </CardContent>
              </Card>

              {/* Card with Footer */}
              <Card>
                <CardHeader>
                  <CardTitle>Card with Footer</CardTitle>
                  <CardDescription>
                    Card that includes a footer section
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[hsl(var(--content-secondary))]">
                    Content area with additional footer actions below.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost" size="sm">Cancel</Button>
                  <Button size="sm">Save</Button>
                </CardFooter>
              </Card>

              {/* Hover Card */}
              <Card className="hover-lift cursor-pointer">
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>
                    Hover to see the lift effect
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[hsl(var(--brand-primary))] rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[hsl(var(--content-primary))]">Premium Feature</p>
                      <p className="text-sm text-[hsl(var(--content-secondary))]">Click to learn more</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card with Badge */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Movie Card</CardTitle>
                      <CardDescription>
                        The Dark Knight (2008)
                      </CardDescription>
                    </div>
                    <Badge variant="success-solid">9.0</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-[hsl(var(--content-secondary))]">
                      When the menace known as the Joker wreaks havoc upon Gotham City...
                    </p>
                    <div className="flex items-center gap-2">
                      <RatingStars value={4.5} size="sm" readonly />
                      <span className="text-sm text-[hsl(var(--content-tertiary))]">(1.2M)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[hsl(var(--content-secondary))]">Movies Watched</span>
                      <span className="text-lg font-semibold text-[hsl(var(--content-primary))]">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[hsl(var(--content-secondary))]">Avg Rating</span>
                      <span className="text-lg font-semibold text-[hsl(var(--content-primary))]">4.2</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[hsl(var(--content-secondary))]">This Month</span>
                      <Badge variant="success" >+12</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Loading Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Loading State</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Dialog Section */}
          <section data-testid="section-dialog" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Dialog
            </h2>

            <div className="flex flex-wrap gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm Action</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to delete this item? This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="ghost">Cancel</Button>
                    <Button variant="destructive">Delete</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary">Settings Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>User Settings</DialogTitle>
                    <DialogDescription>
                      Update your account preferences and settings.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Display Name</label>
                      <Input placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Notifications</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="ghost">Cancel</Button>
                    <Button>Save Changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </section>

          {/* Dropdown Menu Section */}
          <section data-testid="section-dropdown" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Dropdown Menu
            </h2>

            <div className="flex flex-wrap gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="gap-2">
                    Actions
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2">
                    <Edit className="w-4 h-4" />
                    Edit
                    <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2">
                    <Download className="w-4 h-4" />
                    Download
                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2 text-[hsl(var(--feedback-error))]">
                    <Trash2 className="w-4 h-4" />
                    Delete
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="gap-2">
                      <Settings className="w-4 h-4" />
                      Preferences
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Theme</DropdownMenuItem>
                      <DropdownMenuItem>Language</DropdownMenuItem>
                      <DropdownMenuItem>Notifications</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Share</DropdownMenuItem>
                  <DropdownMenuItem>Export</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="gap-2">
                    <User className="w-4 h-4" />
                    Profile Menu
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2">
                    <User className="w-4 h-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2">
                    <Settings className="w-4 h-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2">
                    <Calendar className="w-4 h-4" />
                    Calendar
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </section>

          {/* Tooltip Section */}
          <section data-testid="section-tooltip" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Tooltip
            </h2>

            <div className="flex flex-wrap gap-6">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a helpful tooltip message</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to favorites</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="inline-flex items-center gap-2 p-2 rounded border border-[hsl(var(--border-primary))] bg-[hsl(var(--surface-secondary))]">
                    <Settings className="w-4 h-4 text-[hsl(var(--content-secondary))]" />
                    <span className="text-sm text-[hsl(var(--content-primary))]">Settings</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Configure application settings</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge variant="warn-solid" className="cursor-help">
                    Beta
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This feature is currently in beta testing</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </section>

          {/* Pagination Section */}
          <section data-testid="section-pagination" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Pagination
            </h2>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">
                  Standard Pagination
                </h3>
                <Pagination 
                  currentPage={currentPage}
                  totalPages={10}
                  onPageChange={(page) => {
                    setCurrentPage(page);
                    console.log('Page changed to:', page);
                  }}
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">
                  Large Dataset (50 pages)
                </h3>
                <Pagination 
                  currentPage={25}
                  totalPages={50}
                  onPageChange={(page) => console.log('Page changed to:', page)}
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">
                  Small Dataset (3 pages)
                </h3>
                <Pagination 
                  currentPage={2}
                  totalPages={3}
                  onPageChange={(page) => console.log('Page changed to:', page)}
                />
              </div>
            </div>
          </section>

          {/* Rating Stars Section */}
          <section data-testid="section-rating" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Rating Stars
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Interactive Ratings */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">
                  Interactive Ratings
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                      Rate this movie (Large)
                    </label>
                    <RatingStars 
                      value={ratingValue}
                      onChange={setRatingValue}
                      size="lg"
                    />
                    <p className="text-xs text-[hsl(var(--content-tertiary))]">
                      Current rating: {ratingValue}/5
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                      Rate this movie (Medium)
                    </label>
                    <RatingStars 
                      value={3}
                      onChange={(value) => console.log('Rating changed to:', value)}
                      size="md"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[hsl(var(--content-primary))]">
                      Rate this movie (Small)
                    </label>
                    <RatingStars 
                      value={2}
                      onChange={(value) => console.log('Rating changed to:', value)}
                      size="sm"
                    />
                  </div>
                </div>
              </div>

              {/* Read-only Ratings */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-[hsl(var(--content-secondary))]">
                  Read-only Ratings
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-[hsl(var(--content-primary))]">
                      Average Rating
                    </p>
                    <div className="flex items-center gap-2">
                      <RatingStars 
                        value={readOnlyRating}
                        readonly
                        size="lg"
                      />
                      <span className="text-sm text-[hsl(var(--content-secondary))]">
                        {readOnlyRating}/5 (2,847 reviews)
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-[hsl(var(--content-primary))]">
                      Your Rating
                    </p>
                    <div className="flex items-center gap-2">
                      <RatingStars 
                        value={4}
                        readonly
                        size="md"
                      />
                      <span className="text-sm text-[hsl(var(--content-secondary))]">
                        4/5
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-[hsl(var(--content-primary))]">
                      Compact Rating
                    </p>
                    <div className="flex items-center gap-2">
                      <RatingStars 
                        value={4.8}
                        readonly
                        size="sm"
                      />
                      <span className="text-xs text-[hsl(var(--content-tertiary))]">
                        4.8
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-[hsl(var(--content-primary))]">
                      No Rating Yet
                    </p>
                    <div className="flex items-center gap-2">
                      <RatingStars 
                        value={0}
                        readonly
                        size="md"
                      />
                      <span className="text-sm text-[hsl(var(--content-secondary))]">
                        Not rated
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skeletons Section */}
          <section data-testid="section-skeletons" className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-[hsl(var(--content-primary))]">
              Skeletons
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Text Skeletons */}
              <Card>
                <CardHeader>
                  <CardTitle>Text Loading</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                    <Skeleton className="h-6 w-2/3 mt-4" />
                  </div>
                </CardContent>
              </Card>

              {/* Profile Skeleton */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Loading</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Skeleton className="w-12 h-12 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Movie Poster Skeleton */}
              <Card>
                <CardHeader>
                  <CardTitle>Movie Poster</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Skeleton className="w-full aspect-[2/3] rounded-md" />
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-8" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dashboard Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex justify-between items-center">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-6 w-12" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* List Items */}
              <Card>
                <CardHeader>
                  <CardTitle>List Loading</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Skeleton className="w-8 h-8 rounded" />
                        <div className="space-y-1 flex-1">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-3 w-2/3" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Complex Layout */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-32" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                    <Skeleton className="h-8 w-16 rounded-full" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Skeleton className="h-24 w-full rounded" />
                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-16" />
                      <Skeleton className="h-8 w-20" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[hsl(var(--border-primary))] bg-[hsl(var(--surface-secondary))] mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-sm text-[hsl(var(--content-secondary))]">
                  Kitchen Sink Demo - Token-driven Component Library v0.1
                </p>
                <p className="text-xs text-[hsl(var(--content-tertiary))] mt-1">
                  Showcasing 14 comprehensive UI components with dark mode support
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="brand" >v0.1.0</Badge>
                <Badge variant="success" >
                  {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                </Badge>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}