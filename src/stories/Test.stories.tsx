import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RatingStars } from '@/components/ui/rating-stars'

const meta: Meta = {
  title: 'Test/Design System Test',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

export const DesignSystemTest: Story = {
  render: () => (
    <div className="min-h-screen bg-[hsl(var(--surface-canvas))] p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[hsl(var(--content-primary))]">
            Design System Test
          </h1>
          <p className="text-lg text-[hsl(var(--content-secondary))]">
            Testing our custom components with semantic tokens
          </p>
        </div>

        {/* Button Variants */}
        <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3 flex-wrap">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </CardContent>
        </Card>

        {/* Badge Variants */}
        <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
          <CardHeader>
            <CardTitle>Badge Variants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="neutral-solid">Neutral</Badge>
              <Badge variant="brand-solid">Brand</Badge>
              <Badge variant="success-solid">Success</Badge>
              <Badge variant="warn-solid">Warning</Badge>
              <Badge variant="error-solid">Error</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Rating Stars */}
        <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
          <CardHeader>
            <CardTitle>Rating Stars</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-4">
              <RatingStars value={4.5} size="sm" readOnly />
              <span className="text-sm text-[hsl(var(--content-secondary))]">Small (4.5 stars)</span>
            </div>
            <div className="flex items-center gap-4">
              <RatingStars value={3.5} size="md" readOnly />
              <span className="text-sm text-[hsl(var(--content-secondary))]">Medium (3.5 stars)</span>
            </div>
            <div className="flex items-center gap-4">
              <RatingStars value={5} size="lg" readOnly />
              <span className="text-sm text-[hsl(var(--content-secondary))]">Large (5 stars)</span>
            </div>
          </CardContent>
        </Card>

        {/* Color Test */}
        <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
          <CardHeader>
            <CardTitle>Color Token Test</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-16 bg-[hsl(var(--brand-solid))] rounded-lg"></div>
              <p className="text-sm text-[hsl(var(--content-secondary))]">Brand Solid</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-[hsl(var(--success-solid))] rounded-lg"></div>
              <p className="text-sm text-[hsl(var(--content-secondary))]">Success Solid</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-[hsl(var(--warn-solid))] rounded-lg"></div>
              <p className="text-sm text-[hsl(var(--content-secondary))]">Warning Solid</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-16 bg-[hsl(var(--error-solid))] rounded-lg"></div>
              <p className="text-sm text-[hsl(var(--content-secondary))]">Error Solid</p>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
          <CardHeader>
            <CardTitle>Typography Scale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <h1 className="text-4xl font-bold text-[hsl(var(--content-primary))]">Heading 1</h1>
            <h2 className="text-3xl font-bold text-[hsl(var(--content-primary))]">Heading 2</h2>
            <h3 className="text-2xl font-bold text-[hsl(var(--content-primary))]">Heading 3</h3>
            <p className="text-lg text-[hsl(var(--content-primary))]">Large body text</p>
            <p className="text-base text-[hsl(var(--content-primary))]">Regular body text</p>
            <p className="text-sm text-[hsl(var(--content-secondary))]">Small secondary text</p>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
}

export const MinimalButtonTest: Story = {
  render: () => (
    <div className="p-8 space-y-4">
      <h2 className="text-xl font-bold text-[hsl(var(--content-primary))]">Button Comparison</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-[hsl(var(--content-secondary))] mb-2">Our Custom Button:</p>
          <Button>Custom Styled Button</Button>
        </div>
        <div>
          <p className="text-sm text-[hsl(var(--content-secondary))] mb-2">With explicit classes:</p>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Explicit Classes
          </button>
        </div>
        <div>
          <p className="text-sm text-[hsl(var(--content-secondary))] mb-2">With hardcoded styles:</p>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Hardcoded Styles
          </button>
        </div>
      </div>
    </div>
  ),
}