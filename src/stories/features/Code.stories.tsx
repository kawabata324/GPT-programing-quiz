import { Meta, StoryObj } from '@storybook/react'

import { Code } from '@/features/Code'

export default {
  title: 'features/Code',
  component: Code,
} satisfies Meta<typeof Code>

type Story = StoryObj<typeof Code>

export const Go: Story = {
  args: {
    language: 'go',
    code: `package main

import "fmt"

func main() {
\tfmt.Println("Hello, 世界")
}`,
  },
}
