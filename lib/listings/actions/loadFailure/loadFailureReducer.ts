import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState, ListingsTypes } from '@/lib/listings/listingsSlice'

export function loadFailureReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ error: ListingsTypes['error'] }>
) {
  state.loading = false
  state.error = action.payload.error
  state.listings = []
}
