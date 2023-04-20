import { Select } from '@mantine/core'
import {
  PROGRAMING_LANGUAGES,
  ProgramingLanguage,
  ProgramingLanguageOption,
} from '@/features/components/presentational/quiz/selects/constants/options'

type Props = {
  onChange: (value: ProgramingLanguage) => void
  value: ProgramingLanguageOption
}
export const LanguageSelect: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Select
      label='プログラミング言語・ライブラリを選択する'
      searchable
      value={value}
      onChange={(lang) => onChange(lang as ProgramingLanguage)}
      nothingFound='No options'
      data={PROGRAMING_LANGUAGES}
    />
  )
}
