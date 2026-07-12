import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ExamConfigurationView from './ExamConfigurationView.vue'
import { Default } from './ExamConfigurationView.stories'


describe('ExamConfigurationView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders properly using Storybook args', () => {
    const wrapper = mount(ExamConfigurationView, {
      props: Default.args,
    })

    expect(wrapper.text()).toContain('exam-configuration-view')
  })
})
