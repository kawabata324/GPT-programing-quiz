import { Prism } from '@mantine/prism'
import React from 'react'

import { Language } from '@/features/type/code'

type Props = {
  language: Language
  code: string
}

export const Code: React.FC<Props> = ({ code, language }) => (
  <Prism language={language} colorScheme='dark' withLineNumbers>
    {code}
  </Prism>
)
