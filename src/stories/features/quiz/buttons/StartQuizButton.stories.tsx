import { Meta, StoryObj } from '@storybook/react'
import { StartQuizButton } from '@/features/components/presentational/quiz/buttons/StartQuizButton'

export default {
  title: 'features/components/presentational/quiz/buttons/StartQuizButton',
  component: StartQuizButton,
} satisfies Meta<typeof StartQuizButton>

type Story = StoryObj<typeof StartQuizButton>

export const Primary: Story = {
  args: {
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
