'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/providers/auth-provider'
import { LoginForm } from '@/components/login-form'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading) {
    return (
      <PageWrapper maxWidth="sm">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-muted border-t-primary" />
        </div>
      </PageWrapper>
    )
  }

  if (isAuthenticated) {
    return null
  }

  return (
    <PageWrapper maxWidth="sm">
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Movie Tracker</h1>
          <p className="text-muted-foreground">
            Track your favorite movies and build your watchlist
          </p>
        </div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <LoginForm />
            <div className="text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}