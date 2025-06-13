import { useState } from 'react'

export const translations = {
  'zh-CN': {
    backToExplore: '返回探索',
    yourChoice: '你的选择',
    customActionPlaceholder: '输入自定义行动...',
    customActionCost: '自定义行动消耗 1 灵感点',
    currentScene: '当前场景',
    characterStatus: '角色状态',
    health: '生命值',
    energy: '精力值',
    inspirationPoints: '灵感点',
    inspirationDescription: '用于自定义行动和特殊选择',
    proFeatures: 'Pro 功能',
    unlimitedInspiration: '无限灵感点',
    saveGameProgress: '保存游戏进度',
    highQualityImages: '高质量图片',
    exclusiveContent: '独家内容',
    upgradeToPro: '升级到 Pro'
  },
  'en': {
    backToExplore: 'Back to Explore',
    yourChoice: 'Your Choice',
    customActionPlaceholder: 'Enter custom action...',
    customActionCost: 'Custom actions cost 1 inspiration point',
    currentScene: 'Current Scene',
    characterStatus: 'Character Status',
    health: 'Health',
    energy: 'Energy',
    inspirationPoints: 'Inspiration Points',
    inspirationDescription: 'Used for custom actions and special choices',
    proFeatures: 'Pro Features',
    unlimitedInspiration: 'Unlimited Inspiration',
    saveGameProgress: 'Save Game Progress',
    highQualityImages: 'High Quality Images',
    exclusiveContent: 'Exclusive Content',
    upgradeToPro: 'Upgrade to Pro'
  }
} as const

export type TranslationKey = keyof typeof translations['zh-CN']
export type Language = keyof typeof translations

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>('zh-CN')
  
  const t = (key: TranslationKey) => {
    return translations[language][key]
  }
  
  return { t, language, setLanguage }
} 