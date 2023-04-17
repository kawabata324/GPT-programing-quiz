import { Meta, StoryObj } from '@storybook/react'

import { AnswerButton } from '@/features/buttons/AnswerButton'

export default {
  title: 'features/buttons/AnswerButton',
  component: AnswerButton,
} satisfies Meta<typeof AnswerButton>

type Story = StoryObj<typeof AnswerButton>

export const Primary: Story = {
  args: {
    label: '1',
    content: 'pop',
    selected: false,
    onClick: () => console.log('pop'),
  },
}

export const Selected: Story = {
  args: {
    label: '1',
    content: 'pop',
    selected: true,
    onClick: () => console.log('pop'),
  },
}
