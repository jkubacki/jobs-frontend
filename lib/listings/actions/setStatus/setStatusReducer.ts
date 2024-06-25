import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'

export function setStatusReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ status: ListingsState['status'] }>
) {
  const { status } = action.payload

  state.status = status
}
