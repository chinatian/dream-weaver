"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { languages, type LanguageCode } from "@/lib/i18n"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)

  const currentLanguage = languages[language]

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-[#A0A0B5] hover:text-[#8A4FFF] hover:bg-[#8A4FFF]/10">
          <Globe className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
          <span className="sm:hidden">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-[#1E1E2D] border-[#8A4FFF]/20 max-h-80 overflow-y-auto">
        {Object.entries(languages).map(([code, lang]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => {
              setLanguage(code as LanguageCode)
              setOpen(false)
            }}
            className="flex items-center justify-between cursor-pointer text-[#F0F0F5] hover:bg-[#8A4FFF]/10 focus:bg-[#8A4FFF]/10"
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{lang.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium">{lang.nativeName}</span>
                <span className="text-xs text-[#A0A0B5]">{lang.name}</span>
              </div>
            </div>
            {language === code && <Check className="w-4 h-4 text-[#8A4FFF]" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
