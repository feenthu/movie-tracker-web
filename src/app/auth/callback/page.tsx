'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/providers/auth-provider'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'

function AuthCallbackContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login } = useAuth()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Check URL for success parameter and errors
        const success = searchParams.get('success')
        const errorParam = searchParams.get('error')

        console.log('OAuth2 callback - success:', success, 'error:', errorParam)

        if (errorParam) {
          throw new Error(decodeURIComponent(errorParam))
        }

        if (success !== 'true') {
          throw new Error('OAuth2 authentication was not successful')
        }

        // Helper function to get cookie value
        const getCookie = (name: string): string | null => {
          const value = `; ${document.cookie}`;
          const parts = value.split(`; ${name}=`);
          if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
          return null;
        }

        // Get authentication data from secure cookies
        const token = getCookie('auth-token')
        const userParam = getCookie('auth-user')

        console.log('Auth data from cookies - token:', !!token, 'user:', !!userParam)

        if (!token || !userParam) {
          throw new Error(`Missing authentication data - token: ${!!token}, user: ${!!userParam}`)
        }

        // Parse user data from cookie
        const user = JSON.parse(decodeURIComponent(userParam))
        console.log('Parsed user:', user)

        // Log the user in
        login(token, user)
        setStatus('success')

        // Clean up cookies after successful login
        document.cookie = 'auth-user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
        
        // Immediate redirect to dashboard - no delay needed
        router.push('/dashboard')

      } catch (err) {
        console.error('OAuth2 callback error:', err)
        setError(err instanceof Error ? err.message : 'Authentication failed')
        setStatus('error')
      }
    }

    handleCallback()
  }, [searchParams, login, router])

  if (status === 'loading') {
    return (
      <PageWrapper maxWidth="sm">
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Completing Sign In...</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <Loading size="lg" />
              <p className="text-muted-foreground text-center">
                Please wait while we complete your authentication.
              </p>
            </CardContent>
          </Card>
        </div>
      </PageWrapper>
    )
  }

  if (status === 'success') {
    return (
      <PageWrapper maxWidth="sm">
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center text-green-600">✅ Success!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Successfully signed in! Redirecting to dashboard...
              </p>
              <Loading size="sm" />
            </CardContent>
          </Card>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper maxWidth="sm">
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-center text-red-600">❌ Authentication Failed</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              {error || 'An error occurred during authentication.'}
            </p>
            <div className="pt-4">
              <button
                onClick={() => router.push('/')}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Return to Login
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={
      <PageWrapper maxWidth="sm">
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Loading...</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <Loading size="lg" />
              <p className="text-muted-foreground text-center">
                Please wait while we process your authentication.
              </p>
            </CardContent>
          </Card>
        </div>
      </PageWrapper>
    }>
      <AuthCallbackContent />
    </Suspense>
  )
}