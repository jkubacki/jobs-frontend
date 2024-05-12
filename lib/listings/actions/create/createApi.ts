import { ListingsActions } from '@/lib/listings/listingsSlice'
import { Listing } from '@/lib/listings/types/Listing'
import { apiPost } from '@/utils/api'

export interface CreateApiSuccess {
  data: Listing
}

export function createApi(action: ReturnType<typeof ListingsActions.create>) {
  return apiPost(`/listings`, action.payload)
}
