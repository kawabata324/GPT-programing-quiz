import { useState } from 'react'
import {
  ProgramingLanguage,
  ProgramingLanguageOption,
} from '@/features/components/presentational/quiz/selects/constants/options'

type State = {
  selectedLanguage: ProgramingLanguageOption
}

type Action = {
  selectLanguage: (language: ProgramingLanguage) => void
}
export const usePrepareQuiz = (): { state: State; action: Action } => {
  const [selectedLanguage, setSelectedLanguage] = useState<ProgramingLanguageOption>(null)

  const selectLanguage = (language: ProgramingLanguage) => {
    setSelectedLanguage(language)
  }

  return {
    state: {
      selectedLanguage,
    },
    action: {
      selectLanguage,
    },
  }
}
