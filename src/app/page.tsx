'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/providers/auth-provider'
import { MovieTrackerLoginForm } from '@/components/movietracker-login-form'
import { MovieTrackerHeader } from '@/components/profile/movietracker-header'
import "@/styles/movietracker.css"

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
      <div style={{ 
        backgroundColor: 'var(--movietracker-background)', 
        color: 'var(--movietracker-text-primary)', 
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          border: '3px solid var(--movietracker-text-muted)', 
          borderTop: '3px solid var(--movietracker-accent-orange)', 
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
    )
  }

  if (isAuthenticated) {
    return null
  }

  return (
    <div style={{ 
      backgroundColor: 'var(--movietracker-background)', 
      color: 'var(--movietracker-text-primary)', 
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      lineHeight: '1.5',
      minHeight: '100vh'
    }}>
      <MovieTrackerHeader />
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: 'calc(100vh - 60px)',
        padding: '24px'
      }}>
        <div style={{ 
          maxWidth: '400px', 
          width: '100%',
          textAlign: 'center'
        }}>
          {/* Logo and Title */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--movietracker-accent-orange)' }}></div>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--movietracker-accent-green)' }}></div>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#003049' }}></div>
              </div>
              <h1 style={{ 
                fontSize: '28px', 
                fontWeight: '700', 
                color: 'var(--movietracker-text-primary)',
                margin: 0
              }}>
                MovieTracker
              </h1>
            </div>
            <p style={{ 
              fontSize: '16px',
              color: 'var(--movietracker-text-secondary)',
              margin: 0
            }}>
              Track your favorite movies and build your watchlist
            </p>
          </div>

          {/* Login Card */}
          <div className="movietracker-sidebar-card" style={{ 
            maxWidth: 'none',
            margin: '0 auto'
          }}>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ 
                fontSize: '20px', 
                fontWeight: '600', 
                color: 'var(--movietracker-text-primary)',
                marginBottom: '8px'
              }}>
                Welcome Back
              </h2>
              <p style={{ 
                fontSize: '14px',
                color: 'var(--movietracker-text-secondary)',
                margin: 0
              }}>
                Sign in to your account to continue
              </p>
            </div>

            <MovieTrackerLoginForm />

            <div style={{ 
              textAlign: 'center', 
              fontSize: '14px',
              marginTop: '24px',
              color: 'var(--movietracker-text-secondary)'
            }}>
              Don&apos;t have an account?{' '}
              <Link 
                href="/signup" 
                style={{ 
                  color: 'var(--movietracker-accent-orange)', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
              >
                Sign up here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}