import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { SceneDescription, GameTask, StoryData, SceneSegment } from '@/app/types/game'
import { useTranslation } from '@/app/translations/game'

interface GameSceneProps {
  storyData: StoryData
  gameData: any
  gameDataHistory: any[]
  sceneImage: string
  task?: GameTask
  sceneDescription: SceneDescription
  onAction: (action: string, text: string) => void
  onSelectHistoryData: (data: any) => void
  isLoading: boolean
  isGenImgLoading: boolean
}

export function GameScene({
  storyData,
  gameData,
  gameDataHistory,
  task,
  sceneDescription,
  onAction,
  onSelectHistoryData,
  isLoading,
  isGenImgLoading
}: GameSceneProps) {
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(1)
  const [customAction, setCustomAction] = useState("")
  const [showingText, setShowingText] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { t } = useTranslation()
  const textContentRef = useRef<HTMLDivElement>(null)
  const historyScrollRef = useRef<HTMLDivElement>(null)

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customAction.trim()) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSegmentIndex(1)
      onAction('custom', customAction)
      setCustomAction("")
      setIsTransitioning(false)
    }, 300)
  }

  const handleActionClick = (action: string, text: string) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSegmentIndex(1)
      onAction(action, text)
      setIsTransitioning(false)
    }, 300)
  }

  useEffect(() => {
    if (textContentRef.current) {
      textContentRef.current.scrollTop = textContentRef.current.scrollHeight
    }
  }, [currentSegmentIndex])

  // 处理文本逐步显示
  useEffect(() => {
    if (gameData?.mainContent) {
      setShowingText(false)
      const timer = setTimeout(() => setShowingText(true), 100)
      return () => clearTimeout(timer)
    }
  }, [gameData])

  // 历史图片自动滚动
  useEffect(() => {
    if (historyScrollRef.current && gameDataHistory && gameDataHistory.length > 0) {
      const scrollContainer = historyScrollRef.current
      // 滚动到最右边（最新的图片）
      const scrollToRight = () => {
        scrollContainer.scrollTo({
          left: scrollContainer.scrollWidth - scrollContainer.clientWidth,
          behavior: 'smooth'
        })
      }
      
      // 稍微延迟一下确保 DOM 更新完成
      setTimeout(scrollToRight, 100)
    }
  }, [gameDataHistory])

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden bg-black flex flex-col">
      {/* 加载状态覆盖层 */}
      {false && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-[#8A4FFF]/20 rounded-full"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-t-[#8A4FFF] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-white/90 text-lg font-medium tracking-wide">故事正在展开...</p>
          </div>
        </div>
      )}

      {/* 图片区域 - 占据65%的可用高度 */}
      <div className="relative w-full flex-[0_0_65%] overflow-hidden">
        <div 
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-out ${
            isTransitioning ? 'scale-105 opacity-80' : 'scale-100 opacity-100'
          }`}
          style={{
            backgroundImage: `url(${gameData?.sceneImage || '/default-background.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* 渐变遮罩，确保底部文字区域的自然过渡 */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* 场景标题 - 电影字幕风格 */}
     
        {(!gameDataHistory || gameDataHistory.length < 1) && !isLoading && !isGenImgLoading && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              <h3 className="text-white/90 text-sm font-medium tracking-wide">
                当前场景
              </h3>
              <h2 className="text-white text-lg font-semibold mt-1">
                {storyData.prompt_json?.interactiveNovel?.storySettings?.title || "未知场景"}
              </h2>
              <div className="flex justify-end">
                <Button
                  onClick={() => handleActionClick('start', '')}
                  disabled={isLoading}
                  className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#8A4FFF]/25"
                >
                  {t('startGame')}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Pro功能图标 - 简约设计 */}
        <div className="absolute top-6 right-6 z-10">
          <div className="bg-black/30 backdrop-blur-sm p-2 rounded-full border border-amber-400/20 hover:border-amber-400/50 transition-all cursor-pointer">
            <span className="text-amber-400 text-sm">👑</span>
          </div>
        </div>

        {/* 历史图片展示 - 底部滚动 */}
        {(gameDataHistory && gameDataHistory.length > 0) || isGenImgLoading ? (
          <div className="absolute bottom-4 left-4 right-4 z-10">
             {/* 任务提示 */}
             {task && (
                  <div  className="bg-[#8A4FFF]/10 border border-[#8A4FFF]/30 rounded-lg p-4 mb-4 transition-all duration-300 ease-in-out transform opacity-100 translate-y-0">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#8A4FFF] rounded-full mt-2 flex-shrink-0">
                        
                      </div>
                      <p className="text-[#8A4FFF] font-medium transition-all duration-300">{gameData?.task?.description}</p>
                    </div>
                  </div>
                )}
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div 
                ref={historyScrollRef}
                className="flex space-x-3 overflow-x-auto pb-2"
              >
                {gameDataHistory && gameDataHistory.filter(item => item.sceneImage).map((historyData, index) => (
                  <div
                    key={historyData.id || index}
                    onClick={() => onSelectHistoryData(historyData)}
                    className="flex-shrink-0 cursor-pointer group transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative w-20 h-12 rounded-md overflow-hidden border-2 border-transparent group-hover:border-[#8A4FFF]/50 transition-all duration-300">
                      <img
                        src={historyData.sceneImage}
                        alt={`历史场景 ${index + 1}`}
                        className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                      />
                      {gameData?.sceneImage === historyData.sceneImage && (
                        <div className="absolute inset-0 border-2 border-[#8A4FFF] rounded-md bg-[#8A4FFF]/20"></div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-1">
                        <span className="text-white/80 text-xs font-medium">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* 图片生成中的 loading 状态 */}
                {isGenImgLoading && (
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className="relative w-20 h-12 rounded-md overflow-hidden border-2 border-[#8A4FFF]/30 bg-black/50">
                      {/* Loading 动画 */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-6 h-6 border-2 border-[#8A4FFF]/20 rounded-full"></div>
                          <div className="absolute inset-0 w-6 h-6 border-2 border-t-[#8A4FFF] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                        </div>
                      </div>
                      {/* Loading 文字 */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-1">
                        <span className="text-white/80 text-xs font-medium">生成中</span>
                      </div>
                      {/* 脉冲效果 */}
                      <div className="absolute inset-0 border-2 border-[#8A4FFF]/50 rounded-md animate-pulse"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* 叙事与交互区域 - 占据剩余35%的可用高度 */}
      <div className="relative w-full flex-1 bg-gradient-to-b from-black/80 via-black/90 to-black/95 backdrop-blur-sm">
        {isLoading && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="w-12 h-12 border-4 border-[#8A4FFF]/20 rounded-full"></div>
                <div className="absolute inset-0 w-12 h-12 border-4 border-t-[#8A4FFF] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
              <div className="text-[#8A4FFF] font-medium">故事生成中...</div>
            </div>
          </div>
        )}
        <div 
          ref={textContentRef}
          className="absolute inset-0 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20"
        >
          <div className="max-w-4xl mx-auto px-8 py-6">
            {!gameData?.skills ? (
              /* 游戏开始界面 */
              <div className={`space-y-6 transition-all duration-800 ease-out ${showingText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="text-center space-y-4">
                  <h1 className="text-3xl font-bold text-white mb-4 font-serif">
                    {storyData.prompt_json?.interactiveNovel?.storySettings?.title}
                  </h1>
                  
                  <div className="space-y-6 text-left">
                    <div>
                      <h2 className="text-xl font-semibold text-[#8A4FFF] mb-3 flex items-center">
                        <span className="w-1 h-6 bg-[#8A4FFF] mr-3"></span>
                        世界观
                      </h2>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {storyData.prompt_json?.interactiveNovel?.storySettings?.worldBackground}
                      </p>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-semibold text-[#8A4FFF] mb-3 flex items-center">
                        <span className="w-1 h-6 bg-[#8A4FFF] mr-3"></span>
                        故事背景
                      </h2>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {storyData.prompt_json?.interactiveNovel?.storySettings?.introduction}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <Button
                      onClick={() => handleActionClick('start', '')}
                      disabled={isLoading}
                      className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#8A4FFF]/25"
                    >
                      {t('startGame')}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              /* 游戏进行界面 */
              <div className={`space-y-6 transition-all duration-800 ease-out ${showingText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                
                
                {/* 故事内容 */}
                <div className="space-y-4">
                  {gameData?.mainContent?.slice(0, currentSegmentIndex).map((segment: SceneSegment, index: number) => (
                    <div 
                      key={index} 
                      className={`animate-fadeIn transition-all duration-500 ${
                        index === currentSegmentIndex ? 'animate-pulse-once' : ''
                      }`}
                    >
                      {segment.type === 'character' && segment.speaker && (
                        <div className="font-bold text-blue-300 mb-2 text-lg">
                          {segment.speaker}
                        </div>
                      )}
                      <div 
                        className={`${
                          segment.type === 'narration' 
                            ? 'text-gray-300 font-serif' 
                            : 'text-white font-medium'
                        } text-lg leading-relaxed`}
                        dangerouslySetInnerHTML={{ __html: segment.text }} 
                      />
                    </div>
                  ))}
                </div>
                
                {/* 继续提示 */}
                {currentSegmentIndex <= gameData?.mainContent?.length && (
                  <div 
                    onClick={() => setCurrentSegmentIndex(currentSegmentIndex + 1)}
                    className="text-center cursor-pointer group py-4"
                  >
                    <div className="inline-flex items-center space-x-2 text-white/60 hover:text-white/90 transition-all duration-300">
                      <span className="text-sm font-medium">点击继续</span>
                      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse group-hover:animate-bounce"></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse group-hover:animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse group-hover:animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                )}
                
                {/* 选择选项 */}
                {currentSegmentIndex > gameData?.mainContent?.length && (
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="space-y-3">
                      {gameData?.options.map((option: any, index: number) => (
                        <div
                          key={option.id}
                          onClick={() => handleActionClick('option', option.text)}
                          className="group cursor-pointer transition-all duration-300 hover:bg-white/5 rounded-lg p-3 border border-transparent hover:border-white/10"
                        >
                          <div className="flex items-start space-x-3">
                            <span className="text-[#8A4FFF] font-bold text-lg flex-shrink-0 group-hover:text-[#8A4FFF]/80">
                              {option.id}.
                            </span>
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg leading-relaxed">
                              {option.text}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* 自定义输入 */}
                    <div className="pt-4">
                      <form onSubmit={handleCustomSubmit} className="flex gap-3">
                        <div className="relative flex-1">
                          <Input
                            value={customAction}
                            onChange={(e) => setCustomAction(e.target.value)}
                            placeholder={t('customActionPlaceholder')}
                            disabled={isLoading}
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-[#8A4FFF]/50 focus:ring-[#8A4FFF]/25 rounded-lg py-3 px-4 text-lg"
                          />
                        </div>
                        <Button 
                          type="submit" 
                          disabled={isLoading || !customAction.trim()}
                          className="bg-gradient-to-r from-[#8A4FFF] to-[#6B35CC] hover:from-[#8A4FFF]/80 hover:to-[#6B35CC]/80 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#8A4FFF]/25 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                        >
                          {t('yourChoice')}
                        </Button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 