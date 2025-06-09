import { ReactNode, useState } from 'react'
import { LanguageContext, LocaleKey, getTranslation } from '@/lib/i18n'

interface LanguageProviderProps {
  children: ReactNode
  defaultLocale?: LocaleKey
}

export function LanguageProvider({
  children,
  defaultLocale = 'zh-CN'
}: LanguageProviderProps) {
  const [locale, setLocale] = useState<LocaleKey>(defaultLocale)

  const t = (key: string) => getTranslation(locale, key)

  return (
    <LanguageContext.Provider value={{ locale, t }}>
      {children}
    </LanguageContext.Provider>
  )
} 