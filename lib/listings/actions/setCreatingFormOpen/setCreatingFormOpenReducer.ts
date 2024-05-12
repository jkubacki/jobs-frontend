import { Draft, PayloadAction } from '@reduxjs/toolkit'

import { ListingsState } from '@/lib/listings/listingsSlice'

export function setCreatingFormOpenReducer(
  state: Draft<ListingsState>,
  action: PayloadAction<{ creatingFormOpen: ListingsState['creatingFormOpen'] }>
) {
  const { creatingFormOpen } = action.payload

  state.creatingFormOpen = creatingFormOpen
}
