import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { Listing } from '@/lib/listings/types/Listing'

export function deleteSuccessReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ listing: Listing }>
) {
  state.listings = state.listings.filter(listing => listing.id !== action.payload.listing.id)
}
