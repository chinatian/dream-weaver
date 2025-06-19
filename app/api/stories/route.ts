import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/stories - 获取所有故事
export async function GET() {
  try {
    const stories = await prisma.story.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(stories)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stories' }, { status: 500 })
  }
}

// POST /api/stories - 创建新故事
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const story = await prisma.story.create({
      data: {
        title: body.title,
        introduction: body.introduction,
        coverImage: body.coverImage,
        userId: body.userId,
        prompt: body.prompt,
        language: body.language,
      }
    })
    console.log(story)
    return NextResponse.json({ id: story.id ,title: story.title}, { status: 201 })
  } catch (error) {
    console.error('Error creating story:', error)
    return NextResponse.json({ error: 'Failed to create story' }, { status: 500 })
  }
} 