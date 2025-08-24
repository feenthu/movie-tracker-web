'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/providers/auth-provider'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'

function AuthCallbackV2Content() {
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
        const sessionId = searchParams.get('session')

        console.log('OAuth2 V2 callback - success:', success, 'error:', errorParam, 'session:', !!sessionId)

        if (errorParam) {
          throw new Error(decodeURIComponent(errorParam))
        }

        if (success !== 'true') {
          throw new Error('OAuth2 authentication was not successful')
        }

        if (!sessionId) {
          throw new Error('No session ID provided in callback')
        }

        // Exchange session for authentication data using secure API
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081'}/oauth2/session/exchange`, {
          method: 'POST',
          credentials: 'include', // Include HTTP-only cookies
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`Session exchange failed: ${response.status} ${response.statusText}`)
        }

        const result = await response.json()

        if (result.error) {
          throw new Error(result.error)
        }

        if (!result.success || !result.user) {
          throw new Error('Invalid response from session exchange')
        }

        // Parse user data
        const user = typeof result.user === 'string' ? JSON.parse(result.user) : result.user
        console.log('OAuth2 V2 - User authenticated:', user.email)

        // The JWT token is now in HTTP-only cookie set by the backend
        // We'll use a temporary token for the login call, the real auth happens via cookie
        login('cookie-auth', user)
        setStatus('success')

        // Clean up URL parameters for security
        window.history.replaceState({}, document.title, window.location.pathname)

        // Immediate redirect to dashboard
        router.push('/dashboard')

      } catch (err) {
        console.error('OAuth2 V2 callback error:', err)
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
              <CardTitle className="text-center">Completing Secure Sign In...</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <Loading size="lg" />
              <p className="text-muted-foreground text-center">
                Exchanging authorization code securely...
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
              <CardTitle className="text-center text-green-600">🔒 Secure Login Success!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Successfully authenticated with industry-standard OAuth2 + PKCE. Redirecting...
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
              {error || 'An error occurred during secure authentication.'}
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

export default function AuthCallbackV2Page() {
  return (
    <Suspense fallback={
      <PageWrapper maxWidth="sm">
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-center">Loading Secure Authentication...</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <Loading size="lg" />
              <p className="text-muted-foreground text-center">
                Please wait while we process your secure OAuth2 authentication.
              </p>
            </CardContent>
          </Card>
        </div>
      </PageWrapper>
    }>
      <AuthCallbackV2Content />
    </Suspense>
  )
}