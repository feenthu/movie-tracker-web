'use client'

import { clsx } from 'clsx'

interface Tab {
  id: string
  label: string
  count?: number
}

interface DashboardTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
  tabs: Tab[]
}

export function DashboardTabs({ activeTab, onTabChange, tabs }: DashboardTabsProps) {
  return (
    <nav className="flex space-x-8 border-b border-letterboxd-border mb-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={clsx(
            'pb-4 px-1 text-sm font-medium border-b-2 transition-all duration-200 relative',
            activeTab === tab.id
              ? 'text-letterboxd-accent border-letterboxd-accent'
              : 'text-letterboxd-text-muted border-transparent hover:text-letterboxd-text-secondary hover:border-letterboxd-border'
          )}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className="ml-2 text-xs bg-letterboxd-card text-letterboxd-text-muted px-2 py-1 rounded-full">
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </nav>
  )
}