'use client'

import { PageWrapper } from '@/components/layout/page-wrapper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function MoviesPage() {
  return (
    <PageWrapper>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Browse Movies</h1>
          <p className="text-muted-foreground mt-2">
            Discover new movies and add them to your watchlist
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>🚧 Coming Soon</CardTitle>
            <CardDescription>
              Movie browsing feature is currently under development
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We're working hard to bring you an amazing movie discovery experience. 
              This feature will include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Search for movies by title, genre, or actor</li>
              <li>View detailed movie information and trailers</li>
              <li>Add movies to your personal watchlist</li>
              <li>Rate and review movies you've watched</li>
              <li>Get personalized movie recommendations</li>
            </ul>
            <div className="pt-4">
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