import { Meta, StoryObj } from '@storybook/react'

import { AnswerButton } from '@/features/components/presentational/quiz/buttons/AnswerButton'

export default {
  title: 'features/components/presentational/buttons/AnswerButton',
  component: AnswerButton,
} satisfies Meta<typeof AnswerButton>

type Story = StoryObj<typeof AnswerButton>

export const Primary: Story = {
  args: {
    answer: {
      label: '1',
      content: 'pop',
      selected: false,
      onClick: () => console.log('pop'),
    }
  },
}

export const Selected: Story = {
  args: {
    answer: {
      label: '1',
      content: 'pop',
      selected: true,
      onClick: () => console.log('pop'),
    },
  },
}
