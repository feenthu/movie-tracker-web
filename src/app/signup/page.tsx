'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/providers/auth-provider'
import { MovieTrackerSignupForm } from '@/components/movietracker-signup-form'
import { MovieTrackerHeader } from '@/components/profile/movietracker-header'
import "@/styles/movietracker.css"

export default function SignupPage() {
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
        padding: 'clamp(16px, 4vw, 24px) clamp(12px, 3vw, 16px)'
      }}>
        <div style={{ 
          maxWidth: 'min(400px, 90vw)', 
          width: '100%',
          textAlign: 'center'
        }}>
          {/* Logo and Title */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--movietracker-accent-orange)' }}></div>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'var(--movietracker-accent-green)' }}></div>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#003049' }}></div>
              </div>
              <h1 style={{ 
                fontSize: 'clamp(24px, 5vw, 28px)', 
                fontWeight: '700', 
                color: 'var(--movietracker-text-primary)',
                margin: 0
              }}>
                MovieTracker
              </h1>
            </div>
            <p style={{ 
              fontSize: 'clamp(14px, 3vw, 16px)',
              color: 'var(--movietracker-text-secondary)',
              margin: 0
            }}>
              Join the community and start tracking your favorite films
            </p>
          </div>

          {/* Signup Card */}
          <div className="movietracker-sidebar-card" style={{ 
            maxWidth: 'none',
            margin: '0 auto',
            padding: 'clamp(20px, 4vw, 30px)',
            minWidth: '280px'
          }}>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ 
                fontSize: '20px', 
                fontWeight: '600', 
                color: 'var(--movietracker-text-primary)',
                marginBottom: '8px'
              }}>
                Create Your Account
              </h2>
              <p style={{ 
                fontSize: '14px',
                color: 'var(--movietracker-text-secondary)',
                margin: 0
              }}>
                Join thousands of movie lovers
              </p>
            </div>

            <MovieTrackerSignupForm />

            <div style={{ 
              textAlign: 'center', 
              fontSize: '14px',
              marginTop: '24px',
              color: 'var(--movietracker-text-secondary)'
            }}>
              Already have an account?{' '}
              <Link 
                href="/" 
                style={{ 
                  color: 'var(--movietracker-accent-orange)', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
              >
                Sign in here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}