'use client'

import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { GET_OAUTH2_LOGIN_URL, OAuth2Provider, type GetOAuth2LoginUrlMutation } from '@/graphql/generated'

interface MovieTrackerOAuth2ButtonsProps {
  className?: string
}

export function MovieTrackerOAuth2Buttons({ className }: MovieTrackerOAuth2ButtonsProps) {
  const [loadingProvider, setLoadingProvider] = useState<OAuth2Provider | null>(null)

  const [getOAuth2LoginUrl] = useMutation<GetOAuth2LoginUrlMutation>(GET_OAUTH2_LOGIN_URL, {
    onCompleted: async (data) => {
      if (typeof window !== 'undefined') {
        try {
          const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://movie-tracker-api-production.up.railway.app'
          const provider = data.getOAuth2LoginUrl.provider.toLowerCase()
          
          const authUrl = `${apiBaseUrl}/oauth2/authorization/${provider}`
          console.log('Railway OAuth2 Fix: Using Spring Security endpoint:', authUrl)
          
          window.location.href = authUrl
          
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
          console.error('Railway OAuth2 Error Details:', {
            error: errorMessage,
            provider: data.getOAuth2LoginUrl.provider,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
          })
          alert(`OAuth2 setup failed: ${errorMessage}\n\nPlease try again or contact support if the issue persists.`)
          setLoadingProvider(null)
        }
      }
    },
    onError: (error) => {
      console.error('Railway GraphQL OAuth2 Error:', {
        error: error.message,
        graphQLErrors: error.graphQLErrors,
        networkError: error.networkError,
        timestamp: new Date().toISOString()
      })
      alert(`OAuth2 GraphQL error: ${error.message}\n\nPlease check your network connection and try again.`)
      setLoadingProvider(null)
    },
  })

  const handleOAuth2Login = async (provider: OAuth2Provider) => {
    setLoadingProvider(provider)
    try {
      await getOAuth2LoginUrl({
        variables: { provider },
      })
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      const errorStack = error instanceof Error ? error.stack : undefined
      console.error('Railway OAuth2 Login Error:', {
        error: errorMessage,
        provider,
        timestamp: new Date().toISOString(),
        stack: errorStack
      })
      alert(`OAuth2 login failed: ${errorMessage}`)
      setLoadingProvider(null)
    }
  }

  const providerConfig = {
    [OAuth2Provider.GOOGLE]: {
      name: 'Google',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      ),
      bgColor: 'var(--movietracker-background-secondary)',
      hoverBgColor: '#374151'
    },
    [OAuth2Provider.FACEBOOK]: {
      name: 'Facebook',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      bgColor: 'var(--movietracker-background-secondary)',
      hoverBgColor: '#374151'
    },
    [OAuth2Provider.APPLE]: {
      name: 'Apple',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
      bgColor: 'var(--movietracker-background-secondary)',
      hoverBgColor: '#374151'
    },
  }

  return (
    <div className={`space-y-4 ${className || ''}`} style={{ marginTop: '24px' }}>
      {/* Divider */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div style={{ 
          flex: 1, 
          height: '1px', 
          backgroundColor: 'var(--movietracker-border)' 
        }} />
        <div style={{ 
          position: 'relative', 
          display: 'flex', 
          justifyContent: 'center', 
          fontSize: '12px', 
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          color: 'var(--movietracker-text-muted)',
          backgroundColor: 'var(--movietracker-background-card)',
          padding: '0 16px'
        }}>
          Or continue with
        </div>
        <div style={{ 
          flex: 1, 
          height: '1px', 
          backgroundColor: 'var(--movietracker-border)' 
        }} />
      </div>
      
      {/* OAuth Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {Object.entries(providerConfig).map(([provider, config]) => (
          <button
            key={provider}
            type="button"
            onClick={() => handleOAuth2Login(provider as OAuth2Provider)}
            disabled={loadingProvider !== null}
            style={{
              width: '100%',
              padding: '12px 16px',
              backgroundColor: config.bgColor,
              border: '1px solid var(--movietracker-border)',
              borderRadius: '6px',
              color: 'var(--movietracker-text-primary)',
              fontSize: '14px',
              fontWeight: '500',
              cursor: loadingProvider !== null ? 'not-allowed' : 'pointer',
              opacity: loadingProvider !== null ? 0.7 : 1,
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
            onMouseOver={(e) => {
              if (loadingProvider === null) {
                e.currentTarget.style.backgroundColor = config.hoverBgColor
                e.currentTarget.style.borderColor = 'var(--movietracker-text-muted)'
              }
            }}
            onMouseOut={(e) => {
              if (loadingProvider === null) {
                e.currentTarget.style.backgroundColor = config.bgColor
                e.currentTarget.style.borderColor = 'var(--movietracker-border)'
              }
            }}
          >
            {loadingProvider === provider ? (
              <>
                <div style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid var(--movietracker-text-muted)',
                  borderTop: '2px solid var(--movietracker-accent-orange)',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
                Connecting...
              </>
            ) : (
              <>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  {config.icon}
                </span>
                Continue with {config.name}
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}