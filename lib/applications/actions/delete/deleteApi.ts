import { ApplicationsActions } from '@/lib/applications/applicationsSlice'
import { apiDelete } from '@/utils/api'

export function deleteApi(action: ReturnType<typeof ApplicationsActions.delete>) {
  const { application } = action.payload

  return apiDelete(`/applications/${application.id}`)
}
