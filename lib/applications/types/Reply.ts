export interface Reply {
  id: number
  application_id: number
  sent_at: string
  by_me: boolean
  body: string
  notes: string
  preference: number
}
