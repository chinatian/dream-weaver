"use client"

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { GameNavbar } from "@/app/components/game/GameNavbar"
import { GameScene } from "@/app/components/game/GameScene"
import { PlayerStats } from "@/app/components/game/PlayerStats"
import { ProFeatures } from "@/app/components/game/ProFeatures"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { GameState, SceneDescription, StoryData } from "@/app/types/game"
import { truncate } from "node:fs"
import { sendChatStreamRequest } from "@/app/lib/chat"
import { useLanguage } from "@/contexts/language-context"
import { parseGameState,getJsonFromContent } from "@/lib/parser"
import {sceneImagePrompt} from "@/lib/defaultSystemPrompt"



export default function PlayPage() {
  const params = useParams()
  const { t } = useLanguage()
  const [storyData, setStoryData] = useState<StoryData>({} as StoryData)
  const [messages, setMessages] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [gameData, setGameData] = useState<any>({} as any)
  const [prevImgPrompt, setPrevImgPrompt] = useState<string>("")


  useEffect(() => {
    const fetchStoryData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/stories/${params.id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch story data')
        }
        const data = await response.json()
        setStoryData(data)
      } catch (error) {
        console.error('Error fetching story:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      fetchStoryData()
    }
  }, [params.id])

  useEffect(() => {
    if (storyData) {
      console.log(storyData)
    }
  }, [storyData])

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
    segments: [],
    options: [
      { id: "1", text: "询问失踪AI的相关信息" },
      { id: "2", text: "观察商人的表情和举止" },
      { id: "3", text: "直接前往数字梦境酒吧" }
    ]
  }

  const startGame = async (addMessage:any) => {
    const systemPrompt = storyData.prompt
    const currentMessages = [...messages, addMessage]
    setMessages(currentMessages)

  
    const response = await sendChatStreamRequest(
      currentMessages, 
      "", 
      process.env.NEXT_PUBLIC_MODEL || "", 
      systemPrompt)
    console.log(response)
    // 处理流式响应
    const reader = response.body?.getReader();
    let result = ""
    while (true) {
      const { done, value } = await reader?.read() || {};
      if (done) {
        break;
      }
      // 处理返回的文本块
      const text = new TextDecoder().decode(value);
      console.log(text)
      result += text
      // ... 处理文本
    }
    const _gameData = parseGameState(result)
    setGameData(_gameData)
    const assistantMessage = { role: "assistant", content: result }
    setMessages([...currentMessages, assistantMessage])
    console.log('gameData', _gameData)
    if (_gameData.content) {
      genSenceImage(_gameData.content, _gameData)
    }
  }

  const handleAction = async (action: string,text:string) => {
    console.log('action', action,text)
    if (action === "start") {
      setIsLoading(true)
      await startGame({ role: "user", content: t("explore.startGame") })
      setIsLoading(false)
    }
    if (action === "option") {
      console.log(text)
      setIsLoading(true)
      await startGame({ role: "user", content: text })
      setIsLoading(false)
    }
    if (action === "custom") {
      console.log(text)
      setIsLoading(true)
      await startGame({ role: "user", content: text })
      setIsLoading(false)
    }
  }

  const genSenceImage = async (content:string, currentGameData?: any) => {
    if (!content) {
      console.error('Content is required for image generation')
      return
    }

    const systemPrompt = sceneImagePrompt
    
    const addPrevImgPrompt = prevImgPrompt ? `
      Previous Image Prompt：
      ${prevImgPrompt}
    ` : ''
    const _messages = [
      {role:'user',content:`
        ${addPrevImgPrompt}

        Story Content:
        ${content}
        
      `}
    ]
    const response = await sendChatStreamRequest(
      _messages, 
      "" , 
      process.env.NEXT_PUBLIC_MODEL || "", 
      systemPrompt)
   
    // 处理流式响应
    const reader = response.body?.getReader();
    let result = ""
    while (true) {
      const { done, value } = await reader?.read() || {};
      if (done) {
        break;
      }
      // 处理返回的文本块
      const text = new TextDecoder().decode(value);
      console.log(text)
      result += text
      // ... 处理文本
    }

    const imgPrompt = getJsonFromContent(result)

    setGameData((prevData: any) => ({
      ...(currentGameData || prevData),
      imgPrompt: imgPrompt.imagePrompt
    }))

    setPrevImgPrompt(imgPrompt.imagePrompt)

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: imgPrompt.imagePrompt,
          aspect_ratio: "16:9",
          key: `scene-${params.id}-${Date.now()}.png`
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate image')
      }

      const data = await response.json()
      console.log('Generated image URL:', data.imageUrl)
      // 使用传入的currentGameData或者函数式更新
      setGameData((prevData: any) => ({
        ...(currentGameData || prevData),
        sceneImage: data.imageUrl
      }))
    } catch (error) {
      console.error('Error generating image:', error)
    }
  }

  useEffect(() => {
    console.log('Current gameData:', gameData)
  }, [gameData])



  return (
    <div className="min-h-screen bg-[#12121B]">
      <GameNavbar 
        title={storyData?.title || ''} 
        inspirationPoints={gameState.playerStats.inspiration} 
      />

      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Story Content - Left Side */}
            <div className="lg:col-span-9">
              <GameScene
                storyData={storyData}
                gameData={gameData}
                sceneImage={gameData?.sceneImage || gameState.sceneImage}
                task={gameState.task}
                sceneDescription={sceneDescription}
                onAction={handleAction}
                isLoading={isLoading}
              />
            </div>

            {/* Game Info - Right Side */}
            <div className="lg:col-span-3 space-y-6">
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
                      <h3 className="text-[#F0F0F5] font-bold text-lg">{storyData?.title}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <PlayerStats stats={gameState.playerStats} gameData={gameData} />
              <ProFeatures />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
