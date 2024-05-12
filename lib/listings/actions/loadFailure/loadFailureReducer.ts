import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState, ListingsTypes } from '@/lib/listings/listingsSlice'

export function loadFailureReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ error: ListingsTypes['loadingError'] }>
) {
  state.loading = false
  state.loadingError = action.payload.error
  state.listings = []
}
