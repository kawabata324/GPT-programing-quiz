import { MarkdownRenderer } from '@/features/components/presentational/quiz/MarkdownRenderer'

export default function Home() {
  return (
    <main className='text-3xl text-red-500'>
      <MarkdownRenderer
        text={`以下のように書くと、Goのコードを表示できます。
以下は Hello, World を表示するコードです。

\`\`\`go

package main

import "fmt"

func main() {
\tfmt.Println("Hello, World")
}
\`\`\`

これは、 Goの公式サイトのコードをそのままコピーしてきたものです。
`}
      />
    </main>
  )
}
