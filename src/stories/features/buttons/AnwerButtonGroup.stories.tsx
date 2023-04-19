import { Meta, StoryObj } from '@storybook/react'

import {
  Answer,
  AnswerButtonGroup,
} from '@/features/components/presentational/quiz/buttons/AnswerButtonGroup'

export default {
  title: 'features/components/presentational/buttons/AnswerButtonGroup',
  component: AnswerButtonGroup,
} satisfies Meta<typeof AnswerButtonGroup>

type Story = StoryObj<typeof AnswerButtonGroup>

const ANSWERS: Answer[] = [
  {
    content: 'pop',
    label: '1',
    selected: false,
    onClick: () => console.log('pop'),
  },
  {
    content: 'push',
    label: '2',
    selected: false,
    onClick: () => console.log('pop'),
  },
  {
    content: 'delete',
    label: '3',
    selected: false,
    onClick: () => console.log('pop'),
  },
  {
    content: 'put',
    label: '4',
    selected: true,
    onClick: () => console.log('pop'),
  },
]
export const Primary: Story = {
  args: {
    answers: ANSWERS,
  },
}
