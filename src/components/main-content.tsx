import { Heart } from "lucide-react"
import Image from "next/image"

export function MainContent() {
  return (
    <div className="flex-1">
      {/* Favorite Films Section */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-300 mb-4 uppercase tracking-wide">Favorite Films</h2>
        <p className="text-gray-400">Don&apos;t forget to select your favorite films!</p>
      </section>

      {/* Recent Likes Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-300 uppercase tracking-wide">Recent Likes</h2>
          <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-white cursor-pointer">
            <Heart className="h-4 w-4" />
            <span>ALL</span>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative group cursor-pointer">
            <Image
              src="/mickey-17-movie-poster-yellow-background.png"
              alt="Mickey 17"
              width={128}
              height={192}
              className="w-32 h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="relative group cursor-pointer">
            <Image
              src="/dumb-money-movie-poster-yellow-background-comedy.png"
              alt="Dumb Money"
              width={128}
              height={192}
              className="w-32 h-48 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>
    </div>
  )
}