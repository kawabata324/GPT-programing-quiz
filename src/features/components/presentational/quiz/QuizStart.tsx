import { Box } from '@mantine/core'
import { LanguageSelect } from '@/features/components/presentational/quiz/selects/LanguageSelect'
import {
  ProgramingLanguage,
  ProgramingLanguageOption,
} from '@/features/components/presentational/quiz/selects/constants/options'

type ProgramingSelect = {
  selectedValue: ProgramingLanguageOption
  onChangeSelected: (value: ProgramingLanguage) => void
}

type Props = {
  programingSelect: ProgramingSelect
}
export const QuizStart: React.FC<Props> = ({
  programingSelect: { onChangeSelected, selectedValue },
}) => {
  return (
    <Box w={300}>
      <LanguageSelect onChange={onChangeSelected} value={selectedValue} />
    </Box>
  )
}
