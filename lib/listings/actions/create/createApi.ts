import { ListingsActions } from '@/lib/listings/listingsSlice'
import { apiPost } from '@/utils/api'

export function createApi(action: ReturnType<typeof ListingsActions.create>) {
  return apiPost(`/listings`, action.payload)
}
