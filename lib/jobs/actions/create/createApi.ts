import { JobsActions } from '@/lib/jobs/jobsSlice'
import { apiPost } from '@/utils/api'

export function createApi(action: ReturnType<typeof JobsActions.create>) {
  return apiPost(`/jobs`, action.payload)
}
