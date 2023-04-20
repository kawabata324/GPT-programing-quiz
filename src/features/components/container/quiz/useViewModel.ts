import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PATH } from '@/constants/path'
import { usePrepareQuiz } from '@/features/components/container/quiz/hooks/usePrepareQuiz'
import {
  ProgramingLanguage,
  ProgramingLanguageOption,
} from '@/features/components/presentational/quiz/selects/constants/options'
import { Database } from '@/types/supabase'
import { Quiz } from '@/types/table'

type State = {
  quizzes: Quiz[]
  selectedProgramingLanguage: ProgramingLanguageOption
}

type Action = {
  startQuiz: () => void
  selectProgramingLanguage: (language: ProgramingLanguage) => void
}

export const useViewModel = (): { state: State; action: Action } => {
  /*
   * 外部 hooks
   */
  const session = useSession()
  const router = useRouter()
  const { LOGIN_PATH } = PATH
  const supabase = useSupabaseClient<Database>()

  /*
   * Custom hooks
   */
  const {
    state: { selectedLanguage },
    action: { selectLanguage },
  } = usePrepareQuiz()

  /*
   * State
   */
  const [quizzes, setQuizzes] = useState<Quiz[]>([])
  const fetchQuiz = async (num: number) => {
    console.log('fetchQuiz')
    const { data, error, status } = await supabase.from('quizzes').select('*').limit(num)

    if (error && status !== 406) {
      throw error
    }

    if (data) {
      setQuizzes(data)
    }
  }
  const startQuiz = async () => {
    await fetchQuiz(1)
  }

  useEffect(() => {
    if (!session) {
      router.replace(LOGIN_PATH)
    }
  }, [router, session, LOGIN_PATH])

  return {
    state: {
      quizzes,
      selectedProgramingLanguage: selectedLanguage,
    },
    action: {
      startQuiz,
      selectProgramingLanguage: selectLanguage,
    },
  }
}
