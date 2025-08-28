import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MoreHorizontal } from "lucide-react"

export function ProfileSection() {
  return (
    <div className="flex items-center justify-between py-8">
      <div className="flex items-center gap-6">
        <Avatar className="w-24 h-24">
          <AvatarFallback className="bg-slate-600 text-2xl">👤</AvatarFallback>
        </Avatar>

        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-white">tyshaneoneill</h1>
          <Button variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-700 bg-transparent">
            EDIT PROFILE
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex gap-12">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">2</div>
          <div className="text-sm text-gray-400 uppercase tracking-wide">Films</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">0</div>
          <div className="text-sm text-gray-400 uppercase tracking-wide">Following</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">0</div>
          <div className="text-sm text-gray-400 uppercase tracking-wide">Followers</div>
        </div>
      </div>
    </div>
  )
}