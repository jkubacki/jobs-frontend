import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { Listing } from '@/lib/listings/types/Listing'

export function loadSuccessReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ listings: Listing[] }>
) {
  const { listings } = action.payload

  state.loading = false
  state.loadingError = null
  state.listings = listings
}
