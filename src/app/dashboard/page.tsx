"use client"

import { useState } from "react"
import { 
  ProfileHeader, 
  ProfileTabs, 
  RecentLikesGrid, 
  RightRail, 
  DiaryCard, 
  RatingsHistogram, 
  ActivityList,
  PromoCard
} from "@/components/profile"
import { ActivityPageLayout } from "@/components/profile/activity-components"
import { FilmsPageLayout } from "@/components/profile/films-components"
import { DiaryPageLayout } from "@/components/profile/diary-components"
import { WatchlistPageLayout } from "@/components/profile/watchlist-components"
import { LikesPageLayout } from "@/components/profile/likes-components"
import { MovieTrackerHeader } from "@/components/profile/movietracker-header"
import "@/styles/movietracker.css"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Profile")

  const renderTabContent = () => {
    switch (activeTab) {
      case "Activity":
        return <ActivityPageLayout />
      case "Films":
        return <FilmsPageLayout />
      case "Diary":
        return <DiaryPageLayout />
      case "Watchlist":
        return <WatchlistPageLayout />
      case "Likes":
        return <LikesPageLayout />
      case "Profile":
        return (
          <div className="movietracker-main-content" style={{ paddingBottom: '48px' }}>
            <section>
              <RecentLikesGrid />
            </section>
            
            <RightRail>
              <PromoCard />
              <DiaryCard />
              <RatingsHistogram />
              <ActivityList />
            </RightRail>
          </div>
        )
      default:
        return (
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '48px 24px', 
            textAlign: 'center',
            color: 'var(--movietracker-text-muted)'
          }}>
            <h2 style={{ marginBottom: '16px', color: 'var(--movietracker-text-primary)' }}>
              {activeTab} page coming soon
            </h2>
            <p>This section is currently under development.</p>
          </div>
        )
    }
  }

  return (
    <div style={{ 
      backgroundColor: 'var(--movietracker-background)', 
      color: 'var(--movietracker-text-primary)', 
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      lineHeight: '1.5',
      minHeight: '100vh'
    }}>
      <MovieTrackerHeader />
      
      {/* Profile Header */}
      <ProfileHeader />
      
      {/* Profile Navigation Tabs */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      
      {/* Dynamic Tab Content */}
      {renderTabContent()}
    </div>
  )
}