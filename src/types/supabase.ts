export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      quizzes: {
        Row: {
          content: string
          created_at: string
          id: number
          updated_at: string
          user_id: number
        }
        Insert: {
          content?: string
          created_at?: string
          id?: number
          updated_at?: string
          user_id: number
        }
        Update: {
          content?: string
          created_at?: string
          id?: number
          updated_at?: string
          user_id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
