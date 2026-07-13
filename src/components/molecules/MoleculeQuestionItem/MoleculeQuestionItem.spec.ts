import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MoleculeQuestionItem from './MoleculeQuestionItem.vue'
import { Default } from './MoleculeQuestionItem.stories'
import type { ExamQuestion } from '@/types'

interface defaultProps {
  questions: ExamQuestion[]
  userAnswers: Record<number, string[]>
  speakingIndex: number | null
  speakQuestion: (index: number, question: ExamQuestion) => void
  handleAnswer: (id: number, selected: string, correctAnswer: string) => void
  getOptionStatus: (
    id: number,
    idx: number,
    correctAnswer: string,
  ) => 'correct' | 'wrong' | 'default'
}

describe('MoleculeQuestionItem', () => {
  it('renders properly using Storybook args', () => {
    const wrapper = mount(MoleculeQuestionItem, {
      props: Default.args as defaultProps,
    })

    expect(wrapper.text()).toContain('molecule-question-item')
  })

  it('receives correct props from Storybook args', () => {
    const wrapper = mount(MoleculeQuestionItem, {
      props: Default.args as defaultProps,
    })

    const speakQuestionFn = wrapper.props('speakQuestion') as () => void
    const handleAnswerFn = wrapper.props('handleAnswer') as () => void

    // Verify question (ExamQuestion[])
    expect(wrapper.props('questions')).toEqual([
      {
        id: 0,
        category: '',
        question: '',
        image: '',
        options: [''],
        correctAnswer: '',
        explanation: '',
        source: '',
      },
    ])
    // Verify userAnswer (string[])
    expect(wrapper.props('userAnswers')).toEqual({})
    // Verify speakQuestion (function)
    expect(speakQuestionFn).toBeTypeOf('function')
    // Verify handleAnswer (function)
    expect(handleAnswerFn).toBeTypeOf('function')
  })
})
