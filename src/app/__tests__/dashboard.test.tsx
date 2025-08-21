import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DashboardPage from '../dashboard/page'

const mockAuthProvider = {
  login: jest.fn(),
  logout: jest.fn(),
  user: {
    id: '1',
    email: 'test@example.com',
    username: 'testuser',
  },
  isAuthenticated: true,
  isLoading: false,
}

jest.mock('@/providers/auth-provider', () => ({
  useAuth: () => mockAuthProvider,
}))

// Mock Next.js Link to avoid router issues in tests
jest.mock('next/link', () => {
  return function MockLink({ children, href, ...props }: any) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }
})

describe('DashboardPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the dashboard with user welcome message', () => {
    render(<DashboardPage />)

    expect(screen.getByText(/welcome back, testuser!/i)).toBeInTheDocument()
    expect(screen.getByText(/ready to discover and track your favorite movies?/i)).toBeInTheDocument()
  })

  it('renders all dashboard cards', () => {
    render(<DashboardPage />)

    expect(screen.getByText(/browse movies/i)).toBeInTheDocument()
    expect(screen.getByText(/my watchlist/i)).toBeInTheDocument()
    expect(screen.getByText(/favorites/i)).toBeInTheDocument()
  })

  it('renders quick stats section', () => {
    render(<DashboardPage />)

    expect(screen.getByText(/quick stats/i)).toBeInTheDocument()
    expect(screen.getByText(/movies in watchlist/i)).toBeInTheDocument()
    expect(screen.getByText(/favorite movies/i)).toBeInTheDocument()
    expect(screen.getByText(/movies watched/i)).toBeInTheDocument()
  })

  it('has Browse Movies button with correct link', () => {
    render(<DashboardPage />)

    const browseMoviesButton = screen.getByRole('button', { name: /browse movies/i })
    expect(browseMoviesButton).toBeInTheDocument()
    
    const browseMoviesLink = browseMoviesButton.closest('a')
    expect(browseMoviesLink).toHaveAttribute('href', '/movies')
  })

  it('has View Watchlist button with correct link', () => {
    render(<DashboardPage />)

    const watchlistButton = screen.getByRole('button', { name: /view watchlist/i })
    expect(watchlistButton).toBeInTheDocument()
    
    const watchlistLink = watchlistButton.closest('a')
    expect(watchlistLink).toHaveAttribute('href', '/watchlist')
  })

  it('has View Favorites button with correct link', () => {
    render(<DashboardPage />)

    const favoritesButton = screen.getByRole('button', { name: /view favorites/i })
    expect(favoritesButton).toBeInTheDocument()
    
    const favoritesLink = favoritesButton.closest('a')
    expect(favoritesLink).toHaveAttribute('href', '/favorites')
  })

  it('displays initial stats as 0', () => {
    render(<DashboardPage />)

    const statValues = screen.getAllByText('0')
    expect(statValues).toHaveLength(3) // Should have 3 zeros for the stats
  })

  it('buttons are clickable', async () => {
    const user = userEvent.setup()
    render(<DashboardPage />)

    const browseMoviesButton = screen.getByRole('button', { name: /browse movies/i })
    const watchlistButton = screen.getByRole('button', { name: /view watchlist/i })
    const favoritesButton = screen.getByRole('button', { name: /view favorites/i })

    expect(browseMoviesButton).not.toBeDisabled()
    expect(watchlistButton).not.toBeDisabled()
    expect(favoritesButton).not.toBeDisabled()

    await user.click(browseMoviesButton)
    await user.click(watchlistButton)
    await user.click(favoritesButton)
  })
})