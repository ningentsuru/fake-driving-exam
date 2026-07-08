import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AtomLazyImage from './AtomLazyImage.vue'

const meta: Meta<typeof AtomLazyImage> = {
  component: AtomLazyImage,
  title: 'Components/AtomLazyImage',
}

export default meta
type Story = StoryObj<typeof AtomLazyImage>

export const Default: Story = {
  args: {
    src: '',
    alt: '',
    height: 0,
    width: 0,
  },
}
