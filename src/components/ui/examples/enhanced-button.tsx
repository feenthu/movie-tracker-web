import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Plus, Heart, Star, Download, Share, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

// Enhanced Button variants that showcase the semantic token system
export function EnhancedButtons() {
  return (
    <div className="space-y-8 p-6 bg-surface-primary rounded-lg">
      <div>
        <h3 className="text-lg font-semibold text-content-primary mb-4">Primary Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-brand-primary hover:bg-brand-primary-hover">
            <Play className="w-4 h-4 mr-2" />
            Watch Now
          </Button>
          
          <Button className="bg-brand-secondary hover:bg-brand-secondary-hover">
            <Plus className="w-4 h-4 mr-2" />
            Add to List
          </Button>
          
          <Button className="bg-feedback-success hover:bg-feedback-success/90">
            <Heart className="w-4 h-4 mr-2" />
            Favorite
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-content-primary mb-4">Secondary Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="border-border-primary hover:bg-surface-secondary">
            <Star className="w-4 h-4 mr-2" />
            Rate
          </Button>
          
          <Button variant="outline" className="border-border-primary hover:bg-surface-secondary">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          
          <Button variant="outline" className="border-border-primary hover:bg-surface-secondary">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-content-primary mb-4">Filter & Sort Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <Button 
            variant="secondary" 
            className="bg-surface-secondary hover:bg-surface-tertiary text-content-primary"
          >
            <Filter className="w-4 h-4 mr-2" />
            All Movies
          </Button>
          
          <Button 
            variant="ghost" 
            className="text-content-secondary hover:text-content-primary hover:bg-surface-secondary"
          >
            Watched
          </Button>
          
          <Button 
            variant="ghost" 
            className="text-content-secondary hover:text-content-primary hover:bg-surface-secondary"
          >
            Favorites
          </Button>
          
          <Button 
            variant="ghost" 
            className="text-content-secondary hover:text-content-primary hover:bg-surface-secondary"
          >
            Watchlist
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-content-primary mb-4">Status Badges</h3>
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-feedback-success text-content-inverse">
            Watched
          </Badge>
          
          <Badge className="bg-brand-primary text-content-inverse">
            Favorite
          </Badge>
          
          <Badge className="bg-brand-secondary text-content-inverse">
            Watchlist
          </Badge>
          
          <Badge className="bg-feedback-warning text-content-inverse">
            Currently Watching
          </Badge>
          
          <Badge className="bg-feedback-info text-content-inverse">
            Want to Watch
          </Badge>
          
          <Badge 
            variant="outline" 
            className="border-border-primary text-content-secondary"
          >
            Not Rated
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-content-primary mb-4">Size Variations</h3>
        <div className="flex items-center gap-3">
          <Button size="sm" className="bg-brand-primary hover:bg-brand-primary-hover">
            Small
          </Button>
          
          <Button size="default" className="bg-brand-primary hover:bg-brand-primary-hover">
            Default
          </Button>
          
          <Button size="lg" className="bg-brand-primary hover:bg-brand-primary-hover">
            Large
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-content-primary mb-4">Loading & Disabled States</h3>
        <div className="flex flex-wrap gap-3">
          <Button disabled className="bg-brand-primary">
            <Play className="w-4 h-4 mr-2" />
            Loading...
          </Button>
          
          <Button 
            variant="outline" 
            disabled 
            className="border-border-primary text-content-disabled"
          >
            Disabled
          </Button>
          
          <Button className="bg-brand-primary hover:bg-brand-primary-hover group">
            <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-transparent border-t-current opacity-0 group-hover:opacity-100 transition-opacity" />
            <Play className="w-4 h-4 mr-2 group-hover:opacity-0 transition-opacity" />
            Hover to Load
          </Button>
        </div>
      </div>
    </div>
  )
}