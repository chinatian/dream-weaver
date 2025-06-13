import { Crown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/app/translations/game'
import { TranslationKey } from '@/app/translations/game'

export function ProFeatures() {
  const { t } = useTranslation()

  const features: TranslationKey[] = [
    'unlimitedInspiration',
    'saveGameProgress',
    'highQualityImages',
    'exclusiveContent'
  ] as const

  return (
    <Card className="bg-gradient-to-br from-[#8A4FFF]/10 to-[#00F5D4]/10 border-[#8A4FFF]/30">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Crown className="w-5 h-5 mr-2 text-[#8A4FFF]" />
          <h3 className="text-[#F0F0F5] font-semibold">{t('proFeatures')}</h3>
        </div>

        <div className="space-y-3 text-sm">
          {features.map((feature) => (
            <div key={feature} className="flex items-center text-[#A0A0B5]">
              <div className="w-2 h-2 bg-[#8A4FFF] rounded-full mr-3"></div>
              {t(feature)}
            </div>
          ))}
        </div>

        <Button className="w-full mt-4 bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
          <Crown className="w-4 h-4 mr-2" />
          {t('upgradeToPro')}
        </Button>
      </CardContent>
    </Card>
  )
} 