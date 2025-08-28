import { Search, Rss } from "lucide-react"

export function TabNavigation() {
  const tabs = [
    { name: "Profile", active: true },
    { name: "Activity", active: false },
    { name: "Films", active: false },
    { name: "Diary", active: false },
    { name: "Reviews", active: false },
    { name: "Watchlist", active: false },
    { name: "Lists", active: false },
    { name: "Likes", active: false },
    { name: "Tags", active: false },
    { name: "Network", active: false },
  ]

  return (
    <div className="border-b border-slate-700">
      <div className="flex items-center justify-between">
        <nav className="flex">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href="#"
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                tab.active
                  ? "border-green-500 text-white"
                  : "border-transparent text-gray-400 hover:text-white hover:border-gray-600"
              }`}
            >
              {tab.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-gray-400" />
          <Rss className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  )
}