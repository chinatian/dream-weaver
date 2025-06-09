"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Play,
  BookOpen,
  Heart,
  Eye,
  Gamepad2,
  Zap,
  Crown,
  ArrowLeft,
  Settings,
  TrendingUp,
  Calendar,
  Edit3,
  Trash2,
  MoreHorizontal,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function DashboardPage() {
  const { t } = useLanguage()

  const ongoingAdventures = [
    {
      id: 1,
      title: "赛博朋克侦探",
      progress: 65,
      lastPlayed: "2小时前",
      currentScene: "霓虹街区的深夜",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "魔法学院的秘密",
      progress: 32,
      lastPlayed: "1天前",
      currentScene: "图书馆的禁书区",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const myStories = [
    {
      id: 1,
      title: "星际迷航：未知边界",
      type: "interactive",
      status: "published",
      likes: 1847,
      plays: 4291,
      views: 0,
      createdAt: "2024-01-15",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "古代传说集",
      type: "narrative",
      status: "draft",
      likes: 0,
      plays: 0,
      views: 0,
      createdAt: "2024-01-20",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const favorites = [
    {
      id: 1,
      title: "The Haunted Manor",
      author: "GhostWriter",
      type: "read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "武侠江湖：剑客传说",
      author: "江湖笔客",
      type: "play",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const stats = {
    totalPlays: 156,
    totalReads: 89,
    totalLikes: 2341,
    totalFollowers: 45,
  }

  return (
    <div className="min-h-screen bg-[#12121B]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1E1E2D]/80 backdrop-blur-md border-b border-[#8A4FFF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-[#A0A0B5] hover:text-[#8A4FFF] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t("backToHome")}</span>
              </Link>
              <div className="h-6 w-px bg-[#8A4FFF]/20"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8A4FFF] to-[#00F5D4] rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#F0F0F5] font-bold text-xl">{t("appName")}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-[#00F5D4]">
                <Zap className="w-4 h-4" />
                <span className="font-medium">50</span>
              </div>
              <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                <Crown className="w-4 h-4 mr-2" />
                {t("upgradePro")}
              </Button>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-[#F0F0F5] mb-2">{t("myDashboard")}</h1>
              <p className="text-[#A0A0B5] text-lg">{t("manageCreations")}</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/create">
                <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                  <Edit3 className="w-4 h-4 mr-2" />
                  {t("createNewStory")}
                </Button>
              </Link>
              <Button variant="outline" className="border-[#8A4FFF]/30 text-[#A0A0B5] hover:bg-[#8A4FFF]/10">
                <Settings className="w-4 h-4 mr-2" />
                {t("settings")}
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#8A4FFF] mb-1">{stats.totalPlays}</div>
                <div className="text-[#A0A0B5] text-sm">{t("totalPlays")}</div>
              </CardContent>
            </Card>
            <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#00F5D4] mb-1">{stats.totalReads}</div>
                <div className="text-[#A0A0B5] text-sm">{t("totalReads")}</div>
              </CardContent>
            </Card>
            <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#FF5577] mb-1">{stats.totalLikes}</div>
                <div className="text-[#A0A0B5] text-sm">{t("totalLikes")}</div>
              </CardContent>
            </Card>
            <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-[#33D69F] mb-1">{stats.totalFollowers}</div>
                <div className="text-[#A0A0B5] text-sm">{t("totalFollowers")}</div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="adventures" className="space-y-6">
            <TabsList className="bg-[#1E1E2D] border-[#8A4FFF]/20">
              <TabsTrigger
                value="adventures"
                className="data-[state=active]:bg-[#8A4FFF] data-[state=active]:text-white"
              >
                <Gamepad2 className="w-4 h-4 mr-2" />
                {t("ongoingAdventures")}
              </TabsTrigger>
              <TabsTrigger value="stories" className="data-[state=active]:bg-[#8A4FFF] data-[state=active]:text-white">
                <Edit3 className="w-4 h-4 mr-2" />
                {t("myStories")}
              </TabsTrigger>
              <TabsTrigger
                value="favorites"
                className="data-[state=active]:bg-[#8A4FFF] data-[state=active]:text-white"
              >
                <Heart className="w-4 h-4 mr-2" />
                {t("favorites")}
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-[#8A4FFF] data-[state=active]:text-white"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                {t("analytics")}
                <Badge className="ml-2 bg-[#8A4FFF] text-white text-xs">
                  <Crown className="w-3 h-3 mr-1" />
                  Pro
                </Badge>
              </TabsTrigger>
            </TabsList>

            {/* Ongoing Adventures */}
            <TabsContent value="adventures">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-[#F0F0F5]">{t("ongoingAdventures")}</h2>
                  <Link href="/explore">
                    <Button variant="outline" className="border-[#8A4FFF] text-[#8A4FFF] hover:bg-[#8A4FFF]/10">
                      {t("discoverNewAdventures")}
                    </Button>
                  </Link>
                </div>

                {ongoingAdventures.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {ongoingAdventures.map((adventure) => (
                      <Card
                        key={adventure.id}
                        className="bg-[#1E1E2D] border-[#8A4FFF]/20 hover:border-[#8A4FFF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#8A4FFF]/20"
                      >
                        <CardContent className="p-0">
                          <div className="relative">
                            <Image
                              src={adventure.image || "/placeholder.svg"}
                              alt={adventure.title}
                              width={300}
                              height={200}
                              className="w-full h-40 object-cover rounded-t-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <Badge className="bg-[#00F5D4] text-[#12121B] font-medium mb-2">
                                {t("progress")} {adventure.progress}%
                              </Badge>
                            </div>
                          </div>

                          <div className="p-6">
                            <h3 className="text-xl font-bold text-[#F0F0F5] mb-2">{adventure.title}</h3>
                            <p className="text-[#A0A0B5] mb-3">
                              {t("currentScene")}：{adventure.currentScene}
                            </p>

                            <Progress value={adventure.progress} className="mb-4" />

                            <div className="flex justify-between items-center">
                              <span className="text-[#A0A0B5] text-sm">
                                {t("lastPlayed")}：{adventure.lastPlayed}
                              </span>
                              <Link href={`/play/${adventure.id}`}>
                                <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                                  <Play className="w-4 h-4 mr-2" />
                                  {t("continueAdventure")}
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                    <CardContent className="p-12 text-center">
                      <div className="w-16 h-16 bg-[#8A4FFF]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Gamepad2 className="w-8 h-8 text-[#8A4FFF]" />
                      </div>
                      <h3 className="text-[#F0F0F5] font-semibold mb-2">{t("noOngoingAdventures")}</h3>
                      <p className="text-[#A0A0B5] mb-6">{t("exploreInteractiveStories")}</p>
                      <Link href="/explore">
                        <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                          <Play className="w-4 h-4 mr-2" />
                          {t("startAdventure")}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            {/* My Stories */}
            <TabsContent value="stories">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-[#F0F0F5]">{t("myStories")}</h2>
                  <Link href="/create">
                    <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                      <Edit3 className="w-4 h-4 mr-2" />
                      {t("createNewStory")}
                    </Button>
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myStories.map((story) => (
                    <Card
                      key={story.id}
                      className="bg-[#1E1E2D] border-[#8A4FFF]/20 hover:border-[#8A4FFF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#8A4FFF]/20 group"
                    >
                      <CardContent className="p-0">
                        <div className="relative">
                          <Image
                            src={story.image || "/placeholder.svg"}
                            alt={story.title}
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover rounded-t-lg"
                          />
                          <div className="absolute top-3 left-3 flex gap-2">
                            <Badge
                              className={`${story.status === "published" ? "bg-[#33D69F]" : "bg-[#A0A0B5]"} text-white font-medium`}
                            >
                              {story.status === "published" ? t("published") : t("draft")}
                            </Badge>
                            <Badge className="bg-[#00F5D4] text-[#12121B] font-medium">
                              {story.type === "interactive" ? t("interactive") : t("story")}
                            </Badge>
                          </div>
                          <div className="absolute top-3 right-3">
                            <Button variant="ghost" size="sm" className="text-white hover:bg-black/20">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-lg font-bold text-[#F0F0F5] mb-2 group-hover:text-[#8A4FFF] transition-colors">
                            {story.title}
                          </h3>

                          <div className="flex items-center justify-between text-[#A0A0B5] text-sm mb-4">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {story.createdAt}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-[#A0A0B5] text-sm">
                              <div className="flex items-center space-x-1">
                                <Heart className="w-4 h-4" />
                                <span>{story.likes}</span>
                              </div>
                              {story.type === "interactive" ? (
                                <div className="flex items-center space-x-1">
                                  <Gamepad2 className="w-4 h-4" />
                                  <span>{story.plays}</span>
                                </div>
                              ) : (
                                <div className="flex items-center space-x-1">
                                  <Eye className="w-4 h-4" />
                                  <span>{story.views}</span>
                                </div>
                              )}
                            </div>

                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm" className="text-[#A0A0B5] hover:text-[#8A4FFF]">
                                <Edit3 className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-[#A0A0B5] hover:text-[#FF5577]">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Favorites */}
            <TabsContent value="favorites">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#F0F0F5]">{t("myFavorites")}</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favorites.map((item) => (
                    <Card
                      key={item.id}
                      className="bg-[#1E1E2D] border-[#8A4FFF]/20 hover:border-[#8A4FFF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#8A4FFF]/20 group cursor-pointer"
                    >
                      <CardContent className="p-0">
                        <div className="relative">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={300}
                            height={200}
                            className="w-full h-40 object-cover rounded-t-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            {item.type === "play" ? (
                              <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80">
                                <Play className="w-4 h-4 mr-2" />
                                {t("startGame")}
                              </Button>
                            ) : (
                              <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80">
                                <BookOpen className="w-4 h-4 mr-2" />
                                {t("readStory")}
                              </Button>
                            )}
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-lg font-bold text-[#F0F0F5] mb-2 group-hover:text-[#8A4FFF] transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-[#8A4FFF] to-[#00F5D4] rounded-full"></div>
                            <span className="text-[#A0A0B5] text-sm">{item.author}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Analytics */}
            <TabsContent value="analytics">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-[#F0F0F5]">{t("analytics")}</h2>
                  <Badge className="bg-[#8A4FFF] text-white">
                    <Crown className="w-3 h-3 mr-1" />
                    {t("proFeature")}
                  </Badge>
                </div>

                <Card className="bg-gradient-to-br from-[#8A4FFF]/10 to-[#00F5D4]/10 border-[#8A4FFF]/30">
                  <CardContent className="p-12 text-center">
                    <div className="w-16 h-16 bg-[#8A4FFF]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Crown className="w-8 h-8 text-[#8A4FFF]" />
                    </div>
                    <h3 className="text-[#F0F0F5] font-semibold mb-2">{t("upgradeProUnlock")}</h3>
                    <p className="text-[#A0A0B5] mb-6 max-w-md mx-auto">{t("getDetailedAnalytics")}</p>
                    <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                      <Crown className="w-4 h-4 mr-2" />
                      {t("upgradePro")}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
