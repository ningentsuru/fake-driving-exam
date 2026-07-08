import type { Meta, StoryObj } from '@storybook/vue3-vite'
import MoleculeQuestionItem from './MoleculeQuestionItem.vue'
import type { QuizCategory, QuizQuestion } from '@/data/quizData'

const meta: Meta<typeof MoleculeQuestionItem> = {
  component: MoleculeQuestionItem,
  title: 'Components/MoleculeQuestionItem',
}

export default meta
type Story = StoryObj<typeof MoleculeQuestionItem>

export const Default: Story = {
  args: {
    question: {
      id: 0,
      category: '' as QuizCategory,
      question: '',
      image: '',
      options: [''],
      correctAnswer: '',
      explanation: '',
      source: '',
    } as QuizQuestion,
    index: 0,
    userAnswers: {} as Record<number, string[]>,
    speakQuestion: () => undefined,
    handleAnswer: () => undefined,
  },
}
