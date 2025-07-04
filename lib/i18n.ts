export const languages = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
    dir: "ltr",
  },
  "zh-CN": {
    code: "zh-CN",
    name: "Simplified Chinese",
    nativeName: "简体中文",
    flag: "🇨🇳",
    dir: "ltr",
  },
  "zh-TW": {
    code: "zh-TW",
    name: "Traditional Chinese",
    nativeName: "繁體中文",
    flag: "🇹🇼",
    dir: "ltr",
  },
  fr: {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    dir: "ltr",
  },
  de: {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    dir: "ltr",
  },
  ar: {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇸🇦",
    dir: "rtl",
  },
  vi: {
    code: "vi",
    name: "Vietnamese",
    nativeName: "Tiếng Việt",
    flag: "🇻🇳",
    dir: "ltr",
  },
  th: {
    code: "th",
    name: "Thai",
    nativeName: "ไทย",
    flag: "🇹🇭",
    dir: "ltr",
  },
  id: {
    code: "id",
    name: "Indonesian",
    nativeName: "Bahasa Indonesia",
    flag: "🇮🇩",
    dir: "ltr",
  },
} as const


export type LanguageCode = keyof typeof languages
export const defaultLanguage: LanguageCode = "en"

export function getLanguageInfo(code: LanguageCode) {
  const language = languages[code]
  if (!language) {
    return languages[defaultLanguage]
  }
  return language
}


export const translations = {
  en: {
    app: {
      name: "StoryDNA",
    },
    footer: {
      description: "AI-powered interactive storytelling platform where imagination meets technology",
      explore: "Explore",
      stories: "Stories",
      community: "Community",
      trending: "Trending",
      create: "Create",
      create_story: "Create Story",
      tools: "Tools",
      guide: "Guide",
      support: "Support",
      help: "Help Center",
      contact: "Contact Us",
      pricing: "Pricing",
      copyright: "All rights reserved",
    },
    // Navigation
    nav: {
      home: "Home",
      explore: "Explore",
      create: "Create",
      dashboard: "Dashboard",
      community: "Community",
      pricing: "Pricing",
      backToHome: "Back to Home",
      backToExplore: "Back to Explore",
      settings: "Settings",
      upgradePro: "Upgrade Pro",
    },
    // Common
    common: {
      loading: "Loading...",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      share: "Share",
      bookmark: "Bookmark",
      like: "Like",
      play: "Play",
      read: "Read",
      continue: "Continue",
      startAdventure: "Start Adventure",
      browseStories: "Browse Stories",
      createStory: "Create Story",
      inspiration: "Inspiration",
      language: "Language",
      type: "Type",
      author: "Author",
      likes: "Likes",
      views: "Views",
      plays: "Plays",
    },
    // Home page
    home: {
      title: "Weave Your Own",
      titleHighlight: "Dream Realm",
      subtitle:
        "AI-powered interactive story platform where every choice creates unique adventures. Here, you are the reader, the protagonist, and the creator of stories.",
      featuredTitle: "Featured Stories",
      featuredSubtitle: "Experience the most popular interactive stories and amazing works",
      stats: {
        stories: "Amazing Stories",
        players: "Active Players",
        adventures: "Adventures",
      },
      cta: {
        title: "Ready to create your own story?",
        subtitle: "Join tens of thousands of creators and weave infinite possibilities with the power of AI",
        create: "Start Creating",
        learnPro: "Learn About Pro",
      },
    },
    // Explore page
    explore: {
      title: "Explore Plaza",
      subtitle: "Discover worlds of infinite story possibilities",
      filters: {
        all: "All",
        language: "Language",
        type: "Type",
        allContent: "All Content",
        interactive: "Interactive Stories",
        narrative: "Amazing Stories",
      },
      search: "Search for stories, authors, or tags...",
      loadMore: "Load More Stories",
      startGame: "Start Game",
      readStory: "Read Story",
    },
    // Create page
    create: {
      title: "Creation Center",
      subtitle: "Weave your exclusive story with the power of AI",
      storyType: {
        title: "Choose Creation Type",
        interactive: "Interactive Story",
        narrative: "Amazing Story",
        interactiveDesc:
          "Create interactive stories that allow readers to participate in decision-making. Each choice affects the story development, creating unique reading experiences.",
        narrativeDesc:
          "Create traditional narrative stories. Focus on plot, character, and world-building to provide immersive reading experiences.",
      },
      basicInfo: {
        title: "Basic Information",
        language: "Language",
        languageRequired: "Language *",
        selectLanguage: "Select Language",
        genre: "Genre",
        selectGenre: "Select Genre",
        titleRequired: "Story Title *",
        titlePlaceholder: "Give your story an attractive title...",
        description: "Story Description",
        descriptionPlaceholder: "Briefly describe your story content to attract readers...",
        publicPost: "Public Post",
        publicDesc: "Other users can discover and read your story",
      },
      cover: {
        title: "Cover Image",
        upload: "Upload Cover Image",
        uploadDesc: "Supports JPG, PNG formats, recommended size 800x600 pixels",
        uploadButton: "Upload Image",
        aiGenerate: "AI Generate Cover",
      },
      content: {
        title: "Story Content",
        interactivePlaceholder:
          "Start writing your interactive story. You can use AI assistant to help generate content and choice branches...",
        narrativePlaceholder: "Start writing your story. Let your imagination fly and create a captivating world...",
        aiContinue: "AI Continue",
        insertImage: "Insert Image",
      },
      actions: {
        saveDraft: "Save Draft",
        preview: "Preview",
        publish: "Publish Story",
      },
      assistant: {
        title: "AI Creation Assistant",
        description:
          "Let AI help you improve story plots, generate character dialogues, create scene descriptions, etc.",
        generateIdeas: "💡 Generate Story Ideas",
        createCharacters: "👥 Create Character Settings",
        buildWorld: "🌍 Build World View",
        generateDialogue: "🎭 Generate Dialogue",
      },
      proFeatures: {
        title: "Pro Creation Features",
        features: [
          "High-quality AI image generation",
          "Unlimited AI continuation",
          "Advanced editing tools",
          "Data analytics dashboard",
          "Priority recommendation position",
        ],
      },
      tips: {
        title: "Creation Tips",
        tip1: "An attractive opening is half the battle. Try using suspense or conflict to grab readers' attention.",
        tip2: "Design meaningful choices for interactive stories, making each decision affect story development.",
        tip3: "Use vivid descriptions and dialogue to shape characters, allowing readers to emotionally connect.",
      },
    },
    // Dashboard
    dashboard: {
      title: "My Dashboard",
      subtitle: "Manage your creations and adventure journeys",
      createNew: "Create New Story",
      stats: {
        totalPlays: "Total Plays",
        totalReads: "Total Reads",
        totalLikes: "Total Likes",
        totalFollowers: "Followers",
      },
      tabs: {
        adventures: "Ongoing Adventures",
        stories: "My Works",
        favorites: "Favorites",
        analytics: "Analytics",
      },
      adventures: {
        title: "Ongoing Adventures",
        discoverNew: "Discover New Adventures",
        noAdventures: "No ongoing adventures yet",
        noAdventuresDesc: "Explore exciting interactive stories and start your first adventure!",
        progress: "Progress",
        lastPlayed: "Last played",
        currentScene: "Current scene",
        continueAdventure: "Continue Adventure",
      },
      stories: {
        title: "My Works",
        published: "Published",
        draft: "Draft",
        interactive: "Interactive",
        story: "Story",
      },
      favorites: {
        title: "My Favorites",
      },
      analytics: {
        title: "Analytics",
        upgradeTitle: "Upgrade to Pro to unlock analytics",
        upgradeDesc:
          "Get detailed work analytics including reading trends, user interaction data, revenue statistics and other professional features.",
      },
    },
    // Community
    community: {
      title: "Community",
      subtitle: "Discover amazing creators and stories",
      topCreators: "Top Creators",
      topStories: "Top Stories",
      languageStats: "Language Statistics",
      badges: {
        legendary: "Legendary Creator",
        master: "Master Creator",
        professional: "Professional Creator",
        senior: "Senior Creator",
        rising: "Rising Star Creator",
      },
    },
    // Pricing
    pricing: {
      title: "Choose Your",
      titleHighlight: "Creation Plan",
      subtitle:
        "Whether you're a story lover or creative master, we have the perfect plan for you to enjoy the AI-powered story world",
      free: {
        title: "Free",
        subtitle: "Experience the charm of AI stories",
        features: [
          "10 interactive story games daily",
          "Unlimited reading of amazing stories",
          "Basic AI image generation",
          "Community feature access",
          "Create 3 story works",
        ],
        button: "Start Free Experience",
      },
      pro: {
        title: "Pro Member",
        subtitle: "Unlock full creative potential",
        popular: "Most Popular",
        features: [
          "Unlimited interactive story games",
          "Unlimited reading of all content",
          "High-quality AI image generation",
          "Unlimited inspiration points",
          "Save game progress",
          "Create unlimited story works",
          "Exclusive Pro story content",
          "Priority customer support",
          "Advanced creation tools",
          "Data analytics dashboard",
        ],
        button: "Upgrade to Pro",
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "What are inspiration points?",
        a1: "Inspiration points are special currency in the game, used to unlock advanced options, custom actions and richer story experiences. Free users get limited points daily, Pro members enjoy unlimited points.",
        q2: "Can I cancel subscription anytime?",
        a2: "Of course! You can cancel Pro subscription anytime in account settings. After cancellation, you can still use Pro features until the current billing cycle ends.",
        q3: "What payment methods are supported?",
        a3: "We support Alipay, WeChat Pay, UnionPay and other payment methods. All payments are processed through secure encrypted channels to ensure fund safety.",
        q4: "Is there a trial period for Pro membership?",
        a4: "New users can enjoy a 7-day free trial of all Pro features. You can cancel anytime during trial without any charges.",
      },
      cta: {
        title: "Ready to start your creative journey?",
        subtitle:
          "Join tens of thousands of creators and weave your story world with AI power. Whatever plan you choose, you'll enjoy unprecedented creative experiences.",
        startTrial: "Start 7-Day Free Trial",
        tryFree: "Try Free Version First",
      },
    },
    // Play page
    play: {
      yourChoice: "Your Choice:",
      customAction: "Or enter your own action...",
      customActionCost: "💡 Custom actions require 1 inspiration point",
      currentScene: "Current Scene",
      characterStatus: "Character Status",
      health: "Health",
      energy: "Energy",
      inspirationPoints: "Inspiration Points",
      inspirationDesc: "Used to unlock special options and custom actions",
      proFeatures: {
        title: "Pro Features",
        features: [
          "Unlimited inspiration points",
          "Save game progress",
          "High-quality AI images",
          "Exclusive story content",
        ],
      },
    },
    hero: {
      title_part1: "Embark on Your",
      title_part2: "Story Adventure",
      description: "Experience AI-powered interactive storytelling where your choices shape unique narratives. Be the reader, the protagonist, and the creator of your own tales.",
    },
    cta: {
      title: "Ready to Start Your Creative Journey?",
      description: "Join thousands of storytellers and unleash your imagination with AI-powered storytelling",
    },
    button: {
      start_creating: "Start Creating",
      learn_pro: "Learn About Pro",
      start_adventure: "Start Adventure",
      browse_stories: "Browse Stories",
      explore_more: "Explore More",
      upgrade: "Upgrade to Pro",
    },
    featured: {
      title: "Featured Stories",
      description: "Discover handpicked stories that showcase the best of our creative community",
    },
    scriptGenerator: {
      title: "Script Generator",
      systemPrompt: {
        label: "System Prompt",
        placeholder: "Edit system prompt..."
      },
      storyTitle: {
        label: "Story Title (Optional)",
        placeholder: "Enter story title"
      },
      language: {
        label: "Language",
        placeholder: "Select story language"
      },
      storyType: {
        label: "Story Type",
        options: {
          fantasy: "Fantasy Adventure",
          scifi: "Sci-fi Future",
          horror: "Horror Thriller",
          romance: "Romance",
          mystery: "Mystery",
          historical: "Historical"
        }
      },
      viewpoint: {
        label: "Narrative Viewpoint",
        options: {
          first: "First Person",
          third: "Third Person"
        }
      },
      storyContent: {
        label: "Story Content",
        placeholder: "Enter short story or story outline..."
      },
      additionalInstructions: {
        label: "Additional Requirements (Optional)",
        placeholder: "Enter additional requirements or guidance..."
      },
      buttons: {
        generate: "Generate YAML",
        generating: "Generating...",
        copy: "Copy",
        apply: "Apply to System Prompt"
      },
      messages: {
        enterStory: "Please enter story content",
        missingApiKey: "Missing API key",
        enterApiKey: "Please enter OpenRouter API key in settings",
        yamlGenerated: "YAML Generated",
        scriptSettingsGenerated: "Script settings generated successfully",
        generateFailed: "Generation Failed",
        copied: "Copied",
        copiedToClipboard: "YAML content copied to clipboard"
      },
      input: {
        title: "Story Input",
        result: "Generated Result"
      }
    }
  },
  "zh-CN": {
    app: {
      name: "StoryDNA",
    },
    footer: {
      description: "AI驱动的互动故事平台，让想象力与科技相遇",
      explore: "探索",
      stories: "故事",
      community: "社区",
      trending: "热门",
      create: "创作",
      create_story: "创作故事",
      tools: "工具",
      guide: "指南",
      support: "支持",
      help: "帮助中心",
      contact: "联系我们",
      pricing: "定价",
      copyright: "版权所有",
    },
    // Navigation
    nav: {
      home: "首页",
      explore: "探索广场",
      create: "创作中心",
      dashboard: "我的主页",
      community: "社区",
      pricing: "定价",
      backToHome: "返回首页",
      backToExplore: "返回探索",
      settings: "设置",
      upgradePro: "升级Pro",
    },
    // Common
    common: {
      loading: "加载中...",
      save: "保存",
      cancel: "取消",
      delete: "删除",
      edit: "编辑",
      share: "分享",
      bookmark: "收藏",
      like: "点赞",
      play: "游戏",
      read: "阅读",
      continue: "继续",
      startAdventure: "开始冒险",
      browseStories: "浏览故事",
      createStory: "创建故事",
      inspiration: "灵感",
      language: "语言",
      type: "类型",
      author: "作者",
      likes: "点赞",
      views: "阅读",
      plays: "游戏",
    },
    // Home page
    home: {
      title: "编织你的",
      titleHighlight: "专属幻境",
      subtitle: "AI驱动的互动故事平台，让每一次选择都创造独特的冒险。在这里，你既是读者，也是主角，更是故事的创造者。",
      featuredTitle: "官方精选",
      featuredSubtitle: "体验最受欢迎的互动故事和精彩作品",
      stats: {
        stories: "精彩故事",
        players: "活跃玩家",
        adventures: "冒险次数",
      },
      cta: {
        title: "准备好创造属于你的故事了吗？",
        subtitle: "加入数万名创作者，用AI的力量编织无限可能的幻境",
        create: "开始创作",
        learnPro: "了解Pro会员",
      },
    },
    // Explore page
    explore: {
      title: "探索广场",
      subtitle: "发现无限可能的故事世界",
      search: "搜索故事、作者或标签...",
      filters: {
        all: "全部",
        language: "语言",
        type: "类型",
        allContent: "全部内容",
        interactive: "互动故事",
        narrative: "精彩故事",
      },
      loadMore: "加载更多故事",
      startGame: "开始游戏",
      readStory: "阅读故事",
      searchPlaceholder: "搜索故事、作者或标签...",
      language: "语言",
      type: "类型",
      allContent: "全部内容",
      interactiveStories: "互动故事",
      amazingStories: "精彩故事",
    },
    // Create page
    create: {
      title: "创作中心",
      subtitle: "用AI的力量编织你的专属故事",
      storyType: {
        title: "选择创作类型",
        interactive: "互动故事",
        narrative: "精彩故事",
        interactiveDesc:
          "创建可以让读者参与决策的互动式故事。读者的每个选择都会影响故事的发展方向，创造独特的阅读体验。",
        narrativeDesc: "创建传统的叙述性故事。专注于情节、人物和世界观的构建，为读者提供沉浸式的阅读体验。",
      },
      basicInfo: {
        title: "基本信息",
        language: "语言",
        languageRequired: "语言 *",
        selectLanguage: "选择语言",
        genre: "类型",
        selectGenre: "选择类型",
        titleRequired: "故事标题 *",
        titlePlaceholder: "为你的故事起一个吸引人的标题...",
        description: "故事简介",
        descriptionPlaceholder: "简要描述你的故事内容，吸引读者的注意...",
        publicPost: "公开发布",
        publicDesc: "其他用户可以发现并阅读你的故事",
      },
      cover: {
        title: "封面图片",
        upload: "上传封面图片",
        uploadDesc: "支持 JPG、PNG 格式，建议尺寸 800x600 像素",
        uploadButton: "上传图片",
        aiGenerate: "AI生成封面",
      },
      content: {
        title: "故事内容",
        interactivePlaceholder: "开始编写你的互动故事。你可以使用 AI 助手来帮助生成内容和选项分支...",
        narrativePlaceholder: "开始编写你的故事。让想象力自由飞翔，创造一个引人入胜的世界...",
        aiContinue: "AI 续写",
        insertImage: "插入图片",
      },
      actions: {
        saveDraft: "保存草稿",
        preview: "预览",
        publish: "发布故事",
      },
      assistant: {
        title: "AI 创作助手",
        description: "让AI帮助你完善故事情节、生成角色对话、创建场景描述等。",
        generateIdeas: "💡 生成故事创意",
        createCharacters: "👥 创建角色设定",
        buildWorld: "🌍 构建世界观",
        generateDialogue: "🎭 生成对话",
      },
      proFeatures: {
        title: "Pro 创作功能",
        features: ["高质量AI图像生成", "无限AI续写次数", "高级编辑工具", "数据分析面板", "优先推荐位置"],
      },
      tips: {
        title: "创作小贴士",
        tip1: "一个吸引人的开头是成功的一半，尝试用悬念或冲突来抓住读者的注意力。",
        tip2: "为互动故事设计有意义的选择，让每个决定都能影响故事的发展。",
        tip3: "使用生动的描述和对话来塑造角色，让读者能够产生情感共鸣。",
      },
    },
    // Dashboard
    dashboard: {
      title: "我的主页",
      subtitle: "管理你的创作和冒险历程",
      createNew: "创建新故事",
      stats: {
        totalPlays: "游戏次数",
        totalReads: "阅读次数",
        totalLikes: "获得点赞",
        totalFollowers: "关注者",
      },
      tabs: {
        adventures: "进行中的冒险",
        stories: "我的作品",
        favorites: "收藏夹",
        analytics: "数据分析",
      },
      adventures: {
        title: "进行中的冒险",
        discoverNew: "发现新冒险",
        noAdventures: "还没有进行中的冒险",
        noAdventuresDesc: "探索精彩的互动故事，开始你的第一次冒险吧！",
        progress: "进度",
        lastPlayed: "最后游戏",
        currentScene: "当前场景",
        continueAdventure: "继续冒险",
      },
      stories: {
        title: "我的作品",
        published: "已发布",
        draft: "草稿",
        interactive: "互动",
        story: "故事",
      },
      favorites: {
        title: "我的收藏",
      },
      analytics: {
        title: "数据分析",
        upgradeTitle: "升级到 Pro 解锁数据分析",
        upgradeDesc: "获取详细的作品数据分析，包括阅读量趋势、用户互动数据、收入统计等专业功能。",
      },
    },
    // Community
    community: {
      title: "社区",
      subtitle: "发现优秀的创作者和故事",
      topCreators: "顶级创作者",
      topStories: "热门故事",
      languageStats: "语言统计",
      badges: {
        legendary: "传奇创作者",
        master: "大师级创作者",
        professional: "专业创作者",
        senior: "资深创作者",
        rising: "新星创作者",
      },
    },
    // Pricing
    pricing: {
      title: "选择适合你的",
      titleHighlight: "创作计划",
      subtitle: "无论你是故事爱好者还是创作达人，我们都有完美的方案让你尽情享受AI驱动的故事世界",
      free: {
        title: "免费版",
        subtitle: "体验AI故事的魅力",
        features: ["每日 10 次互动故事游戏", "无限阅读精彩故事", "基础AI图像生成", "社区功能访问", "创作 3 个故事作品"],
        button: "开始免费体验",
      },
      pro: {
        title: "Pro 会员",
        subtitle: "解锁全部创作潜能",
        popular: "最受欢迎",
        features: [
          "无限互动故事游戏",
          "无限阅读所有内容",
          "高质量AI图像生成",
          "无限灵感点数",
          "保存游戏进度",
          "创作无限故事作品",
          "专属Pro故事内容",
          "优先客服支持",
          "高级创作工具",
          "数据分析面板",
        ],
        button: "升级到 Pro",
      },
      faq: {
        title: "常见问题",
        q1: "什么是灵感点数？",
        a1: "灵感点数是游戏中的特殊货币，用于解锁高级选项、自定义行动和获得更丰富的故事体验。免费用户每日可获得有限点数，Pro会员享有无限点数。",
        q2: "可以随时取消订阅吗？",
        a2: "当然可以！你可以随时在账户设置中取消Pro订阅。取消后，你仍可以使用Pro功能直到当前计费周期结束。",
        q3: "支持哪些支付方式？",
        a3: "我们支持支付宝、微信支付、银联卡等多种支付方式。所有支付都通过安全加密通道处理，保障你的资金安全。",
        q4: "Pro会员有试用期吗？",
        a4: "新用户可以享受7天免费试用Pro会员的所有功能。试用期内随时可以取消，不会产生任何费用。",
      },
      cta: {
        title: "准备好开启你的创作之旅了吗？",
        subtitle: "加入数万名创作者，用AI的力量编织属于你的故事世界。无论选择哪个计划，都能享受到前所未有的创作体验。",
        startTrial: "开始7天免费试用",
        tryFree: "先试试免费版",
      },
    },
    // Play page
    play: {
      yourChoice: "你的选择：",
      customAction: "或输入你自己的行动...",
      customActionCost: "💡 自定义行动需要消耗 1 点灵感值",
      currentScene: "当前场景",
      characterStatus: "角色状态",
      health: "生命值",
      energy: "精力值",
      inspirationPoints: "灵感点数",
      inspirationDesc: "用于解锁特殊选项和自定义行动",
      proFeatures: {
        title: "Pro 功能",
        features: ["无限灵感点数", "保存游戏进度", "高质量AI图像", "专属故事内容"],
      },
    },
    hero: {
      title_part1: "开启你的",
      title_part2: "故事冒险",
      description: "体验AI驱动的互动故事，你的每个选择都将塑造独特的叙事。成为读者、主角和创作者。",
    },
    cta: {
      title: "准备开启你的创作之旅？",
      description: "加入数千位故事创作者，用AI助力释放你的想象力",
    },
    button: {
      start_creating: "开始创作",
      learn_pro: "了解Pro版",
      start_adventure: "开始冒险",
      browse_stories: "浏览故事",
      explore_more: "探索更多",
      upgrade: "升级到Pro",
    },
    featured: {
      title: "精选故事",
      description: "发现精心挑选的故事，展示我们创作社区的精彩作品",
    },
    scriptGenerator: {
      title: "剧本生成器",
      systemPrompt: {
        label: "系统提示词",
        placeholder: "编辑系统提示词..."
      },
      storyTitle: {
        label: "故事标题（可选）",
        placeholder: "输入故事标题"
      },
      language: {
        label: "语言",
        placeholder: "选择故事语言"
      },
      storyType: {
        label: "故事类型",
        options: {
          fantasy: "奇幻冒险",
          scifi: "科幻未来",
          horror: "恐怖惊悚",
          romance: "浪漫爱情",
          mystery: "悬疑推理",
          historical: "历史古代"
        }
      },
      viewpoint: {
        label: "叙述视角",
        options: {
          first: "第一人称",
          third: "第三人称"
        }
      },
      storyContent: {
        label: "故事内容",
        placeholder: "输入短篇小说或故事概要..."
      },
      additionalInstructions: {
        label: "额外要求（可选）",
        placeholder: "输入额外的要求或指导..."
      },
      buttons: {
        generate: "生成YAML",
        generating: "生成中...",
        copy: "复制",
        apply: "应用到系统提示词"
      },
      messages: {
        enterStory: "请输入故事内容",
        missingApiKey: "缺少API密钥",
        enterApiKey: "请在设置中输入OpenRouter API密钥",
        yamlGenerated: "YAML生成成功",
        scriptSettingsGenerated: "已成功生成剧本设定",
        generateFailed: "生成失败",
        copied: "已复制",
        copiedToClipboard: "YAML内容已复制到剪贴板"
      },
      input: {
        title: "故事输入",
        result: "生成结果"
      }
    }
  },
  "zh-TW": {
    app: {
      name: "StoryDNA",
    },
    footer: {
      description: "AI驅動的互動故事平台，讓想像力與科技相遇",
      explore: "探索",
      stories: "故事",
      community: "社群",
      trending: "熱門",
      create: "創作",
      create_story: "創作故事",
      tools: "工具",
      guide: "指南",
      support: "支援",
      help: "幫助中心",
      contact: "聯絡我們",
      pricing: "定價",
      copyright: "版權所有",
    },
    // Navigation
    nav: {
      home: "首頁",
      explore: "探索廣場",
      create: "創作中心",
      dashboard: "我的主頁",
      community: "社群",
      pricing: "定價",
      backToHome: "返回首頁",
      backToExplore: "返回探索",
      settings: "設定",
      upgradePro: "升級Pro",
    },
    // Common
    common: {
      loading: "載入中...",
      save: "儲存",
      cancel: "取消",
      delete: "刪除",
      edit: "編輯",
      share: "分享",
      bookmark: "收藏",
      like: "按讚",
      play: "遊戲",
      read: "閱讀",
      continue: "繼續",
      startAdventure: "開始冒險",
      browseStories: "瀏覽故事",
      createStory: "創建故事",
      inspiration: "靈感",
      language: "語言",
      type: "類型",
      author: "作者",
      likes: "按讚",
      views: "閱讀",
      plays: "遊戲",
    },
    // Home page
    home: {
      title: "編織你的",
      titleHighlight: "專屬幻境",
      subtitle: "AI驅動的互動故事平台，讓每一次選擇都創造獨特的冒險。在這裡，你既是讀者，也是主角，更是故事的創造者。",
      featuredTitle: "官方精選",
      featuredSubtitle: "體驗最受歡迎的互動故事和精彩作品",
      stats: {
        stories: "精彩故事",
        players: "活躍玩家",
        adventures: "冒險次數",
      },
      cta: {
        title: "準備好創造屬於你的故事了嗎？",
        subtitle: "加入數萬名創作者，用AI的力量編織無限可能的幻境",
        create: "開始創作",
        learnPro: "了解Pro會員",
      },
    },
    // Explore page
    explore: {
      title: "探索廣場",
      subtitle: "發現無限可能的故事世界",
      search: "搜尋故事、作者或標籤...",
      filters: {
        all: "全部",
        language: "語言",
        type: "類型",
        allContent: "全部內容",
        interactive: "互動故事",
        narrative: "精彩故事",
      },
      loadMore: "載入更多故事",
      startGame: "開始遊戲",
      readStory: "閱讀故事",
      searchPlaceholder: "搜尋故事、作者或標籤...",
      language: "語言",
      type: "類型",
      allContent: "全部內容",
      interactiveStories: "互動故事",
      amazingStories: "精彩故事",
    },
    // Create page
    create: {
      title: "創作中心",
      subtitle: "用AI的力量編織你的專屬故事",
      storyType: {
        title: "選擇創作類型",
        interactive: "互動故事",
        narrative: "精彩故事",
        interactiveDesc:
          "創建可以讓讀者參與決策的互動式故事。讀者的每個選擇都會影響故事的發展方向，創造獨特的閱讀體驗。",
        narrativeDesc: "創建傳統的叙述性故事。專注於情節、人物和世界觀的構建，為讀者提供沉浸式的閱讀體驗。",
      },
      basicInfo: {
        title: "基本信息",
        language: "語言",
        languageRequired: "語言 *",
        selectLanguage: "選擇語言",
        genre: "類型",
        selectGenre: "選擇類型",
        titleRequired: "故事標題 *",
        titlePlaceholder: "為你的故事起一個吸引人的標題...",
        description: "故事簡介",
        descriptionPlaceholder: "簡要描述你的故事內容，吸引讀者的注意...",
        publicPost: "公開發布",
        publicDesc: "其他用戶可以發現並閱讀你的故事",
      },
      cover: {
        title: "封面圖片",
        upload: "上傳封面圖片",
        uploadDesc: "支持 JPG、PNG 格式，建議尺寸 800x600 像素",
        uploadButton: "上傳圖片",
        aiGenerate: "AI生成封面",
      },
      content: {
        title: "故事內容",
        interactivePlaceholder: "開始編寫你的互動故事。你可以使用 AI 助手來幫助生成內容和選項分支...",
        narrativePlaceholder: "開始編寫你的故事。讓想象力自由飛翔，創造一個引人入勝的世界...",
        aiContinue: "AI 續寫",
        insertImage: "插入圖片",
      },
      actions: {
        saveDraft: "保存草稿",
        preview: "預覽",
        publish: "發布故事",
      },
      assistant: {
        title: "AI 創作助手",
        description: "讓AI幫助你完善故事情節、生成角色對話、創建場景描述等。",
        generateIdeas: "💡 生成故事創意",
        createCharacters: "👥 創建角色設定",
        buildWorld: "🌍 構建世界觀",
        generateDialogue: "🎭 生成對話",
      },
      proFeatures: {
        title: "Pro 創作功能",
        features: ["高品質AI圖像生成", "無限AI續寫次數", "高級編輯工具", "數據分析面板", "優先推薦位置"],
      },
      tips: {
        title: "創作小貼士",
        tip1: "一個吸引人的開頭是成功的一半，嘗試用懸念或衝突來抓住讀者的注意力。",
        tip2: "為互動故事設計有意的選擇，讓每個決定都能影響故事的發展。",
        tip3: "使用生動的描述和對話來塑造角色，讓讀者能夠產生情感共鳴。",
      },
    },
    // Dashboard
    dashboard: {
      title: "我的主頁",
      subtitle: "管理你的創作和冒險歷程",
      createNew: "創建新故事",
      stats: {
        totalPlays: "遊戲次數",
        totalReads: "閱讀次數",
        totalLikes: "獲得按讚",
        totalFollowers: "關注者",
      },
      tabs: {
        adventures: "進行中的冒險",
        stories: "我的作品",
        favorites: "收藏夾",
        analytics: "數據分析",
      },
      adventures: {
        title: "進行中的冒險",
        discoverNew: "發現新冒險",
        noAdventures: "還沒有進行中的冒險",
        noAdventuresDesc: "探索精彩的互動故事，開始你的第一次冒險吧！",
        progress: "進度",
        lastPlayed: "最後遊戲",
        currentScene: "當前場景",
        continueAdventure: "繼續冒險",
      },
      stories: {
        title: "我的作品",
        published: "已發布",
        draft: "草稿",
        interactive: "互動",
        story: "故事",
      },
      favorites: {
        title: "我的收藏",
      },
      analytics: {
        title: "數據分析",
        upgradeTitle: "升級到 Pro 解鎖數據分析",
        upgradeDesc: "獲取詳細的作品數據分析，包括閱讀量趨勢、用戶互動數據、收入統計等專業功能。",
      },
    },
    // Community
    community: {
      title: "社群",
      subtitle: "發現優秀的創作者和故事",
      topCreators: "頂級創作者",
      topStories: "熱門故事",
      languageStats: "語言統計",
      badges: {
        legendary: "傳奇創作者",
        master: "大師級創作者",
        professional: "專業創作者",
        senior: "資深創作者",
        rising: "新星創作者",
      },
    },
    // Pricing
    pricing: {
      title: "選擇適合你的",
      titleHighlight: "創作計劃",
      subtitle: "無論你是故事愛好者還是創作達人，我們都有完美的方案讓你盡情享受AI驅動的故事世界",
      free: {
        title: "免費版",
        subtitle: "體驗AI故事的魅力",
        features: ["每日 10 次互動故事遊戲", "無限閱讀精彩故事", "基礎AI圖像生成", "社群功能訪問", "創作 3 個故事作品"],
        button: "開始免費體驗",
      },
      pro: {
        title: "Pro 會員",
        subtitle: "解鎖全部創作潛能",
        popular: "最受欢迎",
        features: [
          "無限互動故事遊戲",
          "無限閱讀所有內容",
          "高品質AI圖像生成",
          "無限靈感點數",
          "保存遊戲進度",
          "創作無限故事作品",
          "專屬Pro故事內容",
          "優先客服支持",
          "高級創作工具",
          "數據分析面板",
        ],
        button: "升級到 Pro",
      },
      faq: {
        title: "常見問題",
        q1: "什麼是靈感點數？",
        a1: "靈感點數是遊戲中的特殊貨幣，用於解鎖高級選項、自定義行動和獲得更豐富的故事體驗。免費用戶每日可獲得有限點數，Pro會員享有無限點數。",
        q2: "可以隨時取消訂閱嗎？",
        a2: "當然可以！你可以隨時在帳戶設置中取消Pro訂閱。取消後，你仍可以使用Pro功能直到當前計費周期結束。",
        q3: "支持哪些支付方式？",
        a3: "我們支持支付寶、微信支付、銀聯卡等多種支付方式。所有支付都通過安全加密通道處理，保障你的資金安全。",
        q4: "Pro會員有試用期嗎？",
        a4: "新用戶可以享受7天免費試用Pro會員的所有功能。試用期內隨時可以取消，不會產生任何費用。",
      },
      cta: {
        title: "準備好開啟你的創作之旅了嗎？",
        subtitle: "加入數萬名創作者，用AI的力量編織屬於你的故事世界。無論選擇哪個計劃，都能享受到前所未有的創作體驗。",
        startTrial: "開始7天免費試用",
        tryFree: "先試試免費版",
      },
    },
    // Play page
    play: {
      yourChoice: "你的選擇：",
      customAction: "或輸入你自己的行動...",
      customActionCost: "💡 自定義行動需要消耗 1 點靈感值",
      currentScene: "當前場景",
      characterStatus: "角色狀態",
      health: "生命值",
      energy: "精力值",
      inspirationPoints: "靈感點數",
      inspirationDesc: "用於解鎖特殊選項和自定義行動",
      proFeatures: {
        title: "Pro 功能",
        features: ["無限靈感點數", "保存遊戲進度", "高品質AI圖像", "專屬故事內容"],
      },
    },
    hero: {
      title_part1: "開啟你的",
      title_part2: "故事冒險",
      description: "體驗AI驅動的互動故事，你的每個選擇都將塑造獨特的敘事。成為讀者、主角和創作者。",
    },
    cta: {
      title: "準備開啟你的創作之旅？",
      description: "加入數千位故事創作者，用AI助力釋放你的想像力",
    },
    button: {
      start_creating: "開始創作",
      learn_pro: "了解Pro版",
      start_adventure: "開始冒險",
      browse_stories: "瀏覽故事",
      explore_more: "探索更多",
      upgrade: "升級到Pro",
    },
    featured: {
      title: "精選故事",
      description: "發現精心挑選的故事，展示我們創作社群的精彩作品",
    },
    scriptGenerator: {
      title: "劇本生成器",
      systemPrompt: {
        label: "系統提示詞",
        placeholder: "編輯系統提示詞..."
      },
      storyTitle: {
        label: "故事標題（可選）",
        placeholder: "輸入故事標題"
      },
      language: {
        label: "語言",
        placeholder: "選擇故事語言"
      },
      storyType: {
        label: "故事類型",
        options: {
          fantasy: "奇幻冒險",
          scifi: "科幻未來",
          horror: "恐怖驚悚",
          romance: "浪漫愛情",
          mystery: "懸疑推理",
          historical: "歷史古代"
        }
      },
      viewpoint: {
        label: "敘述視角",
        options: {
          first: "第一人稱",
          third: "第三人稱"
        }
      },
      storyContent: {
        label: "故事內容",
        placeholder: "輸入短篇小說或故事概要..."
      },
      additionalInstructions: {
        label: "額外要求（可選）",
        placeholder: "輸入額外的要求或指導..."
      },
      buttons: {
        generate: "生成YAML",
        generating: "生成中...",
        copy: "複製",
        apply: "應用到系統提示詞"
      },
      messages: {
        enterStory: "請輸入故事內容",
        missingApiKey: "缺少API密鑰",
        enterApiKey: "請在設置中輸入OpenRouter API密鑰",
        yamlGenerated: "YAML生成成功",
        scriptSettingsGenerated: "已成功生成劇本設定",
        generateFailed: "生成失敗",
        copied: "已複製",
        copiedToClipboard: "YAML內容已複製到剪貼板"
      },
      input: {
        title: "故事輸入",
        result: "生成結果"
      }
    }
  },
  fr: {
    app: {
      name: "StoryDNA",
    },
    footer: {
      description: "Plateforme de narration interactive propulsée par l'IA où l'imagination rencontre la technologie",
      explore: "Explorer",
      stories: "Histoires",
      community: "Communauté",
      trending: "Tendances",
      create: "Créer",
      create_story: "Créer une Histoire",
      tools: "Outils",
      guide: "Guide",
      support: "Support",
      help: "Centre d'Aide",
      contact: "Contactez-nous",
      pricing: "Tarifs",
      copyright: "Tous droits réservés",
    },
    nav: {
      home: "Accueil",
      explore: "Explorer",
      create: "Créer",
      dashboard: "Tableau de bord",
      community: "Communauté",
      pricing: "Tarifs",
      backToHome: "Retour à l'accueil",
      backToExplore: "Retour à l'exploration",
      settings: "Paramètres",
      upgradePro: "Passer à Pro",
    },
    common: {
      loading: "Chargement...",
      save: "Enregistrer",
      cancel: "Annuler",
      delete: "Supprimer",
      edit: "Modifier",
      share: "Partager",
      bookmark: "Marquer",
      like: "Aimer",
      play: "Jouer",
      read: "Lire",
      continue: "Continuer",
      startAdventure: "Commencer l'aventure",
      browseStories: "Parcourir les histoires",
      createStory: "Créer une histoire",
      inspiration: "Inspiration",
      language: "Langue",
      type: "Type",
      author: "Auteur",
      likes: "J'aime",
      views: "Vues",
      plays: "Parties",
    },
    home: {
      title: "Tissez votre",
      titleHighlight: "Royaume de Rêve",
      subtitle: "Plateforme d'histoires interactives alimentée par l'IA où chaque choix crée des aventures uniques.",
      featuredTitle: "Histoires en vedette",
      featuredSubtitle: "Découvrez les histoires interactives et œuvres les plus populaires",
      stats: {
        stories: "Histoires Incroyables",
        players: "Joueurs Actifs",
        adventures: "Aventures",
      },
      cta: {
        title: "Prêt à créer votre propre histoire ?",
        subtitle:
          "Rejoignez des dizaines de milliers de créateurs et tissez des possibilités infinies avec la puissance de l'IA",
        create: "Commencer à créer",
        learnPro: "En savoir plus sur Pro",
      },
    },
    hero: {
      title_part1: "Commencez Votre",
      title_part2: "Aventure Narrative",
      description: "Découvrez la narration interactive propulsée par l'IA où vos choix façonnent des récits uniques. Soyez le lecteur, le protagoniste et le créateur de vos propres histoires.",
    },
    cta: {
      title: "Prêt à Commencer Votre Voyage Créatif ?",
      description: "Rejoignez des milliers de conteurs et libérez votre imagination avec la narration assistée par l'IA",
    },
    button: {
      start_creating: "Commencer à Créer",
      learn_pro: "En Savoir Plus sur Pro",
      start_adventure: "Commencer l'Aventure",
      browse_stories: "Parcourir les Histoires",
      explore_more: "Explorer Plus",
      upgrade: "Passer à Pro",
    },
    featured: {
      title: "Histoires en Vedette",
      description: "Découvrez des histoires sélectionnées qui mettent en valeur le meilleur de notre communauté créative",
    },
  },
  de: {
    app: {
      name: "StoryDNA",
    },
    footer: {
      description: "KI-gestützte interaktive Geschichtenplattform, wo Fantasie auf Technologie trifft",
      explore: "Entdecken",
      stories: "Geschichten",
      community: "Community",
      trending: "Trending",
      create: "Erstellen",
      create_story: "Geschichte Erstellen",
      tools: "Werkzeuge",
      guide: "Anleitung",
      support: "Support",
      help: "Hilfecenter",
      contact: "Kontakt",
      pricing: "Preise",
      copyright: "Alle Rechte vorbehalten",
    },
    nav: {
      home: "Startseite",
      explore: "Entdecken",
      create: "Erstellen",
      dashboard: "Dashboard",
      community: "Community",
      pricing: "Preise",
      backToHome: "Zurück zur Startseite",
      backToExplore: "Zurück zum Entdecken",
      settings: "Einstellungen",
      upgradePro: "Auf Pro upgraden",
    },
    common: {
      loading: "Laden...",
      save: "Speichern",
      cancel: "Abbrechen",
      delete: "Löschen",
      edit: "Bearbeiten",
      share: "Teilen",
      bookmark: "Lesezeichen",
      like: "Gefällt mir",
      play: "Spielen",
      read: "Lesen",
      continue: "Fortfahren",
      startAdventure: "Abenteuer beginnen",
      browseStories: "Geschichten durchsuchen",
      createStory: "Geschichte erstellen",
      inspiration: "Inspiration",
      language: "Sprache",
      type: "Typ",
      author: "Autor",
      likes: "Gefällt mir",
      views: "Aufrufe",
      plays: "Spiele",
    },
    home: {
      title: "Starten Sie Ihr",
      titleHighlight: "Geschichten-Abenteuer",
      subtitle: "Erleben Sie KI-gestützte interaktive Geschichten, in denen Ihre Entscheidungen einzigartige Erzählungen gestalten. Seien Sie Leser, Protagonist und Schöpfer Ihrer eigenen Geschichten.",
      featuredTitle: "Empfohlene Geschichten",
      featuredSubtitle: "Erleben Sie die beliebtesten interaktiven Geschichten und erstaunlichen Werke",
      stats: {
        stories: "Erstaunliche Geschichten",
        players: "Aktive Spieler",
        adventures: "Abenteuer",
      },
      cta: {
        title: "Bereit, Ihre eigene Geschichte zu erschaffen?",
        subtitle: "Schließen Sie sich Zehntausenden von Kreativen an und weben Sie unendliche Möglichkeiten mit der Kraft der KI",
        create: "Erstellen beginnen",
        learnPro: "Mehr über Pro erfahren",
      },
    },
    hero: {
      title_part1: "Starten Sie Ihr",
      title_part2: "Geschichten-Abenteuer",
      description: "Erleben Sie KI-gestützte interaktive Geschichten, in denen Ihre Entscheidungen einzigartige Erzählungen gestalten. Seien Sie Leser, Protagonist und Schöpfer Ihrer eigenen Geschichten.",
    },
    cta: {
      title: "Bereit für Ihre Kreative Reise?",
      description: "Schließen Sie sich Tausenden von Geschichtenerzählern an und entfesseln Sie Ihre Fantasie mit KI-gestütztem Storytelling",
    },
    button: {
      start_creating: "Jetzt Erstellen",
      learn_pro: "Pro Kennenlernen",
      start_adventure: "Abenteuer Starten",
      browse_stories: "Geschichten Durchsuchen",
      explore_more: "Mehr Entdecken",
      upgrade: "Auf Pro Upgraden",
    },
    featured: {
      title: "Ausgewählte Geschichten",
      description: "Entdecken Sie handverlesene Geschichten, die das Beste unserer kreativen Gemeinschaft präsentieren",
    },
  },
  ar: {
    app: {
      name: "StoryDNA",
    },
    footer: {
      description: "منصة سرد تفاعلية مدعومة بالذكاء الاصطناعي حيث يلتقي الخيال بالتكنولوجيا",
      explore: "استكشف",
      stories: "القصص",
      community: "المجتمع",
      trending: "الرائج",
      create: "إنشاء",
      create_story: "إنشاء قصة",
      tools: "الأدوات",
      guide: "الدليل",
      support: "الدعم",
      help: "مركز المساعدة",
      contact: "اتصل بنا",
      pricing: "الأسعار",
      copyright: "جميع الحقوق محفوظة",
    },
    nav: {
      home: "الرئيسية",
      explore: "استكشف",
      create: "إنشاء",
      dashboard: "لوحة التحكم",
      community: "المجتمع",
      pricing: "الأسعار",
      backToHome: "العودة للرئيسية",
      backToExplore: "العودة للاستكشاف",
      settings: "الإعدادات",
      upgradePro: "ترقية إلى برو",
    },
    common: {
      loading: "جاري التحميل...",
      save: "حفظ",
      cancel: "إلغاء",
      delete: "حذف",
      edit: "تحرير",
      share: "مشاركة",
      bookmark: "إشارة مرجعية",
      like: "إعجاب",
      play: "لعب",
      read: "قراءة",
      continue: "متابعة",
      startAdventure: "بدء المغامرة",
      browseStories: "تصفح القصص",
      createStory: "إنشاء قصة",
      inspiration: "إلهام",
      language: "اللغة",
      type: "النوع",
      author: "المؤلف",
      likes: "الإعجابات",
      views: "المشاهدات",
      plays: "الألعاب",
    },
    home: {
      title: "ابدأ",
      titleHighlight: "مغامرتك القصصية",
      subtitle: "اختبر القصص التفاعلية المدعومة بالذكاء الاصطناعي حيث تشكل اختياراتك روايات فريدة. كن القارئ والبطل ومبدع قصصك الخاصة.",
      featuredTitle: "القصص المميزة",
      featuredSubtitle: "اختبر أشهر القصص التفاعلية والأعمال المذهلة",
      stats: {
        stories: "قصص مذهلة",
        players: "لاعبون نشطون",
        adventures: "مغامرات",
      },
      cta: {
        title: "هل أنت مستعد لإنشاء قصتك الخاصة؟",
        subtitle: "انضم إلى عشرات الآلاف من المبدعين واحك إمكانيات لا نهائية بقوة الذكاء الاصطناعي",
        create: "ابدأ الإنشاء",
        learnPro: "تعرف على النسخة الاحترافية",
      },
    },
    hero: {
      title_part1: "ابدأ",
      title_part2: "مغامرتك القصصية",
      description: "اختبر القصص التفاعلية المدعومة بالذكاء الاصطناعي حيث تشكل اختياراتك روايات فريدة. كن القارئ والبطل ومبدع قصصك الخاصة.",
    },
    cta: {
      title: "هل أنت مستعد لبدء رحلتك الإبداعية؟",
      description: "انضم إلى آلاف من رواة القصص وأطلق العنان لخيالك مع السرد القصصي المدعوم بالذكاء الاصطناعي",
    },
    button: {
      start_creating: "ابدأ الإنشاء",
      learn_pro: "تعرف على النسخة Pro",
      start_adventure: "ابدأ المغامرة",
      browse_stories: "تصفح القصص",
      explore_more: "استكشف المزيد",
      upgrade: "الترقية إلى Pro",
    },
    featured: {
      title: "القصص المميزة",
      description: "اكتشف قصصاً مختارة بعناية تعرض أفضل ما في مجتمعنا الإبداعي",
    },
  },
  vi: {
    app: {
      name: "StoryDNA",
    },
    footer: {
      description: "Nền tảng kể chuyện tương tác được hỗ trợ bởi AI, nơi trí tưởng tượng gặp gỡ công nghệ",
      explore: "Khám phá",
      stories: "Câu chuyện",
      community: "Cộng đồng",
      trending: "Xu hướng",
      create: "Sáng tạo",
      create_story: "Tạo Câu chuyện",
      tools: "Công cụ",
      guide: "Hướng dẫn",
      support: "Hỗ trợ",
      help: "Trung tâm Trợ giúp",
      contact: "Liên hệ",
      pricing: "Giá cả",
      copyright: "Đã đăng ký bản quyền",
    },
    nav: {
      home: "Trang chủ",
      explore: "Khám phá",
      create: "Tạo",
      dashboard: "Bảng điều khiển",
      community: "Cộng đồng",
      pricing: "Giá cả",
      backToHome: "Về trang chủ",
      backToExplore: "Về khám phá",
      settings: "Cài đặt",
      upgradePro: "Nâng cấp Pro",
    },
    common: {
      loading: "Đang tải...",
      save: "Lưu",
      cancel: "Hủy",
      delete: "Xóa",
      edit: "Chỉnh sửa",
      share: "Chia sẻ",
      bookmark: "Đánh dấu",
      like: "Thích",
      play: "Chơi",
      read: "Đọc",
      continue: "Tiếp tục",
      startAdventure: "Bắt đầu phiêu lưu",
      browseStories: "Duyệt câu chuyện",
      createStory: "Tạo câu chuyện",
      inspiration: "Cảm hứng",
      language: "Ngôn ngữ",
      type: "Loại",
      author: "Tác giả",
      likes: "Lượt thích",
      views: "Lượt xem",
      plays: "Lượt chơi",
    },
    home: {
      title: "Bắt Đầu",
      titleHighlight: "Cuộc Phiêu Lưu Câu Chuyện",
      subtitle: "Trải nghiệm kể chuyện tương tác được hỗ trợ bởi AI nơi lựa chọn của bạn tạo nên những câu chuyện độc đáo. Hãy là người đọc, nhân vật chính và người sáng tạo câu chuyện của riêng bạn.",
      featuredTitle: "Câu Chuyện Nổi Bật",
      featuredSubtitle: "Trải nghiệm những câu chuyện tương tác phổ biến nhất và các tác phẩm tuyệt vời",
      stats: {
        stories: "Câu Chuyện Tuyệt Vời",
        players: "Người Chơi Tích Cực",
        adventures: "Cuộc Phiêu Lưu",
      },
      cta: {
        title: "Sẵn sàng tạo câu chuyện của riêng bạn?",
        subtitle: "Tham gia cùng hàng chục nghìn nhà sáng tạo và dệt nên những khả năng vô hạn với sức mạnh của AI",
        create: "Bắt Đầu Tạo",
        learnPro: "Tìm Hiểu Về Pro",
      },
    },
    hero: {
      title_part1: "Bắt Đầu",
      title_part2: "Cuộc Phiêu Lưu Câu Chuyện",
      description: "Rasakan pengalaman bercerita interaktif yang didukung AI di mana pilihan Anda membentuk narasi unik. Là người đọc, nhân vật chính và người sáng tạo câu chuyện của riêng bạn.",
    },
    cta: {
      title: "Sẵn Sàng Bắt Đầu Hành Trình Sáng Tạo?",
      description: "Tham gia cùng hàng nghìn người kể chuyện và khám phá trí tưởng tượng của bạn với công cụ kể chuyện được hỗ trợ bởi AI",
    },
    button: {
      start_creating: "Bắt Đầu Sáng Tạo",
      learn_pro: "Tìm Hiểu Về Pro",
      start_adventure: "Bắt Đầu Phiêu Lưu",
      browse_stories: "Duyệt Câu Chuyện",
      explore_more: "Khám Phá Thêm",
      upgrade: "Nâng Cấp lên Pro",
    },
    featured: {
      title: "Truyện Nổi Bật",
      description: "Khám phá những câu chuyện được chọn lọc, thể hiện những điều tốt nhất từ cộng đồng sáng tạo của chúng tôi",
    },
  },
  th: {
    app: {
      name: "StoryDNA",
    },
    footer: {
      description: "แพลตฟอร์มเล่าเรื่องแบบโต้ตอบด้วย AI ที่จินตนาการพบกับเทคโนโลยี",
      explore: "สำรวจ",
      stories: "เรื่องราว",
      community: "ชุมชน",
      trending: "กำลังนิยม",
      create: "สร้าง",
      create_story: "สร้างเรื่องราว",
      tools: "เครื่องมือ",
      guide: "คู่มือ",
      support: "สนับสนุน",
      help: "ศูนย์ช่วยเหลือ",
      contact: "ติดต่อเรา",
      pricing: "ราคา",
      copyright: "สงวนลิขสิทธิ์",
    },
    nav: {
      home: "หน้าแรก",
      explore: "สำรวจ",
      create: "สร้าง",
      dashboard: "แดชบอร์ด",
      community: "ชุมชน",
      pricing: "ราคา",
      backToHome: "กลับหน้าแรก",
      backToExplore: "กลับสำรวจ",
      settings: "การตั้งค่า",
      upgradePro: "อัปเกรดเป็น Pro",
    },
    common: {
      loading: "กำลังโหลด...",
      save: "บันทึก",
      cancel: "ยกเลิก",
      delete: "ลบ",
      edit: "แก้ไข",
      share: "แชร์",
      bookmark: "บุ๊คมาร์ค",
      like: "ถูกใจ",
      play: "เล่น",
      read: "อ่าน",
      continue: "ดำเนินต่อ",
      startAdventure: "เริ่มการผจญภัย",
      browseStories: "เรียกดูเรื่องราว",
      createStory: "สร้างเรื่องราว",
      inspiration: "แรงบันดาลใจ",
      language: "ภาษา",
      type: "ประเภท",
      author: "ผู้เขียน",
      likes: "ถูกใจ",
      views: "การดู",
      plays: "การเล่น",
    },
    home: {
      title: "เริ่มต้น",
      titleHighlight: "การผจญภัยเรื่องราว",
      subtitle: "สัมผัสประสบการณ์การเล่าเรื่องแบบโต้ตอบด้วย AI ที่การเลือกของคุณสร้างเรื่องราวที่ไม่เหมือนใคร เป็นผู้อ่าน ตัวละครเอก และผู้สร้างเรื่องราวของคุณเอง",
      featuredTitle: "เรื่องราวแนะนำ",
      featuredSubtitle: "สัมผัสประสบการณ์เรื่องราวโต้ตอบยอดนิยมและผลงานที่น่าทึ่ง",
      stats: {
        stories: "เรื่องราวน่าทึ่ง",
        players: "ผู้เล่นที่ใช้งานอยู่",
        adventures: "การผจญภัย",
      },
      cta: {
        title: "พร้อมที่จะสร้างเรื่องราวของคุณเองแล้วหรือยัง?",
        subtitle: "เข้าร่วมกับนักสร้างสรรค์หลายหมื่นคนและสานความเป็นไปได้ไม่จำกัดด้วยพลังของ AI",
        create: "เริ่มสร้างสรรค์",
        learnPro: "เรียนรู้เกี่ยวกับ Pro",
      },
    },
    hero: {
      title_part1: "เริ่มต้น",
      title_part2: "การผจญภัยเรื่องราว",
      description: "สัมผัสประสบการณ์การเล่าเรื่องแบบโต้ตอบด้วย AI ที่การเลือกของคุณสร้างเรื่องราวที่ไม่เหมือนใคร เป็นผู้อ่าน ตัวละครเอก และผู้สร้างเรื่องราวของคุณเอง",
    },
    cta: {
      title: "พร้อมที่จะเริ่มการเดินทางสร้างสรรค์ของคุณ?",
      description: "เข้าร่วมกับนักเล่าเรื่องนับพันและปลดปล่อยจินตนาการของคุณด้วยการเล่าเรื่องที่ขับเคลื่อนด้วย AI",
    },
    button: {
      start_creating: "เริ่มสร้างสรรค์",
      learn_pro: "เรียนรู้เกี่ยวกับ Pro",
      start_adventure: "เริ่มการผจญภัย",
      browse_stories: "เรียกดูเรื่องราว",
      explore_more: "สำรวจเพิ่มเติม",
      upgrade: "อัปเกรดเป็น Pro",
    },
    featured: {
      title: "เรื่องราวแนะนำ",
      description: "ค้นพบเรื่องราวที่คัดสรรมาอย่างดี แสดงให้เห็นถึงสิ่งที่ดีที่สุดจากชุมชนสร้างสรรค์ของเรา",
    },
  },
  id: {
    app: {
      name: "StoryDNA",
    },
    footer: {
      description: "Platform bercerita interaktif yang didukung AI di mana imajinasi bertemu teknologi",
      explore: "Jelajahi",
      stories: "Cerita",
      community: "Komunitas",
      trending: "Trending",
      create: "Buat",
      create_story: "Buat Cerita",
      tools: "Peralatan",
      guide: "Panduan",
      support: "Dukungan",
      help: "Pusat Bantuan",
      contact: "Hubungi Kami",
      pricing: "Harga",
      copyright: "Hak cipta dilindungi",
    },
    nav: {
      home: "Beranda",
      explore: "Jelajahi",
      create: "Buat",
      dashboard: "Dasbor",
      community: "Komunitas",
      pricing: "Harga",
      backToHome: "Kembali ke Beranda",
      backToExplore: "Kembali ke Jelajahi",
      settings: "Pengaturan",
      upgradePro: "Upgrade ke Pro",
    },
    common: {
      loading: "Memuat...",
      save: "Simpan",
      cancel: "Batal",
      delete: "Hapus",
      edit: "Edit",
      share: "Bagikan",
      bookmark: "Bookmark",
      like: "Suka",
      play: "Main",
      read: "Baca",
      continue: "Lanjutkan",
      startAdventure: "Mulai Petualangan",
      browseStories: "Jelajahi Cerita",
      createStory: "Buat Cerita",
      inspiration: "Inspirasi",
      language: "Bahasa",
      type: "Tipe",
      author: "Penulis",
      likes: "Suka",
      views: "Tampilan",
      plays: "Permainan",
    },
    home: {
      title: "Mulai",
      titleHighlight: "Petualangan Ceritamu",
      subtitle: "Rasakan pengalaman bercerita interaktif yang didukung AI di mana pilihan Anda membentuk narasi unik. Jadilah pembaca, protagonis, dan pencipta cerita Anda sendiri.",
      featuredTitle: "Cerita Pilihan",
      featuredSubtitle: "Rasakan cerita interaktif paling populer dan karya-karya menakjubkan",
      stats: {
        stories: "Cerita Menakjubkan",
        players: "Pemain Aktif",
        adventures: "Petualangan",
      },
      cta: {
        title: "Siap membuat cerita Anda sendiri?",
        subtitle: "Bergabunglah dengan puluhan ribu kreator dan rangkai kemungkinan tak terbatas dengan kekuatan AI",
        create: "Mulai Membuat",
        learnPro: "Pelajari Tentang Pro",
      },
    },
    hero: {
      title_part1: "Mulai",
      title_part2: "Petualangan Ceritamu",
      description: "Rasakan pengalaman bercerita interaktif yang didukung AI di mana pilihan Anda membentuk narasi unik. Jadilah pembaca, protagonis, dan pencipta cerita Anda sendiri.",
    },
    cta: {
      title: "Siap Memulai Perjalanan Kreatif Anda?",
      description: "Bergabunglah dengan ribuan pencerita dan lepaskan imajinasi Anda dengan bercerita yang didukung AI",
    },
    button: {
      start_creating: "Mulai Membuat",
      learn_pro: "Pelajari Tentang Pro",
      start_adventure: "Mulai Petualangan",
      browse_stories: "Jelajahi Cerita",
      explore_more: "Jelajahi Lebih Banyak",
      upgrade: "Tingkatkan ke Pro",
    },
    featured: {
      title: "Cerita Pilihan",
      description: "Temukan cerita-cerita pilihan yang menampilkan yang terbaik dari komunitas kreatif kami",
    },
  },
} as const

export type TranslationKey = keyof (typeof translations)["en"]

export type LocaleKey = LanguageCode

export const getTranslation = (locale: LocaleKey, key: string): string => {
  const keys = key.split('.')
  let value: any = translations[locale]

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

import { createContext } from 'react'

interface LanguageContextType {
  locale: LocaleKey
  t: (key: string) => string
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
