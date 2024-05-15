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

export function loadApi({ page, query }: { page: number; query?: string }) {
  return apiGet('/listings', { params: { page, query: query || '*' } })
}
