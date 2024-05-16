import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'

export function setUpdatingFormOpenReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ updatingFormOpen: ListingsState['updatingFormOpen'] }>
) {
  const { updatingFormOpen } = action.payload

  state.updatingFormOpen = updatingFormOpen
}
