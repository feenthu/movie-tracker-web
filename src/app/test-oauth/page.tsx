'use client'

import { Suspense, useState } from 'react'
import { useMutation } from '@apollo/client'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GET_OAUTH2_LOGIN_URL, OAuth2Provider, type GetOAuth2LoginUrlMutation } from '@/graphql/generated'

export default function TestOAuthPage() {
  const [result, setResult] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const [getOAuth2LoginUrl] = useMutation<GetOAuth2LoginUrlMutation>(GET_OAUTH2_LOGIN_URL, {
    onCompleted: (data) => {
      setResult(`✅ Success! Login URL: ${data.getOAuth2LoginUrl.loginUrl}`)
      setLoading(false)
    },
    onError: (error) => {
      setResult(`❌ Error: ${error.message}`)
      setLoading(false)
    },
  })

  const testOAuth2 = async () => {
    setLoading(true)
    setResult('Testing OAuth2 connection...')
    
    try {
      await getOAuth2LoginUrl({
        variables: { provider: OAuth2Provider.GOOGLE },
      })
    } catch (error) {
      setResult(`❌ Error: ${error}`)
      setLoading(false)
    }
  }

  return (
    <PageWrapper maxWidth="md">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">OAuth2 Test Page</h1>
          <p className="text-muted-foreground mt-2">
            Test your OAuth2 integration with Google
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Google OAuth2 Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={testOAuth2} 
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Testing...' : 'Test Google OAuth2'}
            </Button>
            
            {result && (
              <div className="p-4 bg-gray-100 rounded-lg">
                <pre className="text-sm whitespace-pre-wrap">{result}</pre>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Setup Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span>☑️</span>
                <span>Google Cloud OAuth2 client created</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>☑️</span>
                <span>Authorized redirect URIs configured</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⏳</span>
                <span>Railway environment variables set</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⏳</span>
                <span>API service redeployed</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}