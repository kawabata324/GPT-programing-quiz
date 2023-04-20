import { useViewModel } from '@/features/components/container/quiz/useViewModel'
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
