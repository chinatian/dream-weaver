import { Shield, Heart, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { useTranslation } from '@/app/translations/game'
import { PlayerStats as PlayerStatsType } from '@/app/types/game'

interface PlayerStatsProps {
  stats: PlayerStatsType
  gameData: any
}

export function PlayerStats({ stats, gameData }: PlayerStatsProps) {
  const { t } = useTranslation()

  return (
    <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
      <CardContent className="p-6">
        <h3 className="text-[#F0F0F5] font-semibold mb-4 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-[#8A4FFF]" />
          {t('characterStatus')}
        </h3>

        <div className="space-y-4">
          {Array.isArray(gameData?.skills) && gameData.skills.map((skill: any, index: number) => (
            <div key={skill.id || index}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#A0A0B5] flex items-center">
                  <Heart className="w-4 h-4 mr-2 text-[#FF5577]" />
                  {skill.name || t('health')}
                </span>
                <span className="text-[#F0F0F5] font-medium">{skill.value || 0}/100</span>
              </div>
              <Progress value={skill.value || 0} className="h-2" />
            </div>
          ))}
        
        </div>
      </CardContent>
    </Card>
  )
} 