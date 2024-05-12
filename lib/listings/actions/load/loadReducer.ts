import { Draft } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'

export function loadReducer(state: Draft<ListingsState>) {
  state.loading = true
}
