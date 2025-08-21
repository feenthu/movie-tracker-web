import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing'
import { LoginForm } from '../login-form'
import { LOGIN, GET_OAUTH2_LOGIN_URL, OAuth2Provider } from '@/graphql/generated'

const mockAuthProvider = {
  login: jest.fn(),
  logout: jest.fn(),
  user: null,
  isAuthenticated: false,
  isLoading: false,
}

jest.mock('@/providers/auth-provider', () => ({
  useAuth: () => mockAuthProvider,
}))

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

const loginMock = {
  request: {
    query: LOGIN,
    variables: {
      input: {
        email: 'test@example.com',
        password: 'password123',
      },
    },
  },
  result: {
    data: {
      login: {
        token: 'mock-token',
        user: {
          id: '1',
          email: 'test@example.com',
          username: 'testuser',
        },
      },
    },
  },
}

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

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    delete (window as any).location
    ;(window as any).location = { href: '' }
  })

  const renderLoginForm = (mocks = [loginMock, ...oauthMocks]) => {
    return render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <LoginForm />
      </MockedProvider>
    )
  }

  it('renders all form elements correctly', () => {
    renderLoginForm()

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument()
  })

  it('renders OAuth2 buttons', () => {
    renderLoginForm()

    expect(screen.getByRole('button', { name: /continue with google/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /continue with facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /continue with apple/i })).toBeInTheDocument()
  })

  it('validates email and password fields', async () => {
    const user = userEvent.setup()
    renderLoginForm()

    const submitButton = screen.getByRole('button', { name: /sign in/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument()
      expect(screen.getByText(/password must be at least 6 characters/i)).toBeInTheDocument()
    })
  })

  it('submits the form with valid data', async () => {
    const user = userEvent.setup()
    renderLoginForm()

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'password123')
    await user.click(submitButton)

    await waitFor(() => {
      expect(mockAuthProvider.login).toHaveBeenCalledWith('mock-token', {
        id: '1',
        email: 'test@example.com',
        username: 'testuser',
      })
    })
  })

  it('handles Google OAuth2 login', async () => {
    const user = userEvent.setup()
    renderLoginForm()

    const googleButton = screen.getByRole('button', { name: /continue with google/i })
    await user.click(googleButton)

    await waitFor(() => {
      expect(window.location.href).toBe('http://localhost:8081/oauth2/authorization/google')
    })
  })

  it('handles Facebook OAuth2 login', async () => {
    const user = userEvent.setup()
    renderLoginForm()

    const facebookButton = screen.getByRole('button', { name: /continue with facebook/i })
    await user.click(facebookButton)

    await waitFor(() => {
      expect(window.location.href).toBe('http://localhost:8081/oauth2/authorization/facebook')
    })
  })

  it('handles Apple OAuth2 login', async () => {
    const user = userEvent.setup()
    renderLoginForm()

    const appleButton = screen.getByRole('button', { name: /continue with apple/i })
    await user.click(appleButton)

    await waitFor(() => {
      expect(window.location.href).toBe('http://localhost:8081/oauth2/authorization/apple')
    })
  })

  it('disables submit button while loading', async () => {
    const user = userEvent.setup()
    renderLoginForm()

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'password123')
    await user.click(submitButton)

    expect(screen.getByRole('button', { name: /signing in.../i })).toBeDisabled()
  })

  it('displays error message on login failure', async () => {
    const errorMock = {
      request: {
        query: LOGIN,
        variables: {
          input: {
            email: 'test@example.com',
            password: 'wrongpassword',
          },
        },
      },
      error: new Error('Invalid credentials'),
    }

    const user = userEvent.setup()
    render(
      <MockedProvider mocks={[errorMock, ...oauthMocks]} addTypename={false}>
        <LoginForm />
      </MockedProvider>
    )

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /sign in/i })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'wrongpassword')
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument()
    })
  })
})