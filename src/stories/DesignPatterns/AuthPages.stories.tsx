import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Eye, EyeOff, Github, Mail } from 'lucide-react'
import { useState } from 'react'

const meta: Meta = {
  title: 'Design Patterns/Auth Pages',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Beautifully designed authentication pages with sophisticated visual hierarchy and modern aesthetics.',
      },
    },
  },
}

export default meta
type Story = StoryObj

export const LoginPage: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false)
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--surface-canvas))] via-[hsl(var(--surface-muted))]/20 to-[hsl(var(--surface-canvas))] flex items-center justify-center p-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="w-full max-w-md space-y-6 relative">
          {/* Logo Section */}
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-1 mb-4">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            </div>
            <h1 className="text-3xl font-bold text-[hsl(var(--content-primary))]">Welcome back</h1>
            <p className="text-[hsl(var(--content-secondary))] text-lg">Sign in to your movie collection</p>
          </div>

          {/* Login Card */}
          <Card className="bg-[hsl(var(--surface-elevated))]/80 backdrop-blur-sm border-[hsl(var(--border-subtle))] shadow-2xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center text-[hsl(var(--content-primary))]">Sign In</CardTitle>
              <CardDescription className="text-center text-[hsl(var(--content-secondary))]">
                Enter your email and password to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Login */}
              <div className="space-y-3">
                <Button 
                  variant="secondary" 
                  className="w-full h-12 text-[hsl(var(--content-primary))] border-[hsl(var(--border-subtle))] hover:bg-[hsl(var(--surface-hover))]"
                  leftIcon={<Github />}
                >
                  Continue with GitHub
                </Button>
                <Button 
                  variant="secondary" 
                  className="w-full h-12 text-[hsl(var(--content-primary))] border-[hsl(var(--border-subtle))] hover:bg-[hsl(var(--surface-hover))]"
                  leftIcon={<Mail />}
                >
                  Continue with Google
                </Button>
              </div>

              {/* Divider */}
              <div className="relative">
                <Separator className="bg-[hsl(var(--border-subtle))]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-[hsl(var(--surface-elevated))] px-3 text-sm text-[hsl(var(--content-secondary))]">
                    or continue with email
                  </span>
                </div>
              </div>

              {/* Email/Password Form */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[hsl(var(--content-primary))]">Email</label>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[hsl(var(--content-primary))]">Password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="h-12 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(var(--content-secondary))] hover:text-[hsl(var(--content-primary))] transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 text-sm">
                    <input type="checkbox" className="rounded border-[hsl(var(--border-subtle))]" />
                    <span className="text-[hsl(var(--content-secondary))]">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-[hsl(var(--brand-solid))] hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>

              {/* Sign In Button */}
              <Button 
                className="w-full h-12 bg-[hsl(var(--brand-solid))] hover:bg-[hsl(var(--brand-solid))]/90 text-[hsl(var(--content-onBrand))]"
                rightIcon={<ArrowRight />}
              >
                Sign In
              </Button>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-[hsl(var(--content-secondary))]">
                Don&apos;t have an account?{' '}
                <a href="#" className="text-[hsl(var(--brand-solid))] hover:underline font-medium">
                  Sign up for free
                </a>
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-[hsl(var(--success-soft))] rounded-full mx-auto flex items-center justify-center">
                <span className="text-lg">📚</span>
              </div>
              <p className="text-sm text-[hsl(var(--content-secondary))]">Track Movies</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-[hsl(var(--brand-soft))] rounded-full mx-auto flex items-center justify-center">
                <span className="text-lg">⭐</span>
              </div>
              <p className="text-sm text-[hsl(var(--content-secondary))]">Rate & Review</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-[hsl(var(--warn-soft))] rounded-full mx-auto flex items-center justify-center">
                <span className="text-lg">📝</span>
              </div>
              <p className="text-sm text-[hsl(var(--content-secondary))]">Create Lists</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
}

export const SignUpPage: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--surface-canvas))] via-[hsl(var(--brand-soft))]/10 to-[hsl(var(--surface-canvas))] flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-1 mb-4">
            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          </div>
          <h1 className="text-3xl font-bold text-[hsl(var(--content-primary))]">Create your account</h1>
          <p className="text-[hsl(var(--content-secondary))] text-lg">Join thousands of movie enthusiasts</p>
        </div>

        {/* Sign Up Card */}
        <Card className="bg-[hsl(var(--surface-elevated))]/80 backdrop-blur-sm border-[hsl(var(--border-subtle))] shadow-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-[hsl(var(--content-primary))]">Sign Up</CardTitle>
            <CardDescription className="text-center text-[hsl(var(--content-secondary))]">
              Create your free account in seconds
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Form */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[hsl(var(--content-primary))]">First name</label>
                  <Input placeholder="John" className="h-11" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[hsl(var(--content-primary))]">Last name</label>
                  <Input placeholder="Doe" className="h-11" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">Email</label>
                <Input type="email" placeholder="name@example.com" className="h-11" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">Username</label>
                <Input placeholder="moviefan123" className="h-11" />
                <p className="text-xs text-[hsl(var(--content-secondary))]">
                  This will be your public display name
                </p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[hsl(var(--content-primary))]">Password</label>
                <Input type="password" placeholder="Create a strong password" className="h-11" />
                <div className="flex gap-2 mt-2">
                  <Badge variant="success-soft" className="text-xs">8+ chars</Badge>
                  <Badge variant="neutral-soft" className="text-xs">Uppercase</Badge>
                  <Badge variant="neutral-soft" className="text-xs">Number</Badge>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-2">
              <input type="checkbox" className="mt-0.5 rounded border-[hsl(var(--border-subtle))]" />
              <p className="text-sm text-[hsl(var(--content-secondary))]">
                I agree to the{' '}
                <a href="#" className="text-[hsl(var(--brand-solid))] hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-[hsl(var(--brand-solid))] hover:underline">Privacy Policy</a>
              </p>
            </div>

            {/* Sign Up Button */}
            <Button 
              className="w-full h-12 bg-[hsl(var(--success-solid))] hover:bg-[hsl(var(--success-solid))]/90 text-[hsl(var(--content-onBrand))]"
              rightIcon={<ArrowRight />}
            >
              Create Account
            </Button>

            {/* Sign In Link */}
            <p className="text-center text-sm text-[hsl(var(--content-secondary))]">
              Already have an account?{' '}
              <a href="#" className="text-[hsl(var(--brand-solid))] hover:underline font-medium">
                Sign in instead
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="text-center space-y-4">
          <p className="text-sm text-[hsl(var(--content-secondary))]">Trusted by movie lovers worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-2xl">🎬</div>
            <div className="text-2xl">🍿</div>
            <div className="text-2xl">📽️</div>
            <div className="text-2xl">🎭</div>
          </div>
        </div>
      </div>
    </div>
  ),
}