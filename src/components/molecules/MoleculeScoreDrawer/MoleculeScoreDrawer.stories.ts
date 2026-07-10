import type { Meta, StoryObj } from '@storybook/vue3-vite'
import MoleculeScoreDrawer from './MoleculeScoreDrawer.vue'

const meta: Meta<typeof MoleculeScoreDrawer> = {
  component: MoleculeScoreDrawer,
  title: 'Components/MoleculeScoreDrawer',
}

export default meta
type Story = StoryObj<typeof MoleculeScoreDrawer>

export const Default: Story = {
  args: {
    modelValue: false,
    message: '',
    category: '',
    score: 0,
    totalAnswered: 0,
    scorePercentage: 0,
  },
}
