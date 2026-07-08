import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MoleculeQuestionItem from './MoleculeQuestionItem.vue'
import { Default } from './MoleculeQuestionItem.stories'
import type { QuizQuestion } from '@/data/quizData'

interface defaultProps {
  question: QuizQuestion
  index: number
  userAnswers: Record<number, string[]>
  speakingIndex: number | null
  speakQuestion: (index: number, question: QuizQuestion) => void
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

    // Verify question (QuizQuestion)
    const questionProp = wrapper.props('question')
    expect(questionProp).toBeDefined()
    expect(questionProp.id).toBe(0)
    expect(questionProp.category).toBe('')
    expect(questionProp.question).toBe('')
    expect(questionProp.image).toBe('')
    expect(questionProp.options).toEqual([''])
    expect(questionProp.correctAnswer).toBe('')
    expect(questionProp.explanation).toBe('')
    expect(questionProp.source).toBe('')

    // Verify index (number)
    expect(wrapper.props('index')).toEqual(0)
    // Verify userAnswer (string[])
    expect(wrapper.props('userAnswers')).toEqual({})
    // Verify speakQuestion (function)
    expect(speakQuestionFn).toBeTypeOf('function')
    // Verify handleAnswer (function)
    expect(handleAnswerFn).toBeTypeOf('function')
  })
})
