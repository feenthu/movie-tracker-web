import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Stats {
  moviesWatched: number
  moviesInWatchlist: number
  favoriteMovies: number
  averageRating: number
  thisMonthActivity: number
}

interface StatsOverviewProps {
  stats: Stats
  loading?: boolean
}

function StatCard({ 
  title, 
  value, 
  loading 
}: { 
  title: string
  value: number | string
  loading?: boolean 
}) {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-400 uppercase tracking-wide">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="h-8 bg-gray-700 rounded animate-pulse" />
        ) : (
          <div className="text-2xl font-bold text-white">
            {typeof value === 'number' && value > 0 ? value : '0'}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function StatsOverview({ stats, loading = false }: StatsOverviewProps) {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard
          title="Movies Watched"
          value={stats.moviesWatched}
          loading={loading}
        />
        <StatCard
          title="Watchlist"
          value={stats.moviesInWatchlist}
          loading={loading}
        />
        <StatCard
          title="Favorites"
          value={stats.favoriteMovies}
          loading={loading}
        />
        <StatCard
          title="Avg Rating"
          value={stats.averageRating > 0 ? stats.averageRating.toFixed(1) : '0.0'}
          loading={loading}
        />
        <StatCard
          title="This Month"
          value={stats.thisMonthActivity}
          loading={loading}
        />
      </div>
    </section>
  )
}