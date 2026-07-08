import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SelectExamView from './SelectExamView.vue'
import { Default } from './SelectExamView.stories'


describe('SelectExamView', () => {
  it('renders properly using Storybook args', () => {
    const wrapper = mount(SelectExamView, {
      props: Default.args,
    })

    expect(wrapper.text()).toContain('select-exam-view')
  })
})
