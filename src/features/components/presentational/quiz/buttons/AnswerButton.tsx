import { Box, Tooltip, Button, Text } from '@mantine/core'
import React from 'react'
import { Answer } from '@/features/components/presentational/quiz/buttons/AnswerButtonGroup'

type Props = {
  answer: Answer
}
export const AnswerButton: React.FC<Props> = ({ answer }) => {
  const { label, selected, content, onClick } = answer
  return (
    <Box w={250}>
      <Tooltip label={content} color='gray' position='bottom' withArrow>
        <Button
          variant={selected ? 'filled' : 'outline'}
          color='teal'
          size='md'
          fullWidth
          onClick={() => onClick()}
        >
          <Text fz='md'>{label}</Text>
        </Button>
      </Tooltip>
    </Box>
  )
}
