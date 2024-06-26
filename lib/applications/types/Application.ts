import { Reply } from '@/lib/replies/types/Reply'

export interface Application {
  id: number
  listing_id: number
  applied_at: string
  cv: boolean
  cover_letter: string | null
  notes: string | null
  preference: number
  replies: Reply[]
}
