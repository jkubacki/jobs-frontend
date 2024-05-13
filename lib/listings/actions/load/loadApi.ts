import { Listing } from '@/lib/listings/types/Listing'
import { ApiResponse, apiGet } from '@/utils/api'

export interface LoadApiSuccess extends ApiResponse {
  data: {
    listings: Listing[]
    // metadata: {}
  }
}

export function loadApi() {
  return apiGet(`/listings`)
}
