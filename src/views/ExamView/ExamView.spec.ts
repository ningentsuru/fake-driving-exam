import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ExamView from './ExamView.vue'
import { Default } from './ExamView.stories'

describe('ExamView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders properly using Storybook args', () => {
    const wrapper = mount(ExamView, {
      props: Default.args,
    })

    expect(wrapper.text()).toContain('exam-view')
  })
})
