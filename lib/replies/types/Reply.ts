export interface Reply {
  id: number
  application_id: number
  sent_at: string
  by_me: boolean
  rejected: boolean
  body: string
  notes: string | null
  preference: number
}
