export const runtime = 'edge';
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { parseYamlToJson } from '@/lib/parser'

// Helper function to handle BigInt serialization
function serializeStory(story: any) {
  const yamlContent = story.prompt
  const jsonContent = parseYamlToJson(yamlContent)
  story.prompt_json = jsonContent
  return JSON.parse(JSON.stringify(story, (_, value) =>
    typeof value === 'bigint' ? value.toString() : value
  ))
}

// GET /api/stories/[id] - 获取单个故事
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const storyId = parseInt(params.id)
    
    if (isNaN(storyId)) {
      return NextResponse.json(
        { error: 'Invalid story ID' },
        { status: 400 }
      )
    }

    const story = await prisma.story.findUnique({
      where: {
        id: storyId
      }
    })

    if (!story) {
      return NextResponse.json(
        { error: 'Story not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(serializeStory(story))
  } catch (error) {
    console.error('Error fetching story:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/stories/[id] - 更新故事
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const storyId = parseInt(params.id)
    
    if (isNaN(storyId)) {
      return NextResponse.json(
        { error: 'Invalid story ID' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const story = await prisma.story.update({
      where: { id: storyId },
      data: {
        title: body.title,
        introduction: body.introduction,
        coverImage: body.coverImage,
        prompt: body.prompt,
        status: body.status,
      }
    })
    return NextResponse.json(story)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update story' }, { status: 500 })
  }
}

// DELETE /api/stories/[id] - 删除故事
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const storyId = parseInt(params.id)
    
    if (isNaN(storyId)) {
      return NextResponse.json(
        { error: 'Invalid story ID' },
        { status: 400 }
      )
    }

    await prisma.story.delete({
      where: { id: storyId }
    })
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete story' }, { status: 500 })
  }
} 