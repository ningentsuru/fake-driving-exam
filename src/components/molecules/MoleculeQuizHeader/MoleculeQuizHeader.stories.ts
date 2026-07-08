import type { Meta, StoryObj } from '@storybook/vue3-vite'
import MoleculeQuizHeader from './MoleculeQuizHeader.vue'

const meta: Meta<typeof MoleculeQuizHeader> = {
  component: MoleculeQuizHeader,
  title: 'Components/MoleculeQuizHeader',
}

export default meta
type Story = StoryObj<typeof MoleculeQuizHeader>

export const Default: Story = {
  args: {
    title: '',
    modelValue: '',
  },
}
