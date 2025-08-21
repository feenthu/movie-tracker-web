'use client'

import { useAuth } from '@/providers/auth-provider'
import { PageWrapper } from '@/components/layout/page-wrapper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DashboardPage() {
  const { user } = useAuth()

  return (
    <PageWrapper>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {user?.username}!</h1>
          <p className="text-muted-foreground mt-2">
            Ready to discover and track your favorite movies?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                🎬 <span className="ml-2">Browse Movies</span>
              </CardTitle>
              <CardDescription>
                Discover new movies and add them to your watchlist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/movies">
                <Button className="w-full">Browse Movies</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                📋 <span className="ml-2">My Watchlist</span>
              </CardTitle>
              <CardDescription>
                View and manage your personal movie watchlist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/watchlist">
                <Button className="w-full" variant="outline">View Watchlist</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                ❤️ <span className="ml-2">Favorites</span>
              </CardTitle>
              <CardDescription>
                Quick access to your most loved movies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/favorites">
                <Button className="w-full" variant="outline">View Favorites</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Movies in Watchlist</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Favorite Movies</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Movies Watched</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}