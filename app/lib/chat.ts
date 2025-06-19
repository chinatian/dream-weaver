

export async function sendChatStreamRequest(
  messages: any[],
  apiKey: string,
  model: string,
  systemPrompt: string
) {
  try {
    const response = await fetch("/api/chat-stream", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages,
        apiKey,
        model,
        systemPrompt,   
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send chat request")
    }

    return response
  } catch (error) {
    console.error("Error sending chat request:", error)
    throw error
  }
}