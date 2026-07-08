import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ExamView from './ExamView.vue'
import { Default } from './ExamView.stories'

describe('ExamView', () => {
  it('renders properly using Storybook args', () => {
    const wrapper = mount(ExamView, {
      props: Default.args,
    })

    expect(wrapper.text()).toContain('exam-view')
  })
})
