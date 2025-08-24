'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useAuth } from '@/providers/auth-provider'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loading } from '@/components/ui/loading'

export default function AuthCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { login } = useAuth()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get parameters from URL
        const token = searchParams.get('token')
        const userParam = searchParams.get('user')
        const success = searchParams.get('success')
        const errorParam = searchParams.get('error')

        if (errorParam) {
          throw new Error(decodeURIComponent(errorParam))
        }

        if (!token || success !== 'true' || !userParam) {
          throw new Error('Missing authentication data')
        }

        // Parse user data from the backend
        const user = JSON.parse(decodeURIComponent(userParam))

        // Log the user in
        login(token, user)
        setStatus('success')

        // Redirect to dashboard after a short delay
        setTimeout(() => {
          router.push('/dashboard')
        }, 2000)

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
                You have been successfully signed in. Redirecting to your dashboard...
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