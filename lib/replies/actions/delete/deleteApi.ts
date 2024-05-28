import { RepliesActions } from '@/lib/replies/repliesSlice'
import { apiDelete } from '@/utils/api'

export function deleteApi(action: ReturnType<typeof RepliesActions.delete>) {
  const { reply } = action.payload

  return apiDelete(`/replies/${reply.id}`)
}
