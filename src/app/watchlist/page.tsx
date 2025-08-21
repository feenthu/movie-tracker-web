'use client'

import { PageWrapper } from '@/components/layout/page-wrapper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function WatchlistPage() {
  return (
    <PageWrapper>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">My Watchlist</h1>
          <p className="text-muted-foreground mt-2">
            Keep track of movies you want to watch
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>📋 Your Watchlist is Empty</CardTitle>
            <CardDescription>
              Start adding movies to track what you want to watch
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Your personal watchlist will help you keep track of movies you&apos;re interested in watching. 
              Once the movie browsing feature is available, you&apos;ll be able to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Add movies from search results to your watchlist</li>
              <li>Organize your watchlist by priority or genre</li>
              <li>Mark movies as watched when you complete them</li>
              <li>Get notifications for new releases from your watchlist</li>
              <li>Share your watchlist with friends</li>
            </ul>
            <div className="pt-4 space-x-4">
              <Link href="/movies">
                <Button>
                  Browse Movies
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline">
                  ← Back to Dashboard
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}