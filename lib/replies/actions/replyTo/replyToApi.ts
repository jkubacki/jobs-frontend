import { RepliesActions } from '@/lib/replies/repliesSlice'
import { Reply } from '@/lib/replies/types/Reply'
import { apiPost } from '@/utils/api'

export interface ReplyToApiSuccess {
  data: Reply
}

export function replyToApi(action: ReturnType<typeof RepliesActions.replyTo>) {
  const { data, application } = action.payload

  const payload = { ...data, application_id: application.id }
  return apiPost(`/replies`, payload)
}
