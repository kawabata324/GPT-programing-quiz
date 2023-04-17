import { Flex } from '@mantine/core'
import React from 'react'
import { AnswerButton } from '@/features/buttons/AnswerButton'

export type Answer = {
  label: string
  content: string
  onClick: () => void
  selected: boolean
}
type Props = {
  answers: Answer[]
}
export const AnswerButtonGroup: React.FC<Props> = ({ answers }) => (
  <Flex gap='sm' justify='center' align='center' direction='column'>
    {answers.map((answer) => (
      <AnswerButton
        key={answer.label}
        label={answer.label}
        selected={answer.selected}
        content={answer.content}
        onClick={answer.onClick}
      />
    ))}
  </Flex>
)
