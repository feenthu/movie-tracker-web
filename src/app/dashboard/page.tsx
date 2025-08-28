import { Header } from "@/components/header"
import { ProfileSection } from "@/components/profile-section"
import { TabNavigation } from "@/components/tab-navigation"
import { MainContent } from "@/components/main-content"
import { Sidebar } from "@/components/sidebar"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <div className="container mx-auto px-4">
        <ProfileSection />
        <TabNavigation />
        <div className="flex gap-8 mt-8">
          <MainContent />
          <Sidebar />
        </div>
      </div>
    </div>
  )
}