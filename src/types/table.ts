import { Database } from '@/types/supabase'

export type Quiz = Database['public']['Tables']['quizzes']['Row']
