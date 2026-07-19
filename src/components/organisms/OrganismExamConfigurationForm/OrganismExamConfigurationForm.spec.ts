import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import OrganismExamConfigurationForm from './OrganismExamConfigurationForm.vue'
import { Default } from './OrganismExamConfigurationForm.stories'

describe('OrganismExamConfigurationForm', () => {
  it('renders properly using Storybook args', () => {
    const wrapper = mount(OrganismExamConfigurationForm, {
      props: Default.args,
    })

    expect(wrapper.text()).toContain('organism-exam-configuration-form')
  })

  it('receives correct props from Storybook args', () => {
    const wrapper = mount(OrganismExamConfigurationForm, {
      props: Default.args,
    })

    // Verify categories (object[])
    expect(wrapper.props('categories')).toEqual(Default.args?.categories)
  })
})
