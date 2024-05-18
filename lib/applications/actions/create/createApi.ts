import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { Application } from '@/lib/applications/types/Application'
import { apiPost } from '@/utils/api'

export interface CreateApiSuccess {
  data: Application
}

export function createApi(action: ReturnType<typeof ApplicationsActions.create>) {
  const { data, listing } = action.payload

  const payload = { ...data, listing_id: listing.id }
  return apiPost(`/applications`, payload)
}
