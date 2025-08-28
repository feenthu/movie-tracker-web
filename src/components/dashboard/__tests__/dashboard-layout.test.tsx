import { render, screen, fireEvent } from '@testing-library/react'
import { DashboardLayout } from '../dashboard-layout'

const mockData = {
  user: {
    id: '1',
    username: 'testuser',
    avatar: undefined,
    stats: {
      moviesWatched: 42,
      following: 15,
      followers: 8
    }
  },
  favoriteMovies: [
    {
      id: '1',
      title: 'Favorite Movie',
      posterPath: '/favorite.jpg',
      userRating: 5,
      year: 2023
    }
  ],
  recentActivity: [
    {
      id: '1',
      type: 'watched' as const,
      movie: {
        id: '1',
        title: 'Recent Movie',
        posterPath: '/recent.jpg',
        year: 2024
      },
      rating: 4,
      timestamp: new Date()
    }
  ],
  recentLikes: [
    {
      id: '1',
      title: 'Liked Movie',
      posterPath: '/liked.jpg',
      year: 2024
    }
  ],
  stats: {
    moviesWatched: 42,
    moviesInWatchlist: 8,
    favoriteMovies: 5,
    averageRating: 4.2,
    thisMonthActivity: 12
  }
}

describe('DashboardLayout', () => {
  it('renders user profile correctly', () => {
    render(<DashboardLayout data={mockData} />)
    
    expect(screen.getByText('testuser')).toBeInTheDocument()
    expect(screen.getByText('EDIT PROFILE')).toBeInTheDocument()
  })

  it('displays navigation tabs', () => {
    render(<DashboardLayout data={mockData} />)
    
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Activity')).toBeInTheDocument()
    expect(screen.getByText('Films')).toBeInTheDocument()
    expect(screen.getByText('Diary')).toBeInTheDocument()
  })

  it('switches tabs correctly', () => {
    render(<DashboardLayout data={mockData} />)
    
    const activityTab = screen.getByText('Activity')
    fireEvent.click(activityTab)
    
    expect(screen.getByText('Activity content coming soon...')).toBeInTheDocument()
  })

  it('shows stats overview', () => {
    render(<DashboardLayout data={mockData} />)
    
    expect(screen.getByText('Movies Watched')).toBeInTheDocument()
    expect(screen.getByText('42')).toBeInTheDocument()
    expect(screen.getByText('4.2')).toBeInTheDocument()
  })

  it('displays favorite films section', () => {
    render(<DashboardLayout data={mockData} />)
    
    expect(screen.getByText('FAVORITE FILMS')).toBeInTheDocument()
    expect(screen.getByAltText('Favorite Movie')).toBeInTheDocument()
  })

  it('shows recent activity', () => {
    render(<DashboardLayout data={mockData} />)
    
    expect(screen.getByText('RECENT ACTIVITY')).toBeInTheDocument()
    expect(screen.getByText('Recent Movie')).toBeInTheDocument()
  })

  it('handles loading state', () => {
    render(<DashboardLayout loading={true} />)
    
    // Check for skeleton loading elements instead
    const skeletonElements = document.querySelectorAll('.animate-pulse')
    expect(skeletonElements.length).toBeGreaterThan(0)
  })

  it('handles movie click events', () => {
    const onMovieClick = jest.fn()
    render(<DashboardLayout data={mockData} onMovieClick={onMovieClick} />)
    
    const moviePoster = screen.getByAltText('Favorite Movie')
    fireEvent.click(moviePoster.closest('div')!)
    
    expect(onMovieClick).toHaveBeenCalled()
  })
})