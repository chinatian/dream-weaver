"use client"

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Heart, Shield, Zap, Crown, ArrowLeft, Send, Bookmark, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Simple translation function for this page
const useSimpleTranslation = () => {
  const [language, setLanguage] = useState('zh-CN')
  
  const translations = {
    'zh-CN': {
      backToExplore: '返回探索',
      yourChoice: '你的选择',
      customActionPlaceholder: '输入自定义行动...',
      customActionCost: '自定义行动消耗 1 灵感点',
      currentScene: '当前场景',
      characterStatus: '角色状态',
      health: '生命值',
      energy: '精力值',
      inspirationPoints: '灵感点',
      inspirationDescription: '用于自定义行动和特殊选择',
      proFeatures: 'Pro 功能',
      unlimitedInspiration: '无限灵感点',
      saveGameProgress: '保存游戏进度',
      highQualityImages: '高质量图片',
      exclusiveContent: '独家内容',
      upgradeToPro: '升级到 Pro'
    },
    'en': {
      backToExplore: 'Back to Explore',
      yourChoice: 'Your Choice',
      customActionPlaceholder: 'Enter custom action...',
      customActionCost: 'Custom actions cost 1 inspiration point',
      currentScene: 'Current Scene',
      characterStatus: 'Character Status',
      health: 'Health',
      energy: 'Energy',
      inspirationPoints: 'Inspiration Points',
      inspirationDescription: 'Used for custom actions and special choices',
      proFeatures: 'Pro Features',
      unlimitedInspiration: 'Unlimited Inspiration',
      saveGameProgress: 'Save Game Progress',
      highQualityImages: 'High Quality Images',
      exclusiveContent: 'Exclusive Content',
      upgradeToPro: 'Upgrade to Pro'
    }
  }
  
  const t = (key: string) => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations['zh-CN']] || key
  }
  
  return { t, language, setLanguage }
}

export default function PlayPage() {
  const [customAction, setCustomAction] = useState("")
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null)
  const { t } = useSimpleTranslation()

  const gameState = {
    title: "赛博朋克侦探",
    currentScene: "霓虹街区的深夜",
    playerStats: {
      health: 85,
      energy: 60,
      inspiration: 3,
    },
    sceneImage: "/placeholder.svg?height=400&width=600",
  }

  const storyContent = [
    {
      type: "ai",
      content:
        "夜幕降临，霓虹灯开始在这座城市的每个角落闪烁。你站在第七街区的入口，雨水打湿了你的风衣。刚刚收到的匿名消息让你来到这里——一个关于失踪AI的线索。",
    },
    {
      type: "ai",
      content:
        "街道两旁是各种小摊贩和黑市商人，他们的眼神都很警惕。远处传来低沉的音乐声，那是来自'数字梦境'酒吧。你注意到有几个穿着企业制服的人正在附近巡逻。",
    },
    {
      type: "player",
      content: "我决定先观察一下周围的环境，寻找可疑的迹象。",
    },
    {
      type: "ai",
      content:
        "你仔细观察着周围。在一个废弃的广告牌后面，你发现了一些奇怪的电子设备残骸。这些零件看起来很新，而且有着你从未见过的设计。突然，你听到身后传来脚步声...",
    },
  ]

  const choices = ["迅速转身，准备应对可能的威胁", "假装没有注意到，继续检查设备残骸", "大声询问是谁在跟踪我"]

  return (
    <div className="min-h-screen bg-[#12121B]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1E1E2D]/80 backdrop-blur-md border-b border-[#8A4FFF]/20">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/explore"
                className="flex items-center space-x-2 text-[#A0A0B5] hover:text-[#8A4FFF] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t("backToExplore")}</span>
              </Link>
              <div className="h-6 w-px bg-[#8A4FFF]/20"></div>
              <h1 className="text-[#F0F0F5] font-bold text-lg">{gameState.title}</h1>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-[#A0A0B5] hover:text-[#8A4FFF]">
                <Bookmark className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-[#A0A0B5] hover:text-[#8A4FFF]">
                <Share2 className="w-4 h-4" />
              </Button>
              <div className="flex items-center space-x-2 text-[#00F5D4]">
                <Zap className="w-4 h-4" />
                <span className="font-medium">{gameState.playerStats.inspiration}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Story Content - Left Side */}
            <div className="lg:col-span-3">
              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20 mb-6">
                <CardContent className="p-6">
                  <div className="space-y-6 max-h-[70vh] overflow-y-auto">
                    {storyContent.map((item, index) => (
                      <div key={index} className={`flex ${item.type === "player" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] p-4 rounded-lg ${
                            item.type === "ai" ? "bg-[#12121B] text-[#F0F0F5]" : "bg-[#8A4FFF] text-white"
                          }`}
                        >
                          <p className="leading-relaxed font-serif">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Choices */}
              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardContent className="p-6">
                  <h3 className="text-[#F0F0F5] font-semibold mb-4">{t("yourChoice")}</h3>
                  <div className="space-y-3 mb-6">
                    {choices.map((choice, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className={`w-full text-left justify-start h-auto p-4 border-[#8A4FFF]/30 text-[#F0F0F5] hover:bg-[#8A4FFF]/10 hover:border-[#8A4FFF] transition-all ${
                          selectedChoice === index ? "bg-[#8A4FFF]/20 border-[#8A4FFF]" : ""
                        }`}
                        onClick={() => setSelectedChoice(index)}
                      >
                        <span className="text-[#8A4FFF] mr-3 font-bold">{index + 1}.</span>
                        {choice}
                      </Button>
                    ))}
                  </div>

                  {/* Custom Action */}
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        placeholder={t("customActionPlaceholder")}
                        value={customAction}
                        onChange={(e) => setCustomAction(e.target.value)}
                        className="bg-[#12121B] border-[#8A4FFF]/30 text-[#F0F0F5] placeholder-[#A0A0B5] focus:border-[#8A4FFF]"
                      />
                      <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-[#A0A0B5] text-sm">💡 {t("customActionCost")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Game Info - Right Side */}
            <div className="lg:col-span-2 space-y-6">
              {/* Scene Image */}
              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={gameState.sceneImage || "/placeholder.svg"}
                      alt={gameState.currentScene}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2D] via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-[#00F5D4] text-[#12121B] font-medium mb-2">{t("currentScene")}</Badge>
                      <h3 className="text-[#F0F0F5] font-bold text-lg">{gameState.currentScene}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Player Stats */}
              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardContent className="p-6">
                  <h3 className="text-[#F0F0F5] font-semibold mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-[#8A4FFF]" />
                    {t("characterStatus")}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#A0A0B5] flex items-center">
                          <Heart className="w-4 h-4 mr-2 text-[#FF5577]" />
                          {t("health")}
                        </span>
                        <span className="text-[#F0F0F5] font-medium">{gameState.playerStats.health}/100</span>
                      </div>
                      <Progress value={gameState.playerStats.health} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#A0A0B5] flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-[#33D69F]" />
                          {t("energy")}
                        </span>
                        <span className="text-[#F0F0F5] font-medium">{gameState.playerStats.energy}/100</span>
                      </div>
                      <Progress value={gameState.playerStats.energy} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[#A0A0B5] flex items-center">
                          <Zap className="w-4 h-4 mr-2 text-[#00F5D4]" />
                          {t("inspirationPoints")}
                        </span>
                        <span className="text-[#00F5D4] font-bold text-lg">{gameState.playerStats.inspiration}</span>
                      </div>
                      <p className="text-[#A0A0B5] text-xs">{t("inspirationDescription")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pro Features */}
              <Card className="bg-gradient-to-br from-[#8A4FFF]/10 to-[#00F5D4]/10 border-[#8A4FFF]/30">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Crown className="w-5 h-5 mr-2 text-[#8A4FFF]" />
                    <h3 className="text-[#F0F0F5] font-semibold">{t("proFeatures")}</h3>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-[#A0A0B5]">
                      <div className="w-2 h-2 bg-[#8A4FFF] rounded-full mr-3"></div>
                      {t("unlimitedInspiration")}
                    </div>
                    <div className="flex items-center text-[#A0A0B5]">
                      <div className="w-2 h-2 bg-[#8A4FFF] rounded-full mr-3"></div>
                      {t("saveGameProgress")}
                    </div>
                    <div className="flex items-center text-[#A0A0B5]">
                      <div className="w-2 h-2 bg-[#8A4FFF] rounded-full mr-3"></div>
                      {t("highQualityImages")}
                    </div>
                    <div className="flex items-center text-[#A0A0B5]">
                      <div className="w-2 h-2 bg-[#8A4FFF] rounded-full mr-3"></div>
                      {t("exclusiveContent")}
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                    <Crown className="w-4 h-4 mr-2" />
                    {t("upgradeToPro")}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
