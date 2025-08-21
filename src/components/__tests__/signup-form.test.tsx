import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing'
import { SignupForm } from '../signup-form'
import { REGISTER, GET_OAUTH2_LOGIN_URL, OAuth2Provider } from '@/graphql/generated'

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

const registerMock = {
  request: {
    query: REGISTER,
    variables: {
      input: {
        email: 'test@example.com',
        username: 'testuser',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
      },
    },
  },
  result: {
    data: {
      register: {
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

describe('SignupForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    delete (window as any).location
    ;(window as any).location = { href: '' }
  })

  const renderSignupForm = (mocks = [registerMock, ...oauthMocks]) => {
    return render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <SignupForm />
      </MockedProvider>
    )
  }

  it('renders all form elements correctly', () => {
    renderSignupForm()

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument()
  })

  it('renders OAuth2 buttons', () => {
    renderSignupForm()

    expect(screen.getByRole('button', { name: /continue with google/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /continue with facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /continue with apple/i })).toBeInTheDocument()
  })

  it('validates required fields', async () => {
    const user = userEvent.setup()
    renderSignupForm()

    const submitButton = screen.getByRole('button', { name: /create account/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument()
      expect(screen.getByText(/username must be at least 3 characters/i)).toBeInTheDocument()
      expect(screen.getByText(/password must be at least 6 characters/i)).toBeInTheDocument()
    })
  })

  it('submits the form with valid data', async () => {
    const user = userEvent.setup()
    renderSignupForm()

    const emailInput = screen.getByLabelText(/email/i)
    const usernameInput = screen.getByLabelText(/username/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const submitButton = screen.getByRole('button', { name: /create account/i })

    await user.type(emailInput, 'test@example.com')
    await user.type(usernameInput, 'testuser')
    await user.type(passwordInput, 'password123')
    await user.type(firstNameInput, 'John')
    await user.type(lastNameInput, 'Doe')
    await user.click(submitButton)

    await waitFor(() => {
      expect(mockAuthProvider.login).toHaveBeenCalledWith('mock-token', {
        id: '1',
        email: 'test@example.com',
        username: 'testuser',
      })
    })
  })

  it('submits the form with only required fields', async () => {
    const minimalRegisterMock = {
      request: {
        query: REGISTER,
        variables: {
          input: {
            email: 'test@example.com',
            username: 'testuser',
            password: 'password123',
            firstName: '',
            lastName: '',
          },
        },
      },
      result: {
        data: {
          register: {
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

    const user = userEvent.setup()
    render(
      <MockedProvider mocks={[minimalRegisterMock, ...oauthMocks]} addTypename={false}>
        <SignupForm />
      </MockedProvider>
    )

    const emailInput = screen.getByLabelText(/email/i)
    const usernameInput = screen.getByLabelText(/username/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /create account/i })

    await user.type(emailInput, 'test@example.com')
    await user.type(usernameInput, 'testuser')
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

  it('handles Google OAuth2 signup', async () => {
    const user = userEvent.setup()
    renderSignupForm()

    const googleButton = screen.getByRole('button', { name: /continue with google/i })
    await user.click(googleButton)

    await waitFor(() => {
      expect(window.location.href).toBe('http://localhost:8081/oauth2/authorization/google')
    })
  })

  it('disables submit button while loading', async () => {
    const user = userEvent.setup()
    renderSignupForm()

    const emailInput = screen.getByLabelText(/email/i)
    const usernameInput = screen.getByLabelText(/username/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /create account/i })

    await user.type(emailInput, 'test@example.com')
    await user.type(usernameInput, 'testuser')
    await user.type(passwordInput, 'password123')
    await user.click(submitButton)

    expect(screen.getByRole('button', { name: /creating account.../i })).toBeDisabled()
  })

  it('displays error message on signup failure', async () => {
    const errorMock = {
      request: {
        query: REGISTER,
        variables: {
          input: {
            email: 'test@example.com',
            username: 'existinguser',
            password: 'password123',
            firstName: '',
            lastName: '',
          },
        },
      },
      error: new Error('Username already exists'),
    }

    const user = userEvent.setup()
    render(
      <MockedProvider mocks={[errorMock, ...oauthMocks]} addTypename={false}>
        <SignupForm />
      </MockedProvider>
    )

    const emailInput = screen.getByLabelText(/email/i)
    const usernameInput = screen.getByLabelText(/username/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByRole('button', { name: /create account/i })

    await user.type(emailInput, 'test@example.com')
    await user.type(usernameInput, 'existinguser')
    await user.type(passwordInput, 'password123')
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/username already exists/i)).toBeInTheDocument()
    })
  })
})