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
    <div className="border-b border-slate-700">
      <nav className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={clsx(
              'px-4 py-3 text-sm font-medium border-b-2 transition-colors',
              activeTab === tab.id
                ? 'border-green-500 text-white'
                : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
            )}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className="ml-2 text-xs bg-slate-700 text-gray-400 px-2 py-1 rounded-full">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </nav>
    </div>
  )
}