import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'
import { Listing } from '@/lib/listings/types/Listing'

export function updateSuccessReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ listing: Listing }>
) {
  const { listing } = action.payload

  state.updating = false
  state.updatingError = null
  state.listings = [listing, ...state.listings]
}
