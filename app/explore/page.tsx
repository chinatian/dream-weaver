"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, BookOpen, Heart, Eye, Gamepad2, Search, Filter, Zap, Crown, Globe, Star, TrendingUp, Calendar, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { languages, type LanguageCode } from "@/lib/i18n"

export default function ExplorePage() {
  const { t, language } = useLanguage()

  const stories = [
    {
      id: 1,
      title: "星际迷航：未知边界",
      description: "作为星舰船长，带领你的船员探索银河系的未知区域，面对外星文明和宇宙奥秘...",
      image: "/placeholder.svg?height=300&width=400",
      language: "zh-CN" as LanguageCode,
      author: "宇宙探索者",
      likes: 1847,
      plays: 4291,
      type: "play",
      tags: ["科幻", "冒险", "策略"],
      isPro: false,
      isHot: true,
      difficulty: "中级",
      estimatedTime: "2-3小时",
    },
    {
      id: 2,
      title: "The Haunted Manor",
      description:
        "A Victorian mansion holds dark secrets. As a paranormal investigator, uncover the truth behind the mysterious disappearances...",
      image: "/placeholder.svg?height=300&width=400",
      language: "en" as LanguageCode,
      author: "GhostWriter",
      likes: 1203,
      views: 3456,
      type: "read",
      tags: ["Horror", "Mystery", "Gothic"],
      isPro: true,
      isHot: false,
      difficulty: "Advanced",
      estimatedTime: "45 mins read",
    },
    {
      id: 3,
      title: "武侠江湖：剑客传说",
      description: "在刀光剑影的江湖中，你是一名初出茅庐的剑客，将如何在这个充满恩怨情仇的世界中闯出一片天地？",
      image: "/placeholder.svg?height=300&width=400",
      language: "zh-CN" as LanguageCode,
      author: "江湖笔客",
      likes: 2156,
      plays: 5847,
      type: "play",
      tags: ["武侠", "古风", "RPG"],
      isPro: false,
      isHot: true,
      difficulty: "中级",
      estimatedTime: "3-4小时",
    },
    {
      id: 4,
      title: "Cyberpunk Chronicles",
      description:
        "In a neon-lit dystopian future, you're a hacker fighting against corporate oppression. Every choice shapes the fate of humanity...",
      image: "/placeholder.svg?height=300&width=400",
      language: "en" as LanguageCode,
      author: "NeonDreamer",
      likes: 1678,
      plays: 3924,
      type: "play",
      tags: ["Cyberpunk", "Sci-Fi", "Action"],
      isPro: true,
      isHot: false,
      difficulty: "Expert",
      estimatedTime: "4-6 hours",
    },
    {
      id: 5,
      title: "魔法学院日记",
      description: "记录一个普通少女在魔法学院的成长历程，友情、爱情、学业，还有隐藏在学院深处的古老秘密...",
      image: "/placeholder.svg?height=300&width=400",
      language: "zh-CN" as LanguageCode,
      author: "魔法少女",
      likes: 3421,
      views: 7892,
      type: "read",
      tags: ["奇幻", "校园", "成长"],
      isPro: false,
      isHot: false,
      difficulty: "初级",
      estimatedTime: "30分钟阅读",
    },
    {
      id: 6,
      title: "Time Traveler's Dilemma",
      description:
        "You've discovered time travel, but every change creates new paradoxes. Navigate through history while trying to save the future...",
      image: "/placeholder.svg?height=300&width=400",
      language: "en" as LanguageCode,
      author: "ChronoMaster",
      likes: 1934,
      plays: 4567,
      type: "play",
      tags: ["Time Travel", "Sci-Fi", "Puzzle"],
      isPro: true,
      isHot: true,
      difficulty: "Expert",
      estimatedTime: "5-8 hours",
    },
  ]

  // 根据当前语言筛选内容
  const defaultFilteredStories = stories.filter(story => story.language === language)
  const otherLanguageStories = stories.filter(story => story.language !== language)

  return (
    <div className="min-h-screen bg-[#12121B]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1E1E2D]/80 backdrop-blur-md border-b border-[#8A4FFF]/20">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#8A4FFF] to-[#00F5D4] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#F0F0F5] font-bold text-xl">{t("app.name")}</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#F0F0F5] hover:text-[#8A4FFF] transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/explore" className="text-[#A0A0B5] hover:text-[#8A4FFF] transition-colors">
                {t("nav.explore")}
              </Link>
              <Link href="/create" className="text-[#A0A0B5] hover:text-[#8A4FFF] transition-colors">
                {t("nav.create")}
              </Link>
              <Link href="/dashboard" className="text-[#A0A0B5] hover:text-[#8A4FFF] transition-colors">
                {t("nav.dashboard")}
              </Link>
              <Link href="/community" className="text-[#A0A0B5] hover:text-[#8A4FFF] transition-colors">
                {t("nav.community")}
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-[#00F5D4]">
                <Zap className="w-4 h-4" />
                <span className="font-medium">50</span>
              </div>
              <LanguageSwitcher />
              <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                <Crown className="w-4 h-4 mr-2" />
                {t("button.upgrade")}
              </Button>
            </div>
          </div>
        </div>
      </nav>


      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#F0F0F5] mb-4">{t("explore.title")}</h1>
            <p className="text-[#A0A0B5] text-lg">{t("explore.subtitle")}</p>
          </div>

          {/* Language Content Notice */}
          <div className="mb-6 p-4 bg-gradient-to-r from-[#8A4FFF]/10 to-[#00F5D4]/10 border border-[#8A4FFF]/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-[#8A4FFF]" />
                <span className="text-[#F0F0F5] font-medium">
                  当前显示 {languages[language].nativeName} 内容
                </span>
                <Badge className="bg-[#8A4FFF]/20 text-[#8A4FFF] border-[#8A4FFF]/30">
                  {defaultFilteredStories.length} 个故事
                </Badge>
              </div>
              <Button variant="outline" className="border-[#8A4FFF]/30 text-[#8A4FFF] hover:bg-[#8A4FFF]/10">
                <Globe className="w-4 h-4 mr-2" />
                探索其他语言内容
              </Button>
            </div>
          </div>

          {/* Enhanced Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0A0B5] w-4 h-4" />
                <Input
                  placeholder={t("explore.searchPlaceholder")}
                  className="pl-10 bg-[#1E1E2D] border-[#8A4FFF]/20 text-[#F0F0F5] placeholder-[#A0A0B5] focus:border-[#8A4FFF] h-12"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Select>
                  <SelectTrigger className="w-40 bg-[#1E1E2D] border-[#8A4FFF]/20 text-[#F0F0F5] h-12">
                    <Globe className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="内容语言" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                    <SelectItem value="current">当前语言 ({languages[language].nativeName})</SelectItem>
                    <SelectItem value="all">所有语言</SelectItem>
                    {Object.entries(languages).map(([code, lang]) => (
                      <SelectItem key={code} value={code}>
                        {lang.flag} {lang.nativeName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-32 bg-[#1E1E2D] border-[#8A4FFF]/20 text-[#F0F0F5] h-12">
                    <SelectValue placeholder="分类" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                    <SelectItem value="all">全部分类</SelectItem>
                    <SelectItem value="sci-fi">科幻</SelectItem>
                    <SelectItem value="fantasy">奇幻</SelectItem>
                    <SelectItem value="mystery">悬疑</SelectItem>
                    <SelectItem value="romance">浪漫</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-32 bg-[#1E1E2D] border-[#8A4FFF]/20 text-[#F0F0F5] h-12">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="排序" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                    <SelectItem value="trending">热门推荐</SelectItem>
                    <SelectItem value="newest">最新发布</SelectItem>
                    <SelectItem value="most-played">最多游玩</SelectItem>
                    <SelectItem value="highest-rated">最高评分</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="border-[#8A4FFF]/20 text-[#A0A0B5] hover:bg-[#8A4FFF]/10 h-12 px-4">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-[#1E1E2D] border border-[#8A4FFF]/20 h-12">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#8A4FFF] data-[state=active]:to-[#00F5D4] data-[state=active]:text-white px-6"
              >
                <Star className="w-4 h-4 mr-2" />
                全部内容
              </TabsTrigger>
              <TabsTrigger 
                value="play" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#8A4FFF] data-[state=active]:to-[#00F5D4] data-[state=active]:text-white px-6"
              >
                <Gamepad2 className="w-4 h-4 mr-2" />
                故事卡 (可玩)
              </TabsTrigger>
              <TabsTrigger 
                value="read" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#8A4FFF] data-[state=active]:to-[#00F5D4] data-[state=active]:text-white px-6"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                精彩故事 (可读)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.map((story) => (
                  <Card
                    key={story.id}
                    className="bg-[#1E1E2D] border-[#8A4FFF]/20 hover:border-[#8A4FFF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#8A4FFF]/20 hover:-translate-y-1 group cursor-pointer overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={story.image || "/placeholder.svg"}
                          alt={story.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          {story.type === "play" ? (
                            <Link href={`/play/${story.id}`}>
                              <Button className="bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4] hover:from-[#8A4FFF]/80 hover:to-[#00F5D4]/80 text-white">
                                <Play className="w-4 h-4 mr-2" />
                                开始游戏
                              </Button>
                            </Link>
                          ) : (
                            <Link href={`/read/${story.id}`}>
                              <Button className="bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4] hover:from-[#8A4FFF]/80 hover:to-[#00F5D4]/80 text-white">
                                <BookOpen className="w-4 h-4 mr-2" />
                                阅读故事
                              </Button>
                            </Link>
                          )}
                        </div>
                        
                        {/* Top badges */}
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className="bg-[#00F5D4] text-[#12121B] font-medium text-xs">
                            {languages[story.language]?.flag} {languages[story.language]?.nativeName}
                          </Badge>
                          {story.isPro && (
                            <Badge className="bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4] text-white font-medium text-xs">
                              <Crown className="w-3 h-3 mr-1" />
                              Pro
                            </Badge>
                          )}
                          {story.isHot && (
                            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium text-xs">
                              🔥 热门
                            </Badge>
                          )}
                        </div>

                        {/* Content type indicator */}
                        <div className="absolute top-3 right-3">
                          {story.type === "play" ? (
                            <div className="bg-[#8A4FFF]/90 text-white px-2 py-1 rounded-full text-xs flex items-center">
                              <Gamepad2 className="w-3 h-3 mr-1" />
                              可玩
                            </div>
                          ) : (
                            <div className="bg-[#00F5D4]/90 text-[#12121B] px-2 py-1 rounded-full text-xs flex items-center">
                              <BookOpen className="w-3 h-3 mr-1" />
                              可读
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#F0F0F5] mb-2 group-hover:text-[#8A4FFF] transition-colors line-clamp-1">
                          {story.title}
                        </h3>
                        <p className="text-[#A0A0B5] mb-3 line-clamp-2 text-sm leading-relaxed">{story.description}</p>

                        {/* Story metadata */}
                        <div className="flex items-center justify-between mb-3 text-xs text-[#A0A0B5]">
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {story.difficulty}
                            </span>
                            <span className="flex items-center">
                              <Zap className="w-3 h-3 mr-1" />
                              {story.estimatedTime}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {story.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="border-[#8A4FFF]/30 text-[#A0A0B5] text-xs hover:bg-[#8A4FFF]/10 cursor-pointer">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-[#8A4FFF] to-[#00F5D4] rounded-full flex items-center justify-center text-xs text-white font-bold">
                              {story.author.charAt(0)}
                            </div>
                            <span className="text-[#A0A0B5] text-sm">{story.author}</span>
                          </div>

                          <div className="flex items-center space-x-4 text-[#A0A0B5] text-sm">
                            <div className="flex items-center space-x-1 hover:text-[#8A4FFF] cursor-pointer transition-colors">
                              <Heart className="w-4 h-4" />
                              <span>{story.likes.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              {story.type === "play" ? (
                                <>
                                  <Gamepad2 className="w-4 h-4" />
                                  <span>{story.plays?.toLocaleString()}</span>
                                </>
                              ) : (
                                <>
                                  <Eye className="w-4 h-4" />
                                  <span>{story.views?.toLocaleString()}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Similar structure for play and read tabs with filtered content */}
            <TabsContent value="play" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories
                  .filter((story) => story.type === "play")
                  .map((story) => (
                    <Card
                      key={story.id}
                      className="bg-[#1E1E2D] border-[#8A4FFF]/20 hover:border-[#8A4FFF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#8A4FFF]/20 hover:-translate-y-1 group cursor-pointer overflow-hidden"
                    >
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <Image
                            src={story.image || "/placeholder.svg"}
                            alt={story.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Link href={`/play/${story.id}`}>
                              <Button className="bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4] hover:from-[#8A4FFF]/80 hover:to-[#00F5D4]/80 text-white">
                                <Play className="w-4 h-4 mr-2" />
                                开始游戏
                              </Button>
                            </Link>
                          </div>
                          
                          {/* Top badges */}
                          <div className="absolute top-3 left-3 flex gap-2">
                            <Badge className="bg-[#00F5D4] text-[#12121B] font-medium text-xs">
                              {languages[story.language]?.flag} {languages[story.language]?.nativeName}
                            </Badge>
                            {story.isPro && (
                              <Badge className="bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4] text-white font-medium text-xs">
                                <Crown className="w-3 h-3 mr-1" />
                                Pro
                              </Badge>
                            )}
                            {story.isHot && (
                              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium text-xs">
                                🔥 热门
                              </Badge>
                            )}
                          </div>

                          {/* Content type indicator */}
                          <div className="absolute top-3 right-3">
                            <div className="bg-[#8A4FFF]/90 text-white px-2 py-1 rounded-full text-xs flex items-center">
                              <Gamepad2 className="w-3 h-3 mr-1" />
                              可玩
                            </div>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-[#F0F0F5] mb-2 group-hover:text-[#8A4FFF] transition-colors line-clamp-1">
                            {story.title}
                          </h3>
                          <p className="text-[#A0A0B5] mb-3 line-clamp-2 text-sm leading-relaxed">{story.description}</p>

                          {/* Story metadata */}
                          <div className="flex items-center justify-between mb-3 text-xs text-[#A0A0B5]">
                            <div className="flex items-center space-x-3">
                              <span className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                {story.difficulty}
                              </span>
                              <span className="flex items-center">
                                <Zap className="w-3 h-3 mr-1" />
                                {story.estimatedTime}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {story.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="border-[#8A4FFF]/30 text-[#A0A0B5] text-xs hover:bg-[#8A4FFF]/10 cursor-pointer">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-[#8A4FFF] to-[#00F5D4] rounded-full flex items-center justify-center text-xs text-white font-bold">
                                {story.author.charAt(0)}
                              </div>
                              <span className="text-[#A0A0B5] text-sm">{story.author}</span>
                            </div>

                            <div className="flex items-center space-x-4 text-[#A0A0B5] text-sm">
                              <div className="flex items-center space-x-1 hover:text-[#8A4FFF] cursor-pointer transition-colors">
                                <Heart className="w-4 h-4" />
                                <span>{story.likes.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Gamepad2 className="w-4 h-4" />
                                <span>{story.plays?.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="read" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories
                  .filter((story) => story.type === "read")
                  .map((story) => (
                    <Card
                      key={story.id}
                      className="bg-[#1E1E2D] border-[#8A4FFF]/20 hover:border-[#8A4FFF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#8A4FFF]/20 hover:-translate-y-1 group cursor-pointer overflow-hidden"
                    >
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <Image
                            src={story.image || "/placeholder.svg"}
                            alt={story.title}
                            width={400}
                            height={250}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Link href={`/read/${story.id}`}>
                              <Button className="bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4] hover:from-[#8A4FFF]/80 hover:to-[#00F5D4]/80 text-white">
                                <BookOpen className="w-4 h-4 mr-2" />
                                阅读故事
                              </Button>
                            </Link>
                          </div>
                          
                          {/* Top badges */}
                          <div className="absolute top-3 left-3 flex gap-2">
                            <Badge className="bg-[#00F5D4] text-[#12121B] font-medium text-xs">
                              {languages[story.language]?.flag} {languages[story.language]?.nativeName}
                            </Badge>
                            {story.isPro && (
                              <Badge className="bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4] text-white font-medium text-xs">
                                <Crown className="w-3 h-3 mr-1" />
                                Pro
                              </Badge>
                            )}
                            {story.isHot && (
                              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium text-xs">
                                🔥 热门
                              </Badge>
                            )}
                          </div>

                          {/* Content type indicator */}
                          <div className="absolute top-3 right-3">
                            <div className="bg-[#00F5D4]/90 text-[#12121B] px-2 py-1 rounded-full text-xs flex items-center">
                              <BookOpen className="w-3 h-3 mr-1" />
                              可读
                            </div>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-[#F0F0F5] mb-2 group-hover:text-[#8A4FFF] transition-colors line-clamp-1">
                            {story.title}
                          </h3>
                          <p className="text-[#A0A0B5] mb-3 line-clamp-2 text-sm leading-relaxed">{story.description}</p>

                          {/* Story metadata */}
                          <div className="flex items-center justify-between mb-3 text-xs text-[#A0A0B5]">
                            <div className="flex items-center space-x-3">
                              <span className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                {story.difficulty}
                              </span>
                              <span className="flex items-center">
                                <Zap className="w-3 h-3 mr-1" />
                                {story.estimatedTime}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {story.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="border-[#8A4FFF]/30 text-[#A0A0B5] text-xs hover:bg-[#8A4FFF]/10 cursor-pointer">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-[#8A4FFF] to-[#00F5D4] rounded-full flex items-center justify-center text-xs text-white font-bold">
                                {story.author.charAt(0)}
                              </div>
                              <span className="text-[#A0A0B5] text-sm">{story.author}</span>
                            </div>

                            <div className="flex items-center space-x-4 text-[#A0A0B5] text-sm">
                              <div className="flex items-center space-x-1 hover:text-[#8A4FFF] cursor-pointer transition-colors">
                                <Heart className="w-4 h-4" />
                                <span>{story.likes.toLocaleString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{story.views?.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Load More */}
          <div className="text-center py-8">
            <Button 
              variant="outline" 
              className="border-[#8A4FFF] text-[#8A4FFF] hover:bg-[#8A4FFF]/10 px-8 py-3 rounded-full font-medium"
            >
              加载更多内容
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
