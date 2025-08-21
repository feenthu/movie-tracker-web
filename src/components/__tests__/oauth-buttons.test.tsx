import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing'
import { OAuth2Buttons } from '../oauth-buttons'
import { GET_OAUTH2_LOGIN_URL, OAuth2Provider } from '@/graphql/generated'

const oauthMocks = Object.values(OAuth2Provider).map(provider => ({
  request: {
    query: GET_OAUTH2_LOGIN_URL,
    variables: { provider },
  },
  result: {
    data: {
      getOAuth2LoginUrl: {
        provider,
        loginUrl: `http://localhost:8081/oauth2/authorization/${provider.toLowerCase()}`,
      },
    },
  },
}))

describe('OAuth2Buttons', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Mock window.location.href as a simple string
    delete (window as any).location
    ;(window as any).location = { href: '' }
  })

  const renderOAuth2Buttons = (mocks = oauthMocks) => {
    return render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <OAuth2Buttons />
      </MockedProvider>
    )
  }

  it('renders all OAuth2 provider buttons', () => {
    renderOAuth2Buttons()

    expect(screen.getByRole('button', { name: /continue with google/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /continue with facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /continue with apple/i })).toBeInTheDocument()
  })

  it('renders the divider text', () => {
    renderOAuth2Buttons()

    expect(screen.getByText(/or continue with/i)).toBeInTheDocument()
  })

  it('handles Google OAuth2 flow correctly', async () => {
    const user = userEvent.setup()
    renderOAuth2Buttons()

    const googleButton = screen.getByRole('button', { name: /continue with google/i })
    await user.click(googleButton)

    await waitFor(() => {
      expect(window.location.href).toBe('http://localhost:8081/oauth2/authorization/google')
    })
  })

  it('handles Facebook OAuth2 flow correctly', async () => {
    const user = userEvent.setup()
    renderOAuth2Buttons()

    const facebookButton = screen.getByRole('button', { name: /continue with facebook/i })
    await user.click(facebookButton)

    await waitFor(() => {
      expect(window.location.href).toBe('http://localhost:8081/oauth2/authorization/facebook')
    })
  })

  it('handles Apple OAuth2 flow correctly', async () => {
    const user = userEvent.setup()
    renderOAuth2Buttons()

    const appleButton = screen.getByRole('button', { name: /continue with apple/i })
    await user.click(appleButton)

    await waitFor(() => {
      expect(window.location.href).toBe('http://localhost:8081/oauth2/authorization/apple')
    })
  })

  it('shows loading state during OAuth2 request', async () => {
    const user = userEvent.setup()
    renderOAuth2Buttons()

    const googleButton = screen.getByRole('button', { name: /continue with google/i })
    await user.click(googleButton)

    expect(screen.getByText(/connecting.../i)).toBeInTheDocument()
    expect(googleButton).toBeDisabled()
  })

  it('disables all buttons when one is loading', async () => {
    const user = userEvent.setup()
    renderOAuth2Buttons()

    const googleButton = screen.getByRole('button', { name: /continue with google/i })
    const facebookButton = screen.getByRole('button', { name: /continue with facebook/i })
    const appleButton = screen.getByRole('button', { name: /continue with apple/i })

    await user.click(googleButton)

    expect(googleButton).toBeDisabled()
    expect(facebookButton).toBeDisabled()
    expect(appleButton).toBeDisabled()
  })

  it('handles OAuth2 errors gracefully', async () => {
    const errorMocks = [
      {
        request: {
          query: GET_OAUTH2_LOGIN_URL,
          variables: { provider: OAuth2Provider.GOOGLE },
        },
        error: new Error('OAuth2 service unavailable'),
      },
      ...oauthMocks.slice(1), // Include other working mocks
    ]

    const user = userEvent.setup()
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    
    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <OAuth2Buttons />
      </MockedProvider>
    )

    const googleButton = screen.getByRole('button', { name: /continue with google/i })
    await user.click(googleButton)

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('OAuth2 login error:', expect.any(Error))
    })

    expect(googleButton).not.toBeDisabled()
    consoleSpy.mockRestore()
  })

  it('applies custom className when provided', () => {
    const { container } = render(
      <MockedProvider mocks={oauthMocks} addTypename={false}>
        <OAuth2Buttons className="custom-class" />
      </MockedProvider>
    )

    expect(container.firstChild).toHaveClass('custom-class')
  })
})