export const runtime = 'edge';
import type { NextRequest } from "next/server"

// 检测是否在Cloudflare环境
const isCloudflareEnvironment = () => {
  return typeof globalThis.caches !== 'undefined' && 
         typeof globalThis.navigator !== 'undefined' &&
         globalThis.navigator.userAgent?.includes('Cloudflare-Workers')
}

export async function POST(req: NextRequest) {
  try {
    const { messages, apiKey, model, systemPrompt } = await req.json()

    // 验证必要参数
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "消息格式不正确" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // 如果没有提供API密钥，返回错误
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "请提供OpenRouter API密钥" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const isCloudflare = isCloudflareEnvironment()
    console.log(`环境检测: ${isCloudflare ? 'Cloudflare' : 'Other'}, 使用模型: ${model || "openai/gpt-4-turbo"}`)

    // 准备发送到OpenRouter的请求
    const openRouterPayload = {
      messages: [
        {
          role: "system",
          content: systemPrompt || "",
        },
        ...messages.map((msg: any) => ({
          role: msg.role,
          content: msg.content,
        })),
      ],
      model: model || "openai/gpt-4-turbo",
      max_tokens: 1500,
      temperature: 0.7,
      stream: true, // 启用流式输出
    }

    try {
      // 发送请求到OpenRouter API
      const openRouterResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "https://v0.dev",
          "X-Title": "AI Story Chat App",
        },
        body: JSON.stringify(openRouterPayload),
      })

      console.log(`OpenRouter响应状态: ${openRouterResponse.status}`)

      if (!openRouterResponse.ok) {
        const errorText = await openRouterResponse.text()
        console.error(`OpenRouter API错误: ${openRouterResponse.status}`, errorText)
        return new Response(`OpenRouter API错误: ${openRouterResponse.status} - ${errorText}`, {
          status: openRouterResponse.status,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        })
      }

      if (!openRouterResponse.body) {
        console.error("OpenRouter API没有返回数据流")
        return new Response("OpenRouter API没有返回数据流", {
          status: 500,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        })
      }

      console.log("开始创建流式响应")

      if (isCloudflare) {
        // Cloudflare环境下使用简化的流处理
        console.log("使用Cloudflare优化的流处理")
        
        return new Response(openRouterResponse.body.pipeThrough(new TransformStream({
          transform(chunk, controller) {
            try {
              const decoder = new TextDecoder()
              const encoder = new TextEncoder()
              const text = decoder.decode(chunk)
              
              const lines = text.split('\n')
              for (const line of lines) {
                if (line.startsWith('data:')) {
                  const data = line.slice(5).trim()
                  if (data && data !== '[DONE]' && data.startsWith('{')) {
                    try {
                      const json = JSON.parse(data)
                      const content = json.choices?.[0]?.delta?.content
                      if (content) {
                        controller.enqueue(encoder.encode(content))
                      }
                    } catch (e) {
                      console.error('解析JSON失败:', e)
                    }
                  }
                }
              }
            } catch (error) {
              console.error('TransformStream处理错误:', error)
            }
          }
        })), {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
          }
        })
      } else {
        // 非Cloudflare环境使用完整的流处理
        console.log("使用标准流处理")
        
        const encoder = new TextEncoder()
        const decoder = new TextDecoder()

        const stream = new ReadableStream({
          async start(controller) {
            console.log("ReadableStream started")
            
            try {
              const reader = openRouterResponse.body!.getReader()
              let buffer = ""
              let chunkCount = 0

              while (true) {
                const { done, value } = await reader.read()
                chunkCount++

                if (done) {
                  console.log(`流结束，总共处理了 ${chunkCount} 个数据块`)
                  break
                }

                // 解码数据块
                buffer += decoder.decode(value, { stream: true })
                
                // 按行处理
                const lines = buffer.split('\n')
                buffer = lines.pop() || "" // 保留最后一个可能不完整的行

                for (const line of lines) {
                  if (line.startsWith("data:")) {
                    const data = line.slice(5).trim()

                    // 检查是否是结束标记
                    if (data === "[DONE]" || data.includes("[DONE]")) {
                      console.log("收到结束标记")
                      continue
                    }

                    try {
                      // 只有当数据看起来像JSON时才尝试解析
                      if (data && (data.startsWith("{") || data.startsWith("["))) {
                        const json = JSON.parse(data)
                        const content = json.choices?.[0]?.delta?.content || ""

                        if (content) {
                          console.log(`发送内容块: ${content.substring(0, 50)}...`)
                          controller.enqueue(encoder.encode(content))
                        }
                      }
                    } catch (e) {
                      console.error("解析SSE数据失败:", e, "原始数据:", data.substring(0, 100))
                      // 继续处理下一行，不中断流
                    }
                  }
                }
              }

              console.log("正常关闭流")
              controller.close()
            } catch (error) {
              console.error("处理流时出错:", error)
              // 尝试发送错误信息到客户端
              try {
                controller.enqueue(encoder.encode(`\n\n错误: ${error}`))
              } catch (e) {
                console.error("无法发送错误信息到客户端:", e)
              }
              controller.error(error)
            }
          },
        })

        console.log("返回流式响应")

        // 返回流式响应
        return new Response(stream, {
          headers: { 
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
          },
        })
      }
    } catch (fetchError) {
      console.error("OpenRouter API请求错误:", fetchError)
      return new Response(
        JSON.stringify({
          error: "连接到AI服务时出错",
          details: fetchError instanceof Error ? fetchError.message : String(fetchError),
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }
  } catch (error) {
    console.error("API路由处理错误:", error)
    return new Response(
      JSON.stringify({
        error: "服务器内部错误",
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
