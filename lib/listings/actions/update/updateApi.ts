import { ListingsActions } from '@/lib/listings/listingsSlice'
import { Listing } from '@/lib/listings/types/Listing'
import { apiPut } from '@/utils/api'

export interface UpdateApiSuccess {
  data: Listing
}

export function updateApi(action: ReturnType<typeof ListingsActions.update>) {
  return apiPut(`/listings`, action.payload)
}
