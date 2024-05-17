import { ApplicationsState } from '@/lib/applications/applicationsSlice'
import { Application } from '@/lib/applications/types/Application'
import { ApiResponse, apiGet } from '@/utils/api'

export interface LoadApiSuccess extends ApiResponse {
  data: {
    applications: Application[]
    metadata: ApplicationsMetadata
  }
}

export interface ApplicationsMetadata {
  total: number
  page: number
  from: number
  to: number
}

export function loadApi({
  page,
  query,
  remoteFilter,
}: {
  page: number
  query?: ApplicationsState['query']
  remoteFilter: ApplicationsState['remoteFilter']
}) {
  const params: { page?: number; remote?: boolean; query?: string } = {}

  if (remoteFilter != null) {
    params['remote'] = remoteFilter
  }

  if (query) {
    params['query'] = query
  }

  if (page) {
    params['page'] = page
  }

  return apiGet('/applications', { params })
}
