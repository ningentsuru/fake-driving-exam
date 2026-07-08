import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import OrganismQuiz from './OrganismQuiz.vue'
import { Default } from './OrganismQuiz.stories'

describe('OrganismQuiz', () => {
  it('renders properly using Storybook args', () => {
    const wrapper = mount(OrganismQuiz, {
      props: Default.args,
    })

    expect(wrapper.text()).toContain('organism-quiz')
  })
})
