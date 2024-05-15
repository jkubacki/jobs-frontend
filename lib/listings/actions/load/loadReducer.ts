import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'

export function loadReducer(state: Draft<ListingsState>, action: PayloadAction<{ page: number }>) {
  state.loading = true
}
