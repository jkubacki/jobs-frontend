import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { Application } from '@/lib/applications/types/Application'
import { apiPut } from '@/utils/api'

export interface UpdateApiSuccess {
  data: Application
}

export function updateApi(action: ReturnType<typeof ApplicationsActions.update>) {
  const { application, data } = action.payload

  return apiPut(`/applications/${application.id}`, data)
}
