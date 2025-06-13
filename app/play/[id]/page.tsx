"use client"

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

import { useState } from "react"
import { GameNavbar } from "@/app/components/game/GameNavbar"
import { GameScene } from "@/app/components/game/GameScene"
import { PlayerStats } from "@/app/components/game/PlayerStats"
import { ProFeatures } from "@/app/components/game/ProFeatures"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { GameState, SceneDescription } from "@/app/types/game"

export default function PlayPage() {
  const [messages, setMessages] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const gameState: GameState = {
    title: "赛博朋克侦探",
    currentScene: "霓虹街区的深夜",
    playerStats: {
      health: 85,
      energy: 60,
      inspiration: 3,
    },
    sceneImage: "/scene1.jfif",
    task: {
      description: "调查失踪的AI线索，注意周围可疑的迹象。"
    }
  }

  const sceneDescription: SceneDescription = {
    segments: [
      {
        type: "narration",
        text: "夜幕降临，霓虹灯开始在这座城市的每个角落闪烁。你站在第七街区的入口，雨水打湿了你的风衣。刚刚收到的匿名消息让你来到这里——一个关于失踪AI的线索。"
      },
      {
        type: "narration",
        text: "街道两旁是各种小摊贩和黑市商人，他们的眼神都很警惕。远处传来低沉的音乐声，那是来自'数字梦境'酒吧。"
      },
      {
        type: "character",
        speaker: "神秘商人",
        text: "这位侦探，要来点特殊的情报吗？"
      }
    ],
    options: [
      { id: "1", text: "询问失踪AI的相关信息" },
      { id: "2", text: "观察商人的表情和举止" },
      { id: "3", text: "直接前往数字梦境酒吧" }
    ]
  }

  const handleAction = (action: string) => {
    setIsLoading(true)
    setMessages([...messages, { content: action }])
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#12121B]">
      <GameNavbar 
        title={gameState.title} 
        inspirationPoints={gameState.playerStats.inspiration} 
      />

      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-6 gap-6">
            {/* Story Content - Left Side */}
            <div className="lg:col-span-4">
              <GameScene
                sceneImage={gameState.sceneImage}
                task={gameState.task}
                sceneDescription={sceneDescription}
                onAction={handleAction}
                isLoading={isLoading}
              />
            </div>

            {/* Game Info - Right Side */}
            <div className="lg:col-span-2 space-y-6">
              {/* Scene Image */}
              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={gameState.sceneImage}
                      alt={gameState.currentScene}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2D] via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-[#00F5D4] text-[#12121B] font-medium mb-2">当前场景</Badge>
                      <h3 className="text-[#F0F0F5] font-bold text-lg">{gameState.currentScene}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <PlayerStats stats={gameState.playerStats} />
              <ProFeatures />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
