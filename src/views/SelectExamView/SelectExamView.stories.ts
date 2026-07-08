import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SelectExamView from './SelectExamView.vue'

const meta: Meta<typeof SelectExamView> = {
  component: SelectExamView,
  title: 'Components/SelectExamView',
}

export default meta
type Story = StoryObj<typeof SelectExamView>

export const Default: Story = {
  args: {},
}
