import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ExamView from './ExamView.vue'

const meta: Meta<typeof ExamView> = {
  component: ExamView,
  title: 'Components/ExamView',
}

export default meta
type Story = StoryObj<typeof ExamView>

export const Default: Story = {
  args: {},
}
