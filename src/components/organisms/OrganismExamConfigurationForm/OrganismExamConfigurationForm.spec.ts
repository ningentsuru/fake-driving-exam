import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import OrganismExamConfigurationForm from './OrganismExamConfigurationForm.vue'
import { Default } from './OrganismExamConfigurationForm.stories'

interface defaultProps {
  categories: { value: string; label: string }[]
}

describe('OrganismExamConfigurationForm', () => {
  it('renders properly using Storybook args', () => {
    const wrapper = mount(OrganismExamConfigurationForm, {
      props: Default.args as defaultProps,
    })

    expect(wrapper.text()).toContain('organism-exam-configuration-form')
  })

  it('receives correct props from Storybook args', () => {
    const wrapper = mount(OrganismExamConfigurationForm, {
      props: Default.args as defaultProps,
    })

    // Verify categories (object[])
    expect(wrapper.props('categories')).toEqual([
      { value: 'all', label: 'All Categories' },
      { value: 'Road Signs', label: 'Road Signs' },
      { value: 'Traffic Rules', label: 'Traffic Rules' },
      { value: 'Penalties', label: 'Penalties' },
      { value: 'Defensive Driving', label: 'Defensive Driving' },
      { value: 'General & Republic Acts', label: 'General & Republic Acts' },
    ])
  })
})
