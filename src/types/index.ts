export type QuizCategory =
  'Road Signs' | 'Traffic Rules' | 'Penalties' | 'Defensive Driving' | 'General & Republic Acts'

export interface QuizQuestion {
  id: number
  category: QuizCategory
  question: string
  image: string
  options: string[]
  correctAnswer: string
  explanation: string
  source: string
}
