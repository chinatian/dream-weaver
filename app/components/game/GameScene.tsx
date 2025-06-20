import { useState,useRef,useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { SceneDescription, GameTask, StoryData, SceneSegment } from '@/app/types/game'
import { useTranslation } from '@/app/translations/game'


interface GameSceneProps {
  storyData: StoryData
  gameData: any
  sceneImage: string
  task?: GameTask
  sceneDescription: SceneDescription
  onAction: (action: string,text:string) => void
  isLoading: boolean
}

export function GameScene({
  storyData,
  gameData,
  task,
  sceneDescription,
  onAction,
  isLoading
}: GameSceneProps) {
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(1)
  const [customAction, setCustomAction] = useState("")
  const { t } = useTranslation()
  const immersiveContentRef = useRef<HTMLDivElement>(null)

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customAction.trim()) return
    setCurrentSegmentIndex(1)
    onAction('custom',customAction)
    setCustomAction("")
  }

  const handleActionClick = (action: string,text:string) => {
    setCurrentSegmentIndex(1)
    onAction(action,text)
  }

  useEffect(() => {
    if ( immersiveContentRef.current) {
      immersiveContentRef.current.scrollTop = immersiveContentRef.current.scrollHeight
    }
  }, [currentSegmentIndex])

  return (
    <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20 mb-6 min-h-[90vh] relative">

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-4">
            <div className="w-8 h-8 border-4 border-t-[#8A4FFF] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <p className="text-white/80">加载中...</p>
          </div>
        </div>
      )}
      {!isLoading && (
      <CardContent className="p-6 relative flex flex-col items-center justify-center min-h-[90vh]">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage: `url(${gameData?.sceneImage || '/default-background.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        <div ref={immersiveContentRef} className="h-[45vh] overflow-y-auto absolute top-[40vh] max-w-[500px] bg-opacity-70">
          <div className="w-full max-w-[500px] mx-auto px-4 flex flex-col items-center justify-end">
            <div
              onClick={() => {
                if (currentSegmentIndex < gameData?.mainContent.length) {
                  setCurrentSegmentIndex(currentSegmentIndex + 1)
                }
              }}
              className="space-y-4 bg-black bg-opacity-30 p-6 rounded-lg"
            >
              {!gameData.skills? (
                <div className=" space-y-4" >
                  <h1 className="text-2xl font-bold text-white mb-2">{storyData.prompt_json?.interactiveNovel?.storySettings?.title}</h1>
                  <h2 className="text-xl font-semibold text-white mb-2">世界观</h2>
                  <p className="text-gray-200 mb-6">{storyData.prompt_json?.interactiveNovel?.storySettings?.worldBackground}</p>
                  <h2 className="text-xl font-semibold text-white mb-2">故事背景</h2>
                  <p className="text-gray-200 mb-6">{storyData.prompt_json?.interactiveNovel?.storySettings?.introduction}</p>
                  <Button
                    variant="outline"
                    className="text-white border-white border-opacity-30 hover:bg-white hover:bg-opacity-20"
                    onClick={() => onAction('start','')}
                    disabled={isLoading}
                  >
                    {t('startGame')}
                  </Button>
                </div>
              ) : (
                <>
                  {task && (
                    <div className="mb-4 p-4 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20">
                      <p className="text-gray-200">{gameData?.task?.description}</p>
                    </div>
                  )}
                  
                  {gameData?.mainContent?.slice(0, currentSegmentIndex).map((segment: SceneSegment, index: number) => (
                    <div 
                      key={index} 
                      className={`${
                        segment.type === 'narration' 
                          ? 'text-gray-200' 
                          : 'text-white'
                      } animate-fadeIn`}
                    >
                      {segment.type === 'character' && segment.speaker && (
                        <div className="font-bold text-blue-300 mb-1">
                          {segment.speaker}
                        </div>
                      )}
                      <div dangerouslySetInnerHTML={{ __html: segment.text }} />
                    </div>
                  ))}
                  
                  {currentSegmentIndex >= gameData?.mainContent?.length ? (
                    <div className="mt-6 space-y-2 animate-fadeIn">
                      {gameData?.options.map((option: any) => (
                        <Button
                          key={option.id}
                          variant="outline"
                          className=" text-sm w-full justify-start text-left bg-black bg-opacity-30 hover:bg-opacity-30 text-white border-white border-opacity-30 whitespace-pre-wrap"
                          onClick={() => handleActionClick('option',option.text)}
                          disabled={isLoading}
                        >
                          {option.id}. {option.text}
                        </Button>
                      ))}
                      <div className="">
                        <form onSubmit={handleCustomSubmit} className="flex gap-2">
                          <Input
                            value={customAction}
                            onChange={(e) => setCustomAction(e.target.value)}
                            placeholder={t('customActionPlaceholder')}
                            disabled={isLoading}
                            className="flex-1"
                          />
                          <Button type="submit" disabled={isLoading}>
                            {t('yourChoice')}
                          </Button>
                        </form>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-white mt-4 opacity-70">
                      点击继续...
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      )}
    </Card>
  )
} 