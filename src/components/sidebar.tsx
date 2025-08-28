import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-80 space-y-8">
      {/* Pro Banner */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg p-6 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-white font-bold text-lg mb-2">NEED AN UPGRADE?</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            Profile stats, filtering by favorite streaming services, watchlist alerts and no ads!
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold">GET PRO</Button>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-600 rounded-full -translate-y-8 translate-x-8 opacity-20"></div>
      </div>

      {/* Diary Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-300 font-semibold uppercase tracking-wide">Diary</h3>
          <span className="text-gray-500 text-sm">1</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-slate-700 rounded px-2 py-1">
            <div className="text-xs text-gray-400">SEP</div>
            <div className="text-sm font-bold text-white">30</div>
          </div>
          <span className="text-gray-300">Dumb Money</span>
        </div>
      </section>

      {/* Ratings Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-300 font-semibold uppercase tracking-wide">Ratings</h3>
          <span className="text-gray-500 text-sm">2</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-green-500 fill-current" />
            <div className="flex-1 bg-slate-700 h-2 rounded">
              <div className="bg-slate-600 h-2 rounded w-1/5"></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 text-green-500 fill-current" />
              ))}
            </div>
            <div className="flex-1 bg-slate-700 h-2 rounded">
              <div className="bg-green-500 h-2 rounded w-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}