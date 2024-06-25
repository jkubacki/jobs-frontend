import { ListingsState, ListingsTypes } from '@/lib/listings/listingsSlice'
import { Listing } from '@/lib/listings/types/Listing'
import { apiGet } from '@/utils/api'

export interface LoadApiSuccess {
  data: {
    listings: Listing[]
    metadata: ListingsMetadata
  }
}

export interface ListingsMetadata {
  total: number
  page: number
  from: number
  to: number
}

export function loadApi({
  page,
  query,
  remoteFilter,
  status,
}: {
  page: number
  query?: ListingsState['query']
  remoteFilter: ListingsState['remoteFilter']
  status: ListingsState['status']
}) {
  const params: {
    page?: number
    remote?: boolean
    query?: string
    status?: ListingsTypes['status']
  } = {}

  if (remoteFilter != null) {
    params['remote'] = remoteFilter
  }

  if (query) {
    params['query'] = query
  }

  if (page) {
    params['page'] = page
  }

  if (status) {
    params['status'] = status
  }

  return apiGet('/listings', { params })
}
