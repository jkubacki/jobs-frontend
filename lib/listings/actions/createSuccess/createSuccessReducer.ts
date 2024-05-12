import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { Listing } from '@/lib/listings/types/Listing'

export function createSuccessReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ listing: Listing }>
) {
  const { listing } = action.payload

  state.creating = false
  state.creatingError = null
  state.listings = [listing, ...state.listings]
}
