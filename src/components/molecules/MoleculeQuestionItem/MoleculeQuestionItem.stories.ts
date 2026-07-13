import type { Meta, StoryObj } from '@storybook/vue3-vite'
import MoleculeQuestionItem from './MoleculeQuestionItem.vue'
import type { ExamCategory, ExamQuestion } from '@/types'

const meta: Meta<typeof MoleculeQuestionItem> = {
  component: MoleculeQuestionItem,
  title: 'Components/MoleculeQuestionItem',
}

export default meta
type Story = StoryObj<typeof MoleculeQuestionItem>

export const Default: Story = {
  args: {
    questions: [
      {
        id: 0,
        category: '' as ExamCategory,
        question: '',
        image: '',
        options: [''],
        correctAnswer: '',
        explanation: '',
        source: '',
      },
    ] as ExamQuestion[],
    userAnswers: {} as Record<number, string[]>,
    speakQuestion: () => undefined,
    handleAnswer: () => undefined,
  },
}
