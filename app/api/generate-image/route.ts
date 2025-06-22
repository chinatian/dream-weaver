export const runtime = 'edge';
import { type NextRequest, NextResponse } from "next/server"
import { ReplicateClient } from "@/lib/replicateClient"

export async function POST(request: NextRequest) {
  try {
    const { prompt, aspect_ratio, safety_filter_level, key } = await request.json()

    // Validate required parameters
    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    if (!key) {
      return NextResponse.json({ error: "Key is required" }, { status: 400 })
    }

    const replicateClient = new ReplicateClient()
    
    try {
      const imageUrl = await replicateClient.generateImage(
        {
          prompt,
          aspect_ratio,
          safety_filter_level,
        },
        key
      )

      return NextResponse.json({ imageUrl })
    } catch (error) {
      // throw error;
      console.error("Full error stack:", error instanceof Error ? error.stack : "No stack trace available")
      console.error("Image generation error:", error)
      return NextResponse.json(
        {
          error: "Failed to generate image",
          details: error instanceof Error ? error.message : String(error),
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("API route error:", error)
    return NextResponse.json(
      {
        error: "Server internal error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    )
  }
} 