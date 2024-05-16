import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'

export function setEditedReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ listing: ListingsState['edited'] }>
) {
  const { listing } = action.payload

  state.edited = listing
}
