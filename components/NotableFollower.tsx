import type React from "react"
import Image from "next/image"
import { User } from "lucide-react"

interface NotableFollowerProps {
  name: string
  username: string
  avatarUrl: string
  followerCount: number
  reason: string
}

const NotableFollower: React.FC<NotableFollowerProps> = ({ name, username, avatarUrl, followerCount, reason }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-stone-900 rounded-lg">
      <div className="flex-shrink-0">
        {avatarUrl ? (
          <Image src={avatarUrl || "/placeholder.svg"} alt={name} width={48} height={48} className="rounded-full" />
        ) : (
          <div className="w-12 h-12 bg-stone-700 rounded-full flex items-center justify-center">
            <User className="text-stone-400" size={24} />
          </div>
        )}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-stone-400">@{username}</p>
        <p className="text-sm text-stone-300 mt-1">{followerCount.toLocaleString()} followers</p>
      </div>
      <div className="flex-shrink-0 text-right">
        <p className="text-sm text-stone-300 italic">{reason}</p>
      </div>
    </div>
  )
}

export default NotableFollower

