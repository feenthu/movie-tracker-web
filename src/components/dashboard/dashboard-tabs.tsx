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
    <nav className="flex space-x-8 border-b border-gray-700 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={clsx(
            'pb-4 px-1 text-sm font-medium border-b-2 transition-colors',
            activeTab === tab.id
              ? 'text-green-400 border-green-400'
              : 'text-gray-400 border-transparent hover:text-gray-300 hover:border-gray-600'
          )}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className="ml-2 text-xs bg-gray-700 px-2 py-1 rounded-full">
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </nav>
  )
}