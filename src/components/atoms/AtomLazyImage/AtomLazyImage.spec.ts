import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AtomLazyImage from './AtomLazyImage.vue'
import { Default } from './AtomLazyImage.stories'
interface defaultProps {
  src: string, 
  alt: string, 
  height: number, 
  width: number
}

describe('AtomLazyImage', () => {
  it('renders properly using Storybook args', () => {
    const wrapper = mount(AtomLazyImage, {
      props: Default.args as defaultProps,
    })

    expect(wrapper.text()).toContain('atom-lazy-image')
  })

  it('receives correct props from Storybook args', () => {
    const wrapper = mount(AtomLazyImage, {
      props: Default.args as defaultProps,
    })


    // Verify src (string)
    expect(wrapper.props('src')).toEqual('')
    // Verify alt (string)
    expect(wrapper.props('alt')).toEqual('')
    // Verify height (number)
    expect(wrapper.props('height')).toEqual(0)
    // Verify width (number)
    expect(wrapper.props('width')).toEqual(0)
  })
})
