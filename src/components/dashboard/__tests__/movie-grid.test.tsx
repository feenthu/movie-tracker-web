import { render, screen, fireEvent } from '@testing-library/react'
import { MovieGrid } from '../movie-grid'

const mockMovies = [
  {
    id: '1',
    title: 'Test Movie 1',
    posterPath: '/test-poster-1.jpg',
    userRating: 4,
    year: 2023
  },
  {
    id: '2',
    title: 'Test Movie 2',
    posterPath: '/test-poster-2.jpg',
    userRating: 5,
    year: 2024
  }
]

describe('MovieGrid', () => {
  it('renders movies correctly', () => {
    render(<MovieGrid movies={mockMovies} />)
    
    expect(screen.getByAltText('Test Movie 1')).toBeInTheDocument()
    expect(screen.getByAltText('Test Movie 2')).toBeInTheDocument()
  })

  it('shows loading state', () => {
    render(<MovieGrid movies={[]} loading={true} />)
    
    const skeletonElements = screen.getAllByRole('generic')
    expect(skeletonElements.length).toBeGreaterThan(0)
  })

  it('shows empty state when no movies', () => {
    const emptyMessage = 'No movies found'
    render(<MovieGrid movies={[]} emptyMessage={emptyMessage} />)
    
    expect(screen.getByText(emptyMessage)).toBeInTheDocument()
  })

  it('handles movie click events', () => {
    const onMovieClick = jest.fn()
    render(<MovieGrid movies={mockMovies} onMovieClick={onMovieClick} />)
    
    const firstMovie = screen.getByAltText('Test Movie 1')
    fireEvent.click(firstMovie.closest('div')!)
    
    expect(onMovieClick).toHaveBeenCalledWith(mockMovies[0])
  })

  it('applies correct grid columns', () => {
    const { container } = render(<MovieGrid movies={mockMovies} columns={4} />)
    
    const gridElement = container.querySelector('.grid-cols-4')
    expect(gridElement).toBeInTheDocument()
  })

  it('shows ratings when enabled', () => {
    render(<MovieGrid movies={mockMovies} showRating={true} />)
    
    expect(screen.getByText('★ 4')).toBeInTheDocument()
    expect(screen.getByText('★ 5')).toBeInTheDocument()
  })
})