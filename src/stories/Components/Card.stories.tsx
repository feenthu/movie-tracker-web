import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardSubtitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { RatingStars } from '@/components/ui/rating-stars'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Calendar, Clock, Star, Users, TrendingUp, Heart } from 'lucide-react'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component perfect for displaying movie information, user content, and data summaries. Built with semantic structure and elegant styling.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a basic card with a title and description. Perfect for simple content display.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[hsl(var(--content-secondary))]">
          Card content goes here. You can include any content like text, buttons, or other components.
        </p>
      </CardContent>
    </Card>
  ),
}

export const MovieCard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl max-w-6xl">
      <div className="col-span-full text-center mb-4">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Movie Cards</h3>
        <p className="text-sm text-slate-600">Beautiful card layouts for movie content</p>
      </div>

      {/* Featured Movie Card */}
      <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
        <div className="relative">
          <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">DUNE: PART TWO</span>
          </div>
          <Badge className="absolute top-3 right-3" variant="success-solid">
            New Release
          </Badge>
        </div>
        <CardHeader className="pb-3">
          <CardTitle className="group-hover:text-[hsl(var(--brand-solid))] transition-colors">
            Dune: Part Two
          </CardTitle>
          <CardSubtitle>2024 • Science Fiction</CardSubtitle>
          <CardDescription>
            Paul Atreides unites with Chani and the Fremen while on a warpath of revenge.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <RatingStars value={4.6} size="sm" readOnly />
            <span className="text-sm text-[hsl(var(--content-secondary))]">12.4k reviews</span>
          </div>
          <div className="flex gap-2 mt-4">
            <Button size="sm" className="flex-1">Add to Watchlist</Button>
            <Button variant="ghost" size="sm" className="aspect-square p-0">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Card */}
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">127</CardTitle>
              <CardDescription>Movies Watched</CardDescription>
            </div>
            <div className="w-12 h-12 bg-[hsl(var(--brand-soft))] rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[hsl(var(--brand-solid))]" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-green-600 font-medium">+12%</span>
            <span className="text-[hsl(var(--content-secondary))]">from last month</span>
          </div>
        </CardContent>
      </Card>

      {/* User Activity Card */}
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest movie interactions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Rated &quot;Oppenheimer&quot;</p>
              <div className="flex items-center gap-2">
                <RatingStars value={5} size="sm" readOnly />
                <span className="text-xs text-[hsl(var(--content-secondary))]">2 hours ago</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">Added to watchlist</p>
              <p className="text-xs text-[hsl(var(--content-secondary))]">&quot;Poor Things&quot; • 5 hours ago</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world movie card examples showing different layouts: featured movie cards with posters, statistics cards with metrics, and activity cards with user interactions.',
      },
    },
  },
}

export const CardVariations: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl max-w-4xl">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Card Variations</h3>
        <p className="text-sm text-slate-600">Different card styles for various content types</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Simple Card */}
        <div className="space-y-4">
          <h4 className="font-medium text-slate-700">Simple Card</h4>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Simple card with just title and description</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Card with Content */}
        <div className="space-y-4">
          <h4 className="font-medium text-slate-700">With Content Section</h4>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Movie Details</CardTitle>
              <CardDescription>Extended information display</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[hsl(var(--content-secondary))]">Runtime:</span>
                  <span>2h 46min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[hsl(var(--content-secondary))]">Genre:</span>
                  <span>Sci-Fi, Adventure</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Card with Subtitle */}
        <div className="space-y-4">
          <h4 className="font-medium text-slate-700">With Subtitle</h4>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>The Dark Knight</CardTitle>
              <CardSubtitle>2008 • Action, Crime, Drama</CardSubtitle>
              <CardDescription>
                Batman faces the Joker in this critically acclaimed sequel.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Interactive Card */}
        <div className="space-y-4">
          <h4 className="font-medium text-slate-700">Interactive Card</h4>
          <Card className="w-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
            <CardHeader>
              <CardTitle className="group-hover:text-[hsl(var(--brand-solid))] transition-colors">
                Clickable Movie
              </CardTitle>
              <CardDescription>Hover to see interactive effects</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">View Details</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different card configurations showing various content structures. From simple title-only cards to complex interactive cards with hover effects.',
      },
    },
  },
}

export const MovieGrid: Story = {
  render: () => (
    <div className="space-y-6 p-8 bg-gradient-to-bl from-purple-50 to-pink-50 rounded-xl max-w-6xl">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Movie Poster Grid</h3>
        <p className="text-sm text-slate-600">Responsive grid layout for movie collections</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array.from({ length: 12 }, (_, i) => (
          <Card key={i} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardContent className="p-3">
              <div className="aspect-[2/3] bg-gradient-to-br from-slate-300 to-slate-400 rounded-lg mb-3 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-sm font-medium text-slate-600">POSTER</span>
              </div>
              <h4 className="font-medium text-sm text-[hsl(var(--content-primary))] group-hover:text-[hsl(var(--brand-solid))] transition-colors truncate">
                Movie Title {i + 1}
              </h4>
              <p className="text-xs text-[hsl(var(--content-secondary))] mt-1">2024</p>
              <div className="flex items-center justify-between mt-2">
                <RatingStars value={4.2 + (i * 0.1)} size="sm" readOnly />
                <Badge variant="neutral-soft" className="text-xs">HD</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A responsive grid of movie cards with poster placeholders, ratings, and hover effects. Perfect for displaying movie collections, watchlists, and search results.',
      },
    },
  },
}

export const Playground: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardSubtitle>2024 • Example</CardSubtitle>
        <CardDescription>
          Use the controls below to customize this card and see how it responds to different configurations.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm">Interactive playground</span>
          </div>
          <Button className="w-full">Action Button</Button>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Experiment with card properties using the controls. This playground lets you see how different configurations affect the card appearance.',
      },
    },
  },
}