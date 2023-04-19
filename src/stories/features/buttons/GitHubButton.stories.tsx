import { Meta, StoryObj } from '@storybook/react'

import { GitHubButton } from '@/features/buttons/GitHubButton'

export default {
  title: 'features/buttons/GitHubButton',
  component: GitHubButton,
} satisfies Meta<typeof GitHubButton>

type Story = StoryObj<typeof GitHubButton>

export const Primary: Story = {
  args: {},
}
