'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { REGISTER } from '@/graphql/generated'
import { useAuth } from '@/providers/auth-provider'
import { MovieTrackerOAuth2Buttons } from '@/components/movietracker-oauth-buttons'
import type { RegisterMutation } from '@/graphql/generated'

const signupSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type SignupFormData = z.infer<typeof signupSchema>

export function MovieTrackerSignupForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { login } = useAuth()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  })

  const [registerMutation] = useMutation<RegisterMutation>(REGISTER, {
    onCompleted: (data) => {
      login(data.register.token, data.register.user)
      router.push('/dashboard')
    },
    onError: (error) => {
      setError(error.message || 'An error occurred during signup')
      setIsLoading(false)
    },
  })

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true)
    setError(null)
    
    try {
      await registerMutation({
        variables: {
          input: {
            username: data.username,
            email: data.email,
            password: data.password,
          },
        },
      })
    } catch (error) {
      // Error handled by onError callback
    }
  }

  return (
    <>
      {/* OAuth Buttons */}
      <MovieTrackerOAuth2Buttons />

      {/* Divider */}
      <div style={{ 
        display: 'flex',
        alignItems: 'center',
        margin: '24px 0'
      }}>
        <div style={{ 
          flex: 1,
          height: '1px',
          backgroundColor: 'var(--movietracker-border)'
        }} />
        <span style={{ 
          padding: '0 16px',
          fontSize: '12px',
          color: 'var(--movietracker-text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Or sign up with email
        </span>
        <div style={{ 
          flex: 1,
          height: '1px',
          backgroundColor: 'var(--movietracker-border)'
        }} />
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit(onSubmit)} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px',
        width: '100%'
      }}>
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
            htmlFor="username" 
            style={{ 
              fontSize: '14px', 
              fontWeight: '500',
              color: 'var(--movietracker-text-primary)'
            }}
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Choose a username"
            {...register('username')}
            style={{
              width: '100%',
              padding: 'clamp(10px, 2vw, 12px) clamp(14px, 3vw, 16px)',
              borderRadius: '6px',
              border: '1px solid var(--movietracker-border)',
              backgroundColor: 'var(--movietracker-background-secondary)',
              color: 'var(--movietracker-text-primary)',
              fontSize: 'clamp(13px, 2vw, 14px)',
              outline: 'none',
              transition: 'border-color 0.2s ease',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--movietracker-accent-orange)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--movietracker-border)'
            }}
          />
          {errors.username && (
            <p style={{ fontSize: '12px', color: '#ef4444' }}>{errors.username.message}</p>
          )}
        </div>

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
              padding: 'clamp(10px, 2vw, 12px) clamp(14px, 3vw, 16px)',
              borderRadius: '6px',
              border: '1px solid var(--movietracker-border)',
              backgroundColor: 'var(--movietracker-background-secondary)',
              color: 'var(--movietracker-text-primary)',
              fontSize: 'clamp(13px, 2vw, 14px)',
              outline: 'none',
              transition: 'border-color 0.2s ease',
              boxSizing: 'border-box'
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
            placeholder="Create a password"
            {...register('password')}
            style={{
              width: '100%',
              padding: 'clamp(10px, 2vw, 12px) clamp(14px, 3vw, 16px)',
              borderRadius: '6px',
              border: '1px solid var(--movietracker-border)',
              backgroundColor: 'var(--movietracker-background-secondary)',
              color: 'var(--movietracker-text-primary)',
              fontSize: 'clamp(13px, 2vw, 14px)',
              outline: 'none',
              transition: 'border-color 0.2s ease',
              boxSizing: 'border-box'
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label 
            htmlFor="confirmPassword" 
            style={{ 
              fontSize: '14px', 
              fontWeight: '500',
              color: 'var(--movietracker-text-primary)'
            }}
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            {...register('confirmPassword')}
            style={{
              width: '100%',
              padding: 'clamp(10px, 2vw, 12px) clamp(14px, 3vw, 16px)',
              borderRadius: '6px',
              border: '1px solid var(--movietracker-border)',
              backgroundColor: 'var(--movietracker-background-secondary)',
              color: 'var(--movietracker-text-primary)',
              fontSize: 'clamp(13px, 2vw, 14px)',
              outline: 'none',
              transition: 'border-color 0.2s ease',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--movietracker-accent-orange)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--movietracker-border)'
            }}
          />
          {errors.confirmPassword && (
            <p style={{ fontSize: '12px', color: '#ef4444' }}>{errors.confirmPassword.message}</p>
          )}
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          style={{
            width: '100%',
            padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 24px)',
            backgroundColor: 'var(--movietracker-accent-orange)',
            color: 'var(--movietracker-background)',
            border: 'none',
            borderRadius: '6px',
            fontSize: 'clamp(13px, 2vw, 14px)',
            fontWeight: '600',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.7 : 1,
            transition: 'all 0.2s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            boxSizing: 'border-box',
            minHeight: '44px'
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
              Creating Account...
            </span>
          ) : (
            'Create Account'
          )}
        </button>

        <div style={{
          fontSize: '12px',
          color: 'var(--movietracker-text-muted)',
          lineHeight: '1.4',
          textAlign: 'center'
        }}>
          By creating an account, you agree to our{' '}
          <a 
            href="#" 
            style={{ 
              color: 'var(--movietracker-accent-orange)', 
              textDecoration: 'none' 
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.textDecoration = 'underline'}
            onMouseOut={(e) => (e.target as HTMLElement).style.textDecoration = 'none'}
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a 
            href="#" 
            style={{ 
              color: 'var(--movietracker-accent-orange)', 
              textDecoration: 'none' 
            }}
            onMouseOver={(e) => (e.target as HTMLElement).style.textDecoration = 'underline'}
            onMouseOut={(e) => (e.target as HTMLElement).style.textDecoration = 'none'}
          >
            Privacy Policy
          </a>
        </div>
      </form>
    </>
  )
}