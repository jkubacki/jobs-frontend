import { ListingsTypes } from '@/lib/listings/listingsSlice'
import { Listing } from '@/lib/listings/types/Listing'
import { ApiResponse, apiGet } from '@/utils/api'

export interface LoadApiSuccess extends ApiResponse {
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
}: {
  page: number
  query?: ListingsTypes['query']
  remoteFilter: ListingsTypes['remoteFilter']
}) {
  const params: { page?: number; remote?: boolean; query?: string } = {}

  if (remoteFilter !== 'all') {
    params['remote'] = remoteFilter === 'remote'
  }

  if (query) {
    params['query'] = query
  }

  if (page) {
    params['page'] = page
  }

  return apiGet('/listings', { params })
}
