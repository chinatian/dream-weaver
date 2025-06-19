"use client"

import { useState } from "react"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { languages, type LanguageCode } from "@/lib/i18n"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  language: z.string().min(1, {
    message: "请选择语言",
  }),
})

export function LanguageForm() {
  const { language: currentLanguage, setLanguage } = useLanguage()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      language: currentLanguage,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLanguage(values.language as LanguageCode)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>选择语言</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full bg-[#1E1E2D] border-[#8A4FFF]/20 text-[#F0F0F5] h-12">
                    <Globe className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="选择语言" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1E1E2D] border-[#8A4FFF]/20">
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
              </FormControl>
              <FormDescription>
                选择您想要使用的语言，系统将根据您的选择显示相应的内容。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          className="w-full bg-[#8A4FFF] hover:bg-[#8A4FFF]/90 text-white"
        >
          保存语言设置
        </Button>
      </form>
    </Form>
  )
} 