import { ListingsActions } from '@/lib/listings/listingsSlice'
import { apiDelete } from '@/utils/api'

export function deleteApi(action: ReturnType<typeof ListingsActions.delete>) {
  const { listing } = action.payload

  return apiDelete(`/listings/${listing.id}`)
}
