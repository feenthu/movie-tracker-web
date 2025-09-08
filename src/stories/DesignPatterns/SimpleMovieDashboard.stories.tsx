import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RatingStars } from '@/components/ui/rating-stars'

const meta: Meta = {
  title: 'Design Patterns/Simple Movie Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const SimpleDashboard: Story = {
  render: () => (
    <div className="min-h-screen bg-[hsl(var(--surface-canvas))]">
      {/* Header */}
      <header className="border-b border-[hsl(var(--border-subtle))] bg-[hsl(var(--surface-primary))]">
        <div className="mx-auto max-w-screen-xl px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-[hsl(var(--content-primary))]">MovieTracker</h1>
            <Button className="bg-[hsl(var(--success-solid))] hover:bg-[hsl(var(--success-solid))]/90 text-[hsl(var(--content-onBrand))]">
              Log Movie
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-screen-xl px-6 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-[hsl(var(--content-primary))]">Welcome back, Ty</h2>
            <p className="text-[hsl(var(--content-secondary))] text-lg">
              You&apos;ve watched <span className="font-semibold text-[hsl(var(--brand-solid))]">127 movies</span> this year
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
              <CardHeader>
                <CardTitle>Movies Watched</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-[hsl(var(--content-primary))]">127</p>
                <Badge variant="success-soft" className="mt-2">+12% this month</Badge>
              </CardContent>
            </Card>

            <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
              <CardHeader>
                <CardTitle>Average Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-[hsl(var(--content-primary))]">4.2</p>
                <RatingStars value={4.2} size="sm" readOnly />
              </CardContent>
            </Card>

            <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
              <CardHeader>
                <CardTitle>Favorites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-[hsl(var(--content-primary))]">23</p>
                <p className="text-sm text-[hsl(var(--content-secondary))]">18% of total movies</p>
              </CardContent>
            </Card>
          </div>

          {/* Movie Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[hsl(var(--content-primary))]">Recent Movies</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <Card key={i} className="group cursor-pointer hover:shadow-xs transition-all bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
                  <CardContent className="p-3">
                    <div className="aspect-[2/3] bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-sm font-medium text-slate-600">POSTER</span>
                    </div>
                    <h4 className="font-medium text-sm text-[hsl(var(--content-primary))] group-hover:text-[hsl(var(--brand-solid))] transition-colors">
                      Movie Title {i + 1}
                    </h4>
                    <p className="text-xs text-[hsl(var(--content-secondary))] mt-1">2024</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  ),
}