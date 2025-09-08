import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Clock, Star, AlertCircle, Info } from 'lucide-react'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile badge component for labeling, status indication, and categorization. Features 15 semantic variants with consistent styling.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'neutral-solid', 'neutral-soft', 'neutral-outline',
        'brand-solid', 'brand-soft', 'brand-outline',
        'success-solid', 'success-soft', 'success-outline',
        'warn-solid', 'warn-soft', 'warn-outline',
        'error-solid', 'error-soft', 'error-outline'
      ],
      description: 'The semantic variant and style of the badge',
    },
    children: {
      control: { type: 'text' },
      description: 'Badge content',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'neutral-solid',
  },
}

export const SemanticVariants: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl max-w-4xl">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Semantic Badge Variants</h3>
        <p className="text-sm text-slate-600">15 variants across 5 semantic meanings and 3 visual styles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Solid Variants */}
        <div className="space-y-4">
          <h4 className="font-medium text-slate-700 text-center">Solid Style</h4>
          <div className="space-y-3 text-center">
            <div className="space-y-2">
              <Badge variant="neutral-solid">Neutral Solid</Badge>
              <p className="text-xs text-slate-500">General purpose, default state</p>
            </div>
            <div className="space-y-2">
              <Badge variant="brand-solid">Brand Solid</Badge>
              <p className="text-xs text-slate-500">Primary brand actions</p>
            </div>
            <div className="space-y-2">
              <Badge variant="success-solid">Success Solid</Badge>
              <p className="text-xs text-slate-500">Completed, approved states</p>
            </div>
            <div className="space-y-2">
              <Badge variant="warn-solid">Warning Solid</Badge>
              <p className="text-xs text-slate-500">Caution, pending states</p>
            </div>
            <div className="space-y-2">
              <Badge variant="error-solid">Error Solid</Badge>
              <p className="text-xs text-slate-500">Errors, dangerous actions</p>
            </div>
          </div>
        </div>

        {/* Soft Variants */}
        <div className="space-y-4">
          <h4 className="font-medium text-slate-700 text-center">Soft Style</h4>
          <div className="space-y-3 text-center">
            <div className="space-y-2">
              <Badge variant="neutral-soft">Neutral Soft</Badge>
              <p className="text-xs text-slate-500">Subtle, secondary info</p>
            </div>
            <div className="space-y-2">
              <Badge variant="brand-soft">Brand Soft</Badge>
              <p className="text-xs text-slate-500">Brand-related, less prominent</p>
            </div>
            <div className="space-y-2">
              <Badge variant="success-soft">Success Soft</Badge>
              <p className="text-xs text-slate-500">Positive feedback, gentle</p>
            </div>
            <div className="space-y-2">
              <Badge variant="warn-soft">Warning Soft</Badge>
              <p className="text-xs text-slate-500">Gentle warnings, tips</p>
            </div>
            <div className="space-y-2">
              <Badge variant="error-soft">Error Soft</Badge>
              <p className="text-xs text-slate-500">Validation errors, soft alerts</p>
            </div>
          </div>
        </div>

        {/* Outline Variants */}
        <div className="space-y-4">
          <h4 className="font-medium text-slate-700 text-center">Outline Style</h4>
          <div className="space-y-3 text-center">
            <div className="space-y-2">
              <Badge variant="neutral-outline">Neutral Outline</Badge>
              <p className="text-xs text-slate-500">Minimal, clean appearance</p>
            </div>
            <div className="space-y-2">
              <Badge variant="brand-outline">Brand Outline</Badge>
              <p className="text-xs text-slate-500">Brand borders, subtle emphasis</p>
            </div>
            <div className="space-y-2">
              <Badge variant="success-outline">Success Outline</Badge>
              <p className="text-xs text-slate-500">Success borders, clean positive</p>
            </div>
            <div className="space-y-2">
              <Badge variant="warn-outline">Warning Outline</Badge>
              <p className="text-xs text-slate-500">Warning borders, subtle caution</p>
            </div>
            <div className="space-y-2">
              <Badge variant="error-outline">Error Outline</Badge>
              <p className="text-xs text-slate-500">Error borders, subtle danger</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete overview of all 15 badge variants. Each semantic meaning (neutral, brand, success, warn, error) comes in three visual styles (solid, soft, outline) for different emphasis levels.',
      },
    },
  },
}

export const MovieUseCases: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl max-w-6xl">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Movie App Badge Usage</h3>
        <p className="text-sm text-slate-600">Real-world examples in movie tracking contexts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Movie Metadata */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Movie Metadata</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2 text-slate-700">Genre & Categories</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="brand-soft">Sci-Fi</Badge>
                <Badge variant="brand-soft">Adventure</Badge>
                <Badge variant="brand-soft">Drama</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2 text-slate-700">Release Info</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="neutral-outline">2024</Badge>
                <Badge variant="neutral-outline">PG-13</Badge>
                <Badge variant="neutral-outline">2h 46min</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2 text-slate-700">Quality & Format</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success-soft">4K UHD</Badge>
                <Badge variant="success-soft">HDR</Badge>
                <Badge variant="neutral-soft">Dolby Atmos</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status Indicators */}
        <Card className="bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Status & Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2 text-slate-700">Watch Status</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success-solid">
                  <Check className="w-3 h-3 mr-1" />
                  Watched
                </Badge>
                <Badge variant="warn-solid">
                  <Clock className="w-3 h-3 mr-1" />
                  In Progress
                </Badge>
                <Badge variant="neutral-soft">Not Started</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2 text-slate-700">User Actions</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="error-soft">
                  <Star className="w-3 h-3 mr-1" />
                  Favorited
                </Badge>
                <Badge variant="brand-outline">In Watchlist</Badge>
                <Badge variant="success-outline">Rated 5★</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2 text-slate-700">Alerts & Notifications</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="success-solid">New Release</Badge>
                <Badge variant="warn-solid">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Leaving Soon
                </Badge>
                <Badge variant="brand-solid">Trending</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Movie List Example */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Movie List with Badges</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              title: "Dune: Part Two",
              badges: [
                { text: "2024", variant: "neutral-outline" as const },
                { text: "Sci-Fi", variant: "brand-soft" as const },
                { text: "New Release", variant: "success-solid" as const },
                { text: "4K", variant: "success-soft" as const }
              ]
            },
            {
              title: "The Batman",
              badges: [
                { text: "2022", variant: "neutral-outline" as const },
                { text: "Action", variant: "brand-soft" as const },
                { text: "Watched", variant: "success-solid" as const },
                { text: "★★★★★", variant: "warn-soft" as const }
              ]
            },
            {
              title: "Spider-Man: No Way Home",
              badges: [
                { text: "2021", variant: "neutral-outline" as const },
                { text: "Action", variant: "brand-soft" as const },
                { text: "In Progress", variant: "warn-solid" as const },
                { text: "IMAX", variant: "success-soft" as const }
              ]
            }
          ].map((movie, i) => (
            <div key={i} className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
              <h4 className="font-medium text-slate-800">{movie.title}</h4>
              <div className="flex gap-2">
                {movie.badges.map((badge, j) => (
                  <Badge key={j} variant={badge.variant} className="text-xs">
                    {badge.text}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world badge usage in movie applications. Shows how different variants communicate movie metadata, user status, quality indicators, and notifications effectively.',
      },
    },
  },
}

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6 p-8 bg-gradient-to-bl from-emerald-50 to-cyan-50 rounded-xl max-w-4xl">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Badges with Icons</h3>
        <p className="text-sm text-slate-600">Enhanced badges with meaningful icons for better recognition</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="font-medium text-slate-700">Status Badges</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Badge variant="success-solid">
                <Check className="w-3 h-3 mr-1" />
                Completed
              </Badge>
              <span className="text-sm text-slate-600">Movie watched</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="warn-solid">
                <Clock className="w-3 h-3 mr-1" />
                In Progress
              </Badge>
              <span className="text-sm text-slate-600">Currently watching</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="error-solid">
                <AlertCircle className="w-3 h-3 mr-1" />
                Unavailable
              </Badge>
              <span className="text-sm text-slate-600">Not available to stream</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="brand-soft">
                <Info className="w-3 h-3 mr-1" />
                Recommended
              </Badge>
              <span className="text-sm text-slate-600">Suggested for you</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-slate-700">Rating & Quality</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Badge variant="warn-soft">
                <Star className="w-3 h-3 mr-1" />
                Rated 4.5
              </Badge>
              <span className="text-sm text-slate-600">Your rating</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="success-outline">
                <Check className="w-3 h-3 mr-1" />
                HD Quality
              </Badge>
              <span className="text-sm text-slate-600">High definition</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="brand-outline">
                <Star className="w-3 h-3 mr-1" />
                Critic&apos;s Choice
              </Badge>
              <span className="text-sm text-slate-600">Highly rated</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="neutral-outline">
                <Clock className="w-3 h-3 mr-1" />
                2h 46min
              </Badge>
              <span className="text-sm text-slate-600">Runtime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges enhanced with Lucide icons for better visual communication. Icons help users quickly understand the meaning and context of each badge.',
      },
    },
  },
}

export const Playground: Story = {
  args: {
    children: 'Playground Badge',
    variant: 'brand-solid',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for experimenting with badge variants and content. Use the controls to see how different configurations look.',
      },
    },
  },
}