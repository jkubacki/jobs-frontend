import { Reply } from '@/lib/applications/types/Reply'

export interface Application {
  id: number
  listing_id: number
  applied_at: Date
  cv: boolean
  cover_letter: string | null
  notes: string | null
  preference: number
  replies: Reply[]
}
