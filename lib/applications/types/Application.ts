export interface Application {
  application_id: number
  applied_at: string
  cv: boolean
  cover_letter: string | null
  notes: string | null
  preference: number
}
