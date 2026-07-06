import type { Meta, StoryObj } from '@storybook/vue3-vite'
import TemplateDefault from './TemplateDefault.vue'

const meta: Meta<typeof TemplateDefault> = {
  component: TemplateDefault,
  title: 'Components/TemplateDefault',
}

export default meta
type Story = StoryObj<typeof TemplateDefault>

export const Default: Story = {
  args: {},
}
