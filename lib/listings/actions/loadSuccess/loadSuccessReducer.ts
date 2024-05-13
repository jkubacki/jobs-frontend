import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { Listing } from '@/lib/listings/types/Listing'
import { ListingsMetadata } from '@/lib/listings/actions/load/loadApi'

export function loadSuccessReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ listings: Listing[]; metadata: ListingsMetadata }>
) {
  const { listings, metadata } = action.payload

  debugger

  state.loading = false
  state.loadingError = null
  state.listings = listings
  state.metadata = metadata
}
