'use client'

export default function CallbackDebugPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>OAuth2 Callback Debug</h1>
      <p>If you can see this page, the routing is working.</p>
      <p>Current URL: {typeof window !== 'undefined' ? window.location.href : 'Loading...'}</p>
      <div>
        <h3>URL Parameters:</h3>
        <pre>
          {typeof window !== 'undefined' 
            ? JSON.stringify(Object.fromEntries(new URLSearchParams(window.location.search)), null, 2)
            : 'Loading...'
          }
        </pre>
      </div>
    </div>
  )
}