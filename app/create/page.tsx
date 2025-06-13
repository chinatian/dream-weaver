"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Crown, Zap, Wand2, ImageIcon, Save, Eye, Upload } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function CreatePage() {
  const [storyType, setStoryType] = useState("interactive")
  const [language, setLanguage] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [genre, setGenre] = useState("")
  const [isPublic, setIsPublic] = useState(true)

  

  const { t } = useLanguage()

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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#F0F0F5] mb-4">{t("creationCenter")}</h1>
            <p className="text-[#A0A0B5] text-lg">{t("creationCenterDescription")}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Creation Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Story Type Selection */}
              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardHeader>
                  <CardTitle className="text-[#F0F0F5] flex items-center">
                    <Wand2 className="w-5 h-5 mr-2 text-[#8A4FFF]" />
                    {t("selectCreationType")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={storyType} onValueChange={setStoryType}>
                    <TabsList className="grid w-full grid-cols-2 bg-[#12121B]">
                      <TabsTrigger
                        value="interactive"
                        className="data-[state=active]:bg-[#8A4FFF] data-[state=active]:text-white"
                      >
                        {t("interactiveStory")}
                      </TabsTrigger>
                      <TabsTrigger
                        value="narrative"
                        className="data-[state=active]:bg-[#8A4FFF] data-[state=active]:text-white"
                      >
                        {t("narrativeStory")}
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="interactive" className="mt-4">
                      <div className="p-4 bg-[#12121B] rounded-lg">
                        <h3 className="text-[#F0F0F5] font-semibold mb-2">{t("interactiveStory")}</h3>
                        <p className="text-[#A0A0B5] text-sm">{t("interactiveStoryDescription")}</p>
                      </div>
                    </TabsContent>
                    <TabsContent value="narrative" className="mt-4">
                      <div className="p-4 bg-[#12121B] rounded-lg">
                        <h3 className="text-[#F0F0F5] font-semibold mb-2">{t("narrativeStory")}</h3>
                        <p className="text-[#A0A0B5] text-sm">{t("narrativeStoryDescription")}</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Basic Information */}
              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardHeader>
                  <CardTitle className="text-[#F0F0F5]">{t("basicInformation")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="language" className="text-[#F0F0F5]">
                        {t("language")} *
                      </Label>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger className="bg-[#12121B] border-[#8A4FFF]/20 text-[#F0F0F5]">
                          <SelectValue placeholder={t("selectLanguage")} />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                          <SelectItem value="zh">{t("chinese")}</SelectItem>
                          <SelectItem value="en">{t("english")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="genre" className="text-[#F0F0F5]">
                        {t("genre")}
                      </Label>
                      <Select value={genre} onValueChange={setGenre}>
                        <SelectTrigger className="bg-[#12121B] border-[#8A4FFF]/20 text-[#F0F0F5]">
                          <SelectValue placeholder={t("selectGenre")} />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                          <SelectItem value="sci-fi">{t("sciFi")}</SelectItem>
                          <SelectItem value="fantasy">{t("fantasy")}</SelectItem>
                          <SelectItem value="mystery">{t("mystery")}</SelectItem>
                          <SelectItem value="romance">{t("romance")}</SelectItem>
                          <SelectItem value="adventure">{t("adventure")}</SelectItem>
                          <SelectItem value="horror">{t("horror")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-[#F0F0F5]">
                      {t("storyTitle")} *
                    </Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder={t("storyTitlePlaceholder")}
                      className="bg-[#12121B] border-[#8A4FFF]/20 text-[#F0F0F5] placeholder-[#A0A0B5] focus:border-[#8A4FFF]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-[#F0F0F5]">
                      {t("storyDescription")}
                    </Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder={t("storyDescriptionPlaceholder")}
                      rows={4}
                      className="bg-[#12121B] border-[#8A4FFF]/20 text-[#F0F0F5] placeholder-[#A0A0B5] focus:border-[#8A4FFF] resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="public" className="text-[#F0F0F5]">
                        {t("publicPublish")}
                      </Label>
                      <p className="text-[#A0A0B5] text-sm">{t("publicPublishDescription")}</p>
                    </div>
                    <Switch id="public" checked={isPublic} onCheckedChange={setIsPublic} />
                  </div>
                </CardContent>
              </Card>

              {/* Cover Image */}
              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardHeader>
                  <CardTitle className="text-[#F0F0F5] flex items-center">
                    <ImageIcon className="w-5 h-5 mr-2 text-[#8A4FFF]" />
                    {t("coverImage")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-[#8A4FFF]/30 rounded-lg p-8 text-center">
                    <div className="w-16 h-16 bg-[#8A4FFF]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Upload className="w-8 h-8 text-[#8A4FFF]" />
                    </div>
                    <h3 className="text-[#F0F0F5] font-semibold mb-2">{t("uploadCoverImage")}</h3>
                    <p className="text-[#A0A0B5] text-sm mb-4">{t("uploadCoverImageDescription")}</p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <Button variant="outline" className="border-[#8A4FFF] text-[#8A4FFF] hover:bg-[#8A4FFF]/10">
                        <Upload className="w-4 h-4 mr-2" />
                        {t("uploadImage")}
                      </Button>
                      <Button variant="outline" className="border-[#00F5D4] text-[#00F5D4] hover:bg-[#00F5D4]/10">
                        <Wand2 className="w-4 h-4 mr-2" />
                        {t("aiGenerateCover")}
                        <Badge className="ml-2 bg-[#8A4FFF] text-white text-xs">
                          <Crown className="w-3 h-3 mr-1" />
                          Pro
                        </Badge>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Story Content */}
              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardHeader>
                  <CardTitle className="text-[#F0F0F5]">{t("storyContent")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder={
                      storyType === "interactive"
                        ? t("interactiveStoryContentPlaceholder")
                        : t("narrativeStoryContentPlaceholder")
                    }
                    rows={12}
                    className="bg-[#12121B] border-[#8A4FFF]/20 text-[#F0F0F5] placeholder-[#A0A0B5] focus:border-[#8A4FFF] resize-none font-serif"
                  />
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#8A4FFF]/30 text-[#A0A0B5] hover:bg-[#8A4FFF]/10"
                      >
                        <Wand2 className="w-4 h-4 mr-2" />
                        {t("aiContinueWriting")}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#8A4FFF]/30 text-[#A0A0B5] hover:bg-[#8A4FFF]/10"
                      >
                        <ImageIcon className="w-4 h-4 mr-2" />
                        {t("insertImage")}
                        <Badge className="ml-2 bg-[#8A4FFF] text-white text-xs">
                          <Crown className="w-3 h-3 mr-1" />
                          Pro
                        </Badge>
                      </Button>
                    </div>
                    <span className="text-[#A0A0B5] text-sm">0 / 10000 {t("words")}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button className="flex-1 bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                  <Save className="w-4 h-4 mr-2" />
                  {t("saveDraft")}
                </Button>
                <Button variant="outline" className="border-[#00F5D4] text-[#00F5D4] hover:bg-[#00F5D4]/10">
                  <Eye className="w-4 h-4 mr-2" />
                  {t("preview")}
                </Button>
                <Button className="bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4] hover:opacity-90 text-white px-8">
                  {t("publishStory")}
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* AI Assistant */}
              <Card className="bg-gradient-to-br from-[#8A4FFF]/10 to-[#00F5D4]/10 border-[#8A4FFF]/30">
                <CardHeader>
                  <CardTitle className="text-[#F0F0F5] flex items-center">
                    <Wand2 className="w-5 h-5 mr-2 text-[#8A4FFF]" />
                    {t("aiCreationAssistant")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#A0A0B5] text-sm">{t("aiCreationAssistantDescription")}</p>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-[#8A4FFF]/30 text-[#A0A0B5] hover:bg-[#8A4FFF]/10"
                    >
                      💡 {t("generateStoryIdea")}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-[#8A4FFF]/30 text-[#A0A0B5] hover:bg-[#8A4FFF]/10"
                    >
                      👥 {t("createCharacterSetting")}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-[#8A4FFF]/30 text-[#A0A0B5] hover:bg-[#8A4FFF]/10"
                    >
                      🌍 {t("buildWorldView")}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-[#8A4FFF]/30 text-[#A0A0B5] hover:bg-[#8A4FFF]/10"
                    >
                      🎭 {t("generateDialogue")}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Pro Features */}
              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardHeader>
                  <CardTitle className="text-[#F0F0F5] flex items-center">
                    <Crown className="w-5 h-5 mr-2 text-[#8A4FFF]" />
                    {t("proCreationFeatures")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-[#A0A0B5]">
                      <div className="w-2 h-2 bg-[#8A4FFF] rounded-full mr-3"></div>
                      {t("highQualityAiImageGeneration")}
                    </div>
                    <div className="flex items-center text-[#A0A0B5]">
                      <div className="w-2 h-2 bg-[#8A4FFF] rounded-full mr-3"></div>
                      {t("unlimitedAiWritingTimes")}
                    </div>
                    <div className="flex items-center text-[#A0A0B5]">
                      <div className="w-2 h-2 bg-[#8A4FFF] rounded-full mr-3"></div>
                      {t("advancedEditingTools")}
                    </div>
                    <div className="flex items-center text-[#A0A0B5]">
                      <div className="w-2 h-2 bg-[#8A4FFF] rounded-full mr-3"></div>
                      {t("dataAnalysisPanel")}
                    </div>
                    <div className="flex items-center text-[#A0A0B5]">
                      <div className="w-2 h-2 bg-[#8A4FFF] rounded-full mr-3"></div>
                      {t("priorityRecommendationPosition")}
                    </div>
                  </div>

                  <Button className="w-full bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                    <Crown className="w-4 h-4 mr-2" />
                    {t("upgradeToPro")}
                  </Button>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card className="bg-[#1E1E2D] border-[#8A4FFF]/20">
                <CardHeader>
                  <CardTitle className="text-[#F0F0F5] text-lg">{t("creationTips")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-[#A0A0B5]">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#00F5D4] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p>{t("creationTip1")}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#00F5D4] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p>{t("creationTip2")}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#00F5D4] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p>{t("creationTip3")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
