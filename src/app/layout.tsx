import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ApolloWrapper } from '@/providers/apollo-provider'
import { AuthProvider } from '@/providers/auth-provider'
import { ToastProvider } from '@/providers/toast-provider'
import { Navbar } from '@/components/layout/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Tracker',
  description: 'Track your favorite movies and build your watchlist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <ApolloWrapper>
            <AuthProvider>
              <div className="min-h-screen bg-background">
                <Navbar />
                {children}
              </div>
            </AuthProvider>
          </ApolloWrapper>
        </ToastProvider>
      </body>
    </html>
  )
}