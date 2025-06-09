"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, BookOpen, Heart, Eye, Gamepad2, Zap, Crown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function HomePage() {
  const { t } = useLanguage()

  const featuredStories = [
    {
      id: 1,
      title: t("story1.title"),
      description: t("story1.description"),
      image: "/placeholder.svg?height=300&width=400",
      language: "中文",
      author: "AI织梦师",
      likes: 1247,
      plays: 3891,
      type: "play",
    },
    {
      id: 2,
      title: t("story2.title"),
      description: t("story2.description"),
      image: "/placeholder.svg?height=300&width=400",
      language: "EN",
      author: "StoryWeaver",
      likes: 892,
      views: 2156,
      type: "read",
    },
    {
      id: 3,
      title: t("story3.title"),
      description: t("story3.description"),
      image: "/placeholder.svg?height=300&width=400",
      language: "中文",
      author: "幻境编织者",
      likes: 2103,
      plays: 5672,
      type: "play",
    },
  ]

  return (
    <div className="min-h-screen bg-[#12121B]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1E1E2D]/80 backdrop-blur-md border-b border-[#8A4FFF]/20">
        <div className="max-w-7xl mx-auto ">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#8A4FFF] to-[#00F5D4] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#F0F0F5] font-bold text-xl">{t("app.name")}</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#F0F0F5] hover:text-[#8A4FFF] transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/explore" className="text-[#A0A0B5] hover:text-[#8A4FFF] transition-colors">
                {t("nav.explore")}
              </Link>
              <Link href="/create" className="text-[#A0A0B5] hover:text-[#8A4FFF] transition-colors">
                {t("nav.create")}
              </Link>
              <Link href="/dashboard" className="text-[#A0A0B5] hover:text-[#8A4FFF] transition-colors">
                {t("nav.dashboard")}
              </Link>
              <Link href="/community" className="text-[#A0A0B5] hover:text-[#8A4FFF] transition-colors">
                {t("nav.community")}
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-[#00F5D4]">
                <Zap className="w-4 h-4" />
                <span className="font-medium">50</span>
              </div>
              <LanguageSwitcher />
              <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white">
                <Crown className="w-4 h-4 mr-2" />
                {t("button.upgrade")}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mt-16 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-[#F0F0F5] mb-6 leading-tight">
              {t("hero.title_part1")}
              <span className="bg-gradient-to-r from-[#8A4FFF] to-[#00F5D4] bg-clip-text text-transparent">
                {" "}
                {t("hero.title_part2")}
              </span>
            </h1>
            <p className="text-xl text-[#A0A0B5] max-w-3xl mx-auto leading-relaxed">{t("hero.description")}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white px-8 py-4 text-lg">
              <Play className="w-5 h-5 mr-2" />
              {t("button.start_adventure")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#8A4FFF] text-[#8A4FFF] hover:bg-[#8A4FFF]/10 px-8 py-4 text-lg"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              {t("button.browse_stories")}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#8A4FFF] mb-2">10K+</div>
              <div className="text-[#A0A0B5]">{t("home.stats.stories")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00F5D4] mb-2">50K+</div>
              <div className="text-[#A0A0B5]">{t("home.stats.players")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#33D69F] mb-2">1M+</div>
              <div className="text-[#A0A0B5]">{t("home.stats.adventures")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#F0F0F5] mb-4">{t("featured.title")}</h2>
            <p className="text-[#A0A0B5] text-lg">{t("featured.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <Card
                key={story.id}
                className="bg-[#1E1E2D] border-[#8A4FFF]/20 hover:border-[#8A4FFF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#8A4FFF]/20 hover:-translate-y-1 group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      {story.type === "play" ? (
                        <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80">
                          <Play className="w-4 h-4 mr-2" />
                          {t("button.start_game")}
                        </Button>
                      ) : (
                        <Button className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80">
                          <BookOpen className="w-4 h-4 mr-2" />
                          {t("button.read_story")}
                        </Button>
                      )}
                    </div>
                    <Badge className="absolute top-3 left-3 bg-[#00F5D4] text-[#12121B] font-medium">
                      {story.language}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#F0F0F5] mb-2 group-hover:text-[#8A4FFF] transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-[#A0A0B5] mb-4 line-clamp-2">{story.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-[#8A4FFF] to-[#00F5D4] rounded-full"></div>
                        <span className="text-[#A0A0B5] text-sm">{story.author}</span>
                      </div>

                      <div className="flex items-center space-x-4 text-[#A0A0B5] text-sm">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{story.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {story.type === "play" ? (
                            <>
                              <Gamepad2 className="w-4 h-4" />
                              <span>{story.plays}</span>
                            </>
                          ) : (
                            <>
                              <Eye className="w-4 h-4" />
                              <span>{story.views}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/explore">
              <Button size="lg" variant="outline" className="border-[#8A4FFF] text-[#8A4FFF] hover:bg-[#8A4FFF]/10">
                {t("button.explore_more")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#8A4FFF]/10 to-[#00F5D4]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#F0F0F5] mb-6">{t("cta.title")}</h2>
          <p className="text-[#A0A0B5] text-lg mb-8">{t("cta.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create">
              <Button size="lg" className="bg-[#8A4FFF] hover:bg-[#8A4FFF]/80 text-white px-8 py-4">
                {t("button.start_creating")}
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-[#00F5D4] text-[#00F5D4] hover:bg-[#00F5D4]/10 px-8 py-4"
              >
                <Crown className="w-4 h-4 mr-2" />
                {t("button.learn_pro")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1E2D] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8A4FFF] to-[#00F5D4] rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-[#F0F0F5] font-bold text-xl">{t("app.name")}</span>
              </div>
              <p className="text-[#A0A0B5]">{t("footer.description")}</p>
            </div>

            <div>
              <h3 className="text-[#F0F0F5] font-semibold mb-4">{t("footer.explore")}</h3>
              <ul className="space-y-2 text-[#A0A0B5]">
                <li>
                  <Link href="/explore" className="hover:text-[#8A4FFF] transition-colors">
                    {t("footer.stories")}
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-[#8A4FFF] transition-colors">
                    {t("footer.community")}
                  </Link>
                </li>
                <li>
                  <Link href="/trending" className="hover:text-[#8A4FFF] transition-colors">
                    {t("footer.trending")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#F0F0F5] font-semibold mb-4">{t("footer.create")}</h3>
              <ul className="space-y-2 text-[#A0A0B5]">
                <li>
                  <Link href="/create" className="hover:text-[#8A4FFF] transition-colors">
                    {t("footer.create_story")}
                  </Link>
                </li>
                <li>
                  <Link href="/tools" className="hover:text-[#8A4FFF] transition-colors">
                    {t("footer.tools")}
                  </Link>
                </li>
                <li>
                  <Link href="/guide" className="hover:text-[#8A4FFF] transition-colors">
                    {t("footer.guide")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#F0F0F5] font-semibold mb-4">{t("footer.support")}</h3>
              <ul className="space-y-2 text-[#A0A0B5]">
                <li>
                  <Link href="/help" className="hover:text-[#8A4FFF] transition-colors">
                    {t("footer.help")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#8A4FFF] transition-colors">
                    {t("footer.contact")}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-[#8A4FFF] transition-colors">
                    {t("footer.pricing")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#8A4FFF]/20 mt-8 pt-8 text-center text-[#A0A0B5]">
            <p>
              &copy; 2024 {t("app.name")}. {t("footer.copyright")}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
