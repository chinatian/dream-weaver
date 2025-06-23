"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Crown, Zap } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ScriptGenerator } from "@/app/components/create/script-generator"

export default function CreatePage() {
  const [apiKey, setApiKey] = useState("")
  const [model, setModel] = useState(process.env.NEXT_PUBLIC_MODEL || "openai/gpt-4-turbo-preview")
  const { t } = useLanguage()
  const router = useRouter()

  const handleYamlGenerated = (id: number) => {
    // Handle the generated YAML here
    router.push(`/play/${id}`)
  }

  return (
    <div className="min-h-screen bg-[#12121B]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1E1E2D]/80 backdrop-blur-md border-b border-[#8A4FFF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-[#A0A0B5] hover:text-[#8A4FFF] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t("backToHome")}</span>
              </Link>
              <div className="h-6 w-px bg-[#8A4FFF]/20"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8A4FFF] to-[#00F5D4] rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#F0F0F5] font-bold text-xl">{t("appName")}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <div className="flex items-center space-x-2 text-[#00F5D4]">
                <Zap className="w-4 h-4" />
                <span className="font-medium">50</span>
              </div>
              <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                <Crown className="w-4 h-4 mr-2" />
                {t("upgradePro")}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#F0F0F5] mb-4">{t("creationCenter")}</h1>
            <p className="text-[#A0A0B5] text-lg">{t("creationCenterDescription")}</p>
          </div>

          {/* Script Generator */}
          <ScriptGenerator
            apiKey={apiKey}
            model={model}
            onYamlGenerated={handleYamlGenerated}
          />
        </div>
      </div>
    </div>
  )
}
