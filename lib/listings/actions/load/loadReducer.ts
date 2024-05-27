import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'

export function loadReducer(state: Draft<ListingsState>, action: PayloadAction<{ page: number }>) {
  const { page } = action.payload

  if (page === 1) {
    state.listings = []
  }

  state.loading = true
  state.loadingError = null
}
