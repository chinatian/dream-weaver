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

export interface StoryData {
  id: number
  title: string
  introduction: string
  coverImage: string | null
  userId: string
  prompt: string
  prompt_json: {
    interactiveNovel: {
      storySettings: {
        title: string
        viewpoint: string
        worldBackground: string
        introduction: string
      }
      protagonist: {
        name: string
        description: string
      }
      supportingCharacters: Array<{
        name: string
        description: string
      }>
      userGuidance: {
        storyDirection: string
        styleReference: string
      }
      gameElements: {
        initialSkills: Record<string, number>
        initialActiveTask: {
          id: string
          description: string
          status: string
          maxRounds: number
          roundsElapsed: number
          nextTaskIdOnCompletion: string
        }
        definedTasks: Array<{
          id: string
          description: string
          maxRounds: number
          status?: string
          roundsElapsed?: number
          nextTaskIdOnCompletion: string | null
        }>
        initialGoldenFingers: Array<{
          id: string
          name: string
          description: string
          status: string
        }>
        finalGoal: {
          id: string
          description: string
          achieveCondition: string
        }
        gameplayDescription: string
      }
      outputRules: {
        contentFormat: string
        targetLength: {
          unit: string
          value: string
        }
        style: string
        pacing: string
        characterDevelopment: string
        sceneDescription: string
        choiceFormat: string
      }
    }
  }
  status: string
  language: string
  likeScore: number
  participantCount: number
  createdAt: string
  updatedAt: string
}

export interface SceneDescription {
  segments: SceneSegment[]
  options: SceneOption[]
} 