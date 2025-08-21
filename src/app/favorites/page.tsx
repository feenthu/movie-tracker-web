'use client'

import { PageWrapper } from '@/components/layout/page-wrapper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function FavoritesPage() {
  return (
    <PageWrapper>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">My Favorites</h1>
          <p className="text-muted-foreground mt-2">
            Your most loved movies collection
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>❤️ No Favorites Yet</CardTitle>
            <CardDescription>
              Start marking movies as favorites to build your collection
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Your favorites collection will showcase the movies you love most. 
              Once you start using the app, you&apos;ll be able to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Mark movies as favorites with a simple heart click</li>
              <li>View all your favorite movies in one place</li>
              <li>Sort favorites by rating, genre, or date added</li>
              <li>Get recommendations based on your favorites</li>
              <li>Create custom favorite lists (e.g., &quot;Best Comedies&quot;, &quot;Guilty Pleasures&quot;)</li>
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