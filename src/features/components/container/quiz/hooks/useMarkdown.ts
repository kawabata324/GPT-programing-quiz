import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
import { useEffect, useState } from 'react'

type State = {
  html: string
}

type Action = {}

export const useMarkdown = (text: string): { state: State; action: Action } => {
  const [html, setHtml] = useState('')

  useEffect(() => {
    const html = md.render(text)
    setHtml(html)
  }, [text])

  return {
    state: {
      html,
    },
    action: {},
  }
}

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>'
      } catch (err) {
        console.log(err)
      }
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  },
}) as MarkdownIt
