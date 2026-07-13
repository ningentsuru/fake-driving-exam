export type ExamCategory =
  'Road Signs' | 'Traffic Rules' | 'Penalties' | 'Defensive Driving' | 'General & Republic Acts'

export interface ExamQuestion {
  id: number
  category: ExamCategory
  question: string
  image: string
  options: string[]
  correctAnswer: string
  explanation: string
  source: string
}
