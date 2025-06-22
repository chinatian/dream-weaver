"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Wand2, Copy, FileText, Save } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { useLanguage } from "@/contexts/language-context"
import { generateSystemPrompt as defaultGenerateSystemPrompt } from "@/lib/defaultSystemPrompt"
import { languages, type LanguageCode, getLanguageInfo } from "@/lib/i18n"
import { parseYamlToJson } from "@/lib/parser"

interface ScriptGeneratorProps {
  apiKey: string
  model: string
  onYamlGenerated: (yaml: string) => void
}

export function ScriptGenerator({ apiKey, model, onYamlGenerated }: ScriptGeneratorProps) {
  const { t } = useLanguage()
  // 生成YAML的系统提示词
  const generateSystemPrompt = () => {
    return defaultGenerateSystemPrompt
  }

  const [storyInput, setStoryInput] = useState("")
  const [generatedYaml, setGeneratedYaml] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [storyTitle, setStoryTitle] = useState("")
  const [storyType, setStoryType] = useState("fantasy")
  const [viewpoint, setViewpoint] = useState("first")
  const [additionalInstructions, setAdditionalInstructions] = useState("")
  const [streamedOutput, setStreamedOutput] = useState("")
  const [systemPrompt, setSystemPrompt] = useState(generateSystemPrompt())
  const [language, setLanguage] = useState<LanguageCode>("zh-CN")

  // 生成用户提示词
  const generateUserPrompt = () => {
    let prompt = `Please generate YAML data in interactive novel format based on the following story content:\n\n${storyInput}\n\n`

    if (storyTitle) {
      prompt += `Story Title: ${storyTitle}\n`
    }

    prompt += `Story Type: ${getStoryTypeText()}\n`
    prompt += `Narrative Perspective: ${viewpoint === "first" ? "First Person" : "Third Person"}\n`

    if (additionalInstructions) {
      prompt += `\nAdditional Requirements: ${additionalInstructions}\n`
    }

    // Get language name from language code
    const languageName = getLanguageInfo(language).name
    prompt += `\nPlease output in ${languageName}\n`
   

    return prompt
  }

  const getStoryTypeText = () => {
    return t(`scriptGenerator.storyType.options.${storyType}`)
  }

  const handleGenerate = async () => {
    if (!storyInput.trim()) {
      toast({
        title: t("scriptGenerator.messages.enterStory"),
        description: t("scriptGenerator.messages.enterStory"),
        variant: "destructive",
      })
      return
    }

    // if (!apiKey) {
     
    //   toast({
    //     title: t("scriptGenerator.messages.missingApiKey"),
    //     description: t("scriptGenerator.messages.enterApiKey"),
    //     variant: "destructive",
    //   })
    //   return
    // }


    if (!language) {
      toast({
        title: t("scriptGenerator.messages.missingLanguage"),
        description: t("scriptGenerator.messages.selectLanguage"), 
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    setStreamedOutput("")

    try {
      const response = await fetch("/api/generate-yaml", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiKey,
          model,
          systemPrompt: systemPrompt,
          userPrompt: generateUserPrompt(),
        }),
      })

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
      }

      if (!response.body) {
        throw new Error("Response body is null")
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let accumulatedContent = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        accumulatedContent += chunk
        setStreamedOutput(accumulatedContent)
      }

      const yamlMatch = accumulatedContent.match(/```yaml\n([\s\S]*?)```/) ||
        accumulatedContent.match(/```\n([\s\S]*?)```/) || { 1: accumulatedContent }

      const yamlContent = yamlMatch[1]
      setGeneratedYaml(yamlContent)

      toast({
        title: t("scriptGenerator.messages.yamlGenerated"),
        description: t("scriptGenerator.messages.scriptSettingsGenerated"),
      })
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: t("scriptGenerator.messages.generateFailed"),
        description: error instanceof Error ? error.message : t("scriptGenerator.messages.generateFailed"),
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedYaml)
    toast({
      title: t("scriptGenerator.messages.copied"),
      description: t("scriptGenerator.messages.copiedToClipboard"),
    })
  }

  const handleApply = async () => {
    if (generatedYaml) {
      try {
        const json = parseYamlToJson(generatedYaml)
        console.log(json) 
        const response = await fetch('/api/stories', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: json.interactiveNovel.storySettings.title,
            introduction: json.interactiveNovel.storySettings.introduction,
            coverImage: json.interactiveNovel.storySettings.coverImage,
            userId: "1",
            prompt: generatedYaml,
            language: language,
          })
        })

        if (!response.ok) {
          throw new Error('Failed to create story')
        }

        const story = await response.json()
        toast({
          title: t("scriptGenerator.messages.success"),
          description: t("scriptGenerator.messages.storyCreated"),
        })
        
        onYamlGenerated(generatedYaml)
      } catch (error) {
        console.error('Error creating story:', error)
        toast({
          title: t("scriptGenerator.messages.error"),
          description: error instanceof Error ? error.message : 'Failed to create story',
          variant: "destructive",
        })
      }
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {t("scriptGenerator.input.title")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 space-y-4">
          <div className="space-y-2 hidden" >
            <label className="text-sm font-medium">{t("scriptGenerator.systemPrompt.label")}</label>
            <Textarea
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              placeholder={t("scriptGenerator.systemPrompt.placeholder")}
              className="min-h-[200px] font-mono text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">{t("scriptGenerator.storyTitle.label")}</label>
            <Input 
              value={storyTitle} 
              onChange={(e) => setStoryTitle(e.target.value)} 
              placeholder={t("scriptGenerator.storyTitle.placeholder")} 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t("scriptGenerator.storyType.label")}</label>
              <Select value={storyType} onValueChange={setStoryType}>
                <SelectTrigger>
                  <SelectValue placeholder={t("scriptGenerator.storyType.label")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fantasy">{t("scriptGenerator.storyType.options.fantasy")}</SelectItem>
                  <SelectItem value="scifi">{t("scriptGenerator.storyType.options.scifi")}</SelectItem>
                  <SelectItem value="horror">{t("scriptGenerator.storyType.options.horror")}</SelectItem>
                  <SelectItem value="romance">{t("scriptGenerator.storyType.options.romance")}</SelectItem>
                  <SelectItem value="mystery">{t("scriptGenerator.storyType.options.mystery")}</SelectItem>
                  <SelectItem value="historical">{t("scriptGenerator.storyType.options.historical")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{t("scriptGenerator.viewpoint.label")}</label>
              <Select value={viewpoint} onValueChange={setViewpoint}>
                <SelectTrigger>
                  <SelectValue placeholder={t("scriptGenerator.viewpoint.label")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="first">{t("scriptGenerator.viewpoint.options.first")}</SelectItem>
                  <SelectItem value="third">{t("scriptGenerator.viewpoint.options.third")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">{t("scriptGenerator.language.label")}</label>
            <Select value={language} onValueChange={(value) => setLanguage(value as LanguageCode)}>
              <SelectTrigger>
                <SelectValue placeholder={t("scriptGenerator.language.placeholder")} />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(languages).map(([code, lang]) => (
                  <SelectItem key={code} value={code}>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{lang.flag}</span>
                      <div className="flex flex-col">
                        <span className="font-medium">{lang.nativeName}</span>
                        <span className="text-xs text-[#A0A0B5]">{lang.name}</span>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">{t("scriptGenerator.storyContent.label")}</label>
            <Textarea
              value={storyInput}
              onChange={(e) => setStoryInput(e.target.value)}
              placeholder={t("scriptGenerator.storyContent.placeholder")}
              className="min-h-[200px]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">{t("scriptGenerator.additionalInstructions.label")}</label>
            <Textarea
              value={additionalInstructions}
              onChange={(e) => setAdditionalInstructions(e.target.value)}
              placeholder={t("scriptGenerator.additionalInstructions.placeholder")}
              className="min-h-[80px]"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleGenerate} disabled={isGenerating || !storyInput.trim()} className="w-full">
            {isGenerating ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                {t("scriptGenerator.buttons.generating")}
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                {t("scriptGenerator.buttons.generate")}
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {t("scriptGenerator.input.result")}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <ScrollArea className="h-[500px] w-full rounded-md border p-4">
            <pre className="text-sm font-mono whitespace-pre-wrap">
              {isGenerating ? streamedOutput : generatedYaml}
            </pre>
          </ScrollArea>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleCopy} disabled={!generatedYaml}>
            <Copy className="mr-2 h-4 w-4" />
            {t("scriptGenerator.buttons.copy")}
          </Button>
          <Button onClick={handleApply} disabled={!generatedYaml}>
            <Save className="mr-2 h-4 w-4" />
            {t("scriptGenerator.buttons.apply")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
