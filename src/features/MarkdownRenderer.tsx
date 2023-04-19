import React, { useEffect } from 'react'
import { useMarkdown } from '@/hooks/useMarkdown'

type Props = {
  text: string
}

export const MarkdownRenderer: React.FC<Props> = ({ text }) => {
  const {
    state: { html },
  } = useMarkdown(text)
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>
}
