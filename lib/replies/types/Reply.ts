export interface Reply {
  id: number
  application_id: number
  sent_at: string
  by_me: boolean
  rejection: boolean
  body: string
  notes: string
  preference: number
}
