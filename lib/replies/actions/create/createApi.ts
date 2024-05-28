import { RepliesActions } from '@/lib/replies/repliesSlice'
import { Reply } from '@/lib/replies/types/Reply'
import { apiPost } from '@/utils/api'

export interface CreateApiSuccess {
  data: Reply
}

export function createApi(action: ReturnType<typeof RepliesActions.create>) {
  const { data, application } = action.payload

  const payload = { ...data, application_id: application.id }
  return apiPost(`/replies`, payload)
}
