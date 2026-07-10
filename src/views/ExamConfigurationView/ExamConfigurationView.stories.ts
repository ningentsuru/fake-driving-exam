import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ExamConfigurationView from './ExamConfigurationView.vue'

const meta: Meta<typeof ExamConfigurationView> = {
  component: ExamConfigurationView,
  title: 'Components/ExamConfigurationView',
}

export default meta
type Story = StoryObj<typeof ExamConfigurationView>

export const Default: Story = {
  args: {},
}
