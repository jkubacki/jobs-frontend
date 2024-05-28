import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'

export function setShowRejectedReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ showRejected: ListingsState['showRejected'] }>
) {
  const { showRejected } = action.payload

  state.showRejected = showRejected
}
