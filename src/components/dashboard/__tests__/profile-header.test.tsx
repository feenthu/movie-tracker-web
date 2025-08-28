import { render, screen } from '@testing-library/react'
import { ProfileHeader } from '../profile-header'

const mockUser = {
  id: '1',
  username: 'testuser',
  avatar: undefined,
  stats: {
    moviesWatched: 42,
    following: 15,
    followers: 8
  }
}

describe('ProfileHeader', () => {
  it('renders user information correctly', () => {
    render(<ProfileHeader user={mockUser} />)
    
    expect(screen.getByRole('heading', { name: 'testuser' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'EDIT PROFILE' })).toBeInTheDocument()
  })

  it('displays user stats', () => {
    render(<ProfileHeader user={mockUser} />)
    
    expect(screen.getByText('42')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('8')).toBeInTheDocument()
    
    expect(screen.getByText('FILMS')).toBeInTheDocument()
    expect(screen.getByText('FOLLOWING')).toBeInTheDocument()
    expect(screen.getByText('FOLLOWERS')).toBeInTheDocument()
  })

  it('renders avatar with fallback initials', () => {
    render(<ProfileHeader user={mockUser} />)
    
    const avatar = screen.getByText('TE')
    expect(avatar).toBeInTheDocument()
  })
})