import type { Meta, StoryObj } from '@storybook/nextjs'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardSubtitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RatingStars } from '@/components/ui/rating-stars'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Calendar, Clock, Eye, Heart, Plus, Star, TrendingUp } from 'lucide-react'

const meta: Meta = {
  title: 'Design Patterns/Movie Dashboard',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A sophisticated movie dashboard showcasing beautiful visual hierarchy, spacing, and information architecture.',
      },
    },
  },
}

export default meta
type Story = StoryObj

export const MovieDashboard: Story = {
  render: () => (
    <div className="min-h-screen bg-[hsl(var(--surface-canvas))]">
      {/* Header */}
      <header className="border-b border-[hsl(var(--border-subtle))] bg-[hsl(var(--surface-primary))]">
        <div className="mx-auto max-w-screen-xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              </div>
              <h1 className="text-xl font-bold text-[hsl(var(--content-primary))]">MovieTracker</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button leftIcon={<Plus />} className="bg-[hsl(var(--success-solid))] hover:bg-[hsl(var(--success-solid))]/90 text-[hsl(var(--content-onBrand))]">
                Log Movie
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-[hsl(var(--surface-muted))] text-[hsl(var(--content-primary))]">
                  T
                </AvatarFallback>
              </Avatar>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))] hover:shadow-xs transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-[hsl(var(--content-secondary))]">Movies Watched</p>
                    <p className="text-2xl font-bold text-[hsl(var(--content-primary))]">127</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--brand-soft))] flex items-center justify-center">
                    <Eye className="w-6 h-6 text-[hsl(var(--brand-solid))]" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[hsl(var(--success-solid))]" />
                  <span className="text-sm text-[hsl(var(--success-solid))]">+12% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))] hover:shadow-xs transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-[hsl(var(--content-secondary))]">Avg Rating</p>
                    <p className="text-2xl font-bold text-[hsl(var(--content-primary))]">4.2</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--warn-soft))] flex items-center justify-center">
                    <Star className="w-6 h-6 text-[hsl(var(--warn-solid))]" />
                  </div>
                </div>
                <div className="mt-4">
                  <RatingStars value={4.2} size="sm" readOnly />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))] hover:shadow-xs transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-[hsl(var(--content-secondary))]">Favorites</p>
                    <p className="text-2xl font-bold text-[hsl(var(--content-primary))]">23</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--error-soft))] flex items-center justify-center">
                    <Heart className="w-6 h-6 text-[hsl(var(--error-solid))]" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm text-[hsl(var(--content-secondary))]">18% of total movies</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))] hover:shadow-xs transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-[hsl(var(--content-secondary))]">Hours Watched</p>
                    <p className="text-2xl font-bold text-[hsl(var(--content-primary))]">254</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--brand-soft))] flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[hsl(var(--brand-solid))]" />
                  </div>
                </div>
                <div className="mt-4">
                  <Progress value={75} className="h-2" />
                  <p className="text-sm text-[hsl(var(--content-secondary))] mt-1">Goal: 300 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity & Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Movies */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[hsl(var(--content-primary))]">Recently Watched</h3>
              <div className="space-y-3">
                {[
                  { title: "Dune: Part Two", year: "2024", rating: 4.5, genre: "Sci-Fi" },
                  { title: "Poor Things", year: "2023", rating: 4.0, genre: "Comedy" },
                  { title: "The Zone of Interest", year: "2023", rating: 4.2, genre: "Drama" },
                ].map((movie, i) => (
                  <Card key={i} className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))] hover:shadow-xs transition-all cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-16 bg-gradient-to-br from-slate-300 to-slate-400 rounded-lg flex items-center justify-center">
                          <span className="text-xs font-medium text-slate-700">IMG</span>
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-medium text-[hsl(var(--content-primary))]">{movie.title}</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant="neutral-soft" className="text-xs">{movie.year}</Badge>
                            <Badge variant="brand-soft" className="text-xs">{movie.genre}</Badge>
                          </div>
                          <RatingStars value={movie.rating} size="sm" readOnly />
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-[hsl(var(--content-secondary))]">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">2 days ago</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="ghost" className="w-full">View All Recent Movies</Button>
            </div>

            {/* Recommendations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[hsl(var(--content-primary))]">Recommended for You</h3>
              <div className="space-y-3">
                {[
                  { title: "Oppenheimer", year: "2023", rating: 4.6, match: "92%" },
                  { title: "The Holdovers", year: "2023", rating: 4.3, match: "89%" },
                  { title: "Past Lives", year: "2023", rating: 4.4, match: "87%" },
                ].map((movie, i) => (
                  <Card key={i} className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))] hover:shadow-xs transition-all cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-16 bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg flex items-center justify-center">
                          <span className="text-xs font-medium text-blue-700">REC</span>
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="font-medium text-[hsl(var(--content-primary))]">{movie.title}</h4>
                          <div className="flex items-center gap-2">
                            <Badge variant="neutral-soft" className="text-xs">{movie.year}</Badge>
                            <Badge variant="success-soft" className="text-xs">{movie.match} match</Badge>
                          </div>
                          <RatingStars value={movie.rating} size="sm" readOnly />
                        </div>
                        <Button size="sm" variant="ghost" leftIcon={<Plus />}>
                          Add
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="ghost" className="w-full">View All Recommendations</Button>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="space-y-6">
            <Tabs defaultValue="watchlist" className="w-full">
              <TabsList variant="underline" className="w-full justify-start border-b border-[hsl(var(--border-subtle))]">
                <TabsTrigger variant="underline" value="watchlist">Watchlist</TabsTrigger>
                <TabsTrigger variant="underline" value="favorites">Favorites</TabsTrigger>
                <TabsTrigger variant="underline" value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="watchlist" className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
              </TabsContent>

              <TabsContent value="favorites" className="mt-6">
                <p className="text-[hsl(var(--content-secondary))]">Your favorite movies will appear here.</p>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <p className="text-[hsl(var(--content-secondary))]">Your movie reviews will appear here.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  ),
}

export const ResponsiveDemo: Story = {
  render: () => (
    <div className="p-6 bg-[hsl(var(--surface-canvas))] space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-[hsl(var(--content-primary))]">Responsive Design Showcase</h2>
        <p className="text-[hsl(var(--content-secondary))]">Resize your browser to see responsive behavior</p>
      </div>
      
      {/* Grid Examples */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[hsl(var(--content-primary))]">Responsive Grid</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 bg-[hsl(var(--brand-soft))] rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="font-semibold text-[hsl(var(--brand-solid))]">{i + 1}</span>
                  </div>
                  <p className="text-sm text-[hsl(var(--content-primary))]">Grid Item {i + 1}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
}