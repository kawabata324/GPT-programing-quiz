import { useViewModel } from '@/features/components/container/quiz/useViewModel'
import { MarkdownRenderer } from '@/features/components/presentational/quiz/MarkdownRenderer'
import { AnswerButton } from '@/features/components/presentational/quiz/buttons/AnswerButton'
import { QuizStart } from '@/features/components/presentational/quiz/QuizStart'

export const Quiz: React.FC = () => {
  const {
    state: { selectedProgramingLanguage },
    action: { selectProgramingLanguage },
  } = useViewModel()
  return (
    <main>
      <QuizStart
        programingSelect={{
          selectedValue: selectedProgramingLanguage,
          onChangeSelected: selectProgramingLanguage,
        }}
      />
    </main>
  )
}
