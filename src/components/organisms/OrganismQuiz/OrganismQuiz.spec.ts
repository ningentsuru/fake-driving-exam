import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import OrganismQuiz from './OrganismQuiz.vue'
import { Default } from './OrganismQuiz.stories'

describe('OrganismQuiz', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders properly using Storybook args', () => {
    const wrapper = mount(OrganismQuiz, {
      props: Default.args,
    })

    expect(wrapper.text()).toContain('organism-quiz')
  })
})
