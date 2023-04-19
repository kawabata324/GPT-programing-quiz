import { useSession } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { PATH } from '@/constants/path'

type State = {}

type Action = {}

export const useViewModel = (): { state: State; action: Action } => {
  const session = useSession()
  const router = useRouter()
  const { LOGIN_PATH } = PATH

  useEffect(() => {
    if (!session) {
      router.replace(LOGIN_PATH)
    }
  }, [router, session, LOGIN_PATH])
  return {
    state: {},
    action: {},
  }
}
