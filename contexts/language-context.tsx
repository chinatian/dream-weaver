"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type LanguageCode, defaultLanguage, translations, languages } from "@/lib/i18n"

interface LanguageContextType {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(defaultLanguage)

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem("language") as LanguageCode
    if (savedLanguage && savedLanguage in languages) {
      setLanguageState(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Update document direction and language
    const dir = languages[language].dir
    document.documentElement.dir = dir
    document.documentElement.lang = language

    // Add RTL class for Arabic
    if (dir === "rtl") {
      document.documentElement.classList.add("rtl")
    } else {
      document.documentElement.classList.remove("rtl")
    }
  }, [language])

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    // Fallback to English if translation not found
    if (value === undefined) {
      let fallback: any = translations[defaultLanguage]
      for (const k of keys) {
        fallback = fallback?.[k]
      }
      return fallback || key
    }

    return value || key
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        dir: languages[language].dir,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
