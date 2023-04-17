import { Box, Tooltip, Button, Text } from '@mantine/core'
import React from 'react'

type Props = {
  label: string
  content: string
  selected: boolean
  onClick: () => void
}
export const AnswerButton: React.FC<Props> = ({ label, content, onClick, selected }) => (
  <Box w={250}>
    <Tooltip label={label} color='gray' position='bottom' withArrow>
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
