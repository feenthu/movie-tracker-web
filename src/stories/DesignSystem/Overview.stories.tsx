import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardSubtitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { RatingStars } from '@/components/ui/rating-stars'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Check, Copy, Palette, Type, Layout, Layers } from 'lucide-react'

const meta: Meta = {
  title: 'Design System/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive overview of the MovieTracker design system, showcasing tokens, components, and patterns.',
      },
    },
  },
}

export default meta
type Story = StoryObj

const ColorSwatch = ({ name, value, description }: { name: string; value: string; description?: string }) => (
  <div className="group space-y-3">
    <div 
      className="w-full h-24 rounded-xl border border-[hsl(var(--border-subtle))] shadow-sm group-hover:shadow-md transition-shadow"
      style={{ backgroundColor: value }}
    />
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-[hsl(var(--content-primary))]">{name}</p>
        <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-[hsl(var(--surface-hover))] rounded">
          <Copy className="w-3 h-3 text-[hsl(var(--content-secondary))]" />
        </button>
      </div>
      <p className="text-xs font-mono text-[hsl(var(--content-secondary))]">{value}</p>
      {description && <p className="text-xs text-[hsl(var(--content-secondary))]">{description}</p>}
    </div>
  </div>
)

const ComponentShowcase = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
    <CardHeader className="pb-4">
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {children}
    </CardContent>
  </Card>
)

export const DesignSystemOverview: Story = {
  render: () => (
    <div className="min-h-screen bg-[hsl(var(--surface-canvas))]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[hsl(var(--brand-solid))] to-[hsl(var(--brand-solid))]/80 text-[hsl(var(--content-onBrand))]">
        <div className="mx-auto max-w-screen-xl px-6 py-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Palette className="w-8 h-8" />
              <h1 className="text-4xl font-bold">MovieTracker Design System</h1>
            </div>
            <p className="text-xl text-[hsl(var(--content-onBrand))]/80 max-w-2xl">
              A comprehensive design system built for movie tracking applications. Token-first, accessible, and beautiful.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-[hsl(var(--content-onBrand))] text-[hsl(var(--brand-solid))] hover:bg-[hsl(var(--content-onBrand))]/90">
                Get Started
              </Button>
              <Button variant="ghost" className="text-[hsl(var(--content-onBrand))] hover:bg-white/10">
                View Components
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-screen-xl px-6 py-12">
        <div className="space-y-16">
          {/* Principles */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-[hsl(var(--content-primary))]">Design Principles</h2>
              <p className="text-lg text-[hsl(var(--content-secondary))] max-w-3xl mx-auto">
                Our design system is built on core principles that ensure consistency, accessibility, and scalability across all movie tracking experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))] text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-[hsl(var(--brand-soft))] rounded-full mx-auto flex items-center justify-center">
                    <Type className="w-8 h-8 text-[hsl(var(--brand-solid))]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--content-primary))]">Token-First</h3>
                  <p className="text-[hsl(var(--content-secondary))]">
                    Semantic design tokens ensure consistency and enable effortless theme switching between light and dark modes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))] text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-[hsl(var(--success-soft))] rounded-full mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8 text-[hsl(var(--success-solid))]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--content-primary))]">Accessible</h3>
                  <p className="text-[hsl(var(--content-secondary))]">
                    WCAG AA compliant with proper focus management, keyboard navigation, and screen reader support throughout.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))] text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-[hsl(var(--warn-soft))] rounded-full mx-auto flex items-center justify-center">
                    <Layers className="w-8 h-8 text-[hsl(var(--warn-solid))]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--content-primary))]">Composable</h3>
                  <p className="text-[hsl(var(--content-secondary))]">
                    Built with Radix UI primitives, components are composable and work seamlessly together across contexts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Color System */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[hsl(var(--content-primary))]">Color System</h2>
              <p className="text-lg text-[hsl(var(--content-secondary))] max-w-3xl">
                Our semantic color system adapts beautifully between light and dark themes while maintaining perfect contrast ratios.
              </p>
            </div>

            <Tabs defaultValue="surfaces" className="w-full">
              <TabsList variant="pill" className="mb-8">
                <TabsTrigger variant="pill" value="surfaces">Surfaces</TabsTrigger>
                <TabsTrigger variant="pill" value="content">Content</TabsTrigger>
                <TabsTrigger variant="pill" value="semantic">Semantic</TabsTrigger>
              </TabsList>

              <TabsContent value="surfaces">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <ColorSwatch 
                    name="Canvas" 
                    value="hsl(var(--surface-canvas))" 
                    description="Main page background"
                  />
                  <ColorSwatch 
                    name="Primary" 
                    value="hsl(var(--surface-primary))" 
                    description="Header & navigation"
                  />
                  <ColorSwatch 
                    name="Elevated" 
                    value="hsl(var(--surface-elevated))" 
                    description="Cards & modals"
                  />
                  <ColorSwatch 
                    name="Raised" 
                    value="hsl(var(--surface-raised))" 
                    description="Input fields"
                  />
                  <ColorSwatch 
                    name="Muted" 
                    value="hsl(var(--surface-muted))" 
                    description="Disabled states"
                  />
                  <ColorSwatch 
                    name="Hover" 
                    value="hsl(var(--surface-hover))" 
                    description="Interactive hover"
                  />
                </div>
              </TabsContent>

              <TabsContent value="content">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <ColorSwatch 
                    name="Primary" 
                    value="hsl(var(--content-primary))" 
                    description="Main text color"
                  />
                  <ColorSwatch 
                    name="Secondary" 
                    value="hsl(var(--content-secondary))" 
                    description="Supporting text"
                  />
                  <ColorSwatch 
                    name="Strong" 
                    value="hsl(var(--content-strong))" 
                    description="High emphasis"
                  />
                  <ColorSwatch 
                    name="Muted" 
                    value="hsl(var(--content-muted))" 
                    description="Low emphasis"
                  />
                  <ColorSwatch 
                    name="Inverse" 
                    value="hsl(var(--content-inverse))" 
                    description="On dark surfaces"
                  />
                  <ColorSwatch 
                    name="On Brand" 
                    value="hsl(var(--content-onBrand))" 
                    description="On brand colors"
                  />
                </div>
              </TabsContent>

              <TabsContent value="semantic">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <ColorSwatch 
                    name="Brand Solid" 
                    value="hsl(var(--brand-solid))" 
                    description="Primary brand color"
                  />
                  <ColorSwatch 
                    name="Success Solid" 
                    value="hsl(var(--success-solid))" 
                    description="Success states"
                  />
                  <ColorSwatch 
                    name="Warn Solid" 
                    value="hsl(var(--warn-solid))" 
                    description="Warning states"
                  />
                  <ColorSwatch 
                    name="Error Solid" 
                    value="hsl(var(--error-solid))" 
                    description="Error states"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Component Showcase */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[hsl(var(--content-primary))]">Component Showcase</h2>
              <p className="text-lg text-[hsl(var(--content-secondary))] max-w-3xl">
                Every component is built with consistency, accessibility, and beautiful aesthetics in mind.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ComponentShowcase title="Buttons">
                <div className="space-y-4">
                  <div className="flex gap-3 flex-wrap">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>
              </ComponentShowcase>

              <ComponentShowcase title="Badges">
                <div className="space-y-4">
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="neutral-solid">Neutral</Badge>
                    <Badge variant="brand-solid">Brand</Badge>
                    <Badge variant="success-solid">Success</Badge>
                    <Badge variant="warn-solid">Warning</Badge>
                    <Badge variant="error-solid">Error</Badge>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="neutral-soft">Soft</Badge>
                    <Badge variant="brand-soft">Brand Soft</Badge>
                    <Badge variant="success-outline">Success Outline</Badge>
                  </div>
                </div>
              </ComponentShowcase>

              <ComponentShowcase title="Rating Stars">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <RatingStars value={4.5} size="sm" readOnly />
                      <span className="text-sm text-[hsl(var(--content-secondary))]">Small (read-only)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <RatingStars value={3.5} size="md" readOnly />
                      <span className="text-sm text-[hsl(var(--content-secondary))]">Medium (read-only)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <RatingStars value={5} size="lg" readOnly />
                      <span className="text-sm text-[hsl(var(--content-secondary))]">Large (read-only)</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <RatingStars value={2.5} size="md" interactive onChange={() => {}} />
                      <span className="text-sm text-[hsl(var(--content-secondary))]">Interactive</span>
                    </div>
                  </div>
                </div>
              </ComponentShowcase>

              <ComponentShowcase title="Progress">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-[hsl(var(--content-secondary))]">Progress</span>
                        <span className="text-[hsl(var(--content-primary))]">75%</span>
                      </div>
                      <Progress value={75} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-[hsl(var(--content-secondary))]">Loading</span>
                        <span className="text-[hsl(var(--content-primary))]">45%</span>
                      </div>
                      <Progress value={45} />
                    </div>
                  </div>
                </div>
              </ComponentShowcase>

              <ComponentShowcase title="Form Elements">
                <div className="space-y-4">
                  <Input placeholder="Search movies..." />
                  <Input 
                    placeholder="Email address" 
                    helperText="We'll never share your email"
                  />
                  <Input 
                    placeholder="Invalid input" 
                    error
                    helperText="This field is required"
                  />
                </div>
              </ComponentShowcase>

              <ComponentShowcase title="Cards">
                <div className="space-y-4">
                  <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
                    <CardHeader>
                      <CardTitle>Movie Title</CardTitle>
                      <CardSubtitle>2024 • Science Fiction</CardSubtitle>
                      <CardDescription>
                        A brief description of this amazing movie that captivated audiences worldwide.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <RatingStars value={4.5} size="sm" readOnly />
                        <span className="text-sm text-[hsl(var(--content-secondary))]">4.5 (234 reviews)</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ComponentShowcase>
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[hsl(var(--content-primary))]">Typography</h2>
              <p className="text-lg text-[hsl(var(--content-secondary))] max-w-3xl">
                Our typography scale provides perfect hierarchy and readability across all screen sizes.
              </p>
            </div>

            <Card className="bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border-subtle))]">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold text-[hsl(var(--content-primary))]">Heading 1 - 4xl/bold</h1>
                  <h2 className="text-3xl font-bold text-[hsl(var(--content-primary))]">Heading 2 - 3xl/bold</h2>
                  <h3 className="text-2xl font-bold text-[hsl(var(--content-primary))]">Heading 3 - 2xl/bold</h3>
                  <h4 className="text-xl font-semibold text-[hsl(var(--content-primary))]">Heading 4 - xl/semibold</h4>
                  <h5 className="text-lg font-semibold text-[hsl(var(--content-primary))]">Heading 5 - lg/semibold</h5>
                  <h6 className="text-base font-semibold text-[hsl(var(--content-primary))]">Heading 6 - base/semibold</h6>
                </div>
                <Separator className="bg-[hsl(var(--border-subtle))]" />
                <div className="space-y-3">
                  <p className="text-lg text-[hsl(var(--content-primary))]">
                    Large body text - Perfect for important descriptions and introductions.
                  </p>
                  <p className="text-base text-[hsl(var(--content-primary))]">
                    Regular body text - The default text size for most content throughout the application.
                  </p>
                  <p className="text-sm text-[hsl(var(--content-secondary))]">
                    Small text - Used for captions, labels, and secondary information.
                  </p>
                  <p className="text-xs text-[hsl(var(--content-secondary))]">
                    Extra small text - Perfect for timestamps, metadata, and fine print.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center space-y-4 pt-8 border-t border-[hsl(var(--border-subtle))]">
            <h3 className="text-xl font-semibold text-[hsl(var(--content-primary))]">Ready to build amazing movie experiences?</h3>
            <p className="text-[hsl(var(--content-secondary))]">
              Explore our component library and start creating beautiful, accessible interfaces.
            </p>
            <Button className="bg-[hsl(var(--brand-solid))] hover:bg-[hsl(var(--brand-solid))]/90">
              Browse Components
            </Button>
          </div>
        </div>
      </div>
    </div>
  ),
}