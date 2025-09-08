import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronDown, Search, Plus } from "lucide-react"

export function Header() {
  return (
    <header className="bg-slate-800 border-b border-slate-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            </div>
            <span className="text-xl font-bold text-white">MovieTracker</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              FILMS
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              LISTS
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              MEMBERS
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              JOURNAL
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer">
              <Avatar className="w-6 h-6">
                <AvatarFallback className="bg-slate-600 text-xs">T</AvatarFallback>
              </Avatar>
              <span className="text-sm">TYSHANEONEILL</span>
              <ChevronDown className="h-4 w-4" />
            </div>

            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Plus className="h-4 w-4 mr-1" />
              LOG
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
