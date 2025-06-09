"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Zap, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function PricingPage() {
  const { t } = useLanguage()

  const features = {
    free: [
      t("pricing.free.feature1"),
      t("pricing.free.feature2"),
      t("pricing.free.feature3"),
      t("pricing.free.feature4"),
      t("pricing.free.feature5"),
    ],
    pro: [
      t("pricing.pro.feature1"),
      t("pricing.pro.feature2"),
      t("pricing.pro.feature3"),
      t("pricing.pro.feature4"),
      t("pricing.pro.feature5"),
      t("pricing.pro.feature6"),
      t("pricing.pro.feature7"),
      t("pricing.pro.feature8"),
      t("pricing.pro.feature9"),
      t("pricing.pro.feature10"),
    ],
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
                <span>{t("pricing.backToHome")}</span>
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
              <div className="flex items-center space-x-2 text-[#00F5D4]">
                <Zap className="w-4 h-4" />
                <span className="font-medium">50</span>
              </div>
              <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                <Crown className="w-4 h-4 mr-2" />
                {t("pricing.upgradePro")}
              </Button>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#F0F0F5] mb-6">
              {t("pricing.choosePlan")}
              <span className="bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4] bg-clip-text text-transparent">
                {" "}
                {t("pricing.creationPlan")}
              </span>
            </h1>
            <p className="text-xl text-[#A0A0B5] max-w-3xl mx-auto">{t("pricing.planDescription")}</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Free Plan */}
            <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20 relative">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#A0A0B5] to-[#F0F0F5] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-[#1E1E2D]" />
                </div>
                <CardTitle className="text-2xl text-[#F0F0F5] mb-2">{t("pricing.freePlan")}</CardTitle>
                <div className="text-4xl font-bold text-[#F0F0F5] mb-2">
                  ¥0
                  <span className="text-lg font-normal text-[#A0A0B5]">/{t("pricing.month")}</span>
                </div>
                <p className="text-[#A0A0B5]">{t("pricing.freePlanDescription")}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {features.free.map((feature, index) => (
                    <li key={index} className="flex items-center text-[#A0A0B5]">
                      <Check className="w-5 h-5 text-[#33D69F] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#A0A0B5] hover:bg-[#A0A0B5]/80 text-[#1E1E2D]">
                  {t("pricing.startFree")}
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gradient-to-br from-[#8A4FFF]/10 to-[#00F5D4]/10 border-[#8A4FFF] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4] text-white px-4 py-1">
                  {t("pricing.mostPopular")}
                </Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8A4FFF] to-[#00F5D4] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-[#F0F0F5] mb-2">{t("pricing.proPlan")}</CardTitle>
                <div className="text-4xl font-bold text-[#F0F0F5] mb-2">
                  ¥29
                  <span className="text-lg font-normal text-[#A0A0B5]">/{t("pricing.month")}</span>
                </div>
                <p className="text-[#A0A0B5]">{t("pricing.proPlanDescription")}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {features.pro.map((feature, index) => (
                    <li key={index} className="flex items-center text-[#A0A0B5]">
                      <Check className="w-5 h-5 text-[#33D69F] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4] hover:opacity-90 text-white">
                  <Crown className="w-4 h-4 mr-2" />
                  {t("pricing.upgradeToPro")}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#F0F0F5] text-center mb-12">{t("pricing.faq")}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardContent className="p-6">
                  <h3 className="text-[#F0F0F5] font-semibold mb-3">{t("pricing.faq1.question")}</h3>
                  <p className="text-[#A0A0B5]">{t("pricing.faq1.answer")}</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardContent className="p-6">
                  <h3 className="text-[#F0F0F5] font-semibold mb-3">{t("pricing.faq2.question")}</h3>
                  <p className="text-[#A0A0B5]">{t("pricing.faq2.answer")}</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardContent className="p-6">
                  <h3 className="text-[#F0F0F5] font-semibold mb-3">{t("pricing.faq3.question")}</h3>
                  <p className="text-[#A0A0B5]">{t("pricing.faq3.answer")}</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardContent className="p-6">
                  <h3 className="text-[#F0F0F5] font-semibold mb-3">{t("pricing.faq4.question")}</h3>
                  <p className="text-[#A0A0B5]">{t("pricing.faq4.answer")}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-16 bg-gradient-to-r from-[#8A4FFF]/10 to-[#00F5D4]/10 rounded-2xl">
            <h2 className="text-3xl font-bold text-[#F0F0F5] mb-6">{t("pricing.cta.title")}</h2>
            <p className="text-[#A0A0B5] text-lg mb-8 max-w-2xl mx-auto">{t("pricing.cta.description")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4] hover:opacity-90 text-white px-8 py-4"
              >
                <Crown className="w-5 h-5 mr-2" />
                {t("pricing.cta.startTrial")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#8A4FFF] text-[#8A4FFF] hover:bg-[#8A4FFF]/10 px-8 py-4"
              >
                {t("pricing.cta.tryFree")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
