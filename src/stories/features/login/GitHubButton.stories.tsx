import { Meta, StoryObj } from '@storybook/react'

import { GitHubButton } from '@/features/components/presentational/login/GitHubButton'

export default {
  title: 'features/components/presentational/login/GitHubButton',
  component: GitHubButton,
} satisfies Meta<typeof GitHubButton>

type Story = StoryObj<typeof GitHubButton>

export const Primary: Story = {
  args: {},
}
