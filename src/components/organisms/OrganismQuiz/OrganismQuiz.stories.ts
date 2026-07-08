import type { Meta, StoryObj } from '@storybook/vue3-vite'
import OrganismQuiz from './OrganismQuiz.vue'

const meta: Meta<typeof OrganismQuiz> = {
  component: OrganismQuiz,
  title: 'Components/OrganismQuiz',
}

export default meta
type Story = StoryObj<typeof OrganismQuiz>

export const Default: Story = {
  args: {},
}
