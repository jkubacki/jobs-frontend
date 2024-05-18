import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { Application } from '@/lib/applications/types/Application'
import { apiPost } from '@/utils/api'

export interface CreateApiSuccess {
  data: Application
}

export function createApi(action: ReturnType<typeof ApplicationsActions.create>) {
  return apiPost(`/applications`, action.payload)
}
