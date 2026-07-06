import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TemplateDefault from './TemplateDefault.vue'
import { Default } from './TemplateDefault.stories'

describe('TemplateDefault', () => {
  it('renders properly using Storybook args', () => {
    const wrapper = mount(TemplateDefault, {
      props: Default.args,
    })

    expect(wrapper.text()).toContain('template-default')
  })
})
