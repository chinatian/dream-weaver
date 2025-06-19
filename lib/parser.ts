import { load } from 'js-yaml'

// 解析游戏状态
export function parseGameState(content: string) {
  const gameStateMatch = content.match(/<gameState>([\s\S]*?)<\/gameState>/)

  // 如果没有找到gameState标签，返回null
  if (!gameStateMatch)
    return {
      skills: {},
      task: null,
      goldenFingers: [],
    }

  const gameStateContent = gameStateMatch[1]

  // 解析技能
  const skillsMatch = gameStateContent.match(/<currentSkills>([\s\S]*?)<\/currentSkills>/)
  const skills: Record<string, number> = {}

  if (skillsMatch) {
    const skillsContent = skillsMatch[1]
    const skillRegex = /<(.*?)>(\d+)<\/\1>/g
    let match

    while ((match = skillRegex.exec(skillsContent)) !== null) {
      skills[match[1]] = Number.parseInt(match[2])
    }
  }

  // 解析当前任务
  const taskMatch = gameStateContent.match(/<currentActiveTask[^>]*id="([^"]*)"[^>]*description="([^"]*)"[^>]*status="([^"]*)"[^>]*roundProgress="\((\d+)\/(\d+)\)"[^>]*\/>/)
  const task = { description: "", progress: "" }

  if (taskMatch) {
    task.description = taskMatch[2]
    task.progress = `${taskMatch[4]}/${taskMatch[5]}`
  }else{
    // Try alternate task format with XML element
    const altTaskMatch = gameStateContent.match(/<currentActiveTask>\s*<task id="([^"]*)" description="([^"]*)" status="([^"]*)" roundProgress="\((\d+)\/(\d+)\)"\/>\s*<\/currentActiveTask>/)
    if (altTaskMatch) {
      task.description = altTaskMatch[2]
      task.progress = `${altTaskMatch[4]}/${altTaskMatch[5]}`
    }
  }



  // 解析金手指
  const goldenFingersMatch = gameStateContent.match(/<currentGoldenFingers>([\s\S]*?)<\/currentGoldenFingers>/)
  const goldenFingers: Array<{ id: string; name: string; description: string }> = []

  if (goldenFingersMatch) {
    const gfContent = goldenFingersMatch[1]
    const gfRegex = /<gf id="([^"]*)" name="([^"]*)" description="([^"]*)"/g
    let match

    while ((match = gfRegex.exec(gfContent)) !== null) {
      goldenFingers.push({
        id: match[1],
        name: match[2],
        description: match[3]
      })
    }
  }

  // 解析正文内容
  const contentMatch = content.match(/>([\s\S]*?)<options>/)
  let mainContent = formatMessageForImmersiveMode(content)

  

  const options = parseOptions(content)

  return {
    skills,
    task,
    goldenFingers,
    mainContent,
    options,
    content
  }
}

// 解析选项
export function parseOptions(content: string) {
  const optionsMatch = content.match(/<options>([\s\S]*?)<\/options>/)

  if (!optionsMatch) return null

  const optionsContent = optionsMatch[1]
  const optionRegex = /<option id="(\d+)">([^<]*)<\/option>/g

  const options: Array<{ id: string; text: string }> = []
  let match

  while ((match = optionRegex.exec(optionsContent)) !== null) {
    options.push({
      id: match[1],
      text: match[2].trim(),
    })
  }

  return options
}


// 解析 YAML 为 JSON
export function parseYamlToJson(yamlContent: string) {
  try {
    return load(yamlContent) as Record<string, any>
  } catch (error) {
    console.error('Error parsing YAML:', error)
    throw new Error('Failed to parse YAML content')
  }
}


export function formatMessageForImmersiveMode(content: string) {
  let formattedContent = content
    .replace(/<gameState>[\s\S]*?<\/gameState>/g, "")
    .replace(/<options>[\s\S]*?<\/options>/g, "")
    .replace(/#场景\s*(.*?)(?=\n|$)/g, "")

  // 处理特殊格式
  formattedContent = formattedContent
    .replace(/"([^"]*)"/g, '<span class="">"$1"</span>') // 对话
    .replace(/\*\*([^*]*)\*\*/g, '<span class=" ">$1</span>') // 思想
    .replace(/~~([^~]*)~~/g, '<span class="">$1</span>') // 音效/氛围
  
  // Split by newlines and filter out empty lines
  const segments = formattedContent.split('\n').filter(line => line.trim().length > 0)

  // Split segments if they are too long
  const splitSegments = segments.map(segment => {
    if (segment.length > 40) {
      // Split by Chinese period (。) and filter out empty strings
      return segment.split('。').filter(s => s.trim().length > 0).map(s => s + '。')
    }
    return segment
  }).flat() // Flatten the array since some segments may have been split into arrays
  // 按照 sceneDescriptions 的格式，将 segments 转换为对象

  // Filter out empty segments and single periods
  const filteredSegments = splitSegments.filter(segment => {
    const trimmed = segment.trim()
    return trimmed.length > 0 && trimmed !== '。' && trimmed !== '”。'
  })

  const segmentsObject = filteredSegments.map((segment, index) => ({
    text: segment,
    type: 'narration',
    speaker:  null 
  }))

  return segmentsObject

}

export function getJsonFromContent(content:string){
 
  const jsonStart = content.indexOf('```json')
  const jsonEnd = content.lastIndexOf('```')
  const jsonString = content.slice(jsonStart + 7, jsonEnd).trim()
  const jsondata = JSON.parse(jsonString)

  return jsondata
}