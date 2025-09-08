'use client'

import { useState } from 'react'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface DebugResult {
  step: string
  status: 'pending' | 'success' | 'error'
  data?: any
  error?: string
}

export default function OAuth2DebugPage() {
  const [results, setResults] = useState<DebugResult[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const addResult = (result: DebugResult) => {
    setResults(prev => [...prev, result])
  }

  const clearResults = () => {
    setResults([])
  }

  const runDiagnostics = async () => {
    setIsRunning(true)
    clearResults()

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://movie-tracker-api-production.up.railway.app'

    // Step 1: Check OAuth2 configuration status
    try {
      addResult({ step: '1. Checking OAuth2 Configuration', status: 'pending' })
      const response = await fetch(`${apiUrl}/debug/oauth2/status`, {
        method: 'GET',
        credentials: 'include',
      })
      
      if (response.ok) {
        const data = await response.json()
        addResult({ 
          step: '1. OAuth2 Configuration Status', 
          status: 'success', 
          data 
        })
      } else {
        throw new Error(`Status check failed: ${response.status} ${response.statusText}`)
      }
    } catch (error) {
      addResult({ 
        step: '1. OAuth2 Configuration Status', 
        status: 'error', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      })
    }

    // Step 2: Test GraphQL endpoint routing
    try {
      addResult({ step: '2. Checking GraphQL Endpoint Routing', status: 'pending' })
      const response = await fetch(`${apiUrl}/debug/oauth2/graphql-endpoint-check`, {
        method: 'GET',
        credentials: 'include',
      })
      
      if (response.ok) {
        const data = await response.json()
        addResult({ 
          step: '2. GraphQL Endpoint Routing', 
          status: 'success', 
          data 
        })
      } else {
        throw new Error(`GraphQL check failed: ${response.status} ${response.statusText}`)
      }
    } catch (error) {
      addResult({ 
        step: '2. GraphQL Endpoint Routing', 
        status: 'error', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      })
    }

    // Step 3: Test PKCE components
    try {
      addResult({ step: '3. Testing PKCE Components', status: 'pending' })
      const response = await fetch(`${apiUrl}/debug/oauth2/test-pkce/google`, {
        method: 'GET',
        credentials: 'include',
      })
      
      if (response.ok) {
        const data = await response.json()
        addResult({ 
          step: '3. PKCE Components Test', 
          status: 'success', 
          data 
        })
      } else {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(`PKCE test failed: ${response.status} - ${errorData.error || response.statusText}`)
      }
    } catch (error) {
      addResult({ 
        step: '3. PKCE Components Test', 
        status: 'error', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      })
    }

    // Step 4: Test actual GraphQL OAuth2 query
    try {
      addResult({ step: '4. Testing GraphQL OAuth2 Query', status: 'pending' })
      const response = await fetch(`${apiUrl}/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          query: `
            mutation {
              getOAuth2LoginUrl(provider: GOOGLE) {
                provider
                loginUrl
              }
            }
          `
        })
      })
      
      if (response.ok) {
        const data = await response.json()
        addResult({ 
          step: '4. GraphQL OAuth2 Query', 
          status: 'success', 
          data 
        })
      } else {
        throw new Error(`GraphQL query failed: ${response.status} ${response.statusText}`)
      }
    } catch (error) {
      addResult({ 
        step: '4. GraphQL OAuth2 Query', 
        status: 'error', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      })
    }

    setIsRunning(false)
  }

  const testNewFlow = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://movie-tracker-api-production.up.railway.app'
    
    try {
      // Test the new PKCE endpoint directly
      const response = await fetch(`${apiUrl}/oauth2/authorize/google`, {
        method: 'GET',
        credentials: 'include',
      })

      if (response.ok) {
        const result = await response.json()
        if (result.authorizationUrl) {
          window.open(result.authorizationUrl, '_blank')
        }
      } else {
        alert(`New flow test failed: ${response.status}`)
      }
    } catch (error) {
      alert(`New flow error: ${error}`)
    }
  }

  return (
    <PageWrapper maxWidth="lg">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>OAuth2 Flow Systematic Diagnostics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <Button 
                onClick={runDiagnostics} 
                disabled={isRunning}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isRunning ? 'Running Diagnostics...' : 'Run Full Diagnostics'}
              </Button>
              <Button 
                onClick={testNewFlow}
                variant="secondary"
                className="border-green-500 text-green-600 hover:bg-green-50"
              >
                Test New PKCE Flow Directly
              </Button>
              <Button onClick={clearResults} variant="secondary">
                Clear Results
              </Button>
            </div>
          </CardContent>
        </Card>

        {results.map((result, index) => (
          <Card key={index} className={`border-l-4 ${
            result.status === 'success' ? 'border-l-green-500' :
            result.status === 'error' ? 'border-l-red-500' :
            'border-l-yellow-500'
          }`}>
            <CardHeader className="pb-2">
              <CardTitle className={`text-lg flex items-center gap-2 ${
                result.status === 'success' ? 'text-green-700' :
                result.status === 'error' ? 'text-red-700' :
                'text-yellow-700'
              }`}>
                {result.status === 'success' ? '✅' :
                 result.status === 'error' ? '❌' : '⏳'}
                {result.step}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result.error && (
                <div className="text-red-600 font-mono text-sm bg-red-50 p-3 rounded">
                  {result.error}
                </div>
              )}
              {result.data && (
                <details className="mt-2">
                  <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
                    Show Details
                  </summary>
                  <pre className="mt-2 text-xs bg-gray-100 p-3 rounded overflow-auto">
                    {JSON.stringify(result.data, null, 2)}
                  </pre>
                </details>
              )}
            </CardContent>
          </Card>
        ))}

        <Card className="bg-gray-50">
          <CardHeader>
            <CardTitle className="text-sm text-gray-600">Current Issue Analysis</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p><strong>Problem:</strong> Getting `[authorization_request_not_found]` with `session: false`</p>
            <p><strong>Expected:</strong> New PKCE flow should have `session: true` in callback URL</p>
            <p><strong>This means:</strong> The old Spring OAuth2 flow is still being used instead of our new PKCE flow</p>
            <p><strong>Debug Goal:</strong> Identify why the GraphQL endpoint isn&apos;t returning our new PKCE URL</p>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}