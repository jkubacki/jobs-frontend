export interface Application {
  listing_id: number
  applied_at: string
  cv: boolean
  cover_letter: string | null
  notes: string | null
  preference: number
}