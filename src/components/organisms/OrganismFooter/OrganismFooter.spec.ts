import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import OrganismFooter from './OrganismFooter.vue'
import { Default } from './OrganismFooter.stories'

describe('OrganismFooter', () => {
  it('renders properly using Storybook args', () => {
    const wrapper = mount(OrganismFooter, {
      props: Default.args,
    })

    expect(wrapper.text()).toContain('organism-footer')
  })
})
