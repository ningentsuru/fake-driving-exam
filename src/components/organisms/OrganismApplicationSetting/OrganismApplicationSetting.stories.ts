import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { asyncVueRouter } from 'storybook-vue3-router'
import OrganismApplicationSetting from './OrganismApplicationSetting.vue'

const meta: Meta<typeof OrganismApplicationSetting> = {
  component: OrganismApplicationSetting,
  title: 'Components/OrganismApplicationSetting',
  decorators: [asyncVueRouter()],
}

export default meta
type Story = StoryObj<typeof OrganismApplicationSetting>

export const Default: Story = {
  args: {
    title: '',
  },
}
