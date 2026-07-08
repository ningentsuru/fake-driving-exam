import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import OrganismApplicationSetting from './OrganismApplicationSetting.vue'
import { Default } from './OrganismApplicationSetting.stories'

interface defaultProps {
  title: string
}

describe('OrganismApplicationSetting', () => {
  it('renders properly using Storybook args', () => {
    const wrapper = mount(OrganismApplicationSetting, {
      props: Default.args as defaultProps,
    })

    expect(wrapper.text()).toContain('organism-application-setting')
  })

  it('receives correct props from Storybook args', () => {
    const wrapper = mount(OrganismApplicationSetting, {
      props: Default.args as defaultProps,
    })

    // Verify title (string)
    expect(wrapper.props('title')).toEqual('')
  })
})
