import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

interface Movie {
  id: string
  title: string
  posterPath?: string
  userRating?: number
  year?: number
}

interface Activity {
  id: string
  type: 'watched' | 'rated' | 'added_to_list' | 'favorited'
  movie: Movie
  rating?: number
  timestamp: Date
}

interface Stats {
  moviesWatched: number
  moviesInWatchlist: number
  favoriteMovies: number
  averageRating: number
  thisMonthActivity: number
}

interface SidebarProps {
  recentActivity: Activity[]
  stats?: Stats
}

export function Sidebar({ recentActivity, stats }: SidebarProps) {
  return (
    <div className="w-80 space-y-8">
      {/* Pro Banner */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-6 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-white font-bold text-lg mb-2">NEED AN UPGRADE?</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            Profile stats, filtering by favorite streaming services, watchlist alerts and no ads!
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">
            GET PRO
          </Button>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-600 rounded-full -translate-y-8 translate-x-8 opacity-20"></div>
      </div>

      {/* Diary Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-300 font-semibold uppercase tracking-wide">Diary</h3>
          <span className="text-gray-500 text-sm">{recentActivity.length}</span>
        </div>
        
        {recentActivity.length > 0 ? (
          <div className="space-y-2">
            {recentActivity.slice(0, 3).map((activity) => (
              <div key={activity.id} className="flex items-center gap-3">
                <div className="bg-slate-700 rounded px-2 py-1 min-w-[48px]">
                  <div className="text-xs text-gray-400">
                    {activity.timestamp.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                  </div>
                  <div className="text-sm font-bold text-white">
                    {activity.timestamp.getDate()}
                  </div>
                </div>
                <span className="text-gray-300 truncate">{activity.movie.title}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500 text-sm">No recent activity</div>
        )}
      </section>

      {/* Ratings Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-300 font-semibold uppercase tracking-wide">Ratings</h3>
          <span className="text-gray-500 text-sm">
            {recentActivity.filter(a => a.rating).length}
          </span>
        </div>
        
        <div className="space-y-3">
          {/* 1 Star */}
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-green-500 fill-current" />
            <div className="flex-1 bg-slate-700 h-2 rounded">
              <div className="bg-slate-600 h-2 rounded w-1/5"></div>
            </div>
          </div>
          
          {/* 5 Stars */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 text-green-500 fill-current" />
              ))}
            </div>
            <div className="flex-1 bg-slate-700 h-2 rounded">
              <div className="bg-green-500 h-2 rounded w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {stats && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-300 font-semibold uppercase tracking-wide">Stats</h3>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Watchlist:</span>
              <span className="text-white">{stats.moviesInWatchlist}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Avg Rating:</span>
              <span className="text-white">{stats.averageRating.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">This Month:</span>
              <span className="text-white">{stats.thisMonthActivity}</span>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}