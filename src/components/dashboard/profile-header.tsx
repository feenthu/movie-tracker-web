import { UserAvatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

interface User {
  id: string
  username: string
  avatar?: string
  stats: {
    moviesWatched: number
    following: number
    followers: number
  }
}

interface ProfileHeaderProps {
  user: User
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
      {/* Avatar and Basic Info */}
      <div className="flex items-center gap-4">
        <UserAvatar 
          src={user.avatar}
          alt={user.username}
          size="xl"
          fallback={user.username}
        />
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">
            {user.username}
          </h1>
          <Button variant="outline" size="sm">
            EDIT PROFILE
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-8 ml-auto">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">
            {user.stats.moviesWatched}
          </div>
          <div className="text-sm text-gray-400 uppercase tracking-wide">
            FILMS
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-white">
            {user.stats.following}
          </div>
          <div className="text-sm text-gray-400 uppercase tracking-wide">
            FOLLOWING
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-white">
            {user.stats.followers}
          </div>
          <div className="text-sm text-gray-400 uppercase tracking-wide">
            FOLLOWERS
          </div>
        </div>
      </div>
    </div>
  )
}