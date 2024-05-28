export interface Reply {
  application_id: number
  sent_at: string
  by_me: boolean
  rejection: boolean
  body: string
  notes: string | null
  preference: number
}
