import { Button, Text } from '@mantine/core'
import React from 'react'

type Props = {
  onClick: () => void
  disabled: boolean
}

export const StartQuizButton: React.FC<Props> = ({ onClick, disabled }) => (
  <Button color='blue' size='md' fullWidth onClick={() => onClick()} disabled={disabled}>
    <Text fz='md'>Quiz Start</Text>
  </Button>
)
