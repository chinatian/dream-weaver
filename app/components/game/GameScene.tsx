import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { SceneDescription, GameTask } from '@/app/types/game'
import { useTranslation } from '@/app/translations/game'

interface GameSceneProps {
  sceneImage: string
  task?: GameTask
  sceneDescription: SceneDescription
  onAction: (action: string) => void
  isLoading: boolean
}

export function GameScene({
  sceneImage,
  task,
  sceneDescription,
  onAction,
  isLoading
}: GameSceneProps) {
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(1)
  const [customAction, setCustomAction] = useState("")
  const { t } = useTranslation()

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customAction.trim()) return
    onAction(customAction)
    setCustomAction("")
  }

  return (
    <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20 mb-6 min-h-[90vh]">
      <CardContent className="p-6 relative flex flex-col items-center justify-center min-h-[90vh]">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage: `url(${sceneImage || '/default-background.jpg'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="h-[45vh] overflow-y-auto absolute top-[40vh] max-w-[500px] bg-opacity-70">
          <div className="w-full max-w-[500px] mx-auto px-4 flex flex-col items-center justify-end">
            <div
              onClick={() => {
                if (currentSegmentIndex < sceneDescription.segments.length) {
                  setCurrentSegmentIndex(currentSegmentIndex + 1)
                }
              }}
              className="space-y-4 bg-black bg-opacity-30 p-6 rounded-lg"
            >
              {task && (
                <div className="mb-4 p-4 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20">
                  <p className="text-gray-200">{task.description}</p>
                </div>
              )}
              
              {sceneDescription.segments.slice(0, currentSegmentIndex).map((segment, index) => (
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
                  <div>{segment.text}</div>
                </div>
              ))}
              
              {currentSegmentIndex >= sceneDescription.segments.length ? (
                <div className="mt-6 space-y-2 animate-fadeIn">
                  {sceneDescription.options.map((option) => (
                    <Button
                      key={option.id}
                      variant="outline"
                      className="text-sm w-full justify-start text-left bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-white border-opacity-30 whitespace-pre-wrap"
                      onClick={() => onAction(option.id)}
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
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 