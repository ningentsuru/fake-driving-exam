import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ExamConfigurationView from './ExamConfigurationView.vue'
import { Default } from './ExamConfigurationView.stories'


describe('ExamConfigurationView', () => {
  it('renders properly using Storybook args', () => {
    const wrapper = mount(ExamConfigurationView, {
      props: Default.args,
    })

    expect(wrapper.text()).toContain('exam-configuration-view')
  })
})
