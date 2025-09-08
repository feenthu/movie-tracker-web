'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { LOGIN } from '@/graphql/generated'
import { useAuth } from '@/providers/auth-provider'
import { MovieTrackerOAuth2Buttons } from '@/components/movietracker-oauth-buttons'
import type { LoginMutation } from '@/graphql/generated'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

export function MovieTrackerLoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { login } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const [loginMutation] = useMutation<LoginMutation>(LOGIN, {
    onCompleted: (data) => {
      login(data.login.token, data.login.user)
      router.push('/dashboard')
    },
    onError: (error) => {
      setError(error.message || 'An error occurred during login')
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    setError(null)
    try {
      await loginMutation({
        variables: {
          input: {
            email: data.email,
            password: data.password,
          },
        },
      })
    } catch (error) {
      // Error handled by onError callback
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {error && (
        <div style={{
          backgroundColor: 'rgba(220, 38, 38, 0.1)',
          border: '1px solid rgba(220, 38, 38, 0.3)',
          color: '#ef4444',
          padding: '12px 16px',
          borderRadius: '6px',
          fontSize: '14px'
        }}>
          {error}
        </div>
      )}
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label 
          htmlFor="email" 
          style={{ 
            fontSize: '14px', 
            fontWeight: '500',
            color: 'var(--movietracker-text-primary)'
          }}
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register('email')}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '6px',
            border: '1px solid var(--movietracker-border)',
            backgroundColor: 'var(--movietracker-background-secondary)',
            color: 'var(--movietracker-text-primary)',
            fontSize: '14px',
            outline: 'none',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'var(--movietracker-accent-orange)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'var(--movietracker-border)'
          }}
        />
        {errors.email && (
          <p style={{ fontSize: '12px', color: '#ef4444' }}>{errors.email.message}</p>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label 
          htmlFor="password" 
          style={{ 
            fontSize: '14px', 
            fontWeight: '500',
            color: 'var(--movietracker-text-primary)'
          }}
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register('password')}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '6px',
            border: '1px solid var(--movietracker-border)',
            backgroundColor: 'var(--movietracker-background-secondary)',
            color: 'var(--movietracker-text-primary)',
            fontSize: '14px',
            outline: 'none',
            transition: 'border-color 0.2s ease',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = 'var(--movietracker-accent-orange)'
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'var(--movietracker-border)'
          }}
        />
        {errors.password && (
          <p style={{ fontSize: '12px', color: '#ef4444' }}>{errors.password.message}</p>
        )}
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        style={{
          width: '100%',
          padding: '12px 24px',
          backgroundColor: 'var(--movietracker-accent-orange)',
          color: 'var(--movietracker-background)',
          border: 'none',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          opacity: isLoading ? 0.7 : 1,
          transition: 'all 0.2s ease',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
        onMouseOver={(e) => {
          if (!isLoading) {
            e.currentTarget.style.backgroundColor = '#e6720c'
          }
        }}
        onMouseOut={(e) => {
          if (!isLoading) {
            e.currentTarget.style.backgroundColor = 'var(--movietracker-accent-orange)'
          }
        }}
      >
        {isLoading ? (
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <div style={{
              width: '16px',
              height: '16px',
              border: '2px solid var(--movietracker-background)',
              borderTop: '2px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            Signing In...
          </span>
        ) : (
          'Sign In'
        )}
      </button>
      
      <MovieTrackerOAuth2Buttons />
    </form>
  )
}