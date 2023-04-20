import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { PATH } from '@/constants/path'
import { Database } from '@/types/supabase'

type State = {}

type Action = {
  signInGitHub: () => void
}

export const useViewModel = (): { state: State; action: Action } => {
  const session = useSession()
  const router = useRouter()
  const supabase = useSupabaseClient<Database>()
  const { QUIZ_PATH } = PATH
  const signInGitHub = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'github' })
  }

  useEffect(() => {
    if (session) {
      router.replace(QUIZ_PATH)
    }
  }, [router, session, QUIZ_PATH])
  return {
    state: {},
    action: {
      signInGitHub,
    },
  }
}
