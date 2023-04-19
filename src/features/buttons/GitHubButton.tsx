import { Box, Button, Text } from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons-react'
import React from 'react'

type Props = {
  onClick: () => void
}
export const GitHubButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Box w={250}>
      <Button
        color='dark'
        leftIcon={<IconBrandGithub />}
        size='md'
        fullWidth
        onClick={() => onClick()}
      >
        <Text fz='md'>Login with GitHub</Text>
      </Button>
    </Box>
  )
}
