import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { PATH } from '@/constants/path'

type State = {}

type Action = {
  signInGitHub: () => void
}

export const useViewModel = (): { state: State; action: Action } => {
  const session = useSession()
  const router = useRouter()
  const supabase = useSupabaseClient()
  const { QUIZ_PATH } = PATH
  const signInGitHub = () => {
    supabase.auth.signInWithOAuth({ provider: 'github' })
  }

  useEffect(() => {
    if (session) {
      router.replace(QUIZ_PATH)
    }
  }, [router, session])
  return {
    state: {},
    action: {
      signInGitHub,
    },
  }
}
