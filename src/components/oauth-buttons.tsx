'use client'

import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Button } from '@/components/ui/button'
import { Loading } from '@/components/ui/loading'
import { GET_OAUTH2_LOGIN_URL, OAuth2Provider, type GetOAuth2LoginUrlMutation } from '@/graphql/generated'

interface OAuth2ButtonsProps {
  className?: string
}

export function OAuth2Buttons({ className }: OAuth2ButtonsProps) {
  const [loadingProvider, setLoadingProvider] = useState<OAuth2Provider | null>(null)

  const [getOAuth2LoginUrl] = useMutation<GetOAuth2LoginUrlMutation>(GET_OAUTH2_LOGIN_URL, {
    onCompleted: async (data) => {
      if (typeof window !== 'undefined') {
        try {
          // Call the new secure OAuth2 endpoint to get authorization URL
          const response = await fetch(data.getOAuth2LoginUrl.loginUrl, {
            method: 'GET',
            credentials: 'include', // Include cookies for session management
            headers: {
              'Content-Type': 'application/json',
            },
          })

          if (!response.ok) {
            throw new Error(`OAuth2 setup failed: ${response.status}`)
          }

          const result = await response.json()
          
          if (result.error) {
            throw new Error(result.error)
          }

          // Redirect to OAuth provider with PKCE parameters
          window.location.href = result.authorizationUrl
          
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
          console.error('Railway OAuth2 Error Details:', {
            error: errorMessage,
            provider: data.getOAuth2LoginUrl.provider,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
          })
          // TODO: Show user-friendly error toast/modal
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
      icon: '🔍',
      bgColor: 'bg-red-500 hover:bg-red-600',
    },
    [OAuth2Provider.FACEBOOK]: {
      name: 'Facebook',
      icon: '📘',
      bgColor: 'bg-blue-600 hover:bg-blue-700',
    },
    [OAuth2Provider.APPLE]: {
      name: 'Apple',
      icon: '🍎',
      bgColor: 'bg-black hover:bg-gray-800',
    },
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-2">
        {Object.entries(providerConfig).map(([provider, config]) => (
          <Button
            key={provider}
            type="button"
            variant="outline"
            className={`w-full text-white ${config.bgColor}`}
            onClick={() => handleOAuth2Login(provider as OAuth2Provider)}
            disabled={loadingProvider !== null}
          >
            {loadingProvider === provider ? (
              <>
                <Loading size="sm" className="mr-2" />
                Connecting...
              </>
            ) : (
              <>
                <span className="mr-2">{config.icon}</span>
                Continue with {config.name}
              </>
            )}
          </Button>
        ))}
      </div>
    </div>
  )
}