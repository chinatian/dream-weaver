export interface PlayerStats {
  health: number
  energy: number
  inspiration: number
}

export interface GameTask {
  description: string
}

export interface GameState {
  title: string
  currentScene: string
  playerStats: PlayerStats
  sceneImage: string
  task?: GameTask
}

export interface SceneSegment {
  type: 'narration' | 'character'
  text: string
  speaker?: string
}

export interface SceneOption {
  id: string
  text: string
}

export interface SceneDescription {
  segments: SceneSegment[]
  options: SceneOption[]
} 