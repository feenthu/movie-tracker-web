import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RatingStars } from '@/components/ui/rating-stars'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, Bookmark, Calendar, Clock, Globe, Heart, Play, Share2, Star, Users } from 'lucide-react'

const meta: Meta = {
  title: 'Design Patterns/Movie Details',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A sophisticated movie details page showcasing advanced layout techniques, visual hierarchy, and content presentation.',
      },
    },
  },
}

export default meta
type Story = StoryObj

export const MovieDetailsPage: Story = {
  render: () => (
    <div className="min-h-screen bg-[hsl(var(--surface-canvas))]">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="h-96 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--surface-canvas))] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--surface-canvas))]/80 via-transparent to-[hsl(var(--surface-canvas))]/80"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0">
          <div className="mx-auto max-w-screen-xl px-6 h-full flex items-end pb-8">
            <div className="flex gap-8 items-end w-full">
              {/* Movie Poster */}
              <div className="flex-shrink-0">
                <div className="w-64 h-96 bg-gradient-to-br from-slate-300 to-slate-400 rounded-xl shadow-2xl flex items-center justify-center">
                  <span className="text-lg font-bold text-slate-700">DUNE: PART TWO</span>
                </div>
              </div>

              {/* Movie Info */}
              <div className="flex-1 space-y-4 text-white">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2 aspect-square">
                      <ArrowLeft className="w-5 h-5" />
                    </Button>
                  </div>
                  <h1 className="text-5xl font-bold">Dune: Part Two</h1>
                  <p className="text-xl text-white/80">The saga continues</p>
                </div>

                <div className="flex items-center gap-4">
                  <Badge variant="neutral-outline" className="text-white border-white/30">2024</Badge>
                  <Badge variant="neutral-outline" className="text-white border-white/30">PG-13</Badge>
                  <Badge variant="neutral-outline" className="text-white border-white/30">2h 46min</Badge>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <RatingStars value={4.5} size="md" readOnly />
                    <span className="text-lg font-semibold">4.5</span>
                    <span className="text-white/60">(12.4k reviews)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button className="bg-[hsl(var(--brand-solid))] hover:bg-[hsl(var(--brand-solid))]/90 h-12" leftIcon={<Play />}>
                    Watch Trailer
                  </Button>
                  <Button variant="secondary" className="h-12" leftIcon={<Bookmark />}>
                    Add to Watchlist
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-3 aspect-square">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-3 aspect-square">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-screen-xl px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[hsl(var(--content-primary))]">Overview</h2>
              <p className="text-[hsl(var(--content-secondary))] text-lg leading-relaxed">
                Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.
              </p>
            </div>

            {/* Genres */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[hsl(var(--content-primary))]">Genres</h3>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="brand-soft">Science Fiction</Badge>
                <Badge variant="brand-soft">Adventure</Badge>
                <Badge variant="brand-soft">Drama</Badge>
                <Badge variant="brand-soft">Action</Badge>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="cast" className="w-full">
              <TabsList variant="underline" className="w-full justify-start">
                <TabsTrigger variant="underline" value="cast">Cast & Crew</TabsTrigger>
                <TabsTrigger variant="underline" value="reviews">Reviews</TabsTrigger>
                <TabsTrigger variant="underline" value="details">Details</TabsTrigger>
              </TabsList>

              <TabsContent value="cast" className="space-y-6 mt-6">
                {/* Director */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-[hsl(var(--content-primary))]">Director</h4>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-[hsl(var(--brand-soft))] text-[hsl(var(--brand-solid))]">DV</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-[hsl(var(--content-primary))]">Denis Villeneuve</p>
                      <p className="text-sm text-[hsl(var(--content-secondary))]">Director</p>
                    </div>
                  </div>
                </div>

                {/* Cast */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-[hsl(var(--content-primary))]">Main Cast</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Timothée Chalamet", character: "Paul Atreides", initials: "TC" },
                      { name: "Zendaya", character: "Chani", initials: "Z" },
                      { name: "Rebecca Ferguson", character: "Lady Jessica", initials: "RF" },
                      { name: "Josh Brolin", character: "Gurney Halleck", initials: "JB" },
                      { name: "Austin Butler", character: "Feyd-Rautha Harkonnen", initials: "AB" },
                      { name: "Florence Pugh", character: "Princess Irulan", initials: "FP" },
                    ].map((actor, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-[hsl(var(--surface-muted))] text-[hsl(var(--content-primary))]">
                            {actor.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-[hsl(var(--content-primary))]">{actor.name}</p>
                          <p className="text-sm text-[hsl(var(--content-secondary))]">{actor.character}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6 mt-6">
                {/* Rating Breakdown */}
                <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="text-center space-y-2">
                        <div className="text-4xl font-bold text-[hsl(var(--content-primary))]">4.5</div>
                        <RatingStars value={4.5} size="lg" readOnly />
                        <p className="text-[hsl(var(--content-secondary))]">Based on 12,437 reviews</p>
                      </div>
                      <div className="space-y-2">
                        {[
                          { stars: 5, count: 8234, percentage: 66 },
                          { stars: 4, count: 2891, percentage: 23 },
                          { stars: 3, count: 1012, percentage: 8 },
                          { stars: 2, count: 203, percentage: 2 },
                          { stars: 1, count: 97, percentage: 1 },
                        ].map((rating) => (
                          <div key={rating.stars} className="flex items-center gap-2">
                            <span className="text-sm text-[hsl(var(--content-secondary))] w-6">{rating.stars}</span>
                            <Star className="w-4 h-4 text-[hsl(var(--warn-solid))]" />
                            <Progress value={rating.percentage} className="flex-1 h-2" />
                            <span className="text-sm text-[hsl(var(--content-secondary))] w-16">{rating.count.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sample Reviews */}
                <div className="space-y-4">
                  {[
                    { 
                      user: "Sarah M.", 
                      rating: 5, 
                      review: "Absolutely masterful filmmaking. Villeneuve has outdone himself with this sequel. Every frame is a work of art.",
                      date: "2 days ago"
                    },
                    { 
                      user: "Mike Chen", 
                      rating: 4, 
                      review: "Visually stunning and emotionally resonant. The world-building is incredible and the performances are top-notch.",
                      date: "5 days ago"
                    },
                  ].map((review, i) => (
                    <Card key={i} className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback className="bg-[hsl(var(--surface-muted))] text-[hsl(var(--content-primary))]">
                                  {review.user.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium text-[hsl(var(--content-primary))]">{review.user}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <RatingStars value={review.rating} size="sm" readOnly />
                              <span className="text-sm text-[hsl(var(--content-secondary))]">{review.date}</span>
                            </div>
                          </div>
                          <p className="text-[hsl(var(--content-secondary))]">{review.review}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--content-secondary))]">Release Date</span>
                      <span className="font-medium text-[hsl(var(--content-primary))]">March 1, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--content-secondary))]">Runtime</span>
                      <span className="font-medium text-[hsl(var(--content-primary))]">166 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--content-secondary))]">Budget</span>
                      <span className="font-medium text-[hsl(var(--content-primary))]">$190M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--content-secondary))]">Box Office</span>
                      <span className="font-medium text-[hsl(var(--content-primary))]">$714M</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--content-secondary))]">Language</span>
                      <span className="font-medium text-[hsl(var(--content-primary))]">English</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--content-secondary))]">Country</span>
                      <span className="font-medium text-[hsl(var(--content-primary))]">USA, Canada</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[hsl(var(--content-secondary))]">Production</span>
                      <span className="font-medium text-[hsl(var(--content-primary))]">Warner Bros.</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-[hsl(var(--content-primary))]">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[hsl(var(--content-secondary))]" />
                    <span className="text-sm text-[hsl(var(--content-secondary))]">Released March 1, 2024</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[hsl(var(--content-secondary))]" />
                    <span className="text-sm text-[hsl(var(--content-secondary))]">2h 46min</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[hsl(var(--content-secondary))]" />
                    <span className="text-sm text-[hsl(var(--content-secondary))]">12.4k reviews</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[hsl(var(--content-secondary))]" />
                    <span className="text-sm text-[hsl(var(--content-secondary))]">English</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar Movies */}
            <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-[hsl(var(--content-primary))]">Similar Movies</h3>
                <div className="space-y-3">
                  {[
                    { title: "Dune (2021)", rating: 4.2 },
                    { title: "Blade Runner 2049", rating: 4.4 },
                    { title: "Arrival", rating: 4.3 },
                  ].map((movie, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[hsl(var(--surface-hover))] transition-colors cursor-pointer">
                      <div className="w-12 h-16 bg-gradient-to-br from-slate-300 to-slate-400 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-medium text-slate-700">IMG</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-[hsl(var(--content-primary))] text-sm">{movie.title}</p>
                        <RatingStars value={movie.rating} size="sm" readOnly />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  ),
}