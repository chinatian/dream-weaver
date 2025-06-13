import Link from 'next/link'
import { ArrowLeft, Bookmark, Share2, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/app/translations/game'

interface GameNavbarProps {
  title: string
  inspirationPoints: number
}

export function GameNavbar({ title, inspirationPoints }: GameNavbarProps) {
  const { t } = useTranslation()

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1E1E2D]/80 backdrop-blur-md border-b border-[#8A4FFF]/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link
              href="/explore"
              className="flex items-center space-x-2 text-[#A0A0B5] hover:text-[#8A4FFF] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('backToExplore')}</span>
            </Link>
            <div className="h-6 w-px bg-[#8A4FFF]/20"></div>
            <h1 className="text-[#F0F0F5] font-bold text-lg">{title}</h1>
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
              <span className="font-medium">{inspirationPoints}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 