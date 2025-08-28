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
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
      {/* Avatar and Basic Info */}
      <div className="flex items-center gap-6">
        <UserAvatar 
          src={user.avatar}
          alt={user.username}
          size="xl"
          fallback={user.username}
          className="ring-2 ring-letterboxd-border"
        />
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-letterboxd-text-primary">
            {user.username}
          </h1>
          <Button 
            variant="outline" 
            size="sm"
            className="border-letterboxd-border text-letterboxd-text-secondary hover:border-letterboxd-accent hover:text-letterboxd-accent bg-transparent text-xs font-medium tracking-wide"
          >
            EDIT PROFILE
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-12 ml-auto">
        <div className="text-center">
          <div className="text-4xl font-bold text-letterboxd-text-primary mb-1">
            {user.stats.moviesWatched}
          </div>
          <div className="text-xs text-letterboxd-text-muted uppercase tracking-widest font-medium">
            FILMS
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-letterboxd-text-primary mb-1">
            {user.stats.following}
          </div>
          <div className="text-xs text-letterboxd-text-muted uppercase tracking-widest font-medium">
            FOLLOWING
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-4xl font-bold text-letterboxd-text-primary mb-1">
            {user.stats.followers}
          </div>
          <div className="text-xs text-letterboxd-text-muted uppercase tracking-widest font-medium">
            FOLLOWERS
          </div>
        </div>
      </div>
    </div>
  )
}