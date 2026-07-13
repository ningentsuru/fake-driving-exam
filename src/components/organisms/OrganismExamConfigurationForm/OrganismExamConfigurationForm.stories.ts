import type { Meta, StoryObj } from '@storybook/vue3-vite'
import OrganismExamConfigurationForm from './OrganismExamConfigurationForm.vue'

const meta: Meta<typeof OrganismExamConfigurationForm> = {
  component: OrganismExamConfigurationForm,
  title: 'Components/OrganismExamConfigurationForm',
}

export default meta
type Story = StoryObj<typeof OrganismExamConfigurationForm>

export const Default: Story = {
  args: {
    categories: [
      { value: 'all', label: 'All Categories' },
      { value: 'Road Signs', label: 'Road Signs' },
      { value: 'Traffic Rules', label: 'Traffic Rules' },
      { value: 'Penalties', label: 'Penalties' },
      { value: 'Defensive Driving', label: 'Defensive Driving' },
      { value: 'General & Republic Acts', label: 'General & Republic Acts' },
    ],
  },
}
