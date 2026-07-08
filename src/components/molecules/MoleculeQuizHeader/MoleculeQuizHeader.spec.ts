import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MoleculeQuizHeader from './MoleculeQuizHeader.vue'
import { Default } from './MoleculeQuizHeader.stories'
interface defaultProps {
  modelValue: string
}

describe('MoleculeQuizHeader', () => {
  it('renders properly using Storybook args', () => {
    const wrapper = mount(MoleculeQuizHeader, {
      props: Default.args as defaultProps,
    })

    expect(wrapper.text()).toContain('molecule-quiz-header')
  })

  it('receives correct props from Storybook args', () => {
    const wrapper = mount(MoleculeQuizHeader, {
      props: Default.args as defaultProps,
    })


    // Verify modelValue (string)
    expect(wrapper.props('modelValue')).toEqual('')
  })
})
