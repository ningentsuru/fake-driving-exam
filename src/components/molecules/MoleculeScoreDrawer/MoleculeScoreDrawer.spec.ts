import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MoleculeScoreDrawer from './MoleculeScoreDrawer.vue'
import { Default } from './MoleculeScoreDrawer.stories'

interface defaultProps {
  modelValue: boolean
  message: string
  category: string
  scoreVariant: 'default' | 'secondary' | 'destructive'
  score: number
  totalAnswered: number
  scorePercentage: number
}

describe('MoleculeScoreDrawer', () => {
  it('renders properly using Storybook args', () => {
    const wrapper = mount(MoleculeScoreDrawer, {
      props: Default.args as defaultProps,
    })

    expect(wrapper.text()).toContain('molecule-score-drawer')
  })

  it('receives correct props from Storybook args', () => {
    const wrapper = mount(MoleculeScoreDrawer, {
      props: Default.args as defaultProps,
    })

    // Verify modelValue (string)
    expect(wrapper.props('modelValue')).toEqual(false)
    // Verify message (string)
    expect(wrapper.props('message')).toEqual('')
    // Verify category (string)
    expect(wrapper.props('category')).toEqual('')
    // Verify score (number)
    expect(wrapper.props('score')).toEqual(0)
    // Verify totalAnswered (number)
    expect(wrapper.props('totalAnswered')).toEqual(0)
    // Verify scorePercentage (number)
    expect(wrapper.props('scorePercentage')).toEqual(0)
  })
})
