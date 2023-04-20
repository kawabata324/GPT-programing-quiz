import { Meta, StoryObj } from '@storybook/react'

import { LanguageSelect } from '@/features/components/presentational/quiz/selects/LanguageSelect'

export default {
  title: 'features/components/presentational/quiz/selects/LanguageSelect',
  component: LanguageSelect,
} satisfies Meta<typeof LanguageSelect>

type Story = StoryObj<typeof LanguageSelect>

export const Primary: Story = {
  args: {
    searchValue: '',
  },
}

export const Selected: Story = {
  args: {
    value: 'Go',
  },
}

export const Search: Story = {
  args: {
    searchValue: 'G',
  },
}
