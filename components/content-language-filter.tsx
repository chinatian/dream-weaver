"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Globe, Check, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { languages, type LanguageCode } from "@/lib/i18n"
import { Badge } from "@/components/ui/badge"

interface ContentLanguageFilterProps {
  selectedLanguages: LanguageCode[]
  onLanguageChange: (languages: LanguageCode[]) => void
  contentCounts: Record<LanguageCode, number>
}

const defaultContentCounts: Record<LanguageCode, number> = {
  'en': 0,
  'zh-CN': 0,
  'zh-TW': 0,
  'fr': 0,
  'de': 0,
  'ar': 0,
  'vi': 0,
  'th': 0,
  'id': 0
}

export function ContentLanguageFilter({ 
  selectedLanguages, 
  onLanguageChange, 
  contentCounts = defaultContentCounts 
}: Omit<ContentLanguageFilterProps, 'contentCounts'> & { contentCounts?: Record<LanguageCode, number> }) {
  const { language: currentLanguage } = useLanguage()
  const [open, setOpen] = useState(false)

  const handleLanguageToggle = (langCode: LanguageCode) => {
    if (selectedLanguages.includes(langCode)) {
      onLanguageChange(selectedLanguages.filter(l => l !== langCode))
    } else {
      onLanguageChange([...selectedLanguages, langCode])
    }
  }

  const handleSelectAll = () => {
    onLanguageChange(Object.keys(languages) as LanguageCode[])
  }

  const handleSelectCurrent = () => {
    onLanguageChange([currentLanguage])
  }

  const handleClearAll = () => {
    onLanguageChange([])
  }

  const getDisplayText = () => {
    if (selectedLanguages.length === 0) {
      return "所有语言"
    } else if (selectedLanguages.length === 1) {
      const lang = languages[selectedLanguages[0]]
      return `${lang.flag} ${lang.nativeName}`
    } else {
      return `已选择 ${selectedLanguages.length} 种语言`
    }
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="w-40 bg-[#1E1E2D] border-[#8A4FFF]/20 text-[#F0F0F5] hover:bg-[#8A4FFF]/10 h-12 justify-start"
        >
          <Globe className="w-4 h-4 mr-2" />
          <span className="truncate">{getDisplayText()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="w-80 bg-[#1E1E2D] border-[#8A4FFF]/20 max-h-96 overflow-y-auto"
      >
        {/* Quick Actions */}
        <div className="p-2 space-y-1">
          <div className="flex gap-1">
            <Button
              size="sm"
              variant="ghost"
              onClick={handleSelectCurrent}
              className="flex-1 text-xs text-[#8A4FFF] hover:bg-[#8A4FFF]/10"
            >
              <Star className="w-3 h-3 mr-1" />
              当前语言
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleSelectAll}
              className="flex-1 text-xs text-[#A0A0B5] hover:bg-[#8A4FFF]/10"
            >
              全选
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleClearAll}
              className="flex-1 text-xs text-[#A0A0B5] hover:bg-[#8A4FFF]/10"
            >
              清空
            </Button>
          </div>
        </div>
        
        <DropdownMenuSeparator className="bg-[#8A4FFF]/20" />

        {/* Language List */}
        {Object.entries(languages).map(([code, lang]) => {
          const isSelected = selectedLanguages.includes(code as LanguageCode)
          const isCurrent = code === currentLanguage
          const count = contentCounts[code as LanguageCode] || 0
          
          return (
            <DropdownMenuItem
              key={code}
              onClick={() => handleLanguageToggle(code as LanguageCode)}
              className="flex items-center justify-between cursor-pointer text-[#F0F0F5] hover:bg-[#8A4FFF]/10 focus:bg-[#8A4FFF]/10 px-4 py-3"
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg">{lang.flag}</span>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{lang.nativeName}</span>
                    {isCurrent && (
                      <Badge className="bg-[#8A4FFF]/20 text-[#8A4FFF] text-xs px-1 py-0">
                        当前
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs text-[#A0A0B5]">{lang.name}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                {count > 0 && (
                  <Badge variant="outline" className="border-[#00F5D4]/30 text-[#00F5D4] text-xs">
                    {count}
                  </Badge>
                )}
                {isSelected && <Check className="w-4 h-4 text-[#8A4FFF]" />}
              </div>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 