import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'

export function setQueryReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ query: string }>
) {
  const { query } = action.payload

  state.query = query
}
