import { Trophy, Zap, ArrowLeft, Medal, Award } from "lucide-react"
import Link from "next/link"

interface Creator {
  rank: number
  name: string
  avatar: string
  followers: number
  totalLikes: number
  stories: number
  badge: string
}

interface Story {
  rank: number
  title: string
  author: string
  likes: number
  plays?: number
  views?: number
  type: "interactive" | "narrative"
  image: string
  language: string
}

interface LanguageStat {
  language: string
  creators: number
  stories: number
  color: string
}

export default function CommunityPage() {
  const topCreators: Creator[] = [
    {
      rank: 1,
      name: "AI织梦师",
      avatar: "/placeholder.svg?height=60&width=60",
      followers: 12847,
      totalLikes: 45623,
      stories: 23,
      badge: "传奇创作者"
    },
    {
      rank: 2,
      name: "幻境编织者",
      avatar: "/placeholder.svg?height=60&width=60",
      followers: 9834,
      totalLikes: 38291,
      stories: 18,
      badge: "大师级创作者"
    },
    {
      rank: 3,
      name: "StoryWeaver",
      avatar: "/placeholder.svg?height=60&width=60",
      followers: 8756,
      totalLikes: 32145,
      stories: 15,
      badge: "专业创作者"
    },
    {
      rank: 4,
      name: "江湖笔客",
      avatar: "/placeholder.svg?height=60&width=60",
      followers: 7234,
      totalLikes: 28967,
      stories: 21,
      badge: "资深创作者"
    },
    {
      rank: 5,
      name: "宇宙探索者",
      avatar: "/placeholder.svg?height=60&width=60",
      followers: 6891,
      totalLikes: 25834,
      stories: 12,
      badge: "新星创作者"
    }
  ]

  const topStories: Story[] = [
    {
      rank: 1,
      title: "赛博朋克侦探",
      author: "AI织梦师",
      likes: 15847,
      plays: 42391,
      type: "interactive",
      image: "/placeholder.svg?height=200&width=300",
      language: "中文"
    },
    {
      rank: 2,
      title: "The Enchanted Library",
      author: "StoryWeaver",
      likes: 12456,
      views: 38291,
      type: "narrative",
      image: "/placeholder.svg?height=200&width=300",
      language: "EN"
    },
    {
      rank: 3,
      title: "武侠江湖：剑客传说",
      author: "江湖笔客",
      likes: 11234,
      plays: 35678,
      type: "interactive",
      image: "/placeholder.svg?height=200&width=300",
      language: "中文"
    },
    {
      rank: 4,
      title: "星际迷航：未知边界",
      author: "宇宙探索者",
      likes: 9876,
      plays: 28934,
      type: "interactive",
      image: "/placeholder.svg?height=200&width=300",
      language: "中文"
    },
    {
      rank: 5,
      title: "Cyberpunk Chronicles",
      author: "NeonDreamer",
      likes: 8765,
      plays: 24567,
      type: "interactive",
      image: "/placeholder.svg?height=200&width=300",
      language: "EN"
    }
  ]

  const languageStats: LanguageStat[] = [
    { language: "中文", creators: 1247, stories: 3456, color: "#8A4FFF" },
    { language: "English", creators: 892, stories: 2134, color: "#00F5D4" },
    { language: "日本語", creators: 234, stories: 567, color: "#33D69F" },
    { language: "Español", creators: 156, stories: 389, color: "#FF5577" }
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-[#A0A0B5] font-bold">{rank}</span>
    }
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "传奇创作者":
        return "bg-gradient-to-r from-yellow-500 to-orange-500"
      case "大师级创作者":
        return "bg-gradient-to-r from-purple-500 to-pink-500"
      case "专业创作者":
        return "bg-gradient-to-r from-blue-500 to-cyan-500"
      case "资深创作者":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      default:
        return "bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4]"
    }
  }

  return (
    <div className="min-h-screen bg-[#12121B]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1E1E2D]/80 backdrop-blur-md border-b border-[#8A4FFF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-[#A0A0B5] hover:text-[#8A4FFF] transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>返回首页</span>
              </Link>
              <div className="h-6 w-px bg-[#8A4FFF]/20"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8A4FFF] to-[#00F5D4] rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium">社区</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Creators */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-white">热门创作者</h2>
            <div className="bg-[#1E1E2D] rounded-xl p-6 space-y-4">
              {topCreators.map((creator) => (
                <div key={creator.rank} className="flex items-center space-x-4">
                  {getRankIcon(creator.rank)}
                  <img src={creator.avatar} alt={creator.name} className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-white font-medium">{creator.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full text-white ${getBadgeColor(creator.badge)}`}>
                        {creator.badge}
                      </span>
                    </div>
                    <div className="text-sm text-[#A0A0B5] mt-1">
                      {creator.followers.toLocaleString()} 关注 · {creator.totalLikes.toLocaleString()} 获赞 · {creator.stories} 个故事
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Language Stats */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">语言分布</h2>
            <div className="bg-[#1E1E2D] rounded-xl p-6 space-y-4">
              {languageStats.map((stat) => (
                <div key={stat.language} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white">{stat.language}</span>
                    <span className="text-[#A0A0B5]">{stat.creators} 创作者</span>
                  </div>
                  <div className="h-2 bg-[#12121B] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: stat.color,
                        width: `${(stat.stories / languageStats[0].stories) * 100}%`
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-[#A0A0B5]">{stat.stories} 个故事</div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Stories */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-2xl font-bold text-white">热门故事</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topStories.map((story) => (
                <div key={story.rank} className="bg-[#1E1E2D] rounded-xl overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-[#8A4FFF]/20 text-[#8A4FFF]">
                        {story.language}
                      </span>
                      <span className="text-xs text-[#A0A0B5]">{story.type}</span>
                    </div>
                    <h3 className="text-white font-medium mb-1">{story.title}</h3>
                    <p className="text-sm text-[#A0A0B5] mb-3">by {story.author}</p>
                    <div className="flex items-center justify-between text-sm text-[#A0A0B5]">
                      <span>{story.likes.toLocaleString()} 赞</span>
                      <span>
                        {story.plays ? story.plays.toLocaleString() : story.views?.toLocaleString()} {story.plays ? "游玩" : "阅读"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
