'use client'

import { useState } from 'react'
import Image from 'next/image'
import { TrendingUp, MessageSquare, Award, Users, ChevronLeft, ChevronRight, Star } from 'lucide-react'

export function FilmsSidebar() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '40px'
    }}>
      <PopularThisWeekCarousel />
      <RecentlyReviewedSection />
      <CrewPicksSection />
      <PopularReviewersSection />
    </div>
  )
}

function PopularThisWeekCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const films = [
    { src: "https://images.unsplash.com/photo-1489599316546-1c5d1b4b5c9e?w=200&h=300&fit=crop", alt: "Dune: Part Two" },
    { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=300&fit=crop", alt: "Oppenheimer" },
    { src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=300&fit=crop", alt: "The Batman" },
    { src: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200&h=300&fit=crop", alt: "Barbie" },
    { src: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=200&h=300&fit=crop", alt: "Killers of the Flower Moon" },
    { src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=200&h=300&fit=crop", alt: "Spider-Man" },
    { src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=200&h=300&fit=crop", alt: "John Wick 4" },
    { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&h=300&fit=crop", alt: "The Menu" }
  ]

  const itemsToShow = 4
  const maxIndex = Math.max(0, films.length - itemsToShow)

  const goToPrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1))
  }

  return (
    <section style={{
      background: 'var(--movietracker-background-card)',
      borderRadius: '16px',
      padding: '32px',
      animation: 'fadeIn 0.6s ease-out'
    }}>
      <h2 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        margin: '0 0 20px 0'
      }}>
        <TrendingUp style={{ width: '20px', height: '20px', color: 'var(--movietracker-accent-orange)' }} />
        Popular This Week
      </h2>
      
      <div style={{ position: 'relative' }}>
        <button
          onClick={goToPrev}
          disabled={currentIndex === 0}
          style={{
            position: 'absolute',
            top: '50%',
            left: '-18px',
            transform: 'translateY(-50%)',
            width: '36px',
            height: '36px',
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            zIndex: 10,
            opacity: currentIndex === 0 ? 0.3 : 1
          }}
          onMouseEnter={(e) => {
            if (currentIndex !== 0) {
              e.currentTarget.style.background = 'var(--movietracker-accent-orange)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            }
          }}
          onMouseLeave={(e) => {
            if (currentIndex !== 0) {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'
              e.currentTarget.style.transform = 'translateY(-50%)'
            }
          }}
        >
          <ChevronLeft style={{ width: '18px', height: '18px' }} />
        </button>
        
        <div style={{
          overflow: 'hidden',
          borderRadius: '10px',
          margin: '0 -8px'
        }}>
          <div style={{
            display: 'flex',
            transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            gap: '16px',
            padding: '0 8px',
            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
          }}>
            {films.map((film, index) => (
              <div
                key={index}
                style={{
                  flex: `0 0 calc(25% - 12px)`,
                  aspectRatio: '2/3',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <Image
                  src={film.src}
                  alt={film.alt}
                  width={200}
                  height={300}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={goToNext}
          disabled={currentIndex >= maxIndex}
          style={{
            position: 'absolute',
            top: '50%',
            right: '-18px',
            transform: 'translateY(-50%)',
            width: '36px',
            height: '36px',
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: currentIndex >= maxIndex ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            zIndex: 10,
            opacity: currentIndex >= maxIndex ? 0.3 : 1
          }}
          onMouseEnter={(e) => {
            if (currentIndex < maxIndex) {
              e.currentTarget.style.background = 'var(--movietracker-accent-orange)'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            }
          }}
          onMouseLeave={(e) => {
            if (currentIndex < maxIndex) {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)'
              e.currentTarget.style.transform = 'translateY(-50%)'
            }
          }}
        >
          <ChevronRight style={{ width: '18px', height: '18px' }} />
        </button>
      </div>
    </section>
  )
}

function RecentlyReviewedSection() {
  const reviews = [
    { 
      name: "Sarah M.", 
      rating: 4, 
      text: "Loved the visuals in Dune: Part Two. Denis Villeneuve continues to impress with his masterful direction.",
      avatar: 'var(--movietracker-accent-green)'
    },
    { 
      name: "Mike T.", 
      rating: 5, 
      text: "Oppenheimer is a masterpiece. Nolan's best work to date, combining stunning visuals with powerful storytelling.",
      avatar: 'var(--movietracker-accent-orange)'
    },
    { 
      name: "Alex R.", 
      rating: 4, 
      text: "The Batman brings a fresh noir approach to the character. Pattinson delivers a compelling performance.",
      avatar: '#9333ea'
    }
  ]

  return (
    <section style={{
      background: 'var(--movietracker-background-card)',
      borderRadius: '16px',
      padding: '32px',
      animation: 'fadeIn 0.6s ease-out'
    }}>
      <h2 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        margin: '0 0 20px 0'
      }}>
        <MessageSquare style={{ width: '20px', height: '20px', color: 'var(--movietracker-accent-green)' }} />
        Recently Reviewed
      </h2>
      
      {reviews.map((review, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            gap: '16px',
            padding: '20px',
            background: 'var(--movietracker-background)',
            borderRadius: '12px',
            marginBottom: '16px',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--movietracker-background-secondary)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--movietracker-background)'
          }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: review.avatar,
            flexShrink: 0
          }} />
          <div style={{ flex: 1 }}>
            <div style={{
              fontWeight: '600',
              fontSize: '15px',
              marginBottom: '6px'
            }}>
              {review.name}
            </div>
            <div style={{
              display: 'flex',
              gap: '3px',
              marginBottom: '6px'
            }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  style={{
                    width: '14px',
                    height: '14px',
                    color: 'var(--movietracker-accent-orange)',
                    fill: star <= review.rating ? 'currentColor' : 'none'
                  }}
                />
              ))}
            </div>
            <p style={{
              fontSize: '13px',
              color: 'var(--movietracker-text-muted)',
              lineHeight: '1.5',
              margin: 0
            }}>
              {review.text}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}

function CrewPicksSection() {
  return (
    <section style={{
      background: 'var(--movietracker-background-card)',
      borderRadius: '16px',
      padding: '32px',
      animation: 'fadeIn 0.6s ease-out'
    }}>
      <h2 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        margin: '0 0 20px 0'
      }}>
        <Award style={{ width: '20px', height: '20px', color: 'var(--movietracker-accent-orange)' }} />
        Crew Picks
      </h2>
      
      <div style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start'
      }}>
        <div style={{
          width: '80px',
          aspectRatio: '2/3',
          borderRadius: '8px',
          overflow: 'hidden',
          flexShrink: 0
        }}>
          <Image
            src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=200&h=300&fit=crop"
            alt="Crew Pick"
            width={200}
            height={300}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '8px',
            lineHeight: '1.3',
            margin: '0 0 8px 0'
          }}>
            Killers of the Flower Moon
          </h3>
          <p style={{
            fontSize: '13px',
            color: 'var(--movietracker-text-muted)',
            lineHeight: '1.5',
            marginBottom: '12px',
            margin: '0 0 12px 0'
          }}>
            Scorsese&apos;s latest epic explores a dark chapter of American history with his signature style and meticulous attention to detail.
          </p>
          <span style={{
            fontSize: '11px',
            background: 'var(--movietracker-background)',
            padding: '4px 10px',
            borderRadius: '6px',
            color: 'var(--movietracker-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontWeight: '600'
          }}>
            CURATOR: JAMES
          </span>
        </div>
      </div>
    </section>
  )
}

function PopularReviewersSection() {
  const reviewers = [
    { name: "FilmCritic2024", count: "247 films this year", avatar: 'var(--movietracker-accent-green)' },
    { name: "CinemaLover", count: "189 films this year", avatar: 'var(--movietracker-accent-orange)' },
    { name: "MovieMaven", count: "156 films this year", avatar: '#9333ea' }
  ]

  return (
    <section style={{
      background: 'var(--movietracker-background-card)',
      borderRadius: '16px',
      padding: '32px',
      animation: 'fadeIn 0.6s ease-out'
    }}>
      <h2 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        margin: '0 0 20px 0'
      }}>
        <Users style={{ width: '20px', height: '20px', color: 'var(--movietracker-accent-green)' }} />
        Popular Reviewers
      </h2>
      
      {reviewers.map((reviewer, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '20px',
            padding: '8px',
            borderRadius: '8px',
            transition: 'background 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--movietracker-background)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
          }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: reviewer.avatar,
            flexShrink: 0
          }} />
          <div>
            <div style={{
              fontWeight: '600',
              fontSize: '15px',
              marginBottom: '2px'
            }}>
              {reviewer.name}
            </div>
            <div style={{
              fontSize: '13px',
              color: 'var(--movietracker-text-muted)'
            }}>
              {reviewer.count}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}